# Cloudflare hosting migration — plan, status, and runbook

**Branch:** `feat/cloudflare-hosting-migration` · **Prepared:** 2026-11-15
**Status:** Phase 4 (founder acceptance gate) — **preview deployed and verified** at
`https://feat-cloudflare-hosting-migr.hexabyte-portfolio.pages.dev` (CI run
43706492254 fully green, 2026-11-15); production untouched; nothing merged; DNS
untouched; AWS account untouched (remains closed).

---

## 1. Why this migration, and what the current reality is

The task brief assumed the AWS stack (S3 `hexabyte-tech-website` + CloudFront
`E1QPRQT12IQGL9`) was still serving `hexabyte.tech`. It is not — see the
2026-11-15 incident audit (`docs/INCIDENT-2026-11-15-site-outage.md`, written
alongside this migration and awaiting a separate AWS-side PR):
the AWS account (`899628690531`) was closed after free-tier expiry with no payment
method, deleting the Route 53 zone, the distribution and IAM. `hexabyte.tech`
currently does not resolve anywhere.

Consequences for this migration:

- Moving hosting to Cloudflare is simultaneously the **recovery path** — Cloudflare's
  free plan requires no payment method, which removes the exact failure mode that
  killed the AWS account.
- "Rollback to AWS" is **not currently available** — the AWS rebuild path
  (the recovery runbook + `infra/cloudformation/` IaC, both in the same
  pending AWS-side commit) is preserved but needs the account reopened.
  The Cloudflare cutover does not consume or damage that path.
- Visual comparison against "the live AWS site" is impossible (there is no live site).
  The build artifacts shipped to Cloudflare are the same `dist/` output the last
  verified AWS deploy (2026-08-07, run 31217652154) shipped, from a repo state whose
  gates all pass (this branch: typecheck ✓, 78 unit test files/156 collected tests ✓,
  16 prerendered routes ✓, 80/80 responsive Playwright checks ✓).

## 2. Architecture decision (Phase 1)

### Options compared

| | A. Cloudflare Pages (chosen) | B. Worker with static assets |
| --- | --- | --- |
| Serves existing Vite `dist/` | natively | via `assets` binding |
| Prerendered SEO routes | native extensionless `.html` match | native |
| SPA fallback (unknown path → 200 `index.html`) | **built in** (when no `404.html`) | requires a Worker script |
| Custom domain + TLS | built in, free | built in |
| Recurring cost at this traffic | $0 (Free plan) | $0 only while total **requests ≤ 100k/day** incl. every asset; quota, not unmetered |
| Code/config you own | files in the repo (`dist` layout) | Worker entrypoint to keep |
| Failure modes | none introduced | request-quota wall; script to maintain |

**Choice: A — Cloudflare Pages, deployed from CI via Direct Upload.**
Pages handles every existing behavior (static assets, extensionless prerendered
routes, SPA deep links, HTTPS, custom domain, immutable asset caching) without a
single line of server code. B would add a Worker to re-implement what Pages does
by default, and converts "unmetered static hosting" into "metered Worker requests".

### What is deliberately NOT used

- **Workers / Pages Functions** — no server-side operation exists that the current
  external services don't already handle. The inquiry form POSTs directly to
  `VITE_FORM_SUBMISSION_ENDPOINT` (a Supabase Edge Function URL — currently dead,
  see §8) and falls back to a prefilled `mailto:` **by design**. No backend was
  invented to justify Workers.
- **D1** — the app has no persistent-storage requirement; the leads table lived in
  Supabase (deleted ~Aug 2026), not in the hosting layer.
- **R2** — all assets are small (`hexabyte-logo.png` 1.4 MB < 25 MiB per-file Pages
  limit) and versioned with the build; no demonstrated need.

### How each production invariant maps to Pages

| Invariant (AGENTS.md) | AWS today | Cloudflare Pages |
| --- | --- | --- |
| Unknown path → HTTP 200 SPA shell | CloudFront 403/404→`/index.html` | Pages SPA fallback: serving `/index.html` with 200 for any non-asset path **because the upload contains no top-level `404.html`** (`scripts/pages-emit.mjs` fails the build if one ever appears) |
| Extensionless routes carry prerendered HTML | S3 keys `products`, `case-studies/easy-moderator` uploaded with explicit `text/html` | Pages serves `products.html` for `/products` natively — same baked metadata, correct MIME by extension |
| `assets/*` cached immutable 1 yr | `Cache-Control` set at upload | `_headers`: `/assets/* → public, max-age=31536000, immutable` (written by `pages-emit`) |
| Everything else `must-revalidate` | S3 cache-control | Pages default for HTML: `public, max-age=0, must-revalidate` + ETag — identical |
| Deploys visible immediately | invalidation + curl-verify | each deploy is a new immutable version; branch/preview URLs are per-deployment; production alias updates on deploy. CI's verify step curls the preview after every deploy |
| Security headers | none beyond CloudFront defaults (`X-Content-Type-Options: nosniff`, `Referrer-Policy` come from Pages by default) | deliberately **no** CSP/XFO change: the app ships inline GTM/gtag snippets (nonce-less) when configured and no CSP exists today; adding one here would be a behavior change, not a hosting move. Listed as optional hardening later |

### Free-tier limits and cost (honest version)

Expected recurring hosting cost: **$0/month** at current traffic, on the Cloudflare
Free plan:

- Pages static hosting: no request/bandwidth quota is listed for static content on
  the Free plan — but "unmetered" is Cloudflare's *fair-use* language, not a
  contractual unlimited guarantee. It can change; it is a free tier, not free forever.
- 500 builds/month — **not consumed at all**: builds happen in GitHub Actions; the
  Pages project receives prebuilt assets by Direct Upload.
- 20,000 files/site, 25 MiB/file — this build is ~25 files, largest 1.4 MB.
- 100 custom domains/project — two are needed (apex + www).
- Pages Functions (unused) would count against Workers free quota (100k req/day).
- New Pages projects on accounts < 48 h old may be rate-limited for project creation.
- No payment method is required for the Free plan — the property that prevents a
  repeat of the AWS incident's root cause. The *domain renewal* (~$15/yr at Namify)
  remains the only unavoidable recurring cost, unchanged by this migration.

## 3. What this branch contains

| File | Purpose |
| --- | --- |
| `scripts/pages-emit.mjs` | Translates the build's AWS staging layout (`__prerender/`, `prerendered.json`) into the Pages layout (`<route>.html`, `_headers`) and strips the AWS-only plumbing from the upload. Never run from `npm run build` — the AWS pipeline still consumes the staging files. |
| `.github/workflows/deploy-cloudflare-preview.yml` | Cloudflare preview pipeline: `npm ci` → typecheck → unit tests → `npm run build` (same repo variables as the AWS workflow) → bundle-config greps → `pages-emit` → prerender validation → Pages Direct Upload deploy → **live HTTP verification of the deployed preview**. Runs only on `push` to this branch or manual dispatch. **Never on `main`.** |
| `docs/CLOUDFLARE_MIGRATION.md` | This document. |

The application (`src/`), the AWS workflow (`deploy.yml`), `keepalive.yml`, prerender
script, SEO data, and every route are **byte-for-byte unchanged**.

## 4. Cloudflare account setup (founder actions — cannot be done from the repo)

1. Create a free Cloudflare account (no card required) at dash.cloudflare.com.
2. **API token**: My Profile → API Tokens → Create Token → Custom Token →
   Permissions: *Account · Cloudflare Pages · Edit* → create. Account ID is shown
   on the right sidebar of any account page (Radar/Overview).
3. GitHub → this repo → Settings → Secrets and variables → Actions → **New
   repository *secret*** (not variable): `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
   These are the only two secrets the workflow needs; it refuses to run (loudly,
   red) while either is missing.
4. The Pages project `hexabyte-portfolio` is created by the CI run if absent (the
   first deploy created it on 2026-11-15 via the same guarded API call), with
   `production_branch` set to the branch name `production` — a branch that
   intentionally does not exist, so **no CI branch can ever deploy to a "production"
   alias**. Real production comes only from the manual cutover in §6.

Node/PM compatibility: the workflow pins Node 20 + `npm ci` — identical to the AWS
pipeline and to what Cloudflare's build image would use. No dependencies were added;
wrangler is provided by `cloudflare/wrangler-action@v4` and never enters
`package.json`.

## 5. Preview deployment (Phase 3) — how it works and what it proves

Trigger: push to this branch, or Actions → "Deploy Cloudflare preview" → Run workflow.

The workflow deploys to a **per-deployment preview URL**
`https://<hash>.hexabyte-portfolio.pages.dev` and then verifies over real HTTPS:

1. `/`, `/products`, `/company-information`, `/case-studies/easy-moderator` return
   exactly the titles from `src/data/seo.json` (proves prerendered heads + extensionless
   matching + SPA fallback).
2. `/products` serves `text/html` (would be `application/octet-stream` if the layout
   were wrong — the classic Pages-as-S3 mistake).
3. `/og-image.png` serves `image/png` (proves the fallback doesn't shadow real files).
4. `/robots.txt` serves `text/plain`; `/sitemap.xml` is at its expected path.
5. An unknown path returns HTTP 200 (SPA-fallback parity with CloudFront).
6. Any failure fails the run — no step swallows errors.

Preview URLs send `X-Robots-Tag: noindex` (Cloudflare default), so previews cannot
pollute hexabyte.tech's SEO. The contact form on a preview POSTs to whatever
`vars.VITE_FORM_SUBMISSION_ENDPOINT` contains (today: a deleted Supabase URL →
submission fails → prefilled `mailto:` fallback appears, identical to the last live
AWS behavior); submitting it is therefore **not** a useful integration test until a
live endpoint exists (§8).

Anything the CI cannot check is verified separately in the browser against the
preview (see results below).

### Results — verified 2026-11-15 against the live preview

- Run 43706127168: all gates + deploy green; verify step failed only because the
  brand-new `*.pages.dev` hostname had not finished TLS provisioning within the
  120 s window — fixed by the readiness loop in the verify step (commit
  `fix(ci): wait for first-deploy TLS provisioning`), which still fails loudly if
  the URL never becomes reachable.
- Run 43706492254: **every step green**, including the live HTTPS verification.
- Deployment URL `https://f46aa2fb.hexabyte-portfolio.pages.dev` · branch alias
  `https://feat-cloudflare-hosting-migr.hexabyte-portfolio.pages.dev`.
- Browser checks (Chromium, 1280/390 viewports): zero console errors on clean
  loads; nav + client-side routing intact; direct deep load of
  `/case-studies/easy-moderator` returns the prerendered head (extensionless
  match confirmed in production traffic); legacy `/case-studies/shopify-automation`
  boots the SPA and lands on `/case-studies/easy-ecommerce` with correct metadata;
  `/products#easy-moderator` hash route scrolls to the section.
- Contact form end-to-end from the Cloudflare bundle: POST to the inlined
  `VITE_FORM_SUBMISSION_ENDPOINT` (dead Supabase host → `ERR_NAME_NOT_RESOLVED`
  — identical to last live AWS behavior) → `[FormSubmission]` error path →
  prefilled `mailto:contact@hexabyte.tech` recovery link rendered. The
  "not a useful integration test" caveat above now has direct evidence rather
  than expectation.

## 6. Production cutover (only after explicit founder approval)

Prerequisite: `hexabyte.tech` must be served again — this migration **is** the fastest
restoration path given the AWS closure. Steps, in order, none automated:

1. Record current DNS: registrar nameservers (4× awsdns, lame-delegation state per
   the incident doc) — `whois`, and note that Route 53 answers nothing anyway.
2. Cloudflare dashboard → **Add a site** → `hexabyte.tech` → Free plan → Cloudflare
   imports nothing (zone is deleted); verify ownership via TXT or default records.
3. Add `www` record; create zone records only after step 4 in practice — Cloudflare
   will keep serving old (absent) delegation until the registrar change.
4. **Registrar (Namify) nameserver change to Cloudflare's assigned pair — founder
   performs this in the Namify panel.** This is the DNS cutover. TTL/multi-hour
   propagation applies; nothing here can roll it back except changing NS back.
5. Pages project → Custom domains → add `hexabyte.tech` and `www.hexabyte.tech`;
   Cloudflare creates proxied CNAME/ALIAS records automatically (apex works on
   Cloudflare via CNAME flattening — unlike Route 53, no account needed for that).
6. TLS: Cloudflare issues the certificate automatically; zone SSL mode *Full
   (strict)* is the Pages default recommendation; HTTPS is enforced by toggle.
7. Redirect policy: connect only `hexabyte.tech` apex as the canonical host and add a
   free **Bulk Redirect** (included in the Free plan) `www.hexabyte.tech/*` →
   `https://hexabyte.tech/:splat` 308 — matching current canonical URLs (`seo.json`
   emits canonicals on the apex host). Alternatively connect `www` as a second custom
   domain; do not do both (duplicate content).
8. Re-run the CI verification suite against `https://hexabyte.tech` (dispatch the
   workflow; temporarily point `SITE` checks — or the manual checklist below):
   all 16 routes, og-image content-type, unknown-path 200, form fallback, analytics
   if `VITE_GTM_ID` gets set later.
9. The Pages project's `production_branch` is switched to `main` in the dashboard
   *only when the founder decides CI may deploy production* — until then production
   content updates remain a manual `wrangler pages deploy … --branch production`.
10. Only after ≥2 weeks stable (post-cutover stabilization), decide separately about
    AWS decommissioning. Do not revoke the AWS recovery path until that decision.

Rollback after cutover: change nameservers back at Namify (or point the zone records
at rebuilt CloudFront if AWS was restored) — the bucket still holds the last AWS
build; the Cloudflare side stays intact and simply stops receiving the domain. Full
DNS propagation applies either direction. There is no data in either platform — both
hold only regenerable build output.

## 7. Manual deploy / preview without waiting for CI

With wrangler locally and credentials exported as env vars
(`CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` — never in files):

```bash
npm ci && npm run build && node scripts/pages-emit.mjs
npx wrangler pages deploy dist --project-name=hexabyte-portfolio --branch=preview
```

## 8. Known gaps this migration does NOT (deliberately) fix

- **Lead capture is dead.** `vars.VITE_FORM_SUBMISSION_ENDPOINT` points at the deleted
  Supabase project (`ralofegunneywgmdfbke`, NXDOMAIN since ~Aug 2026). The form's
  prefilled-`mailto:` fallback is the shipped behavior on both hosts. Restoring
  capture is a *backend* decision (new Supabase/Resend/API — a Cloudflare Worker
  *could* accept the POST later, which would be the one legitimate use of Workers),
  not a hosting decision. `keepalive.yml` still monitors the dead host and fails —
  leave or delete it with the backend decision.
- **Analytics is unwired**: `VITE_GTM_ID` is unset; no tag ships. Unchanged behavior.
- **Uptime monitoring for the site itself** — the incident's secondary cause. After
  cutover, add a check that does not depend on repo activity (e.g. UptimeRobot free
  ping, GitHub's status-check on the *site* not the backend).
- **Namify registrar account** must remain paid/current to 2027-02-03 — the registrar,
  not Cloudflare or AWS, is the one single point of failure left.

## 9. Founder action list (blocking order)

1. Create the Cloudflare Free account (no card).
2. Create the Pages-Edit API token; add `CLOUDFLARE_API_TOKEN` +
   `CLOUDFLARE_ACCOUNT_ID` as repository *secrets*.
3. Re-run this PR's preview workflow (or push) and review the preview URL +
   verification output; compare visually with expectations from the 2026-08-07 build.
4. Approve or reject production cutover (§6). The nameserver change at Namify is
   yours alone; no automation in this repo can or will do it.
5. (Optional, later) decide lead-capture backend; decide AWS recovery vs decommission.

## 10. Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| Deep link 404s instead of SPA shell | a `404.html` appeared in the upload (disables Pages SPA fallback) | `pages-emit.mjs` already fails the build if one exists; never add one without re-reading this table |
| `/products` downloads instead of rendering | staging file uploaded without `.html` (Pages has no S3-style key mapping) | run `node scripts/pages-emit.mjs` before deploy — the workflow does; manual uploads must too |
| Stale content after deploy | zone-level Cache/Page Rule caching in front of Pages | remove the custom cache rule (Cloudflare docs warn these interfere with Pages); purge the specific URLs |
| "Invalid API Token" 4001 from CI | token revoked/limits | recreate per §4; check it lists *Pages: Edit* |
| Project create blocked on brand-new account | 48 h new-account Pages restriction | wait, or create the project once in the dashboard |
| Pages Git-integration build (if ever used instead of this CI) | Pages' own build image would run plain `npm run build` and ship the AWS staging layout | set the Pages build command to `npm run build && node scripts/pages-emit.mjs`, output `dist` — or keep Direct Upload from Actions as designed here |
