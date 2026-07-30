import { Package, Layers, Calendar, Store, MessageSquare, Truck, Brain, LayoutDashboard, Users, Settings, Smartphone, BarChart3, CreditCard, Box, CheckCircle, Shield, Mail } from 'lucide-react';

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
    shortDescription: 'Run social-commerce conversations, orders, and courier workflows from one place, with staff picking up anything the assistant cannot answer.',
    longDescription: 'Easy Moderator is a production-ready, multi-tenant commerce operations platform that replaces manual Facebook, Instagram, and WhatsApp operations with AI-powered sales and support workflows. It unifies product catalogs, conversation inboxes, order management, courier integrations, knowledge bases, and analytics into a single operational workspace for Bangladeshi f-commerce merchants.',
    audience: [
      'Bangladesh-based social-commerce businesses',
      'Facebook and Instagram shop operators',
      'WhatsApp Business teams',
      'Multi-channel commerce operations',
    ],
    promise: 'Turn social conversations into confirmed orders without staff watching every inbox.',
    capabilities: [
      {
        title: 'Product catalogue',
        description: 'Add products by hand or in bulk, keep pricing and stock current, and get a warning before something runs out.',
        icon: Box,
        status: 'available',
      },
      {
        title: 'One shared inbox',
        description: 'Bring supported customer conversations into one inbox, automatically route common enquiries, and hand uncertain cases to staff.',
        icon: MessageSquare,
        status: 'available',
      },
      {
        title: 'Order handling',
        description: 'Take an order from first message to confirmed delivery, with risk checks on addresses that tend to be refused.',
        icon: Package,
        status: 'available',
      },
      {
        title: 'Courier booking',
        description: 'Book and track deliveries with connected couriers — Steadfast, Pathao, and RedX — from inside the order.',
        icon: Truck,
        status: 'available',
      },
      {
        title: 'Answers from your own information',
        description: 'Answer customer questions using approved product information, FAQs, and business documents, and see which questions you cannot yet answer.',
        icon: Brain,
        status: 'available',
      },
      {
        title: 'Reporting and campaigns',
        description: 'See daily order and response numbers, and send updates to customers on connected channels.',
        icon: LayoutDashboard,
        status: 'available',
      },
    ],
    workflow: [
      { step: 'Connect channels', description: 'Connect the supported Facebook, Instagram, and WhatsApp accounts' },
      { step: 'Messages arrive', description: 'Customer messages land in one shared inbox as they come in' },
      { step: 'Assistant replies', description: 'Common questions are answered from your product information and FAQs' },
      { step: 'Order created', description: 'The conversation captures order details and confirms them' },
      { step: 'Courier booked', description: 'Delivery is booked with a connected courier' },
      { step: 'Customer updated', description: 'Tracking updates go back to the customer on the same channel' },
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
    shortDescription: 'Launch and run a branded online store without stitching together separate website, order, courier, and customer tools.',
    longDescription: 'Easy E-commerce is an AI-guided website and commerce operations platform for Bangladesh-first merchants. The product combines store creation, catalog management, local checkout, courier workflows, and merchant operations in one mobile-friendly system. Currently in beta testing with selected Bangladesh-based businesses.',
    audience: [
      'Bangladesh-based merchants',
      'F-commerce businesses moving to owned stores',
      'SME retailers launching online',
      'Multi-channel sellers needing unified operations',
    ],
    promise: 'Launch a branded online store built for how Bangladeshi customers actually order and pay.',
    capabilities: [
      {
        title: 'Guided store setup',
        description: 'Describe the business and get a first draft of the store — structure, categories, sections, and starting copy — then adjust it.',
        icon: Brain,
        status: 'in-validation',
      },
      {
        title: 'Page and storefront builder',
        description: 'Choose a theme and compose home, collection, product, and campaign pages with a mobile preview, your own branding, and your own domain.',
        icon: LayoutDashboard,
        status: 'in-validation',
      },
      {
        title: 'Products and pricing',
        description: 'Variants, pricing and discounts, stock visibility, collections, bulk import, and drafted product titles and descriptions you approve.',
        icon: Box,
        status: 'in-validation',
      },
      {
        title: 'Cash-on-delivery checkout',
        description: 'Phone-first checkout with cash on delivery, delivery-area charge rules, and controls for orders likely to be refused. Mobile wallet and card payments are planned, not yet enabled.',
        icon: CreditCard,
        status: 'in-validation',
      },
      {
        title: 'Orders and delivery',
        description: 'Order dashboard, confirmation workflow, and courier booking and tracking. Pathao, Steadfast, and RedX connections are being validated in beta.',
        icon: Truck,
        status: 'in-validation',
      },
      {
        title: 'Customers, marketing and assistance',
        description: 'Customer profiles and order history, coupons and campaigns, incomplete-checkout follow-up, and AI help with product content and customer questions.',
        icon: Users,
        status: 'planned',
      },
    ],
    workflow: [
      { step: 'Describe the business', description: 'Tell the system what you sell and who buys it' },
      { step: 'Review the draft store', description: 'A first store structure, categories, and copy are proposed for you to edit' },
      { step: 'Customise', description: 'Adjust theme, layout, branding, and content in the builder' },
      { step: 'Publish', description: 'Go live on your own domain with a mobile-first storefront' },
      { step: 'Receive orders', description: 'Orders arrive in one dashboard with customer details' },
      { step: 'Confirm payment', description: 'Cash on delivery today; mobile wallet and card options are planned' },
      { step: 'Book delivery', description: 'Courier booking and tracking from the order' },
      { step: 'Review performance', description: 'Sales, customer, and operational figures in one place' },
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
    shortDescription: 'Turn customer enquiries into confirmed appointments, coordinate staff availability, and keep booking history in one workspace.',
    longDescription: 'Easy Assistance is an AI-powered booking and customer-operations platform for service businesses. It moves an enquiry from initial intent through availability, confirmation, reminders, service completion, and follow-up without forcing teams to manage disconnected tools. Currently in beta testing with selected service businesses.',
    audience: [
      'Salons and beauty businesses',
      'Clinics and appointment-based providers',
      'Consultants and professional services',
      'Repair, maintenance and coaching teams',
    ],
    promise: 'Turn enquiries into confirmed appointments without someone chasing every message.',
    capabilities: [
      {
        title: 'Booking assistant',
        description: 'Answers service questions from your own information, collects what a booking needs, suggests open slots, and passes the conversation to staff when it is unsure.',
        icon: Brain,
        status: 'in-validation',
      },
      {
        title: 'Services, staff and hours',
        description: 'Service list with duration and price, staff assignment, opening hours, breaks, blocked time, holidays, and multiple locations.',
        icon: Settings,
        status: 'in-validation',
      },
      {
        title: 'Booking by conversation',
        description: 'Take enquiries from your website or messaging channels through a guided booking, confirmation, reschedule, and cancellation flow.',
        icon: MessageSquare,
        status: 'in-validation',
      },
      {
        title: 'Customer history',
        description: 'Customer profiles, past bookings, notes and preferences, follow-up status, and the context a returning customer expects you to remember.',
        icon: Users,
        status: 'in-validation',
      },
      {
        title: 'Reminders and follow-up',
        description: 'Confirmations, reminders before the appointment, reschedule notices, and follow-up after a missed or completed visit.',
        icon: Mail,
        status: 'planned',
      },
      {
        title: 'Reporting and integrations',
        description: 'Daily schedule, staff workload, where bookings came from, no-show rates, plus calendar, deposit, and CRM connections.',
        icon: BarChart3,
        status: 'planned',
      },
    ],
    workflow: [
      { step: 'Enquiry arrives', description: 'A customer gets in touch from your website or a messaging channel' },
      { step: 'Assistant qualifies', description: 'Service questions answered and booking details collected' },
      { step: 'Availability checked', description: 'Open slots checked against service, staff, and location' },
      { step: 'Booking confirmed', description: 'The customer picks a slot and the booking is created' },
      { step: 'Reminder sent', description: 'A reminder goes out before the appointment' },
      { step: 'Service completed', description: 'Staff close the booking and record notes' },
      { step: 'Follow-up', description: 'Feedback and rebooking prompts afterwards' },
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
    shortDescription: 'Give garment buying houses faster order updates, clearer risk visibility, and an auditable record of every change.',
    longDescription: 'TradeFlow is a mobile-first SaaS for garment buying houses. It brings structure to supply-chain updates with WhatsApp-native communication, AI-powered risk scoring, and full audit trails. Designed for the operational reality of Bangladesh buying house teams.',
    audience: [
      'Garment buying houses',
      'Supply chain operations teams',
      'Merchandisers and quality controllers',
      'Bangladesh export-oriented operations',
    ],
    promise: 'Replace scattered order updates with one record every team can see and trust.',
    capabilities: [
      {
        title: 'Built for the factory floor',
        description: 'Works on a phone, on a weak connection, for people logging updates away from a desk.',
        icon: Smartphone,
        status: 'in-validation',
      },
      {
        title: 'Updates where teams already talk',
        description: 'Log order status, quality checkpoints, and shipment milestones from WhatsApp instead of a separate system.',
        icon: MessageSquare,
        status: 'in-validation',
      },
      {
        title: 'Risk signals',
        description: 'Surface the suppliers and orders most likely to slip, so attention goes where it is needed.',
        icon: Shield,
        status: 'in-validation',
      },
      {
        title: 'Complete activity record',
        description: 'Every change is logged with who made it and when, so a disputed order can be reconstructed.',
        icon: CheckCircle,
        status: 'in-validation',
      },
    ],
    workflow: [
      { step: 'Capture', description: 'Teams log updates from a phone' },
      { step: 'Score', description: 'Orders and suppliers at risk are flagged' },
      { step: 'Share', description: 'Stakeholders see current progress without asking' },
      { step: 'Trace', description: 'Every change stays on the record' },
    ],
    betaDisclosure: 'Currently in beta access. Capture, communication, and audit workflows are in use with selected buying houses while risk scoring and reporting are still being validated.',
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