#!/usr/bin/env node
/**
 * Bakes per-route metadata into static HTML after `vite build`.
 *
 * Why: the site is a client-rendered SPA. RouteObserver sets the correct title,
 * description, canonical and OG tags, but it does so with JavaScript — and Facebook,
 * LinkedIn, WhatsApp, Slack and X never run it. Without this step every shared URL
 * unfurls with the homepage's metadata, and every route serves the homepage's canonical.
 *
 * How: copy dist/index.html once per route with that route's tags substituted. The body
 * is untouched, so the SPA boots and behaves exactly as before.
 *
 * File naming: CloudFront fronts an S3 REST origin, so a request for `/products` maps to
 * the key `products` — no extension, and `/case-studies` is a key while
 * `/case-studies/easy-moderator` is a key under a prefix of the same name. S3's flat
 * keyspace allows that; a filesystem cannot hold a file and a directory with one name.
 * So the files are staged flat under `dist/__prerender/` and `dist/prerendered.json`
 * maps each staged file to the key it must be uploaded as, with an explicit
 * `Content-Type: text/html` (extensionless keys would otherwise be served as a download).
 *
 *   node scripts/prerender-head.mjs           # write the files
 *   node scripts/prerender-head.mjs --check   # verify every sitemap route has one
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const STAGE = '__prerender';
const ORIGIN = 'https://hexabyte.tech';

const seo = JSON.parse(readFileSync(join(root, 'src/data/seo.json'), 'utf8'));

/** Every route that gets its own HTML file, as `path -> {title, description}`. */
function routeTable() {
  const table = { ...seo.routes };
  for (const [id, meta] of Object.entries(seo.caseStudies)) {
    table[`/case-studies/${id}`] = meta;
  }
  return table;
}

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/**
 * Replaces the content of one tag. Throws rather than silently no-oping: a renamed tag
 * in index.html must fail the build, not ship a page with the wrong canonical.
 */
function replaceOrFail(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: could not find ${label} in dist/index.html`);
  }
  return html.replace(pattern, replacement);
}

function renderRoute(template, path, { title, description }) {
  const url = `${ORIGIN}${path}`;
  let html = template;

  html = replaceOrFail(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`, '<title>');
  html = replaceOrFail(
    html,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${escapeAttr(description)}" />`,
    'meta description',
  );
  html = replaceOrFail(
    html,
    /<link\s+rel="canonical"[^>]*\/>/,
    `<link rel="canonical" href="${url}" />`,
    'canonical link',
  );
  html = replaceOrFail(
    html,
    /<meta\s+property="og:url"[^>]*\/>/,
    `<meta property="og:url" content="${url}" />`,
    'og:url',
  );
  html = replaceOrFail(
    html,
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${escapeAttr(title)}" />`,
    'og:title',
  );
  html = replaceOrFail(
    html,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${escapeAttr(description)}" />`,
    'og:description',
  );
  html = replaceOrFail(
    html,
    /<meta\s+name="twitter:title"[\s\S]*?\/>/,
    `<meta name="twitter:title" content="${escapeAttr(title)}" />`,
    'twitter:title',
  );
  html = replaceOrFail(
    html,
    /<meta\s+name="twitter:description"[\s\S]*?\/>/,
    `<meta name="twitter:description" content="${escapeAttr(description)}" />`,
    'twitter:description',
  );

  return html;
}

/** `/products` -> `products`, `/` -> `index.html`. This is the S3 object key. */
function keyForPath(path) {
  return path === '/' ? 'index.html' : path.replace(/^\//, '');
}

/** Flat staging filename for a key: `case-studies/tradeflow` -> `case-studies__tradeflow`. */
function stagedFileForKey(key) {
  return `${STAGE}/${key.replace(/\//g, '__')}`;
}

function sitemapPaths() {
  const xml = readFileSync(join(dist, 'sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => m[1].replace(ORIGIN, '').replace(/\/$/, '') || '/',
  );
}

function check() {
  const manifest = JSON.parse(readFileSync(join(dist, 'prerendered.json'), 'utf8'));
  const staged = new Map(manifest.map(({ key, file }) => [key, file]));
  const paths = sitemapPaths();

  const missing = paths.filter((path) => {
    const key = keyForPath(path);
    const file = key === 'index.html' ? key : staged.get(key);
    return !file || !existsSync(join(dist, file));
  });

  if (missing.length) {
    console.error(`prerender --check: no prerendered head for ${missing.join(', ')}`);
    process.exit(1);
  }
  console.log(`prerender --check: all ${paths.length} sitemap routes have baked metadata`);
}

function build() {
  const template = readFileSync(join(dist, 'index.html'), 'utf8');
  const table = routeTable();
  const manifest = [];

  mkdirSync(join(dist, STAGE), { recursive: true });

  for (const [path, meta] of Object.entries(table)) {
    const key = keyForPath(path);
    const file = key === 'index.html' ? key : stagedFileForKey(key);

    writeFileSync(join(dist, file), renderRoute(template, path, meta), 'utf8');
    if (key !== 'index.html') manifest.push({ key, file });
  }

  // Consumed by the deploy workflow, which uploads each staged file to its real key.
  writeFileSync(join(dist, 'prerendered.json'), JSON.stringify(manifest, null, 2), 'utf8');

  console.log(
    `prerender: wrote ${Object.keys(table).length} routes (${manifest.length} staged for upload)`,
  );
}

if (process.argv.includes('--check')) {
  check();
} else {
  build();
  check();
}
