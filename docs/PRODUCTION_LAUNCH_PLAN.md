# Production Launch Plan — hexabyte.tech

Owner decision driving this pass: **the site sells outcomes, not technology, and never
publishes a product's development state.** Products are presented as what they do for a
business at full release. Anyone genuinely interested reaches out; there is no waitlist
theatre, no "beta" badge, no roadmap disclaimer.

Second driver: **the deployment pipeline does not work.** Fixing it is a precondition for
anything else on this list.

---

## 1. Current status (verified 2026-07-30)

### Live infrastructure

```text
hexabyte.tech / www.hexabyte.tech
  → ACM cert a3204a73… (us-east-1)
  → CloudFront E1QPRQT12IQGL9   (403/404 → /index.html 200, CachingOptimized)
  → S3 hexabyte-tech-website (ap-south-1, public-read, custom origin over https)
```

Amplify app `d3f7vg26f037wj` still exists in ap-south-1 but **nothing serves from it**.
CloudFront was repointed to S3; the Amplify origin is orphaned.

### What is actually live

Eight objects in S3, last written 2026-07-30 01:38 UTC — a build of `main` uploaded by
hand. Its `<title>` is still *"Hexabyte | AI Systems That Ship. Production-Ready Automation
Infrastructure"* with `RAG pipelines, n8n orchestration` in the description, `/_next/` in
`robots.txt`, and no OG tags at all.

---

## 2. Findings

| # | Severity | Finding |
| --- | --- | --- |
| F1 | Critical | `.github/workflows/deploy.yml` triggers an **Amplify** build, but CloudFront serves **S3**. Even a perfect Amplify build changes nothing live. |
| F2 | Critical | The last six runs reported **success in ~30s**. `aws amplify start-job` failed with `LimitExceededException` (a job is wedged pending on the `main` branch) and `\|\| { …; exit 0; }` swallowed it. The workflow then invalidated CloudFront over unchanged content, printing "hexabyte.tech is live." Pushing to `main` has been a no-op for days. |
| F3 | Critical | Lead capture is dead. `VITE_FORM_SUBMISSION_ENDPOINT` points at `ralofegunneywgmdfbke.supabase.co`, which **no longer resolves** — the Supabase project was deleted. Every inquiry submitted through the modal fails. |
| F4 | High | CI authenticates with `cli-admin` static keys. That is the account's only IAM user and it holds **AdministratorAccess**. A leaked CI secret is an account takeover. |
| F5 | High | Product development state is published everywhere — status badges, "Beta Testing", "Current availability" panels, per-capability `Available in beta` / `In validation` / `Planned` pills, `Beta Product Build` filters on Work, "One live, three in beta" on About. Against the owner's positioning. |
| F6 | High | Copy sells implementation, not outcomes: `RAG pipelines`, `n8n orchestration`, `Next.js + Supabase stacks`, `vector embeddings`, `JWT/CSRF`, `SSE` — in hero copy, meta descriptions, and case-study summaries aimed at business buyers. |
| F7 | Medium | No per-route metadata for crawlers or link unfurlers. All `<meta>` is injected by JS after load, so Facebook, LinkedIn, WhatsApp and Slack previews show the same stale homepage shell for every URL. |
| F8 | Medium | Four deploy targets are configured simultaneously — `amplify.yml`, `netlify.toml`, `vercel.json`, `.vercel/` — plus `public/rebuild-timestamp.txt` shipping to production as a live artifact. |
| F9 | Low | `og:image` and every extensionless path return HTTP **200 with HTML** because of the SPA fallback, so a 404 is indistinguishable from a hit when auditing. |

Carried over from the previous refinement pass (documented in
[WEBSITE_REFINEMENT_CHANGELOG.md](WEBSITE_REFINEMENT_CHANGELOG.md), still open): the
site-wide `@theme inline` + `var()` indirection silently discards Tailwind opacity
modifiers, so every `bg-primary/10` renders as solid indigo.

---

## 3. Execution plan

### Phase 1 — Content: products carry no state (F5)

`src/data/products.ts` loses `status`, `statusDisplay`, `betaDisclosure`, the per-capability
`status`, `PRODUCT_STATUS_DISPLAY`, `getProductsByStatus`, `getLiveProducts`,
`getBetaProducts`. `src/components/ProductStatusBadge.tsx` is deleted outright.

It gains the two fields the new positioning needs:

- `painPoints` — what the day looks like *without* the product: hours, leaks, cost.
- `outcomes` — what changes once it runs, in operational terms.

Every product section becomes: promise → the daily cost → what changes → capabilities →
how a day runs → *talk to us*. Availability is expressed once, commercially, without a
development state: onboarding happens directly with the founder.

### Phase 2 — Content: Work reads as business results (F5, F6)

`evidenceType`, `statusLabel`, `evidenceConfidence` and the `Current Beta Status` result
blocks come out of `src/data/caseStudies.ts`. Filters derive from `domain` only. Each study
leads with the operational problem and what changed; the stack drops to a single
de-emphasised *Under the hood* block after results.

### Phase 3 — Content: the rest of the site (F6)

Home, About, Company Information, `/ai-automation`, `/web-development`,
`/mobile-development`, Resources, Footer and `index.html`: tool names out of headline and
value copy, outcome language in. Tools stay where a buyer expects them (one reference
strip), not in the pitch.

### Phase 4 — Per-route metadata (F7)

Route SEO moves to `src/data/seo.json`, consumed by `RouteObserver` **and** by
`scripts/prerender-head.mjs`, which runs after `vite build` and writes one HTML file per
route with that route's title, description, canonical and OG tags baked in. No new
dependency, no renderer — crawlers and unfurlers get correct metadata, the SPA behaves
exactly as before.

### Phase 5 — Lead capture that cannot silently lose a lead (F3)

The dead endpoint comes out of `.env.production`. When no endpoint is configured (or a
submission fails), the modal surfaces a direct-contact panel — prefilled `mailto:`, phone,
book-a-call — with everything the visitor typed preserved. Standing up a real endpoint is a
five-minute owner task documented in [DEPLOYMENT.md](DEPLOYMENT.md); until then, nothing is
lost.

### Phase 6 — A deployment that deploys (F1, F2, F8)

`deploy.yml` becomes the pipeline the architecture actually needs:

```text
checkout → node 20 → npm ci → typecheck → test → build
        → aws s3 sync dist … --delete          (hashed assets: immutable, 1 year)
        → aws s3 cp   … --cache-control no-cache (html, sitemap, robots)
        → aws cloudfront create-invalidation "/*" (waited on)
```

No `|| exit 0` anywhere: a failed step fails the run. `amplify.yml`, `netlify.toml`,
`vercel.json` and `public/rebuild-timestamp.txt` are deleted so there is exactly one
documented way to ship.

### Phase 7 — Ship and verify

PR → `main` → the workflow deploys → verify against the live origin: every route's served
`<title>`, `og:image` as a real image rather than the SPA fallback, `sitemap.xml`,
`robots.txt`, and no product-state language anywhere in the shipped bundle.

### Phase 8 — Credential hardening (F4)

Replace the admin static keys with a GitHub OIDC role scoped to `s3:PutObject`,
`s3:DeleteObject`, `s3:ListBucket` on the one bucket plus `cloudfront:CreateInvalidation`
on the one distribution. Verified by a `workflow_dispatch` run before the old secrets are
removed.

---

## 4. Dependencies added

**None.** Everything above is built from what is already installed:

| Need | Considered | Used instead |
| --- | --- | --- |
| Per-route SEO / social previews | `react-helmet-async`, `react-snap`, puppeteer prerender | 60-line post-build script over `seo.json`; no browser, no runtime cost |
| Lead capture without a backend | Formspree, Web3Forms, SES + Lambda | `mailto:` fallback that preserves the visitor's input (a real endpoint needs owner credentials — documented, not guessed) |
| Deploy | Amplify, Netlify, Vercel adapters | `aws s3 sync` + `create-invalidation`, matching the live architecture |

A dependency that removes ten lines and adds a supply-chain surface to a marketing site is
not worth its keep.

---

## 5. Verification

```bash
npm run typecheck && npm test -- --run && npm run build
node scripts/prerender-head.mjs --check     # every sitemap route has a prerendered head
```

Live checks after deploy:

```bash
curl -s https://hexabyte.tech/products | grep -o '<title>[^<]*'
curl -sI https://hexabyte.tech/og-image.png | grep -i content-type   # must be image/png
curl -s https://hexabyte.tech/robots.txt
```

Content guard (in the test suite, not just a grep): no product-state vocabulary may appear
in shipped data or rendered pages.
