import { Package, Layers, Calendar, Store, MessageSquare, Truck, Brain, LayoutDashboard, Users, Settings, Globe, Smartphone, BarChart3, CreditCard, Box, CheckCircle, Shield, Mail } from 'lucide-react';

export type ProductStatus = 'live' | 'beta' | 'private-beta' | 'planned';

export type ProductStatusDisplay = 'Live & Available' | 'Beta Access' | 'Beta Testing' | 'In Development';

export interface ProductCapability {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  status?: 'available' | 'in-validation' | 'planned';
}

export interface ProductWorkflowStep {
  step: string;
  description: string;
}

export interface ProductCTA {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
  source: string;
}

export interface Product {
  id: string;
  name: string;
  status: ProductStatus;
  statusDisplay: ProductStatusDisplay;
  category: string;
  shortDescription: string;
  longDescription: string;
  audience: string[];
  promise: string;
  capabilities: ProductCapability[];
  workflow: ProductWorkflowStep[];
  betaDisclosure?: string;
  cta: ProductCTA[];
  operatorStatement: string;
  legalLinks?: { label: string; href: string }[];
  icon: React.ComponentType<{ className?: string }>;
  color: 'primary' | 'accent' | 'success' | 'warning';
  anchor: string;
}

export const PRODUCT_STATUS_DISPLAY: Record<ProductStatus, ProductStatusDisplay> = {
  live: 'Live & Available',
  beta: 'Beta Access',
  'private-beta': 'Beta Testing',
  planned: 'In Development',
};

export const products: Product[] = [
  {
    id: 'easy-moderator',
    name: 'Easy Moderator',
    status: 'live',
    statusDisplay: 'Live & Available',
    category: 'AI-powered social-commerce operations',
    shortDescription: 'AI-powered social-commerce operations for Facebook, Instagram, and WhatsApp merchants—bringing customer conversations, product knowledge, orders, courier workflows, and human handoff into one platform.',
    longDescription: 'Easy Moderator is a production-ready, multi-tenant commerce operations platform that replaces manual Facebook, Instagram, and WhatsApp operations with AI-powered sales and support workflows. It unifies product catalogs, conversation inboxes, order management, courier integrations, knowledge bases, and analytics into a single operational workspace for Bangladeshi f-commerce merchants.',
    audience: [
      'Bangladeshi f-commerce merchants',
      'Facebook/Instagram shop operators',
      'WhatsApp Business teams',
      'Multi-channel commerce operations',
    ],
    promise: 'Turn social conversations into confirmed orders with AI-powered operations.',
    capabilities: [
      {
        title: 'Products & Catalog',
        description: 'Manual entry or AI bulk upload. Vector embeddings for AI product search. Low-stock monitoring.',
        icon: Box,
        status: 'available',
      },
      {
        title: 'Unified Inbox',
        description: 'Real-time SSE stream from FB/IG/WhatsApp. AI intent routing with confidence scoring. Human handoff (HITL).',
        icon: MessageSquare,
        status: 'available',
      },
      {
        title: 'Order Engine',
        description: 'Full COD lifecycle: draft → confirm → book courier → track. RTO Shield fraud detection.',
        icon: Package,
        status: 'available',
      },
      {
        title: 'Delivery Integrations',
        description: 'Steadfast, Pathao, RedX API connections. Real-time booking and tracking from within orders.',
        icon: Truck,
        status: 'available',
      },
      {
        title: 'Knowledge Base',
        description: 'RAG-powered AI brain. FAQs with semantic search. Branding rules. Document uploads. Knowledge gaps tracking.',
        icon: Brain,
        status: 'available',
      },
      {
        title: 'Analytics & Campaigns',
        description: 'Dashboard KPIs. Queue management. Broadcast campaigns to connected channels with delivery stats.',
        icon: LayoutDashboard,
        status: 'available',
      },
    ],
    workflow: [
      { step: 'Channel Connected', description: 'Merchant connects Facebook, Instagram, and WhatsApp accounts' },
      { step: 'Inbox Receives Messages', description: 'Real-time message ingestion via webhooks and SSE' },
      { step: 'AI Uses Knowledge + Products', description: 'RAG-powered AI answers queries and recommends products' },
      { step: 'Order Created', description: 'Conversational flow captures order details and confirms' },
      { step: 'Courier Booked', description: 'Integrated courier booking with Steadfast, Pathao, RedX' },
      { step: 'Tracking Updated', description: 'Automated tracking updates sent to customer via messaging channels' },
    ],
    cta: [
      { label: 'View Product', href: '/products#easy-moderator', variant: 'primary', source: 'easy_moderator_product' },
      { label: 'Visit Easy Moderator', href: 'https://easymod.tech', variant: 'secondary', source: 'easy_moderator_external' },
    ],
    operatorStatement: 'Easy Moderator is a product operated by Hexabyte Technologies.',
    legalLinks: [
      { label: 'Privacy Policy', href: 'https://easymod.tech/privacy-policy' },
      { label: 'Terms', href: 'https://easymod.tech/terms' },
      { label: 'Data Deletion Instructions', href: 'https://easymod.tech/api/webhooks/meta/data-deletion' },
    ],
    icon: Package,
    color: 'primary',
    anchor: 'easy-moderator',
  },
  {
    id: 'easy-ecommerce',
    name: 'Easy E-commerce',
    status: 'private-beta',
    statusDisplay: 'Beta Testing',
    category: 'AI-powered e-commerce website and store builder',
    shortDescription: 'Easy E-commerce helps merchants create, launch, and operate a branded online store without stitching together separate website, order, payment, courier, content, and customer-management tools.',
    longDescription: 'Easy E-commerce is an AI-guided website and commerce operations platform for Bangladesh-first merchants. The product combines store creation, catalog management, local checkout, courier workflows, and merchant operations in one mobile-friendly system. Currently in beta testing with selected Bangladesh-based businesses.',
    audience: [
      'Bangladesh-based merchants',
      'F-commerce businesses moving to owned stores',
      'SME retailers launching online',
      'Multi-channel sellers needing unified operations',
    ],
    promise: 'Launch and run a branded Bangladesh-first online store with AI-guided setup, local checkout, and integrated courier operations.',
    capabilities: [
      {
        title: 'AI-Guided Store Creation',
        description: 'Merchant describes the business; AI proposes store structure, categories, sections, and initial copy with guided onboarding and reusable industry templates.',
        icon: Brain,
        status: 'in-validation',
      },
      {
        title: 'Visual Website & Landing Page Builder',
        description: 'Theme selection, drag-and-drop or section-based composition for homepage, collection, product, campaign, and landing pages with mobile preview and custom branding/domain.',
        icon: LayoutDashboard,
        status: 'in-validation',
      },
      {
        title: 'Product & Catalogue Management',
        description: 'Products and variants, pricing and discounts, stock visibility, categories and collections, bulk import, AI-assisted product titles, descriptions, attributes, and SEO content.',
        icon: Box,
        status: 'in-validation',
      },
      {
        title: 'Bangladesh-First Checkout',
        description: 'Cash on delivery, bKash and Nagad integration where technically available, delivery area and charge rules, phone-first checkout, fraud and return-to-origin risk controls.',
        icon: CreditCard,
        status: 'in-validation',
      },
      {
        title: 'Order & Courier Operations',
        description: 'Order dashboard, confirmation workflow, Pathao/Steadfast/RedX integrations, courier booking and tracking, fulfilment and delivery status, cancellation and return visibility.',
        icon: Truck,
        status: 'in-validation',
      },
      {
        title: 'Customer & Marketing Operations',
        description: 'Customer profiles, order history, coupons and campaigns, abandoned/incomplete checkout follow-up, messaging and support hooks, analytics and conversion visibility.',
        icon: Users,
        status: 'planned',
      },
      {
        title: 'AI Commerce Assistance',
        description: 'Product content generation, store SEO suggestions, merchandising recommendations, customer-question assistance, operational summaries, human approval for sensitive actions.',
        icon: Brain,
        status: 'planned',
      },
      {
        title: 'Hexabyte Ecosystem Direction',
        description: 'Connection with Easy Moderator for social messaging and assisted sales, shared product/catalogue information where implemented, future workflow interoperability.',
        icon: Settings,
        status: 'planned',
      },
    ],
    workflow: [
      { step: 'Describe the Business', description: 'Merchant describes their business, products, and target customers' },
      { step: 'AI Drafts the Store', description: 'AI proposes store structure, categories, sections, and initial copy' },
      { step: 'Merchant Customizes', description: 'Visual builder for theme, layout, branding, and content refinement' },
      { step: 'Publish', description: 'Launch on custom domain with SSL and mobile-optimized storefront' },
      { step: 'Receive Orders', description: 'Orders flow into unified dashboard with customer details' },
      { step: 'Payment/COD', description: 'Cash on delivery, bKash, Nagad, and card payments processed' },
      { step: 'Courier Fulfilment', description: 'Integrated courier booking, tracking, and delivery confirmation' },
      { step: 'Growth Analytics', description: 'Conversion, revenue, customer, and operational metrics dashboard' },
    ],
    betaDisclosure: 'Currently in beta testing. Store-building, catalogue, checkout, and merchant-operation workflows are being refined for Bangladesh-based businesses before wider availability.',
    cta: [
      { label: 'Join Beta Waitlist', href: 'https://calendly.com/hexabyte/discovery', variant: 'primary', source: 'easy_ecommerce_beta' },
      { label: 'Explore the Product Vision', href: '/products#easy-ecommerce', variant: 'secondary', source: 'easy_ecommerce_vision' },
    ],
    operatorStatement: 'Easy E-commerce is a product operated by Hexabyte Technologies.',
    icon: Store,
    color: 'success',
    anchor: 'easy-ecommerce',
  },
  {
    id: 'easy-assistance',
    name: 'Easy Assistance',
    status: 'private-beta',
    statusDisplay: 'Beta Testing',
    category: 'AI-powered booking and customer operations',
    shortDescription: 'Easy Assistance is a conversational booking platform designed to turn customer enquiries into confirmed appointments, coordinate staff and service availability, send reminders, and keep customer history in one operational workspace.',
    longDescription: 'Easy Assistance is an AI-powered booking and customer-operations platform for service businesses. It moves an enquiry from initial intent through availability, confirmation, reminders, service completion, and follow-up without forcing teams to manage disconnected tools. Currently in beta testing with selected service businesses.',
    audience: [
      'Salons and beauty businesses',
      'Consultants and professional services',
      'Repair and maintenance teams',
      'Training and coaching businesses',
      'Clinics and appointment-based service providers',
      'Multi-location service businesses',
    ],
    promise: 'Turn customer enquiries into confirmed appointments with AI-powered booking and automated customer operations.',
    capabilities: [
      {
        title: 'AI Booking Assistant',
        description: 'Understands customer booking intent, answers service questions from business knowledge, collects required booking details, recommends available slots, hands conversations to staff when confidence is low.',
        icon: Brain,
        status: 'in-validation',
      },
      {
        title: 'Services, Staff & Availability',
        description: 'Service catalogue with duration and pricing, staff assignment, business hours, breaks, blocked time, holidays, branch/location support.',
        icon: Settings,
        status: 'in-validation',
      },
      {
        title: 'Conversational Booking',
        description: 'Website booking assistant, messaging-channel enquiry capture, guided booking flow, booking confirmation, reschedule and cancellation workflows.',
        icon: MessageSquare,
        status: 'in-validation',
      },
      {
        title: 'Customer Operations',
        description: 'Customer profiles, booking history, notes and preferences, lead and follow-up status, human handoff, repeat-customer context.',
        icon: Users,
        status: 'in-validation',
      },
      {
        title: 'Automated Communication',
        description: 'Confirmation messages, reminders, reschedule notices, missed-appointment follow-up, post-service follow-up.',
        icon: Mail,
        status: 'planned',
      },
      {
        title: 'Operations & Analytics',
        description: 'Daily schedule, staff workload, booking source, completion/cancellation/no-show status, conversion and service-demand visibility.',
        icon: BarChart3,
        status: 'planned',
      },
      {
        title: 'Future-Ready Integrations',
        description: 'Calendars, payments or deposits, CRM and automation tools, Easy Moderator or other Hexabyte products where integration is real.',
        icon: Globe,
        status: 'planned',
      },
    ],
    workflow: [
      { step: 'Customer Enquiry', description: 'Customer initiates contact via website, WhatsApp, or social messaging' },
      { step: 'AI Qualification', description: 'AI understands intent, answers questions, collects required booking details' },
      { step: 'Availability Check', description: 'System checks service, staff, and location availability in real-time' },
      { step: 'Booking Confirmation', description: 'Customer confirms slot; booking created with all details' },
      { step: 'Reminder', description: 'Automated reminders sent before appointment via preferred channel' },
      { step: 'Service Completion', description: 'Staff marks service complete; notes and follow-ups captured' },
      { step: 'Follow-up', description: 'Post-service feedback, rebooking prompts, and loyalty engagement' },
    ],
    betaDisclosure: 'Currently in beta testing. Core booking workflows are being validated with selected businesses while additional automation, channel, and analytics capabilities are prepared for wider release.',
    cta: [
      { label: 'Join Beta Waitlist', href: 'https://calendly.com/hexabyte/discovery', variant: 'primary', source: 'easy_assistance_beta' },
      { label: 'Discuss a Booking Workflow', href: 'https://calendly.com/hexabyte/discovery', variant: 'secondary', source: 'easy_assistance_discuss' },
    ],
    operatorStatement: 'Easy Assistance is a product operated by Hexabyte Technologies.',
    icon: Calendar,
    color: 'accent',
    anchor: 'easy-assistance',
  },
  {
    id: 'tradeflow',
    name: 'TradeFlow',
    status: 'beta',
    statusDisplay: 'Beta Access',
    category: 'Mobile-first supply-chain operations',
    shortDescription: 'Mobile-first supply-chain operations for garment buying houses, with faster order updates, risk visibility, communication workflows, and auditable activity.',
    longDescription: 'TradeFlow is a mobile-first SaaS for garment buying houses. It brings structure to supply-chain updates with WhatsApp-native communication, AI-powered risk scoring, and full audit trails. Designed for the operational reality of Bangladesh buying house teams.',
    audience: [
      'Garment buying houses',
      'Supply chain operations teams',
      'Merchandisers and quality controllers',
      'Bangladesh export-oriented operations',
    ],
    promise: 'Bring structure, speed, and auditability to buying house order operations with mobile-first workflows and WhatsApp-native communication.',
    capabilities: [
      {
        title: 'Architecture',
        description: 'Mobile-first API designed for field operations and constrained connectivity.',
        icon: Smartphone,
        status: 'available',
      },
      {
        title: 'Updates',
        description: 'WhatsApp-native quick updates for order status, quality checkpoints, and shipment milestones.',
        icon: MessageSquare,
        status: 'available',
      },
      {
        title: 'Risk Scoring',
        description: 'AI-powered supplier and order risk signals surfaced in operational dashboards.',
        icon: Shield,
        status: 'in-validation',
      },
      {
        title: 'Audit Trail',
        description: 'Full compliance-ready activity logging for every operational action.',
        icon: CheckCircle,
        status: 'available',
      },
    ],
    workflow: [
      { step: 'Capture', description: 'Teams log fast updates from mobile-first interfaces' },
      { step: 'Score', description: 'System surfaces risk-oriented operational signals' },
      { step: 'Share', description: 'Stakeholders receive concise progress visibility' },
      { step: 'Trace', description: 'Audit logging supports accountability and review' },
    ],
    cta: [
      { label: 'Join Beta', href: 'https://calendly.com/hexabyte/discovery', variant: 'primary', source: 'tradeflow_beta' },
      { label: 'Discuss Supply Chain Workflow', href: 'https://calendly.com/hexabyte/discovery', variant: 'secondary', source: 'tradeflow_discuss' },
    ],
    operatorStatement: 'TradeFlow is a product operated by Hexabyte Technologies.',
    icon: Layers,
    color: 'warning',
    anchor: 'tradeflow',
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByStatus(status: ProductStatus): Product[] {
  return products.filter(p => p.status === status);
}

export function getLiveProducts(): Product[] {
  return products.filter(p => p.status === 'live');
}

export function getBetaProducts(): Product[] {
  return products.filter(p => p.status === 'beta' || p.status === 'private-beta');
}