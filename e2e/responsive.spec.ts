import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test, expect, type Page } from '@playwright/test';

// package.json is "type": "module", so there is no __dirname here.
const here = path.dirname(fileURLToPath(import.meta.url));

/**
 * Every route at every width the site is actually viewed at.
 *
 * The one failure that unambiguously looks broken to a visitor is horizontal
 * overflow — the page scrolls sideways and content sits off-screen. Everything
 * else here (console errors, failed requests) is cheap to collect on the same
 * page load, so it is collected.
 */

const VIEWPORTS = [
  { name: '360x800', width: 360, height: 800 },
  { name: '390x844', width: 390, height: 844 },
  { name: '768x1024', width: 768, height: 1024 },
  { name: '1280x800', width: 1280, height: 800 },
  { name: '1440x900', width: 1440, height: 900 },
];

/**
 * Read the routes from the sitemap rather than hard-coding them, so a new page
 * is covered the moment it is published and this list cannot drift.
 */
function routesFromSitemap(): string[] {
  const xml = readFileSync(path.resolve(here, '../public/sitemap.xml'), 'utf8');
  const routes = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) =>
    new URL(m[1]).pathname.replace(/\/$/, '') || '/'
  );

  expect(routes.length, 'sitemap must list routes to check').toBeGreaterThan(0);
  return routes;
}

/**
 * When a page overflows, "scrollWidth 412 > 390" is not actionable. Find the
 * elements sticking out past the viewport and describe them well enough to open
 * devtools on the right node.
 */
async function findOverflowingElements(page: Page, viewportWidth: number) {
  return page.evaluate((limit) => {
    const offenders: Array<{ selector: string; right: number; text: string }> = [];

    for (const el of Array.from(document.body.querySelectorAll('*'))) {
      const rect = el.getBoundingClientRect();
      // Ignore zero-size nodes and anything deliberately parked off-screen
      // (closed mobile menus, screen-reader-only text).
      if (rect.width === 0 || rect.height === 0) continue;
      if (rect.right <= limit + 1) continue;

      const style = getComputedStyle(el);
      if (style.visibility === 'hidden' || style.display === 'none') continue;

      const id = el.id ? `#${el.id}` : '';
      const cls = el.className && typeof el.className === 'string'
        ? `.${el.className.trim().split(/\s+/).slice(0, 3).join('.')}`
        : '';

      offenders.push({
        selector: `${el.tagName.toLowerCase()}${id}${cls}`,
        right: Math.round(rect.right),
        text: (el.textContent || '').trim().slice(0, 60),
      });
    }

    // The widest overshoot is almost always the cause; children inherit it.
    return offenders.sort((a, b) => b.right - a.right).slice(0, 5);
  }, viewportWidth);
}

for (const viewport of VIEWPORTS) {
  test.describe(viewport.name, () => {
    test.use({ viewport: { width: viewport.width, height: viewport.height } });

    for (const route of routesFromSitemap()) {
      test(`${route} fits`, async ({ page }, testInfo) => {
        const consoleErrors: string[] = [];
        const failedRequests: string[] = [];

        page.on('console', (msg) => {
          if (msg.type() === 'error') consoleErrors.push(msg.text());
        });
        page.on('requestfailed', (req) => {
          failedRequests.push(`${req.url()} — ${req.failure()?.errorText}`);
        });
        page.on('response', (res) => {
          if (res.status() >= 400) failedRequests.push(`${res.url()} — HTTP ${res.status()}`);
        });

        await page.goto(route, { waitUntil: 'networkidle' });

        await page.screenshot({
          path: path.join(
            'screenshots',
            viewport.name,
            `${route === '/' ? 'home' : route.slice(1).replace(/\//g, '_')}.png`
          ),
          fullPage: true,
        });

        const scrollWidth = await page.evaluate(
          () => document.documentElement.scrollWidth
        );

        if (scrollWidth > viewport.width + 1) {
          const offenders = await findOverflowingElements(page, viewport.width);
          testInfo.attach('overflowing elements', {
            body: JSON.stringify(offenders, null, 2),
            contentType: 'application/json',
          });
          throw new Error(
            `${route} at ${viewport.name} scrolls horizontally: ` +
              `scrollWidth ${scrollWidth} > ${viewport.width}\n` +
              offenders
                .map((o) => `  ${o.selector} extends to ${o.right}px — "${o.text}"`)
                .join('\n')
          );
        }

        // The page not overflowing is not the same as everything being visible.
        // The header CTA lived inside a horizontally scrollable strip, so at
        // 390px it was clipped by the viewport while the page itself measured
        // clean — the primary conversion action, reachable only by scrolling a
        // strip nobody would think to scroll. Assert it outright.
        const cta = page.getByTestId('header-cta').filter({ visible: true });
        const box = await cta.first().boundingBox();
        expect(box, `${route}: no visible header CTA`).not.toBeNull();
        expect(
          Math.round(box!.x + box!.width),
          `${route} at ${viewport.name}: header CTA is clipped off the right edge`
        ).toBeLessThanOrEqual(viewport.width);

        expect(failedRequests, `${route} had failed requests`).toEqual([]);
        expect(consoleErrors, `${route} logged console errors`).toEqual([]);
      });
    }
  });
}
