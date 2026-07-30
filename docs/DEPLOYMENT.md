# Deployment

## Where the site lives

```text
hexabyte.tech, www.hexabyte.tech
  → ACM certificate a3204a73-67ac-402b-92ef-0540319530b8 (us-east-1)
  → CloudFront distribution E1QPRQT12IQGL9
      403/404 → /index.html with status 200   (SPA deep links)
      cache policy: Managed-CachingOptimized
  → S3 bucket hexabyte-tech-website (ap-south-1), public read, custom HTTPS origin
```

There is **one** way to deploy: push to `main`. That runs
[.github/workflows/deploy.yml](../.github/workflows/deploy.yml), which typechecks, tests,
builds, uploads to S3, invalidates CloudFront, and then curls the live URL to confirm the
new build is actually being served.

`workflow_dispatch` runs the same pipeline without a commit.

The AWS Amplify app `d3f7vg26f037wj` (ap-south-1) is **not** part of this. CloudFront was
repointed to S3, which orphaned it. It can be deleted once you are satisfied with a few
deploys; nothing references it any more.

## Cache strategy

| What | Cache-Control | Why |
| --- | --- | --- |
| `assets/*` | `max-age=31536000, immutable` | filenames contain a content hash |
| `index.html`, prerendered routes, `sitemap.xml`, `robots.txt`, images | `max-age=0, must-revalidate` | must change the moment you deploy |

Prerendered route files are uploaded a second time with an explicit
`Content-Type: text/html` because they have no file extension — see
[scripts/prerender-head.mjs](../scripts/prerender-head.mjs) for why they are named that way.

## Deploying by hand

Only if Actions is unavailable. Needs credentials with write access to the bucket.

```bash
npm ci && npm run build
aws s3 sync dist/assets s3://hexabyte-tech-website/assets --delete \
  --cache-control "public, max-age=31536000, immutable"
aws s3 sync dist s3://hexabyte-tech-website --delete \
  --exclude "assets/*" --exclude "prerendered.json" \
  --cache-control "public, max-age=0, must-revalidate"
for key in $(jq -r '.[]' dist/prerendered.json); do
  aws s3 cp "dist/$key" "s3://hexabyte-tech-website/$key" \
    --content-type "text/html; charset=utf-8" \
    --cache-control "public, max-age=0, must-revalidate"
done
aws cloudfront create-invalidation --distribution-id E1QPRQT12IQGL9 --paths "/*"
```

## Rolling back

The bucket holds only the current build, so a rollback is a redeploy of an older commit:

```bash
gh workflow run "Deploy hexabyte.tech" --ref <commit-or-branch>
```

Or revert the commit on `main` and let the push deploy it. Do not hand-edit objects in the
bucket — the next deploy's `--delete` will undo it, and nobody will know why.

## Checking a deploy yourself

```bash
curl -s https://hexabyte.tech/products | grep -o '<title>[^<]*'
curl -sI https://hexabyte.tech/og-image.png | grep -i content-type   # image/png, not text/html
curl -s https://hexabyte.tech/sitemap.xml | grep -c "<loc>"          # 16
```

Note that **every unknown path returns 200**, because CloudFront rewrites 403/404 to
`index.html` so that SPA deep links work. A 200 therefore does not prove a file exists —
check `content-type` when you are testing an asset.

## Open items for the owner

### 1. The inquiry form has no backend

`VITE_FORM_SUBMISSION_ENDPOINT` used to point at a Supabase project
(`ralofegunneywgmdfbke`) that has been deleted; its hostname no longer resolves, so every
submission failed. The variable is now unset, and the form offers the visitor a prefilled
email plus the phone number instead, so a lead is never lost.

To restore automated capture, deploy something that accepts
`POST { …InquiryFormData, submittedAt }` and returns `{ "success": true }`, then set the
variable in `.env.production` and redeploy. `supabase/functions/submit-inquiry/index.ts`
and `supabase/migrations/` are still in the repo and can be redeployed to a new Supabase
project unchanged.

### 2. CI credentials are over-privileged

`AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` in GitHub secrets belong to `cli-admin`,
the account's only IAM user, which holds `AdministratorAccess`. A leak of those secrets is
an account takeover, not a defaced website. The fix is a GitHub OIDC role scoped to
`s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` on this one bucket plus
`cloudfront:CreateInvalidation` on this one distribution — no long-lived keys at all.

### 3. Analytics is wired but not connected

`trackEvent` pushes to `window.dataLayer` and nothing consumes it. Set a GA4 or GTM
container id and the CTA, inquiry and case-study events already being emitted start
reporting. Until then, traffic and conversion are invisible.
