import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';

import { caseStudies } from '@/data/caseStudies';

const sitemap = readFileSync(path.resolve(__dirname, '../../public/sitemap.xml'), 'utf8');
const robots = readFileSync(path.resolve(__dirname, '../../public/robots.txt'), 'utf8');
const appSource = readFileSync(path.resolve(__dirname, '../App.tsx'), 'utf8');

const CANONICAL_ORIGIN = 'https://hexabyte.tech';

function sitemapPaths(): string[] {
  return Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)).map(([, loc]) =>
    loc.replace(CANONICAL_ORIGIN, ''),
  );
}

/** Static route paths declared in App.tsx, excluding the catch-all and redirects. */
function routerPaths(): string[] {
  return Array.from(appSource.matchAll(/<Route path="([^"]+)"/g))
    .map(([, p]) => p)
    .filter((p) => p !== '*' && !p.includes(':') && p !== '/case-studies/shopify-automation');
}

describe('sitemap.xml', () => {
  it('uses only the canonical hexabyte.tech origin', () => {
    const locs = Array.from(sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)).map(([, loc]) => loc);

    expect(locs.length).toBeGreaterThan(0);
    for (const loc of locs) {
      expect(loc.startsWith(`${CANONICAL_ORIGIN}/`)).toBe(true);
    }
    expect(sitemap).not.toContain('hexabyte-portfolio.com');
  });

  it('lists every static router route', () => {
    const listed = sitemapPaths();

    for (const route of routerPaths()) {
      expect(listed).toContain(route);
    }
  });

  it('lists every case study and no others', () => {
    const listedCaseIds = sitemapPaths()
      .filter((p) => p.startsWith('/case-studies/'))
      .map((p) => p.replace('/case-studies/', ''))
      .sort();

    expect(listedCaseIds).toEqual(caseStudies.map((study) => study.id).sort());
  });

  it('omits lastmod rather than shipping a frozen date', () => {
    expect(sitemap).not.toContain('<lastmod>');
  });
});

describe('robots.txt', () => {
  it('points at the canonical sitemap', () => {
    expect(robots).toContain(`Sitemap: ${CANONICAL_ORIGIN}/sitemap.xml`);
    expect(robots).not.toContain('hexabyte-portfolio.com');
  });

  it('does not carry Next.js paths in a Vite app', () => {
    expect(robots).not.toContain('/_next/');
  });
});
