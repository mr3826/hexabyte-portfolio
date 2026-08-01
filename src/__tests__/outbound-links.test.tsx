import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';

/**
 * Every "Book a Discovery Call" on the site was an anchor to
 * https://calendly.com/hexabyte/discovery, which returns 404 — the account does
 * not exist. It was the primary CTA on nine pages, so the site's main conversion
 * path led to a dead page, and nothing in the suite noticed because a hardcoded
 * URL is a valid string.
 *
 * The rule that stops it recurring: a primary CTA does not leave the site. The
 * inquiry modal captures the enquiry, records where it came from, and cannot rot
 * because a third-party account lapsed.
 */

const SRC = path.resolve(__dirname, '..');

function sourceFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === '__tests__' ? [] : sourceFiles(full);
    return /\.tsx?$/.test(entry.name) ? [full] : [];
  });
}

describe('outbound CTAs', () => {
  const files = sourceFiles(SRC);

  it('finds source files to check', () => {
    expect(files.length).toBeGreaterThan(10);
  });

  it('has no calendly link anywhere in the source', () => {
    const offenders = files.filter((f) => /calendly\.com/i.test(readFileSync(f, 'utf8')));

    expect(
      offenders.map((f) => path.relative(SRC, f)),
      'booking must go through the inquiry modal, not a bare external link'
    ).toEqual([]);
  });

  it('does not reintroduce a discoveryCallUrl field', () => {
    const company = readFileSync(path.join(SRC, 'data/company.ts'), 'utf8');

    // Only the comment explaining its removal may mention the name.
    expect(/^\s*discoveryCallUrl\s*:/m.test(company)).toBe(false);
  });
});
