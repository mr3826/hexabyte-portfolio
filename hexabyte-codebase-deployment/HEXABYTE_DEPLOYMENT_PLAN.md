# Hexabyte Portfolio — Deployment Plan

## 1. Current deployment system

The verified production pipeline uses:

```text
GitHub repository: mr3826/hexabyte-portfolio
Production branch: main
AWS Amplify app: d3f7vg26f037wj
Amplify region: ap-south-1
Amplify branch: main
CloudFront distribution: E1QPRQT12IQGL9
Public domain: https://hexabyte.tech
```

Deployment configuration files:

```text
.github/workflows/deploy.yml
amplify.yml
```

Amplify build configuration:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 2. Existing workflow behavior

A push to `main`, or a manual workflow dispatch:

1. starts an AWS Amplify `RELEASE` job;
2. polls the job every 20 seconds;
3. waits up to approximately 10 minutes;
4. invalidates `/*` in the custom CloudFront distribution;
5. waits for invalidation completion.

## 3. Current deployment risks

### Critical: completed implementation is not in `main`

The pipeline can only deploy the older code presently in GitHub. Pushing or manually rerunning the current workflow will not deploy the reported four-product update.

### Critical: no pre-deployment quality gate in GitHub Actions

The deploy workflow does not:

- check out the source;
- install Node;
- run typecheck;
- run tests;
- run a local production build.

Amplify performs the build, but deployment should not be the first place a broken commit is detected.

### High: polling timeout can still invalidate

If Amplify remains `RUNNING` after all 30 checks, the shell loop ends and the workflow proceeds to CloudFront invalidation. Add an explicit success flag and fail on timeout.

### High: “build already in progress” exits successfully too early

The current workflow exits `0` when Amplify rejects a new job because another build is running. It then skips the cache invalidation step. The in-progress build may complete while the external CloudFront cache remains stale.

Preferred behavior:

- discover the active job and wait for it, or
- use GitHub Actions concurrency and fail/retry cleanly.

### High: static SPA rewrite must be verified

Direct navigation to these routes must resolve to `index.html`:

```text
/company-information
/products
/case-studies/easy-ecommerce
/case-studies/easy-assistance
```

Configure Amplify/CloudFront rewrite:

```text
Source: </^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|map|json)$)([^.]+$)/>
Target: /index.html
Status: 200
```

Use the exact supported Amplify rule syntax available in the account.

### High: form endpoint may not exist on static hosting

`src/services/formSubmission.ts` defaults to:

```text
/api/inquiries/submit
```

Confirm that CloudFront routes `/api/*` to a real backend. Otherwise set:

```text
VITE_FORM_SUBMISSION_ENDPOINT
```

in the Amplify production environment.

### Medium: hardcoded infrastructure identifiers

Move these values to GitHub repository variables or secrets:

```text
AWS_AMPLIFY_APP_ID
AWS_AMPLIFY_BRANCH
CLOUDFRONT_DISTRIBUTION_ID
AWS_REGION
```

### Medium: long-lived AWS keys

Replace `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` with GitHub OIDC and a restricted IAM deployment role.

### Medium: no post-deployment smoke test

Add HTTP checks after invalidation for:

```text
/
 /products
 /company-information
 /case-studies/easy-ecommerce
 /privacy or external Easy Moderator legal links as appropriate
```

### Medium: no automated rollback

Record the deployed Git SHA and define rollback steps before production deployment.

## 4. Recommended environments

### Pull request

- GitHub CI only
- optional Amplify preview
- no production invalidation

### Staging

Recommended branch:

```text
staging
```

Recommended domain:

```text
staging.hexabyte.tech
```

Use it for:

- route testing;
- responsive review;
- legal-copy review;
- form-submission test;
- Meta-facing verification review.

### Production

```text
main → Amplify production → CloudFront → hexabyte.tech
```

Only merge a reviewed and verified PR.

## 5. Exact deployment sequence

### Step 1 — Push the completed implementation

```bash
git status
git branch --show-current
git add .
git commit -m "feat: align portfolio products and legal identity"
git push -u origin feat/portfolio-products-legal-alignment
```

### Step 2 — Open a pull request

PR must include:

- summary;
- changed files;
- desktop and mobile screenshots;
- typecheck result;
- test result;
- build result;
- Shopify-removal search result;
- legal-name search result;
- known assumptions.

### Step 3 — Run pre-merge validation

```bash
npm ci
npm run typecheck
npm test -- --run
npm run build
```

Content checks:

```bash
grep -RInE "Shopify|Hexabyte Limited|Hexabyte Ltd" src public docs index.html
grep -RInE "Easy Assistance|Easy E-commerce|Company Information" src public index.html
```

Route list to test:

```text
/
 /products
 /products#easy-moderator
 /products#easy-ecommerce
 /products#easy-assistance
 /products#tradeflow
 /company-information
 /case-studies
 /case-studies/easy-ecommerce
 /case-studies/easy-assistance
 /case-studies/shopify-automation
```

Expected old-route behavior:

```text
/case-studies/shopify-automation
→ /case-studies/easy-ecommerce
```

### Step 4 — Deploy to staging

1. Merge or push to `staging`.
2. Wait for Amplify build success.
3. Test direct route refresh.
4. Test browser console.
5. Test mobile widths.
6. Test form submission using non-sensitive test data.
7. Inspect title, description, canonical, Open Graph, and JSON-LD.
8. Review every public legal detail.

### Step 5 — Production merge

Merge the approved PR into `main`.

The push starts the Amplify release workflow.

### Step 6 — Verify Amplify build

Confirm:

- dependency installation succeeded;
- type/build step succeeded;
- `dist` artifact was generated;
- deployment completed;
- no environment variable is missing.

### Step 7 — Invalidate CloudFront

Invalidate:

```text
/*
```

Wait until the invalidation is complete.

### Step 8 — Production smoke test

Check HTTP and rendered content for:

```text
https://hexabyte.tech/
https://hexabyte.tech/products
https://hexabyte.tech/company-information
https://hexabyte.tech/case-studies/easy-ecommerce
https://hexabyte.tech/case-studies/easy-assistance
```

Also verify:

```text
https://hexabyte.tech/robots.txt
https://hexabyte.tech/sitemap.xml
```

Search the production DOM for:

```text
Easy Assistance
Easy E-commerce
Hexabyte Technologies
Company Information
```

Confirm absence of public Shopify messaging.

### Step 9 — Form test

Submit a test inquiry and verify:

- browser receives success response;
- backend stores the inquiry;
- notification is delivered;
- attribution fields are captured;
- no sensitive details appear in logs.

### Step 10 — Record deployment

Record:

```text
Git SHA
PR number
Amplify job ID
deployment start/end time
CloudFront invalidation ID
verification owner
rollback commit
```

## 6. Proposed CI workflow

Create:

```text
.github/workflows/ci.yml
```

```yaml
name: CI

on:
  pull_request:
  push:
    branches:
      - staging

permissions:
  contents: read

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  validate:
    runs-on: ubuntu-latest
    timeout-minutes: 15

    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - run: npm ci
      - run: npm run typecheck
      - run: npm test -- --run
      - run: npm run build

      - uses: actions/upload-artifact@v4
        with:
          name: dist-${{ github.sha }}
          path: dist
          if-no-files-found: error
          retention-days: 14
```

## 7. Proposed production deploy workflow

Use GitHub OIDC and repository variables.

```yaml
name: Deploy Production

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  id-token: write
  contents: read

concurrency:
  group: hexabyte-production
  cancel-in-progress: false

jobs:
  validate:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run typecheck
      - run: npm test -- --run
      - run: npm run build

  deploy:
    needs: validate
    runs-on: ubuntu-latest
    timeout-minutes: 20

    steps:
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ secrets.AWS_DEPLOY_ROLE_ARN }}
          aws-region: ${{ vars.AWS_REGION }}

      - name: Start Amplify release
        id: amplify
        shell: bash
        run: |
          set -euo pipefail
          JOB_ID=$(aws amplify start-job             --app-id "${{ vars.AWS_AMPLIFY_APP_ID }}"             --branch-name "${{ vars.AWS_AMPLIFY_BRANCH }}"             --job-type RELEASE             --query 'jobSummary.jobId'             --output text)
          echo "job_id=$JOB_ID" >> "$GITHUB_OUTPUT"

      - name: Wait for Amplify
        shell: bash
        run: |
          set -euo pipefail
          JOB_ID="${{ steps.amplify.outputs.job_id }}"
          for i in $(seq 1 45); do
            STATUS=$(aws amplify get-job               --app-id "${{ vars.AWS_AMPLIFY_APP_ID }}"               --branch-name "${{ vars.AWS_AMPLIFY_BRANCH }}"               --job-id "$JOB_ID"               --query 'job.summary.status'               --output text)

            echo "Attempt $i: $STATUS"

            case "$STATUS" in
              SUCCEED) exit 0 ;;
              FAILED|CANCELLED) exit 1 ;;
            esac

            sleep 20
          done

          echo "Amplify timed out."
          exit 1

      - name: Invalidate CloudFront
        shell: bash
        run: |
          set -euo pipefail
          INVALIDATION_ID=$(aws cloudfront create-invalidation             --distribution-id "${{ vars.CLOUDFRONT_DISTRIBUTION_ID }}"             --paths "/*"             --query 'Invalidation.Id'             --output text)

          aws cloudfront wait invalidation-completed             --distribution-id "${{ vars.CLOUDFRONT_DISTRIBUTION_ID }}"             --id "$INVALIDATION_ID"

      - name: Production smoke test
        shell: bash
        run: |
          set -euo pipefail
          for URL in             "https://hexabyte.tech/"             "https://hexabyte.tech/products"             "https://hexabyte.tech/company-information"             "https://hexabyte.tech/case-studies/easy-ecommerce"             "https://hexabyte.tech/case-studies/easy-assistance"
          do
            curl --fail --silent --show-error --location "$URL" > /dev/null
          done
```

## 8. AWS IAM scope

The GitHub deployment role should be limited to:

- `amplify:StartJob`
- `amplify:GetJob`
- `cloudfront:CreateInvalidation`
- `cloudfront:GetInvalidation`

Scope resources to the specific Amplify app and CloudFront distribution where AWS supports resource-level restriction.

## 9. Cache policy

Recommended behavior:

### `index.html`

```text
Cache-Control: no-cache, no-store, must-revalidate
```

or a short cache lifetime with revalidation.

### Hashed Vite assets

```text
Cache-Control: public, max-age=31536000, immutable
```

### robots, sitemap, and legal pages

Use short or moderate caching so updates appear promptly.

## 10. Rollback plan

### Fast rollback

1. Identify the last known good Git SHA.
2. Revert the production merge or reset through a new revert commit.
3. Push the revert to `main`.
4. Wait for Amplify.
5. Invalidate CloudFront.
6. Repeat smoke tests.

Preferred command:

```bash
git revert <bad-merge-sha>
git push origin main
```

Avoid force-pushing `main`.

### Rollback evidence

Record:

```text
failed SHA
reason
last known good SHA
revert SHA
Amplify job ID
CloudFront invalidation ID
```

## 11. Go/no-go checklist

### Go

- completed branch is pushed;
- PR reviewed;
- CI passes;
- staging passes;
- direct route refresh works;
- legal details match;
- form endpoint works;
- sitemap and robots are updated;
- rollback commit is known.

### No-go

- implementation exists only locally;
- `main` still contains Shopify;
- Company Information route is absent;
- build is not reproduced;
- form endpoint is unknown;
- direct SPA routes return 404;
- CloudFront remains stale;
- incorrect legal name appears publicly.

## 12. Current recommendation

Do not trigger a production deployment yet.

First push the completed implementation branch, then run the pull-request and staging sequence above.
