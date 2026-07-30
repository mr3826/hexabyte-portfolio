# Website Refinement Changelog

Branch: `feat/website-design-content-refinement`

A credibility and consistency pass across the public site after the four-product and
legal-identity update. Not a redesign and not a framework migration — the dark indigo
Hexabyte identity is preserved throughout.

---

## Company Information redesign

`src/pages/CompanyInformationPage.tsx` was rewritten.

| Before | After |
| --- | --- |
| Whole page inside `max-w-4xl` | `max-w-7xl` primary composition, matching every marketing page |
| Plain hero, no grid background | Branded hero: technical grid, 12-column split (7/5), trust chips, Business Profile card |
| Ten near-identical full-width `<dl>` rows | Two grouped bento panels (Company identity / Contact and location), still semantic `<dl>` |
| Four product cards hand-written with hardcoded icons, colours and status strings | 2×2 grid of `<ProductCard>` mapped from `src/data/products.ts` |
| Raw Calendly URL as visible link text, inside the registered facts | Human-readable labels (*Email Hexabyte*, *Call Hexabyte*, *Visit hexabyte.tech*); discovery CTA in its own section |
| Public "Verification Note" instructing the reader that the Facebook Page, Meta Business Portfolio, website and trade licence "must use the same" details | "A clear operator behind every product" trust panel — what is published and why, plus what is deliberately not published |
| Inline `<script type="application/ld+json">` duplicating the Organization entity | Removed; `src/App.tsx` is the single source |

## New shared code

- **`src/data/company.ts`** — single source for public company facts. The registered
  address was previously written out in four places (footer, company page, and two
  JSON-LD blocks) and the Calendly URL in thirteen.
- **`src/components/ProductCard.tsx`** — replaces three sets of duplicated product
  markup (Home, About, Company Information). Accents come from `product.color` through
  a static class lookup, because Tailwind v4 scans source text and would never generate
  an interpolated `bg-${color}/15`.
- **`src/pages/NotFoundPage.tsx`** — branded 404, also used by `CaseStudyDetail` for an
  unknown id.

Deliberately **not** created, against the original brief: `SectionHeader`,
`CompanyDetailGroup`, `PublicTrustPanel`. Each had one real call site or three
incompatible class strings; inlining was the smaller change.

## Navigation and footer

- Nav is `Products / Work / Process / About`. `Company` sat beside `About` with no clear
  distinction; Company Information stays reachable from the footer's Legal & Trust
  column, the About page, and its own route.
- Both nav bars are `<nav aria-label="Primary">`, mark the active item with
  `aria-current`, prefix-match so a case-study detail keeps `Work` highlighted, and give
  the mobile pills 44px targets.
- Footer grid is now genuinely 6 wide — it had six children in a `md:grid-cols-5` grid,
  which wrapped the Contact column onto its own row.
- Footer positioning line replaced; new **Legal & Trust** column lists Company
  Information once (it was previously in both Company and Legal) with the three Easy
  Moderator links under a product sub-heading; registered-business trust line added.

## Homepage

- Hero signals are the four stable credibility statements, with the product count
  derived from `products.length`. `3 / Products in Beta` was a hardcoded literal that
  had to be kept in sync with `products.ts` by hand, and `4 / Phase Delivery Framework`
  was a non-metric presented as one.
- Product grid uses `ProductCard`, so accents vary per product instead of every icon
  being `bg-primary/15`.
- **Removed the self-quotation card** — company-written positioning formatted as a
  testimonial, attributed to "Hexabyte — Founder-Led Execution". The page already has a
  full *How We Work* section covering the same ground, so it was not replaced.
- Removed the *Product Ecosystem* prose block, a third place the same product
  descriptions lived.

## Product copy simplification

- `One-Sentence Promise` → **What it helps you achieve**
- `Beta Status Disclosure` → **Current availability**
- `Audience:` → **Built for**, and commas are no longer rendered *inside* the pills
- Sections alternate copy/visual order rather than four identical stacks; a sticky
  product index gives each product an anchored entry point
- Capabilities capped at six per product by merging the all-planned entries
- Jargon moved out of sales copy: SSE, HITL, RAG and vector embeddings now appear only
  in case-study architecture sections
- Capability status labels derive from the parent product's status — Easy Moderator's
  capabilities previously read "Available in Beta" on a product that is live

## Case-study evidence labels

Added `evidenceType` and `domain` to `src/data/caseStudies.ts`, shown on every card:

| Case study | Evidence type | Domain |
| --- | --- | --- |
| Easy Moderator | Live Product | AI & Automation |
| Easy E-commerce | Beta Product Build | Commerce |
| Easy Assistance | Beta Product Build | AI & Automation |
| TradeFlow | Beta Product Build | Commerce |
| Reel Studio | Deployed System | AI & Automation |
| RAG Chatbot | Deployed System | AI & Automation |

- Hero positioning: *Production Systems. Real Outcomes.* → **Systems Delivered. Products
  Being Built.** The old wording covered beta builds with production language.
- Filters are derived from the data instead of a hand-maintained category array, so a new
  case study cannot end up unreachable.
- Product status now reads from `getProductById(study.productId)?.status` instead of a
  nested id ternary.
- Beta `impact` fields read *Beta validation underway — outcome evidence pending* rather
  than presenting a product state as a measured result.
- Removed the `Evidence Status` meta-rows that were mixed in with real KPIs, and
  shortened the two excerpts that were byte-identical to their `overview`.

## Resources fixes

- **Space Grotesk**: all 48 `font-['Space_Grotesk']` usages removed across seven files,
  plus three references in `case-rag-chatbot.svg`. The family was never imported in
  `fonts.css`, so an arbitrary `font-family` utility was overriding the base Inter rule
  and those headings fell back to the browser default — not to Inter.
- Hero uses the indigo grid; the cyan `rgba(0,217,255,0.1)` radial was a leftover from an
  older palette. Fixed the doubled `border-y` seam between two consecutive sections.
- **Resource honesty**: `public/` contains no files, so all four lead magnets are
  request-only. Removed "Download Free Checklist", the page counts, and the "25-point"
  specific; one consistent CTA verb instead of four.
- **Newsletter**: new `submitNewsletter` in `formSubmission.ts` and four real states.
  The old handler skipped the fetch entirely when `VITE_FORM_SUBMISSION_ENDPOINT` was
  unset and still displayed "Subscribed!"; its `catch` block explicitly noted that
  failures still confirm. It also fabricated a name, role and goals to fit the inquiry
  payload. Now: success only on a verified successful response, an error message
  otherwise, the entered email preserved for retry, and the reset timer cleared on
  unmount.
- Tool pricing is no longer hardcoded.

## SEO, crawl and structured data

- `index.html`: current title and description (the old ones described RAG pipelines and
  n8n orchestration and contradicted `ROUTE_SEO['/']` — this matters because crawlers
  and social scrapers that do not run JS see only this head). Added canonical, OG,
  Twitter, favicon, `theme-color` and font preconnects, all previously absent.
- **Assets**: `og-image.png` and `hexabyte-logo.png` were referenced on every route and
  by the JSON-LD `logo` but did not exist in `public/`. The logo moved from `src/assets`
  to `public/` as one canonical file (crawler-facing schema needs a stable unhashed
  URL), and a real 1200×630 OG image was generated on brand. Removed the orphaned
  `case-shopify-automation.svg`.
- `sitemap.xml`: rebuilt on `hexabyte.tech` with all 16 real routes. It previously listed
  8 URLs on `hexabyte-portfolio.com`, five of which did not exist (`/services/*` and two
  invented case studies), and omitted `/products`, `/process`, `/resources`,
  `/company-information` and every real case study. `lastmod` dropped rather than
  shipping another frozen `2026-03-20`.
- `robots.txt`: correct sitemap domain; dropped the Next.js `/_next/` rule.
- **Organization schema** has one source, reads from `company.ts`, and gains
  `contactPoint`. `sameAs` now holds only the company-owned Facebook page —
  `linkedin.com/in/mr3826` and `github.com/mr3826` are personal profiles and moved to the
  nested `founder` Person, where they are factually correct.
- `CASE_SEO` hoisted out of the effect body where it was rebuilt on every render.
- **404**: added the `*` route. An unknown path previously rendered an empty page shell
  with the homepage title. `noindex` is owned by `NotFoundPage` rather than
  `RouteObserver`: mounting on `*` is itself the route-aware signal, whereas a pathname
  check in `RouteObserver` would duplicate the route table and drift from it.

## Accessibility and responsive fixes

- **`--success` / `--warning` were never defined** in the `@theme inline` block, so every
  `bg-warning/15`, `text-warning`, `bg-success/10` and `text-success` in the codebase
  compiled to nothing under Tailwind v4 — TradeFlow's badges, the Beta Disclosure panel
  and one Resources card rendered unstyled. Now defined, matching the existing
  `--status-green` / `--status-yellow` hexes, and covered by `src/__tests__/theme.test.ts`.
  Verified in the built CSS: `.bg-success\/10 { background-color: #22c55e1a }`.
- Status badges are semantic and distinguishable: live green, beta blue, private-beta
  amber, planned muted. `beta` and `private-beta` previously shared identical accent
  classes; `live` used brand indigo, which signals "Hexabyte" rather than "available".
- Removed `animate-pulse` from the badge dot — four badges pulsed simultaneously in the
  homepage grid, ignoring `prefers-reduced-motion`.
- **Hash-anchor scrolling fixed at the source.** `ScrollToTop` called
  `window.scrollTo(0, 0)` on every pathname change and ignored `location.hash`, so every
  `/products#anchor` link on the site landed at the top of the page. It now scrolls the
  target into view, honours reduced motion, and retries once on the next frame for a
  cross-page navigation.
- Case-studies sticky filter bar: `top-20` → `top-[108px] md:top-20`. The mobile header
  is 108px (top bar plus category strip), so the bar previously sat 44px too high.
- `AboutPage` root: `pt-20` → `pt-[108px] md:pt-20`, matching every other page.
- Product cards use `flex-col sm:flex-row` so the status badge does not crowd the
  product identity at 360px.
- Decorative icons hidden from assistive technology; external links carry an
  "opens in a new tab" note.

## Engineering quality

- Fixed the unkeyed `<>` fragment in the Products workflow map — it produced a React key
  warning on all four products.
- External CTA URLs use `<a>` rather than `<Link>`, with an external-link icon;
  `cta.source` is finally passed to `trackEvent`, having been stored on every CTA and
  consumed nowhere.
- **Test configuration**: removed the dead `test` block from `vite.config.ts` (Vitest
  prefers `vitest.config.ts`), added the missing `@` alias to `vitest.config.ts` — any
  test importing `@/...` had no alias to resolve against — deleted the orphaned
  `src/test/setup.ts`, and stubbed `scrollIntoView` / `scrollTo`, which jsdom does not
  implement.
- **Five test files were failing on `main`, not two.** `Navigation` and `Footer` asserted
  removed copy and markup; `HomePage`, `AboutPage`, `CaseStudiesPage` and
  `CaseStudyDetail` asserted copy and case-study ids that had already been deleted
  ("We Build AI Automation", "Our Services", "Automation Agency",
  `lead-enrichment-automation`, "RAG-Based Customer Support"). All rewritten.
- New coverage: `CompanyInformationPage`, `NotFoundPage`, `ResourcesPage` newsletter
  failure paths, `ScrollToTop` hash behaviour, and a sitemap↔router parity test.
  Assertions are semantic — product cards are checked by iterating the imported
  `products` array, not literal names, and no test asserts a Tailwind class string.

**Result: 61 tests passing, typecheck clean, production build clean.**

---

## Claim audit

Every softened claim, for product-owner review. Product-level public statuses are
**unchanged** (Easy Moderator live; Easy E-commerce and Easy Assistance beta testing;
TradeFlow beta access).

| Claim | Before | After | Why |
| --- | --- | --- | --- |
| bKash / Nagad / card payments (Easy E-commerce) | Workflow step: "Cash on delivery, bKash, Nagad, and card payments **processed**" | "Cash on delivery today; mobile wallet and card options are planned" | A beta product should not state that a payment method is processed |
| Bangladesh-First Checkout capability | "bKash and Nagad integration where technically available" | COD described as what is in validation; "Mobile wallet and card payments are planned, not yet enabled" | Removes the ambiguous hedge in favour of a plain statement |
| Pathao / Steadfast / RedX (Easy E-commerce) | Listed as integrations, `in-validation` | "connections are being validated in beta" | Wording now matches the capability status |
| TradeFlow capabilities | 3 of 4 marked `available` | All 4 `in-validation` | The product is in beta access, so its workflows are beta workflows |
| TradeFlow "Architecture" capability | Internal label, no customer outcome | "Built for the factory floor" | Not a customer-facing capability as written |
| Meta channels (Easy Moderator) | "Real-time SSE stream from FB/IG/WhatsApp" | "supported customer conversations" / "the supported Facebook, Instagram, and WhatsApp accounts" | Avoids implying unrestricted channel availability ahead of platform permissions |
| RAG Chatbot impact | "Real-time data grounding with **99% accuracy** on internal documents" | "Answers grounded in the client's own documents" | Unverifiable metric |
| RAG Chatbot metric | "Answer Accuracy — 99%" | "Answer Grounding — Cited sources" | Same |
| Easy Moderator courier integrations | `available` | **unchanged** | Live product; flagged below for confirmation rather than altered |
| About page eyebrow | "Live Products" above all four | "Our Products" | Only one of four is live |

---

## Open items for the product owner

1. **Easy Moderator courier and Meta integrations** are still marked `available`. That is
   consistent with the product being live, but shipped behaviour cannot be verified from
   this repository. Confirm or demote.
2. **Founder vs company social profiles.** The schema now assumes Hexabyte has no
   company-owned LinkedIn or GitHub. If it does, those belong in Organization `sameAs`
   and the personal ones stay on `founder`.
3. **Resources assets.** The four lead magnets are request-only because no files exist.
   Once the PDFs are in `public/`, download wording and page counts can return.
4. **Orphaned routes.** `/resources`, `/ai-automation`, `/web-development` and
   `/mobile-development` have no navigation entry and are reachable only from the footer
   and in-page links. The four-item nav keeps it that way; worth revisiting.
5. **Prerendering** was deliberately skipped. Static metadata plus per-route JS metadata
   covers the current SEO needs without a headless-Chrome build dependency or Amplify
   build risk.
6. ~~**Site-wide opacity bug in the theme layer.**~~ **Retracted 2026-07-31 — there is no
   bug.** This entry claimed that `@theme inline` cannot resolve a `var()` indirection at
   build time and therefore discards every opacity modifier, leaving each "subtle tint" on
   the site rendering as a solid block. That is wrong, and it was never checked against a
   built stylesheet. Tailwind v4.1 emits a flat fallback and then overrides it:

   ```css
   .bg-primary\/10{background-color:var(--primary)}
   @supports (color:color-mix(in lab,red,red)){
     .bg-primary\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}
   }
   ```

   The `color-mix` rule comes second and wins wherever `color-mix` is supported, which is
   every browser since 2023. Tints render correctly and always have. Declaring
   `--color-success` / `--color-warning` as literals is a marginal simplification (the
   alpha folds at build time into `#22c55e1a`, with no `@supports` guard needed), not a
   workaround for anything.

   Left here rather than deleted because the claim also reached
   `PRODUCTION_LAUNCH_PLAN.md` and a comment in `theme.css`, and a retraction is more
   useful to the next reader than a gap.

---

## Verification

```text
npm run typecheck   clean
npm test -- --run   64 passed (16 files)
npm run build       clean
```

Content audits return no hits for the old domain, wrong legal entity, `Space_Grotesk`,
the internal labels, the non-standard CTA labels, hardcoded prices or page counts.
Sitemap contains 16 URLs, all on `hexabyte.tech`; `robots.txt` points at it.

Served responses confirmed on the dev server: all seven reviewed routes 200, and
`/hexabyte-logo.png`, `/og-image.png`, `/sitemap.xml`, `/robots.txt` all resolve — the
first two were 404 before this branch. Built CSS confirmed to emit real tints for all
twelve success/warning utilities that previously compiled to nothing.

**Not done:** the visual pass at 360×800 / 390×844 / 768×1024 / 1280×800 / 1440×900 and
the before/after screenshots. No browser automation was available in the environment that
produced this branch and Playwright is not a project dependency. The responsive changes
that need a human eye are the sticky filter offset at 390×844, the sticky product index on
the Products page, the two-panel company detail layout, and the product-card header
wrapping at 360px.
