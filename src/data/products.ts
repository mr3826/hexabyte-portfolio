import { Package, Layers, Calendar, Store, MessageSquare, Truck, Brain, LayoutDashboard, Users, Settings, Smartphone, BarChart3, CreditCard, Box, CheckCircle, Shield, Mail } from 'lucide-react';

export interface ProductCapability {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface ProductWorkflowStep {
  step: string;
  description: string;
}

/** What changes for the business once the product is running. */
export interface ProductOutcome {
  label: string;
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
  category: string;
  shortDescription: string;
  longDescription: string;
  audience: string[];
  promise: string;
  /** The cost of the current way of working — what the day looks like without this. */
  painPoints: string[];
  outcomes: ProductOutcome[];
  capabilities: ProductCapability[];
  workflow: ProductWorkflowStep[];
  cta: ProductCTA[];
  operatorStatement: string;
  legalLinks?: { label: string; href: string }[];
  icon: React.ComponentType<{ className?: string }>;
  color: 'primary' | 'accent' | 'success' | 'warning';
  anchor: string;
}

/**
 * How a business starts using a product. Deliberately commercial rather than technical:
 * scope is agreed in conversation, so the site never has to publish a release state.
 */
export const productAccessNote =
  'Onboarding runs directly with us. Tell us how your operation works today and we will show you exactly where this fits — and where it does not.';

export const products: Product[] = [
  {
    id: 'easy-moderator',
    name: 'Easy Moderator',
    category: 'Social-commerce operations',
    shortDescription: 'Answer every customer message and capture every order from one place, so sales stop depending on who is watching which inbox.',
    longDescription: 'Easy Moderator runs the whole distance between a customer message and a delivered parcel for businesses that sell through Facebook, Instagram and WhatsApp. Conversations, product information, orders, courier bookings and daily numbers live in one workspace, with your team stepping in only where judgement is actually needed.',
    audience: [
      'Social-commerce businesses',
      'Facebook and Instagram shops',
      'WhatsApp Business teams',
      'Multi-channel commerce operations',
    ],
    promise: 'Every message answered and every order captured — without staff watching three inboxes.',
    painPoints: [
      'Orders arrive as messages across three inboxes, so someone has to be awake and watching to catch them.',
      'The same questions about price, stock and delivery get typed out by hand, hundreds of times a week.',
      'A confirmed order gets re-entered into a courier panel, then chased again when the customer asks where the parcel is.',
      'Refused deliveries only become visible once the courier has already charged for the return trip.',
    ],
    outcomes: [
      {
        label: 'Nothing goes unanswered',
        description: 'Routine questions get a reply immediately, at any hour. Anything uncertain reaches your team with the full conversation attached, so nobody starts from scratch.',
      },
      {
        label: 'Staff cost stops tracking message volume',
        description: 'Double the messages no longer means double the people. Your team spends its hours on the conversations that actually decide a sale.',
      },
      {
        label: 'One order record instead of four',
        description: 'The conversation, the order, the courier booking and the delivery status are the same record — so status questions get answered without anyone checking a second system.',
      },
      {
        label: 'Fewer parcels paid for twice',
        description: 'Risky addresses and repeat refusals are flagged before dispatch, where the decision is still cheap to make.',
      },
    ],
    capabilities: [
      {
        title: 'Your catalogue, always current',
        description: 'Add products by hand or in bulk, keep pricing and stock accurate, and get warned before something sells out mid-conversation.',
        icon: Box,
      },
      {
        title: 'One inbox for every channel',
        description: 'Customer conversations arrive in a single place, common enquiries are handled automatically, and anything uncertain is handed to a person.',
        icon: MessageSquare,
      },
      {
        title: 'Order to doorstep',
        description: 'Take an order from first message to confirmed delivery, with checks on the addresses and behaviour patterns that usually end in a refusal.',
        icon: Package,
      },
      {
        title: 'Delivery without the second screen',
        description: 'Book couriers and follow tracking from inside the order, so nobody retypes an address into someone else\'s panel.',
        icon: Truck,
      },
      {
        title: 'Answers from your own information',
        description: 'Replies are drawn from your approved product details, FAQs and policies — and you can see which questions you cannot answer yet.',
        icon: Brain,
      },
      {
        title: 'Numbers you can act on',
        description: 'Orders, response times and channel performance for the day, plus updates you can send back out to customers.',
        icon: LayoutDashboard,
      },
    ],
    workflow: [
      { step: 'Connect channels', description: 'Your selling accounts are connected once' },
      { step: 'Messages arrive', description: 'Every conversation lands in one shared inbox' },
      { step: 'Questions answered', description: 'Routine enquiries are handled from your own product information' },
      { step: 'Order captured', description: 'Details are collected and confirmed inside the conversation' },
      { step: 'Delivery booked', description: 'The courier is booked without leaving the order' },
      { step: 'Customer updated', description: 'Tracking goes back on the channel the customer used' },
    ],
    cta: [
      { label: 'Talk to us about Easy Moderator', href: 'https://calendly.com/hexabyte/discovery', variant: 'primary', source: 'easy_moderator_enquiry' },
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
    category: 'Online store and commerce operations',
    shortDescription: 'Own a branded store that takes orders the way your customers actually buy — and run stock, delivery and customers from the same place.',
    longDescription: 'Easy E-commerce gives a business its own storefront without assembling a website project, a payment setup, a courier account and a spreadsheet first. The store, the catalogue, checkout, delivery and customer history are one system, built around how buying works locally rather than how it works in a template.',
    audience: [
      'Retailers moving from social selling to their own store',
      'SMEs launching online',
      'Multi-channel sellers',
      'Businesses outgrowing marketplace listings',
    ],
    promise: 'A store of your own, live in days, running on the payment and delivery habits your customers already have.',
    painPoints: [
      'Getting online means a developer, a designer, a theme licence and three monthly subscriptions before the first sale.',
      'Product titles, descriptions and photos have to be written one at a time, so half the catalogue never gets published.',
      'Orders live in DMs, stock lives in a notebook, and the two disagree by Friday.',
      'Cash-on-delivery refusals and courier charges quietly consume the margin nobody is tracking.',
    ],
    outcomes: [
      {
        label: 'Live without a development project',
        description: 'You describe the business and adjust a working store, instead of commissioning one and waiting on someone else\'s timeline.',
      },
      {
        label: 'One place that agrees with itself',
        description: 'Orders, stock, customers and delivery share a single record, so the numbers you make decisions on are the same numbers your team sees.',
      },
      {
        label: 'Checkout that does not lose the sale',
        description: 'Phone-first checkout with the payment and delivery options local buyers expect — and rules that stop the orders you would rather not ship.',
      },
      {
        label: 'The customer list is yours',
        description: 'Buyers, order history and follow-up live in your store, not inside a platform that can change its reach overnight.',
      },
    ],
    capabilities: [
      {
        title: 'A store, drafted for you',
        description: 'Describe what you sell and get a working first store — structure, categories, sections and starting copy — then make it yours.',
        icon: Brain,
      },
      {
        title: 'Pages you can change yourself',
        description: 'Compose home, collection, product and campaign pages with your own branding and domain, checked on a phone before it goes out.',
        icon: LayoutDashboard,
      },
      {
        title: 'Catalogue without the typing',
        description: 'Variants, pricing, discounts, stock and collections, with bulk import and drafted product copy you approve rather than write.',
        icon: Box,
      },
      {
        title: 'Checkout built for local buying',
        description: 'Phone-first checkout, cash on delivery, mobile wallet and card options, delivery-area charge rules, and controls for orders likely to be refused.',
        icon: CreditCard,
      },
      {
        title: 'Orders and delivery together',
        description: 'One order dashboard, a confirmation flow your team can follow, and courier booking and tracking attached to the order.',
        icon: Truck,
      },
      {
        title: 'Customers who come back',
        description: 'Customer profiles and order history, coupons and campaigns, abandoned-checkout follow-up, and help answering product questions.',
        icon: Users,
      },
    ],
    workflow: [
      { step: 'Describe the business', description: 'What you sell and who buys it' },
      { step: 'Review the draft', description: 'A working store structure and starting content is proposed' },
      { step: 'Make it yours', description: 'Theme, layout, branding and copy adjusted in the builder' },
      { step: 'Go live', description: 'Published on your own domain, mobile-first' },
      { step: 'Take orders', description: 'Orders arrive in one dashboard with customer details' },
      { step: 'Ship and follow up', description: 'Courier booked, customer updated, performance visible' },
    ],
    cta: [
      { label: 'Talk to us about Easy E-commerce', href: 'https://calendly.com/hexabyte/discovery', variant: 'primary', source: 'easy_ecommerce_enquiry' },
      { label: 'See the build', href: '/case-studies/easy-ecommerce', variant: 'secondary', source: 'easy_ecommerce_case_study' },
    ],
    operatorStatement: 'Easy E-commerce is a product operated by Hexabyte Technologies.',
    icon: Store,
    color: 'success',
    anchor: 'easy-ecommerce',
  },
  {
    id: 'easy-assistance',
    name: 'Easy Assistance',
    category: 'Bookings and customer operations',
    shortDescription: 'Turn enquiries into confirmed appointments, keep the diary honest, and stop losing repeat customers to follow-up nobody had time for.',
    longDescription: 'Easy Assistance handles the work around a booking — answering service questions, finding a slot that actually exists, confirming it, reminding the customer, and picking the conversation back up afterwards — so the people delivering the service are not also running a switchboard.',
    audience: [
      'Salons and beauty businesses',
      'Clinics and appointment-based providers',
      'Consultants and professional services',
      'Repair, maintenance and coaching teams',
    ],
    promise: 'A diary that fills itself, and customers who are reminded, followed up and asked back — without anyone chasing messages.',
    painPoints: [
      'The phone rings and the messages pile up while your team is mid-service, so enquiries go cold.',
      'Availability lives in one person\'s head, which is how double bookings and idle afternoons both happen.',
      'No-shows are absorbed as a cost of doing business because reminders are manual.',
      'Regulars stop coming back and nobody notices until the month\'s takings do.',
    ],
    outcomes: [
      {
        label: 'Enquiries stop going cold',
        description: 'Service questions get answered and a slot gets offered while the customer is still interested, including outside opening hours.',
      },
      {
        label: 'The diary reflects reality',
        description: 'Staff, service duration, breaks and locations are all considered before a slot is offered, so the schedule holds together.',
      },
      {
        label: 'Fewer empty chairs',
        description: 'Confirmations and reminders go out on their own, and a missed appointment triggers a follow-up instead of a shrug.',
      },
      {
        label: 'Returning customers feel known',
        description: 'History, preferences and past notes are there when they get back in touch — the reason they book with you and not the shop next door.',
      },
    ],
    capabilities: [
      {
        title: 'Answers and bookings in one conversation',
        description: 'Service questions answered from your own information, booking details collected, and a handover to staff the moment judgement is needed.',
        icon: Brain,
      },
      {
        title: 'Services, staff and hours',
        description: 'Duration and price per service, staff assignment, opening hours, breaks, blocked time, holidays and multiple locations.',
        icon: Settings,
      },
      {
        title: 'Booked from wherever they found you',
        description: 'Website or messaging channel, through a guided booking, reschedule and cancellation flow the customer can follow alone.',
        icon: MessageSquare,
      },
      {
        title: 'Customer history that stays',
        description: 'Profiles, past bookings, notes and preferences — the context a returning customer expects you to remember.',
        icon: Users,
      },
      {
        title: 'Reminders and follow-up',
        description: 'Confirmations, reminders before the appointment, reschedule notices, and a follow-up after a completed or missed visit.',
        icon: Mail,
      },
      {
        title: 'A view of the operation',
        description: 'Today\'s schedule, staff workload, where bookings come from, and no-show patterns worth acting on.',
        icon: BarChart3,
      },
    ],
    workflow: [
      { step: 'Enquiry arrives', description: 'From your website or a messaging channel' },
      { step: 'Questions answered', description: 'Service details handled, booking needs collected' },
      { step: 'Real slot offered', description: 'Checked against service, staff and location' },
      { step: 'Booking confirmed', description: 'The customer picks a time and it is locked in' },
      { step: 'Reminder sent', description: 'Before the appointment, on their channel' },
      { step: 'Followed up', description: 'Notes recorded, feedback and rebooking prompted' },
    ],
    cta: [
      { label: 'Talk to us about Easy Assistance', href: 'https://calendly.com/hexabyte/discovery', variant: 'primary', source: 'easy_assistance_enquiry' },
      { label: 'See the build', href: '/case-studies/easy-assistance', variant: 'secondary', source: 'easy_assistance_case_study' },
    ],
    operatorStatement: 'Easy Assistance is a product operated by Hexabyte Technologies.',
    icon: Calendar,
    color: 'accent',
    anchor: 'easy-assistance',
  },
  {
    id: 'tradeflow',
    name: 'TradeFlow',
    category: 'Supply-chain operations',
    shortDescription: 'Give buying-house teams one order record everyone trusts, updated from the floor in seconds and defensible when an order is disputed.',
    longDescription: 'TradeFlow replaces the scattered updates a buying house runs on — message threads, phone calls and someone\'s memory — with a single record of every order, updated from a phone where the work actually happens, and kept in a form that holds up when a buyer disagrees.',
    audience: [
      'Garment buying houses',
      'Supply-chain operations teams',
      'Merchandisers and quality controllers',
      'Export-oriented operations',
    ],
    promise: 'One order record every team trusts — updated in seconds from the floor, and complete enough to settle a dispute.',
    painPoints: [
      'Order status lives in message threads, so a buyer\'s question costs three people twenty minutes.',
      'Updates are only as current as the last person who remembered to send one.',
      'When a shipment slips, the reason is reconstructed from memory and screenshots.',
      'Problems become visible at the point where they are already expensive.',
    ],
    outcomes: [
      {
        label: 'Status without the phone calls',
        description: 'Managers and buyers see where an order stands without interrupting the people producing it.',
      },
      {
        label: 'Updates that take seconds',
        description: 'Logging progress from a phone, on a weak connection, is fast enough that it actually happens.',
      },
      {
        label: 'Disputes settled from the record',
        description: 'Every change carries who made it and when, so a contested delay is a lookup rather than an argument.',
      },
      {
        label: 'Attention where it pays',
        description: 'The orders and suppliers most likely to slip surface early, while there is still time to act.',
      },
    ],
    capabilities: [
      {
        title: 'Built for where the work happens',
        description: 'Runs on a phone, on a weak connection, for people logging updates nowhere near a desk.',
        icon: Smartphone,
      },
      {
        title: 'Updates where teams already talk',
        description: 'Order status, quality checkpoints and shipment milestones logged from the messaging app in use today.',
        icon: MessageSquare,
      },
      {
        title: 'Early warning',
        description: 'The suppliers and orders most likely to slip are surfaced before they become the reason for a late shipment.',
        icon: Shield,
      },
      {
        title: 'A record that holds up',
        description: 'Every change logged with who and when, so a disputed order can be reconstructed exactly.',
        icon: CheckCircle,
      },
    ],
    workflow: [
      { step: 'Capture', description: 'Teams log updates from a phone' },
      { step: 'Flag', description: 'Orders and suppliers at risk are surfaced' },
      { step: 'Share', description: 'Stakeholders see progress without asking' },
      { step: 'Trace', description: 'Every change stays on the record' },
    ],
    cta: [
      { label: 'Talk to us about TradeFlow', href: 'https://calendly.com/hexabyte/discovery', variant: 'primary', source: 'tradeflow_enquiry' },
      { label: 'See the build', href: '/case-studies/tradeflow', variant: 'secondary', source: 'tradeflow_case_study' },
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
