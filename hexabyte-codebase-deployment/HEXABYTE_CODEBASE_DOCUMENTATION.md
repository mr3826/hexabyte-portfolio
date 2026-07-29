# Hexabyte Portfolio — Codebase Documentation

## 1. Purpose

This repository powers the public website for **Hexabyte Technologies**. It serves four functions:

1. Explain the company’s engineering and product positioning.
2. Present Hexabyte-operated products and selected system builds.
3. Capture discovery inquiries.
4. Provide a credible public business identity for customers, partners, and platform reviewers.

This document distinguishes between:

- **Verified current `main`:** the source presently available in GitHub.
- **Target implementation:** the four-product and legal-alignment update reported as completed locally but not yet pushed.

## 2. Repository

```text
Repository: mr3826/hexabyte-portfolio
Default branch: main
Visibility: public
Current verified head: cef281c5be8f3cd240476585b1d6184953ebadff
```

## 3. Technology stack

| Layer | Technology |
|---|---|
| UI framework | React 18 |
| Build system | Vite 6 |
| Language | TypeScript |
| Routing | React Router |
| Styling | Tailwind CSS 4 plus custom CSS tokens |
| Animation | Motion |
| Icons | Lucide React |
| Tests | Vitest, Testing Library, jsdom |
| Hosting/build | AWS Amplify |
| Edge delivery | Custom Amazon CloudFront distribution |
| CI/deploy trigger | GitHub Actions |

## 4. Package scripts

```bash
npm run dev
npm run build
npm run typecheck
npm test
npm run test:coverage
npm run format
```

Recommended one-time verification:

```bash
npm ci
npm run typecheck
npm test -- --run
npm run build
```

## 5. Application entry and composition

```text
index.html
  └─ /src/main.tsx
      └─ <App />
          ├─ BrowserRouter
          ├─ ScrollToTop
          ├─ RouteObserver
          ├─ ModalProvider
          ├─ Navigation
          ├─ Routes
          └─ Footer
```

### Main responsibilities

- `src/main.tsx`: mounts React and imports global styles.
- `src/App.tsx`: route registration, dynamic metadata, canonical tags, Open Graph tags, JSON-LD, and page-view tracking.
- `src/context/ModalContext.tsx`: shared inquiry-modal state.
- `src/components/Navigation.tsx`: primary and mobile navigation.
- `src/components/Footer.tsx`: company, product, social, contact, and legal links.
- `src/components/ProjectModal.tsx`: inquiry capture and Calendly transition.
- `src/services/formSubmission.ts`: validates and submits inquiry data.

## 6. Route model

### Verified current routes

```text
/
 /ai-automation
 /web-development
 /mobile-development
 /products
 /about
 /process
 /resources
 /case-studies
 /case-studies/:id
```

### Required target route

```text
/company-information
```

### Target product anchors

```text
/products#easy-moderator
/products#easy-ecommerce
/products#easy-assistance
/products#tradeflow
```

### Target case-study routes

```text
/case-studies/easy-moderator
/case-studies/easy-ecommerce
/case-studies/easy-assistance
/case-studies/tradeflow
```

The deprecated route should redirect:

```text
/case-studies/shopify-automation
  → /case-studies/easy-ecommerce
```

## 7. Product content architecture

The target implementation should centralize product content in:

```text
src/data/products.ts
```

Recommended shape:

```ts
export type ProductStatus = 'live' | 'beta' | 'private-beta' | 'planned';

export interface Product {
  id: string;
  name: string;
  status: ProductStatus;
  statusLabel: string;
  category: string;
  summary: string;
  audience: string[];
  capabilities: ProductCapability[];
  workflow: string[];
  primaryCta: ProductCta;
  secondaryCta?: ProductCta;
  operatorStatement: string;
}
```

Public statuses:

| Product | Status |
|---|---|
| Easy Moderator | Live & Available |
| Easy E-commerce | Beta Testing |
| Easy Assistance | Beta Testing |
| TradeFlow | Beta Access |

Long product descriptions should be sourced from this data model rather than copied independently across the homepage, Products page, About page, and footer.

## 8. Case-study architecture

The target implementation should centralize case studies in:

```text
src/data/caseStudies.ts
```

The listing and detail pages should read from the same typed source.

Each case study should include:

```ts
interface CaseStudy {
  id: string;
  title: string;
  category: string;
  industry: string;
  status: string;
  evidenceConfidence: string;
  overview: string;
  problems: string[];
  solution: string[];
  tags: string[];
  visual?: string;
  seo: {
    title: string;
    description: string;
  };
}
```

Do not use invented customer outcomes or anonymous testimonials.

## 9. Styling system

Global style loading:

```text
src/styles/index.css
  ├─ fonts.css
  ├─ tailwind.css
  └─ theme.css
```

Core design tokens:

```text
Background       #0A0A0A
Primary text     #EDEDED
Primary indigo   #6366F1
Secondary blue   #3B82F6
Card             #141414
Secondary        #1A1A1A
Muted            #262626
Border           #333333
Muted text       #A1A1AA
Success          #22C55E
Warning          #EAB308
Error            #EF4444
```

Typography:

- Inter for interface and body text.
- JetBrains Mono for technical labels and terminal-style content.

Reusable UI patterns:

- bento cards
- status badges
- grid backgrounds
- terminal widget
- compact uppercase eyebrow labels
- workflow diagrams
- indigo hover borders and shadows

## 10. SEO architecture

Current route metadata is inserted client-side from `src/App.tsx`.

The target implementation should update both:

1. `index.html` static title and description;
2. route-level dynamic metadata.

This matters because link unfurlers and some crawlers may not wait for client-side React execution.

### Required organization identity

```json
{
  "@type": "Organization",
  "name": "Hexabyte Technologies",
  "alternateName": "Hexabyte",
  "legalName": "Hexabyte Technologies",
  "url": "https://hexabyte.tech",
  "email": "contact@hexabyte.tech",
  "telephone": "+8801886895874"
}
```

Do not include personal identity or private licence information.

### SEO files to maintain

```text
index.html
public/robots.txt
public/sitemap.xml
src/App.tsx or a dedicated SEO component
```

The sitemap must include `/company-information` and the two new product-build case studies, and must not advertise the removed Shopify case study.

## 11. Inquiry form data flow

```text
CTA
  → ProjectModal
  → validateInquiryForm()
  → submitInquiryForm()
  → VITE_FORM_SUBMISSION_ENDPOINT
  → backend/webhook/CRM
  → success state
  → Calendly or next step
```

Current fallback endpoint:

```text
/api/inquiries/submit
```

This is a static Vite site. That route only works if CloudFront, Amplify, an API Gateway, Lambda, or another backend explicitly handles it.

### Required environment variable

```bash
VITE_FORM_SUBMISSION_ENDPOINT=https://<approved-endpoint>
```

Do not deploy until a real production endpoint and CORS policy are verified.

Create and maintain:

```text
.env.example
```

Example:

```dotenv
VITE_FORM_SUBMISSION_ENDPOINT=https://api.hexabyte.tech/inquiries/submit
```

Never commit real credentials.

## 12. Testing strategy

### Existing test tooling

- Vitest
- Testing Library
- user-event
- jsdom
- V8 coverage

### Required pre-merge checks

```bash
npm run typecheck
npm test -- --run
npm run build
```

### Recommended tests for the portfolio update

1. Routes render:
   - `/products`
   - `/company-information`
   - both new case-study routes

2. Product data:
   - exactly four public products
   - correct status mapping
   - legal operator statement present

3. Redirect:
   - Shopify URL redirects to Easy E-commerce

4. Footer:
   - four product links
   - Company Information
   - Easy Moderator legal links

5. Content:
   - no `Hexabyte Limited`
   - no public Shopify copy
   - no unverified metrics

6. SEO:
   - canonical URL
   - title/description
   - Organization JSON-LD legal name

## 13. Build output

Amplify runs:

```bash
npm ci
npm run build
```

Vite produces:

```text
dist/
```

The `dist` folder is the deployable static artifact. It should not normally be committed to Git.

## 14. Hosting model

```text
GitHub main
  → GitHub Actions deploy trigger
  → AWS Amplify RELEASE job
  → npm ci
  → npm run build
  → dist artifact
  → Amplify hosting origin
  → Custom CloudFront distribution
  → hexabyte.tech
```

This is static hosting, not a traditional server where files are manually copied over SSH.

## 15. Operational ownership

Recommended owners:

| Area | Owner |
|---|---|
| Product and company copy | Founder/product owner |
| Legal identity consistency | Founder/compliance owner |
| UI implementation | Frontend engineer |
| Build and deployment | DevOps owner |
| Form endpoint | Backend/automation owner |
| DNS, SSL, CloudFront | Infrastructure owner |
| Meta-facing legal pages | Easy Moderator product owner |

## 16. Documentation that should live in the repository

```text
README.md
docs/CODEBASE.md
docs/DEPLOYMENT.md
docs/CONTENT_AND_LEGAL_RULES.md
docs/FACEBOOK_PAGE_ALIGNMENT.md
docs/PORTFOLIO_CONTENT_CHANGELOG.md
FORM-SUBMISSION-SETUP.md
.env.example
```

The current README is only a minimal Figma-generated setup note. Replace it with a project-specific README after the completed code is pushed.

## 17. New-developer setup

```bash
git clone https://github.com/mr3826/hexabyte-portfolio.git
cd hexabyte-portfolio
git checkout <feature-or-main-branch>
npm ci
cp .env.example .env.local
npm run dev -- --host 0.0.0.0 --port 5173
```

Open:

```text
http://localhost:5173
```

Production validation:

```bash
npm run typecheck
npm test -- --run
npm run build
npm run dev -- --host 0.0.0.0 --port 5173
```

## 18. Current documentation limitation

This document accurately describes the verified architecture and the intended target structure. The exact new implementation cannot be documented line-by-line until its branch or commit is pushed to GitHub.
