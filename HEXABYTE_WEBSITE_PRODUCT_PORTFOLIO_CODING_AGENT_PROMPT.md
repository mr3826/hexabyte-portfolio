# Coding Agent Master Prompt
## Hexabyte Website Portfolio Repositioning, Product Expansion, and Legal Alignment

### Mission

Update the Hexabyte Technologies public website and the minimum related public-facing EasyModerator content so the company portfolio is accurate, credible, legally consistent, and ready to support Meta Business Verification and future product marketing.

The final result must:

1. Preserve Hexabyte's existing dark, premium, founder-led engineering brand.
2. Remove all public-facing Shopify-related portfolio and resource content.
3. Add two new Hexabyte products based on their intended final product vision:
   - **Easy Assistance** — AI-powered booking and customer-operations platform.
   - **Easy E-commerce** — AI-powered e-commerce website and store builder.
4. Present both new products honestly as **Beta Testing / Private Beta**, without pretending every planned feature is already available.
5. Standardize the legal operator name to **Hexabyte Technologies**.
6. Clearly establish that Easy Moderator and the other products are products operated by Hexabyte Technologies.
7. Improve website credibility for customers, Meta reviewers, partners, and search engines.
8. Finish with production-quality implementation, tests, responsive QA, and documentation.

---

# 1. Repositories and source-of-truth rules

## Primary repository

- GitHub owner: `mr3826`
- Primary website repository: `mr3826/hexabyte-portfolio`
- Default branch: `main`
- Current public website: `https://hexabyte.tech`

The current website is a Vite + React + TypeScript application using React Router, Tailwind CSS, Motion, and Lucide icons.

Do not migrate the framework or redesign the entire application. Work within the existing architecture and brand system.

## Related repositories to inspect

Search the owner's GitHub account for repositories related to:

- Easy Moderator
- Easy Assistance
- Ecom BD
- Easy E-commerce
- TradeFlow
- Hexabyte portfolio

Known repositories include:

- `mr3826/EasyMod-frontend`
- `mr3826/easymod-backend`
- `mr3826/em-orchestrator`
- `mr3826/easy-assistant`
- `mr3826/hexabyte-portfolio`

## Source priority when information conflicts

Use this order:

1. The legal/company facts and final product vision in this prompt.
2. Verified current production behavior in the correct product repositories.
3. Existing Hexabyte visual brand system and reusable components.
4. Existing public website copy that remains factually accurate.
5. Stale README files, prototype labels, placeholder metrics, and unrelated code last.

Do not let an unfinished beta implementation reduce or distort the long-term product positioning. At the same time, do not claim that planned capabilities are already fully released.

---

# 2. Legal and company facts

Use these facts consistently across all public pages, metadata, structured data, footer content, product-operator statements, and related public legal copy.

- **Legal business name:** Hexabyte Technologies
- **Public brand:** Hexabyte
- **Business structure:** Sole proprietorship
- **Business category:** Information technology / software products and services
- **Registered address:** Plot-107, North Tower, 8th Floor, Sector-7, Uttara, Dhaka-1230, Bangladesh
- **Public email:** `contact@hexabyte.tech`
- **Public phone:** `+880 1886-895874`
- **Primary website:** `https://hexabyte.tech`
- **Founder:** Evan Ahmed
- **Discovery call:** `https://calendly.com/hexabyte/discovery`

## Mandatory legal-name correction

Search all related public-facing repositories for:

- `Hexabyte Limited`
- `Hexabyte Ltd`
- `Hexabyte Technologies Ltd`
- other incorrect corporate suffixes

Replace them with:

- `Hexabyte Technologies`

Do not perform a blind replacement inside historical migration files, third-party code, lock files, or archived records. Correct:

- website copy
- legal pages
- privacy policy
- terms
- structured data
- metadata
- contact sections
- app-review documentation when stored in a repository
- public product descriptions
- email templates that identify the legal operator

Do not expose or publish:

- NID
- private residential address
- trade-licence QR code
- passport data
- personal tax information
- full uploaded legal document
- private credentials or tokens

---

# 3. Existing Hexabyte brand system

Preserve the existing visual direction.

## Brand personality

- founder-led
- accountable
- technically credible
- calm and direct
- product-minded
- practical and anti-hype
- fast-moving but disciplined
- focused on measurable operational value

## Core visual tokens

- Main background: `#0A0A0A`
- Primary text: `#EDEDED`
- Primary indigo: `#6366F1`
- Secondary blue: `#3B82F6`
- Card surface: `#141414`
- Secondary surface: `#1A1A1A`
- Muted surface: `#262626`
- Border: `#333333`
- Muted text: `#A1A1AA`
- Success: `#22C55E`
- Warning: `#EAB308`
- Error: `#EF4444`

## Typography

- UI/body: Inter
- Technical labels: JetBrains Mono

Some existing files reference Space Grotesk without importing it. Choose one clean solution:

- import Space Grotesk properly and use it consistently for selected display headings, or
- remove those class references and standardize all headings on Inter.

Do not leave an undeclared or silently falling-back font.

## UI language

Keep:

- bento cards
- subtle technical grid backgrounds
- thin charcoal borders
- indigo/blue hover glows
- restrained motion
- status pills
- small uppercase eyebrow labels
- Lucide line icons
- system/workflow diagrams
- responsive fixed navigation

Avoid:

- generic stock photos
- fake dashboard screenshots
- AI robots
- neon overload
- large decorative effects that harm readability
- a complete visual redesign

---

# 4. Product portfolio after this update

The public product portfolio must contain four products.

| Product | Public status | Category |
|---|---|---|
| Easy Moderator | Live & Available | AI-powered social-commerce operations |
| TradeFlow | Beta Access | Mobile-first supply-chain operations |
| Easy Assistance | Beta Testing | AI-powered booking and customer operations |
| Easy E-commerce | Beta Testing | AI-powered e-commerce website and store builder |

Do not describe every product as fully live.

Use a shared typed product data model where practical so product cards, status labels, CTAs, SEO, and detail sections do not drift between pages.

Suggested status enum:

```ts
type ProductStatus = 'live' | 'beta' | 'private-beta' | 'planned';
```

Suggested display mapping:

- `live` → `Live & Available`
- `beta` → `Beta Access`
- `private-beta` → `Beta Testing`
- `planned` → `In Development`

---

# 5. Final product definition: Easy Assistance

## Display name

**Easy Assistance**

Do not rename it to Easy Assistant unless the repository contains a formally approved brand asset that proves the official product name is different. The final website should use one spelling consistently.

## Positioning

**AI-powered booking and customer operations for service businesses.**

## Short product description

> Easy Assistance is a conversational booking platform designed to turn customer enquiries into confirmed appointments, coordinate staff and service availability, send reminders, and keep customer history in one operational workspace.

## Audience

Position it for appointment- and service-based businesses such as:

- salons and beauty businesses
- consultants and professional services
- repair and maintenance teams
- training and coaching businesses
- clinics and appointment-based service providers
- multi-location service businesses

Do not over-focus on one industry.

## Final product vision

The finished product is intended to support:

1. **AI booking assistant**
   - understands customer booking intent
   - answers service questions from business knowledge
   - collects the required booking details
   - recommends available slots
   - hands conversations to staff when confidence is low

2. **Services, staff, and availability**
   - service catalogue
   - duration and pricing configuration
   - staff assignment
   - business hours
   - breaks, blocked time, and holidays
   - branch or location support

3. **Conversational booking**
   - website booking assistant
   - messaging-channel enquiry capture
   - guided booking flow
   - booking confirmation
   - reschedule and cancellation workflows

4. **Customer operations**
   - customer profiles
   - booking history
   - notes and preferences
   - lead and follow-up status
   - human handoff
   - repeat-customer context

5. **Automated communication**
   - confirmation messages
   - reminders
   - reschedule notices
   - missed-appointment follow-up
   - post-service follow-up

6. **Operations and analytics**
   - daily schedule
   - staff workload
   - booking source
   - completion/cancellation/no-show status
   - conversion and service-demand visibility

7. **Future-ready integrations**
   - calendars
   - payments or deposits
   - CRM and automation tools
   - Easy Moderator or other Hexabyte products where the integration is real

## Honest beta language

Use this disclosure near the product heading or CTA:

> Currently in beta testing. Core booking workflows are being validated with selected businesses while additional automation, channel, and analytics capabilities are prepared for wider release.

Do not say all final capabilities are already released.

## Product workflow visual

Create a clean branded SVG or component using this flow:

`Customer enquiry → AI qualification → Availability check → Booking confirmation → Reminder → Service completion → Follow-up`

Do not create a fake screenshot. Use a system workflow visual if final UI assets are unavailable.

## CTA options

Primary:

- `Join Beta Waitlist`
- or `Request Beta Access`

Secondary:

- `Discuss a Booking Workflow`

Use the existing inquiry modal or form system. Pass a source value such as:

```ts
product_interest: 'easy-assistance'
cta_source: 'easy_assistance_beta'
```

---

# 6. Final product definition: Easy E-commerce

## Display name

**Easy E-commerce**

Use the same spelling and capitalization everywhere. Avoid switching among `Easy Ecommerce`, `EasyCommerce`, `Ecom BD`, and `Easy E-Commerce` in public copy unless a final approved logo establishes another spelling.

Internal repository names may remain unchanged.

## Positioning

**AI-powered e-commerce website and store builder for Bangladesh-first merchants.**

## Short product description

> Easy E-commerce helps merchants create, launch, and operate a branded online store without stitching together separate website, order, payment, courier, content, and customer-management tools.

## Strategic promise

This is not a Shopify automation service and must not be described as a Shopify clone.

Position it as a Bangladesh-first commerce platform built around:

- fast store creation
- AI-guided setup
- local payment and COD workflows
- courier operations
- merchant-friendly website building
- product and order management
- customer communication
- mobile-first administration

## Final product vision

The finished product is intended to support:

1. **AI-guided store creation**
   - merchant describes the business
   - AI proposes store structure, categories, sections, and initial copy
   - guided onboarding
   - reusable industry templates
   - brand tone and content assistance

2. **Visual website and landing-page builder**
   - theme selection
   - drag-and-drop or section-based composition
   - homepage, collection, product, campaign, and landing pages
   - reusable blocks
   - mobile preview
   - custom branding and domain

3. **Product and catalogue management**
   - products and variants
   - pricing and discounts
   - stock visibility
   - categories and collections
   - bulk import
   - AI-assisted product titles, descriptions, attributes, and SEO content

4. **Bangladesh-first checkout**
   - cash on delivery
   - bKash and Nagad integration where technically available
   - delivery area and charge rules
   - phone-first checkout
   - fraud and return-to-origin risk controls where implemented

5. **Order and courier operations**
   - order dashboard
   - confirmation workflow
   - Pathao, Steadfast, and RedX integrations where implemented
   - courier booking and tracking
   - fulfilment and delivery status
   - cancellation and return visibility

6. **Customer and marketing operations**
   - customer profiles
   - order history
   - coupons and campaigns
   - abandoned or incomplete checkout follow-up
   - messaging and support hooks
   - analytics and conversion visibility

7. **AI commerce assistance**
   - product content generation
   - store SEO suggestions
   - merchandising recommendations
   - customer-question assistance
   - operational summaries
   - human approval for sensitive actions

8. **Hexabyte ecosystem direction**
   - connection with Easy Moderator for social messaging and assisted sales
   - shared product/catalogue information where implemented
   - future workflow interoperability with other Hexabyte products

Do not claim these integrations are live unless verified in code and a working environment.

## Honest beta language

Use this disclosure:

> Currently in beta testing. Store-building, catalogue, checkout, and merchant-operation workflows are being refined for Bangladesh-based businesses before wider availability.

## Product workflow visual

Create a branded SVG or component using this flow:

`Describe the business → AI drafts the store → Merchant customizes → Publish → Receive orders → Payment/COD → Courier fulfilment → Growth analytics`

Do not reuse Shopify logos, screenshots, terminology, or architecture.

## CTA options

Primary:

- `Join Beta Waitlist`
- or `Request Beta Access`

Secondary:

- `Explore the Product Vision`

Pass a source such as:

```ts
product_interest: 'easy-ecommerce'
cta_source: 'easy_ecommerce_beta'
```

---

# 7. Required homepage changes

Update the homepage to communicate the company and four-product portfolio clearly.

## Hero

Recommended badge:

> Founder-Led Technology Company

Recommended heading:

> AI-Powered Systems and Digital Products Built for Real Operations

Highlight either `Digital Products` or `Real Operations` using the primary indigo.

Recommended supporting copy:

> Hexabyte Technologies helps businesses automate work, launch scalable software, and run customer operations through practical AI, web, mobile, and workflow systems.

Primary CTA:

> Explore Products

Link to `/products`.

Secondary CTA:

> Book Strategy Call

Link to the existing Calendly URL.

## Hero proof cards

Remove or replace unverified outcome claims such as:

- 70%
- 99.9%
- 20x

unless the repository contains auditable evidence that can be linked internally.

Use verifiable company signals instead:

- `1` — Live product
- `3` — Products in beta
- `4` — Phase delivery framework
- `Direct` — Founder access

Alternative wording is allowed, but do not invent performance metrics.

## Solutions section

Use four business-focused categories:

1. **Operational Automation**
   - workflow design, orchestration, approvals, reporting, integrations

2. **AI Customer & Knowledge Systems**
   - AI assistants, RAG, document intelligence, customer operations

3. **Web, Commerce & SaaS Platforms**
   - e-commerce, dashboards, SaaS, internal systems

4. **Mobile & Field Operations**
   - Flutter apps, offline-first workflows, real-time operational tools

## Products section

Show four product cards in a responsive two-column or four-card grid.

### Easy Moderator card

**Title:** Easy Moderator  
**Status:** Live & Available  
**Description:**

> AI-powered social-commerce operations for Facebook, Instagram, and WhatsApp merchants—bringing customer conversations, product knowledge, orders, courier workflows, and human handoff into one platform.

CTA:

- `View Product`
- `Visit Easy Moderator`

Add a small line:

> A product operated by Hexabyte Technologies.

### TradeFlow card

**Status:** Beta Access  
**Description:**

> Mobile-first supply-chain operations for garment buying houses, with faster order updates, risk visibility, communication workflows, and auditable activity.

### Easy Assistance card

Use the approved short description and `Beta Testing` status.

### Easy E-commerce card

Use the approved short description and `Beta Testing` status.

## Product ecosystem section

Add a short section after the product cards.

Heading:

> Focused Products. One Operational Direction.

Copy:

> Each Hexabyte product solves a specific operational problem. Easy E-commerce is designed to help merchants launch and run branded stores. Easy Moderator handles social-commerce conversations and order operations. Easy Assistance coordinates bookings and service customers. TradeFlow brings structure to supply-chain updates and risk visibility. Each product can stand alone, with deeper interoperability introduced only where it creates real operational value.

Do not state that all products are already integrated.

## Why Hexabyte section

Keep the strongest existing ideas:

- Direct founder access
- Fast, decisive execution
- Product-minded engineering
- Full accountability
- Practical AI
- Architecture and operations ownership

## Results/testimonials section

Audit all testimonials and quantified claims.

If there is no verifiable evidence:

- remove fake or anonymous testimonial-style copy, or
- replace it with `What We Measure` cards:
  - reliability
  - processing time
  - adoption
  - operational throughput
  - error rates
  - customer response time

Do not present invented customer quotations.

---

# 8. Required Products page changes

The `/products` page must become the authoritative product portfolio.

## Hero

Eyebrow:

> Products Built by Hexabyte

Heading:

> Software Products Built Around Real Operational Problems

Supporting copy:

> We build and operate focused software products for commerce, service businesses, and supply-chain teams. One product is publicly available, while three are being validated through beta programmes.

## Product order

Use:

1. Easy Moderator
2. Easy E-commerce
3. Easy Assistance
4. TradeFlow

This order tells the strongest commerce ecosystem story while keeping the live product first.

## Each product section must include

- name
- status
- audience
- one-sentence promise
- concise description
- six capability cards or a compact capability grid
- workflow/system visual
- beta disclosure when applicable
- primary CTA
- secondary CTA
- operator statement
- no unsupported metrics

## Easy Moderator legal links

In the Easy Moderator section, add a compact `Legal & Data` area linking to:

- Privacy Policy: `https://easymod.tech/privacy-policy`
- Terms: `https://easymod.tech/terms`
- Data deletion instructions: `https://easymod.tech/api/webhooks/meta/data-deletion`

Use normal external-link behavior and accessible labels.

Add:

> Easy Moderator is a product operated by Hexabyte Technologies.

## Product anchors

At minimum support:

- `/products#easy-moderator`
- `/products#easy-ecommerce`
- `/products#easy-assistance`
- `/products#tradeflow`

Use `scroll-margin-top` so fixed navigation does not cover anchored headings.

Dedicated product routes may be added only if they can be implemented cleanly without duplicating data. Prefer a shared product data source.

---

# 9. Remove Shopify-related website content

Perform a repository-wide audit.

Remove or replace all public-facing references to:

- Shopify Automation
- Shopify multi-channel automation
- Shopify case study
- Amazon/eBay sync claims tied to that case study
- Shopify logos or visuals
- Shopify-specific lead magnets
- links to `/case-studies/shopify-automation`
- Shopify-specific SEO metadata
- Shopify-specific CTA targets

Likely files include, but are not limited to:

- `src/pages/CaseStudiesPage.tsx`
- `src/pages/CaseStudyDetail.tsx`
- `src/pages/ResourcesPage.tsx`
- `src/pages/AIAutomationPage.tsx`
- `src/App.tsx`
- case-study SVG assets
- tests and snapshots
- sitemap or route maps
- Open Graph and metadata helpers

## Backward-compatible redirect

Do not leave old indexed links broken.

Redirect:

`/case-studies/shopify-automation`

to:

`/case-studies/easy-ecommerce`

Use React Router's `Navigate` or the project's established redirect mechanism.

## Asset cleanup

Delete unused Shopify visual assets after references are removed.

Do not delete the separate historical GitHub repository unless explicitly instructed. This task removes Shopify from the public Hexabyte website, not necessarily from source-control history.

---

# 10. Add two honest product-build entries to Work / Case Studies

The Work page can include deployed client systems and Hexabyte product builds. Label beta products clearly.

## Easy Assistance work entry

- ID: `easy-assistance`
- Category: `Product Build`
- Title: `Easy Assistance — AI Booking and Customer Operations`
- Industry: `Service Operations`
- Timeline: `Ongoing`
- Status/impact label: `Beta validation underway`
- Evidence confidence: `Product beta — outcome metrics pending`
- Tags:
  - `Conversational AI`
  - `Booking Workflows`
  - `Customer Operations`

### Overview

> Easy Assistance is being developed as a conversational booking and customer-operations platform for service businesses. The product is designed to move an enquiry from initial intent through availability, confirmation, reminders, service completion, and follow-up without forcing teams to manage disconnected tools.

### Problem points

- enquiries are handled manually across calls and messages
- availability is difficult to coordinate across staff
- confirmations, reminders, and rescheduling require repetitive work
- customer context is lost between conversations and appointments

### Solution approach

- conversational intent and information collection
- service/staff/availability model
- booking state machine
- reminder and follow-up automation
- customer history and human handoff
- operational schedule and status visibility

### Honest beta metrics

Use non-quantitative product-state cards:

- Status: `Private Beta`
- Experience: `Conversational`
- Workflow: `End-to-End Booking`
- Evidence: `Validation Underway`

Do not invent conversion or no-show reductions.

## Easy E-commerce work entry

- ID: `easy-ecommerce`
- Category: `Product Build`
- Title: `Easy E-commerce — AI Store and Commerce Builder`
- Industry: `Bangladesh E-commerce`
- Timeline: `Ongoing`
- Status/impact label: `Beta validation underway`
- Evidence confidence: `Product beta — outcome metrics pending`
- Tags:
  - `AI Store Builder`
  - `Commerce Operations`
  - `Bangladesh-First`

### Overview

> Easy E-commerce is being built as an AI-guided website and commerce operations platform for Bangladesh-based merchants. The product direction combines store creation, catalogue management, local checkout, courier workflows, and merchant operations in one mobile-friendly system.

### Problem points

- merchants need several disconnected tools to launch and run a store
- website setup and product content create a high starting barrier
- local payment, COD, and courier operations require manual coordination
- orders and customer information become fragmented

### Solution approach

- AI-guided onboarding and store structure
- visual page and landing-page builder
- catalogue and inventory management
- Bangladesh-first checkout and delivery rules
- courier and order workflows
- AI content, SEO, and operational assistance
- future Easy Moderator interoperability where verified

### Honest beta metrics

- Status: `Private Beta`
- Setup: `AI Guided`
- Market: `Bangladesh-First`
- Evidence: `Validation Underway`

Do not invent merchant counts, revenue, uptime, or conversion claims.

## Product-build visuals

Create original branded architecture/workflow SVGs matching the website design system.

Do not use:

- fake production screenshots
- third-party logos unless legally and contextually necessary
- Shopify visual elements
- copied marketplace imagery

---

# 11. Replace Shopify resource content

In `/resources`, remove the `5 Shopify Automations Guide`.

Replace it with:

## AI Commerce Launch Checklist

**Description:**

> A practical checklist for preparing product data, store structure, checkout, COD controls, payments, courier setup, customer messaging, analytics, and launch readiness for a modern Bangladesh-focused online store.

Metadata:

- Type: `Checklist`
- CTA: `Get the Checklist`
- Suggested ID: `ai-commerce-launch`
- Modal/source ID: `leadmagnet_ai_commerce_launch`

Do not display fake download counts.

Audit all other resource download counts. Remove or replace them unless analytics evidence exists.

If the site promises a downloadable asset, ensure the asset or delivery mechanism actually exists. Otherwise use:

- `Request the Checklist`
- or `Join the Resource List`

Do not create a dead download button.

---

# 12. Company Information page for business credibility

Create a public route:

`/company-information`

Add it to the footer under `Company` or `Legal`.

## Recommended page content

Eyebrow:

> Company Information

Heading:

> Hexabyte Technologies

Opening copy:

> Hexabyte Technologies is a founder-led information technology business based in Dhaka, Bangladesh. We build practical AI systems, operational automation, web and mobile applications, and focused software products for commerce, service, and supply-chain operations.

### Registered business details

Display:

- Legal name: Hexabyte Technologies
- Public brand: Hexabyte
- Business structure: Sole proprietorship
- Business activity: Information technology, software products, and engineering services
- Registered address: Plot-107, North Tower, 8th Floor, Sector-7, Uttara, Dhaka-1230, Bangladesh
- Email: contact@hexabyte.tech
- Phone: +880 1886-895874
- Website: https://hexabyte.tech
- Founder: Evan Ahmed

### Product operator section

Heading:

> Products Operated by Hexabyte Technologies

List:

- Easy Moderator — Live & Available
- Easy E-commerce — Beta Testing
- Easy Assistance — Beta Testing
- TradeFlow — Beta Access

Add:

> Product availability and feature scope may change during beta testing. Public product pages identify the current release status.

### Verification note

Use a restrained statement:

> Business information is published to help customers, partners, and platform reviewers confirm the operator behind Hexabyte products and services.

Do not display the trade-licence scan or personal identity details.

---

# 13. Footer changes

Ensure the footer displays the exact legal details:

- Hexabyte Technologies
- `contact@hexabyte.tech`
- `+880 1886-895874`
- Plot-107, North Tower, 8th Floor, Sector-7, Uttara, Dhaka-1230, Bangladesh

Add links:

- Company Information
- Products
- Work
- Process
- Resources
- Easy Moderator Privacy
- Easy Moderator Terms
- Easy Moderator Data Deletion

Use clear external-link indicators for links that leave `hexabyte.tech`.

Update the copyright to:

> © {year} Hexabyte Technologies. All rights reserved.

---

# 14. Structured data and SEO

Update route SEO, metadata, canonical URLs, Open Graph tags, and structured data.

## Organization JSON-LD

Use a structure similar to:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Hexabyte Technologies",
  "alternateName": "Hexabyte",
  "legalName": "Hexabyte Technologies",
  "url": "https://hexabyte.tech",
  "logo": "https://hexabyte.tech/hexabyte-logo.png",
  "email": "contact@hexabyte.tech",
  "telephone": "+8801886895874",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot-107, North Tower, 8th Floor, Sector-7",
    "addressLocality": "Uttara",
    "addressRegion": "Dhaka",
    "postalCode": "1230",
    "addressCountry": "BD"
  },
  "founder": {
    "@type": "Person",
    "name": "Evan Ahmed"
  },
  "sameAs": [
    "https://www.facebook.com/hexabytetechnologies/",
    "https://www.linkedin.com/in/mr3826",
    "https://github.com/mr3826"
  ]
}
```

Do not include private personal data.

## Homepage SEO

Suggested title:

> Hexabyte Technologies | AI Systems, Automation and Digital Products

Suggested description:

> Hexabyte Technologies builds practical AI automation, web and mobile systems, and focused software products including Easy Moderator, Easy Assistance, Easy E-commerce, and TradeFlow.

## Products SEO

Suggested title:

> Software Products | Easy Moderator, Easy E-commerce, Easy Assistance and TradeFlow

Suggested description:

> Explore software products built by Hexabyte Technologies for social commerce, online stores, bookings, customer operations, and supply-chain teams.

## New work-entry SEO

Add route metadata for:

- `/case-studies/easy-assistance`
- `/case-studies/easy-ecommerce`

Remove Shopify case-study metadata.

## Model/tool naming

Avoid quickly outdated model-version claims in general marketing copy. Prefer vendor or capability names such as:

- OpenAI
- Anthropic
- LLM APIs
- vector databases
- retrieval systems

Only name a specific model version when the version is necessary and verified.

---

# 15. Minimal EasyModerator public legal-copy alignment

This website project supports Meta Business Verification for Easy Moderator, so inspect the related EasyModerator repositories.

At minimum:

1. Find public privacy-policy and terms components.
2. Replace incorrect operator references such as `Hexabyte Limited`.
3. Use:
   - `Hexabyte Technologies`
   - registered address from this prompt
   - a monitored public contact email
4. Preserve the existing technical permission and data-processing explanations.
5. Do not weaken or remove Meta-specific disclosure text.
6. Build and test the EasyModerator public frontend after changes.

Expected public URLs:

- `https://easymod.tech/privacy-policy`
- `https://easymod.tech/terms`
- `https://easymod.tech/api/webhooks/meta/data-deletion`

Add or retain the statement:

> Easy Moderator is operated by Hexabyte Technologies.

Do not alter Meta webhook behavior, permissions, authentication, deletion logic, or production secrets in this content-focused task.

If the legal pages are not in the frontend repository, identify the correct repository before editing.

---

# 16. Facebook Page alignment documentation

The coding agent cannot directly change the Facebook Page unless explicitly authenticated and authorized. Create:

`docs/FACEBOOK_PAGE_ALIGNMENT.md`

Include this manual update checklist.

## Page name

> Hexabyte Technologies

## Suggested categories

- Software Company
- Information Technology Company

Use the closest options Meta currently provides.

## Suggested About copy

> Hexabyte Technologies is a founder-led software company in Dhaka building practical AI systems, operational automation, web and mobile products, and focused SaaS products for commerce, bookings, customer operations, and supply-chain teams.

## Suggested short description

> Practical AI systems, automation, and digital products built for real operations.

## Contact details

- Website: `https://hexabyte.tech`
- Email: `contact@hexabyte.tech`
- Phone: `+880 1886-895874`
- Address: Plot-107, North Tower, 8th Floor, Sector-7, Uttara, Dhaka-1230, Bangladesh

## Products to list or feature

- Easy Moderator — Live & Available
- Easy E-commerce — Beta Testing
- Easy Assistance — Beta Testing
- TradeFlow — Beta Access

Add a warning in the document:

> The Facebook Page, Meta Business Portfolio, website, and trade-licence document must use the same legal name, address, phone, and website before business-verification submission.

---

# 17. Content accuracy rules

## Never invent

- customer counts
- revenue
- conversion improvements
- automation percentages
- response-time reductions
- uptime
- app-store counts
- download counts
- testimonials
- partner relationships
- released integrations
- audited metrics

## Beta wording

For planned final capabilities, use:

- `designed to`
- `being developed to`
- `product direction includes`
- `currently in beta testing`
- `selected workflows are being validated`
- `availability may change during beta`

Avoid:

- `fully automated`
- `battle-tested`
- `used by hundreds`
- `production-proven`
- `guaranteed`
- `all-in-one` when key modules are not implemented

## Capability-state handling

If the correct product repo provides reliable feature-state data, optionally label capabilities:

- Available in beta
- In validation
- Planned for wider release

Do not expose internal roadmap dates unless approved.

---

# 18. Technical implementation plan

## Phase 1 — Audit

1. Pull the latest default branches.
2. Create a working branch:
   - `feat/portfolio-products-legal-alignment`
3. Identify package manager from lock files.
4. Run baseline install, typecheck, tests, and build.
5. Record existing failures before editing.
6. Search for:
   - Shopify
   - Hexabyte Limited
   - Hexabyte Ltd
   - unverified metrics
   - old product count
   - old route IDs
   - stale model names
   - broken resource downloads
7. Inspect correct product repositories for real capabilities and screenshots.
8. Document any conflict between current beta behavior and final vision.

## Phase 2 — Content/data refactor

1. Create a typed product data source, for example:
   - `src/data/products.ts`
2. Create typed work/case-study data if practical:
   - `src/data/caseStudies.ts`
3. Reuse product data across homepage and Products page.
4. Do not duplicate long product descriptions in multiple files without a clear reason.
5. Add shared status badge component if one does not exist.

## Phase 3 — Legal alignment

1. Add `/company-information`.
2. Update footer.
3. Update JSON-LD.
4. Correct legal name.
5. Add Easy Moderator legal links.
6. Update minimal EasyModerator public legal copy in the correct repo.

## Phase 4 — Product portfolio

1. Add Easy Assistance.
2. Add Easy E-commerce.
3. Update product counts and statuses.
4. Create workflow visuals.
5. Add beta CTAs and source tracking.
6. Add product ecosystem section.

## Phase 5 — Shopify removal

1. Remove cards and copy.
2. Remove case data.
3. remove metadata.
4. Replace resource.
5. update CTA links.
6. delete unused assets.
7. add redirect.

## Phase 6 — Work entries and SEO

1. Add both beta product-build entries.
2. Add route metadata.
3. ensure canonical URLs.
4. update Open Graph data.
5. update sitemap if present.

## Phase 7 — QA

1. Typecheck.
2. Unit tests.
3. Build.
4. Browser tests.
5. Responsive inspection.
6. Link check.
7. accessibility check.
8. content search validation.
9. screenshot evidence.

---

# 19. Files likely to change

Inspect before editing; do not assume paths without verification.

Likely in `mr3826/hexabyte-portfolio`:

- `src/App.tsx`
- `src/pages/HomePage.tsx`
- `src/pages/ProductsPage.tsx`
- `src/pages/CaseStudiesPage.tsx`
- `src/pages/CaseStudyDetail.tsx`
- `src/pages/ResourcesPage.tsx`
- `src/pages/AIAutomationPage.tsx`
- `src/pages/AboutPage.tsx`
- `src/components/Footer.tsx`
- `src/components/Navigation.tsx`
- `src/styles/theme.css`
- `src/styles/fonts.css`
- `src/assets/*`
- route tests and component tests
- SEO helpers
- analytics helpers
- sitemap/robots files
- `docs/*`

Potential new files:

- `src/pages/CompanyInformationPage.tsx`
- `src/data/products.ts`
- `src/data/caseStudies.ts`
- `src/components/ProductStatusBadge.tsx`
- `src/assets/case-easy-assistance.svg`
- `src/assets/case-easy-ecommerce.svg`
- `docs/FACEBOOK_PAGE_ALIGNMENT.md`
- `docs/PORTFOLIO_CONTENT_CHANGELOG.md`

Do not force this exact structure if the repository already has a better pattern.

---

# 20. Responsive and accessibility requirements

Verify at minimum:

- 360 × 800
- 390 × 844
- 768 × 1024
- 1280 × 800
- 1440 × 900

Requirements:

- no horizontal overflow
- anchored product sections are not hidden under fixed nav
- status labels wrap cleanly
- product grids remain readable
- CTAs have at least 44px touch targets
- keyboard navigation works
- visible focus states
- correct heading order
- meaningful alt text
- decorative SVGs hidden from assistive technology
- external links announce their purpose
- adequate contrast
- reduced-motion preference respected

---

# 21. Verification commands

Use the repository's actual package manager and scripts.

Typical commands may include:

```bash
npm install
npm run typecheck
npm test -- --run
npm run build
```

or the corresponding `pnpm`/`yarn` commands.

Run a final text audit similar to:

```bash
grep -RInE "Shopify|Hexabyte Limited|Hexabyte Ltd" src public docs
```

Expected result:

- no public-facing Shopify content
- no incorrect legal entity name
- an intentional historical mention may remain only in an explicitly archived changelog, never in live page copy or metadata

Check links:

- `/`
- `/products`
- `/products#easy-moderator`
- `/products#easy-ecommerce`
- `/products#easy-assistance`
- `/products#tradeflow`
- `/case-studies`
- `/case-studies/easy-ecommerce`
- `/case-studies/easy-assistance`
- `/company-information`
- old Shopify route redirect
- external Easy Moderator legal links

---

# 22. Acceptance criteria

The task is complete only when all criteria pass.

## Portfolio

- [ ] Homepage shows four products with correct statuses.
- [ ] Products page contains detailed sections for all four products.
- [ ] Easy Assistance content reflects the final booking-platform vision.
- [ ] Easy E-commerce content reflects the final Bangladesh-first store-builder vision.
- [ ] Both new products are clearly marked Beta Testing.
- [ ] No unfinished prototype UI is presented as final product proof.

## Shopify removal

- [ ] Shopify case card removed.
- [ ] Shopify case detail removed.
- [ ] Shopify SEO removed.
- [ ] Shopify resource replaced.
- [ ] old Shopify route redirects.
- [ ] unused Shopify assets removed.
- [ ] no public-facing Shopify copy remains.

## Legal consistency

- [ ] Legal name is Hexabyte Technologies.
- [ ] No public `Hexabyte Limited` or `Hexabyte Ltd` remains.
- [ ] Company Information page exists.
- [ ] Footer matches registered details.
- [ ] JSON-LD includes legal name and address.
- [ ] Easy Moderator is identified as operated by Hexabyte Technologies.
- [ ] Easy Moderator legal links are accessible.
- [ ] EasyModerator privacy/terms operator name corrected in the correct repository.

## Accuracy

- [ ] no invented metrics
- [ ] no fake testimonials
- [ ] no fake integrations
- [ ] no fake customer counts
- [ ] beta language is honest
- [ ] product roadmap claims are clearly presented as product direction

## Engineering quality

- [ ] typecheck passes
- [ ] tests pass
- [ ] production build passes
- [ ] no console errors
- [ ] no broken links
- [ ] responsive QA passes
- [ ] accessibility basics pass
- [ ] deployment workflow remains intact

---

# 23. Delivery format

At completion, provide:

1. Summary of changes by repository.
2. List of files changed.
3. Screenshots of:
   - homepage desktop/mobile
   - products page desktop/mobile
   - Easy Assistance section
   - Easy E-commerce section
   - Company Information page
   - Work page
4. Test/build results.
5. Remaining assumptions.
6. Any feature claims that could not be verified.
7. Manual Facebook Page actions from `docs/FACEBOOK_PAGE_ALIGNMENT.md`.
8. Pull request link or commit hashes.

Create:

`docs/PORTFOLIO_CONTENT_CHANGELOG.md`

It must record:

- removed Shopify content
- new product content
- legal-name corrections
- SEO changes
- unverified metrics removed
- EasyModerator legal-copy changes
- manual Facebook Page alignment steps

---

# 24. Git and deployment safety

- Work on a feature branch.
- Do not push directly to `main` until the final review is complete.
- Keep deployment configuration intact.
- Do not migrate hosting.
- Do not change secrets.
- Do not expose `.env` values.
- Do not alter Meta webhooks or permission logic.
- Keep commits understandable, for example:
  1. `refactor: centralize product and case study content`
  2. `feat: add Easy Assistance and Easy E-commerce portfolio`
  3. `fix: align Hexabyte legal identity and product operator copy`
  4. `chore: remove Shopify content and update SEO`
  5. `docs: add Facebook Page alignment and content changelog`

Open a draft PR with:

- scope summary
- before/after screenshots
- test evidence
- content assumptions
- manual actions still required

---

# Final instruction to the coding agent

Do not stop after editing visible text.

Inspect the application, implement the data and route changes cleanly, remove obsolete assets and metadata, verify all public legal details, update the relevant EasyModerator public legal copy, run the complete build/test process, inspect the rendered site at desktop and mobile widths, and deliver a reviewable pull request with screenshots and a content changelog.

The finished site should make a reviewer understand, within one minute:

1. who Hexabyte Technologies is;
2. what it builds;
3. which products it operates;
4. which products are live or in beta;
5. that Easy Moderator is operated by Hexabyte Technologies;
6. how to confirm the company's public contact information;
7. that the company uses practical AI and product-minded engineering without unsupported hype.
