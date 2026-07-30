import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';

const theme = readFileSync(path.resolve(__dirname, '../styles/theme.css'), 'utf8');

function themeInlineBlock(): string {
  const start = theme.indexOf('@theme inline {');
  expect(start).toBeGreaterThan(-1);
  return theme.slice(start, theme.indexOf('\n}', start));
}

describe('theme tokens', () => {
  it('exposes success and warning to Tailwind', () => {
    const block = themeInlineBlock();

    // Without these, every bg-warning/*, text-warning, bg-success/* and
    // text-success in the codebase compiles to nothing under Tailwind v4.
    expect(block).toMatch(/--color-success:/);
    expect(block).toMatch(/--color-warning:/);
  });

  it('declares them as literals so the alpha folds at build time', () => {
    const block = themeInlineBlock();

    // A literal lets Tailwind emit bg-success/10 as #22c55e1a outright, with no
    // color-mix and no @supports guard. (The var() indirection the other tokens
    // use works too — see the note in theme.css.)
    expect(block).toMatch(/--color-success:\s*#[0-9a-f]{6}/i);
    expect(block).toMatch(/--color-warning:\s*#[0-9a-f]{6}/i);
  });

  it('keeps them in sync with the status indicator hexes', () => {
    const value = (name: string) =>
      theme.match(new RegExp(`${name}:\\s*(#[0-9a-f]{6})`, 'i'))?.[1]?.toLowerCase();

    expect(value('--color-success')).toBe(value('--status-green'));
    expect(value('--color-warning')).toBe(value('--status-yellow'));
  });
});
