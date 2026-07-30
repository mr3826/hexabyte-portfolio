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

  it('declares them as literals so opacity modifiers survive', () => {
    const block = themeInlineBlock();

    // A var() indirection inside @theme inline cannot be resolved at build time,
    // so Tailwind silently discards the alpha: bg-success/10 would render as a
    // solid block rather than a 10% tint.
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
