/** Problem domain, used for the filters on the Work page. */
export type CaseStudyDomain = 'AI & Automation' | 'Commerce';

export const CASE_STUDY_DOMAINS: CaseStudyDomain[] = ['AI & Automation', 'Commerce'];

export interface CaseStudyTag {
  label: string;
  color: 'primary' | 'accent' | 'success' | 'warning';
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudyWorkflowStep {
  phase: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  domain: CaseStudyDomain;
  title: string;
  excerpt: string;
  industry: string;
  timeline: string;
  /** The operational result, in the language the business would use. */
  impact: string;
  tags: CaseStudyTag[];
  image: string;
  imageAlt: string;
  overview: string;
  problem: {
    title: string;
    points: string[];
  };
  solution: {
    title: string;
    description: string;
    approach: string[];
  };
  techStack: string[];
  results: {
    title: string;
    metrics: CaseStudyMetric[];
    outcomes: string[];
  };
  workflow: {
    title: string;
    steps: CaseStudyWorkflowStep[];
  };
  nextSteps: string;
  /** Set when the build is one of our own products. */
  productId?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'easy-moderator',
    category: 'Social-commerce operations',
    domain: 'AI & Automation',
    title: 'Running a Social Shop Without Watching Three Inboxes',
    excerpt: 'Conversations, orders, courier bookings and daily numbers pulled into one workspace, so selling no longer depends on who is online.',
    industry: 'Commerce operations',
    timeline: '10 weeks',
    impact: 'Customer replies stop waiting on staff availability',
    tags: [
      { label: 'Customer messaging', color: 'primary' },
      { label: 'Order capture', color: 'primary' },
      { label: 'Courier handoff', color: 'accent' },
    ],
    image: '/case-visuals/case-easy-moderator.svg',
    imageAlt: 'Easy Moderator workspace showing a shared conversation inbox alongside order and delivery status',
    overview: 'A shop selling through social channels was losing orders to the gap between a message arriving and someone reading it. The build brought conversations, product information, order capture and courier booking into one workspace, with the routine work handled automatically and staff pulled in only where a decision was needed.',
    problem: {
      title: 'What was going wrong',
      points: [
        'Orders arrived as messages in several inboxes, so the first response depended on who happened to be online',
        'The same product, price and delivery questions were answered by hand all day',
        'Confirmed orders were retyped into a courier panel, then chased again when customers asked for tracking',
        'Nobody could say, at the end of a day, which channel had actually produced revenue',
      ],
    },
    solution: {
      title: 'What we built',
      description: 'One operations workspace covering the whole distance from first message to delivered parcel, with clear boundaries around what each staff role can see and change.',
      approach: [
        'A single inbox for every selling channel, with routine enquiries answered from the shop\'s own product information',
        'Order capture inside the conversation, so nothing is re-entered anywhere',
        'Courier booking and tracking attached to the order rather than a separate panel',
        'Role boundaries so a larger team can work in the same system safely',
        'A daily view of orders, response times and channel performance',
      ],
    },
    techStack: [
      'React front end',
      'Node.js services',
      'PostgreSQL',
      'Queue-backed background work',
      'Automated regression testing',
    ],
    results: {
      title: 'What changed',
      metrics: [
        {
          label: 'First response',
          value: 'Immediate',
          description: 'Routine questions answered without waiting for a person',
        },
        {
          label: 'Order handling',
          value: 'One record',
          description: 'Conversation, order and delivery share the same record',
        },
        {
          label: 'Team growth',
          value: 'Role-aware',
          description: 'Staff can be added without handing over shared logins',
        },
      ],
      outcomes: [
        'Enquiries get an answer at any hour, so fewer buyers drift to a competitor',
        'Staff hours go to the conversations that decide a sale, not to repetition',
        'Delivery status is answered from the order instead of a second system',
        'The day ends with numbers the owner can act on',
      ],
    },
    workflow: {
      title: 'How a day runs',
      steps: [
        { phase: 'Message arrives', description: 'Every channel lands in one shared inbox' },
        { phase: 'Question answered', description: 'Product, price and delivery answers come from the shop\'s own information' },
        { phase: 'Order captured', description: 'Details confirmed inside the conversation' },
        { phase: 'Delivery booked', description: 'Courier booked from the order, tracking attached' },
        { phase: 'Customer updated', description: 'Status returned on the channel they used' },
      ],
    },
    nextSteps: 'Next is per-shop reporting on throughput and response time, so improvements can be argued from numbers rather than impressions.',
    productId: 'easy-moderator',
  },
  {
    id: 'tradeflow',
    category: 'Supply-chain operations',
    domain: 'Commerce',
    title: 'Order Status a Buying House Can Actually Defend',
    excerpt: 'Floor updates captured on a phone in seconds, risk surfaced early, and a change history complete enough to settle a disputed shipment.',
    industry: 'Garment supply chain',
    timeline: '8 weeks',
    impact: 'Status questions answered without interrupting production',
    tags: [
      { label: 'Mobile capture', color: 'primary' },
      { label: 'Early warning', color: 'accent' },
      { label: 'Audit trail', color: 'accent' },
    ],
    image: '/case-visuals/case-tradeflow.svg',
    imageAlt: 'TradeFlow mobile order view showing quick status capture and at-risk order highlighting',
    overview: 'A buying house ran order status through message threads and phone calls, which meant every buyer question cost three people twenty minutes and every dispute was reconstructed from memory. The build put one order record in front of everyone, updated from the floor in seconds.',
    problem: {
      title: 'What was going wrong',
      points: [
        'Status lived in message threads, so answering a buyer meant interrupting production',
        'Updates were only as current as the last person who remembered to send one',
        'A contested delay came down to whose screenshots were more convincing',
        'Slipping orders became visible at the point where they were already expensive',
      ],
    },
    solution: {
      title: 'What we built',
      description: 'A mobile-first order record designed around the reality of a factory floor: one hand free, a weak connection, and no patience for a form.',
      approach: [
        'Status updates that take seconds on a phone, not minutes on a desktop',
        'Updates logged from the messaging app teams already use',
        'At-risk orders and suppliers surfaced while there is still time to act',
        'Every change stamped with who made it and when',
        'One shared view so stakeholders stop asking for updates',
      ],
    },
    techStack: [
      'Mobile-first web app',
      'TypeScript',
      'PostgreSQL',
      'Messaging-channel integration',
      'Append-only change history',
    ],
    results: {
      title: 'What changed',
      metrics: [
        {
          label: 'Update effort',
          value: 'Seconds',
          description: 'Fast enough from a phone that it actually gets done',
        },
        {
          label: 'Buyer questions',
          value: 'Self-serve',
          description: 'Current status visible without a phone call',
        },
        {
          label: 'Disputes',
          value: 'Traceable',
          description: 'Who changed what, and when, on the record',
        },
      ],
      outcomes: [
        'Production is interrupted less because status no longer travels by phone call',
        'Delays surface early enough to be managed rather than explained',
        'A disputed order is a lookup instead of an argument',
        'New team members inherit a record instead of a chat history',
      ],
    },
    workflow: {
      title: 'How a day runs',
      steps: [
        { phase: 'Capture', description: 'Teams log progress from a phone, on the floor' },
        { phase: 'Flag', description: 'Orders and suppliers at risk are surfaced' },
        { phase: 'Share', description: 'Stakeholders see current status without asking' },
        { phase: 'Trace', description: 'Every change stays on the record' },
      ],
    },
    nextSteps: 'Next is measured reporting on update latency and on-time shipment, so the operational gain can be stated in numbers.',
    productId: 'tradeflow',
  },
  {
    id: 'easy-assistance',
    category: 'Bookings and customer operations',
    domain: 'AI & Automation',
    title: 'A Diary That Fills Itself for Appointment Businesses',
    excerpt: 'Enquiries answered and booked while the team is mid-service, with reminders and follow-up handled so empty chairs and lost regulars stop being routine.',
    industry: 'Service operations',
    timeline: 'Ongoing build',
    impact: 'Enquiries convert without anyone chasing messages',
    tags: [
      { label: 'Booking automation', color: 'accent' },
      { label: 'Customer history', color: 'primary' },
      { label: 'Reminders', color: 'success' },
    ],
    image: '/case-visuals/case-easy-assistance.svg',
    imageAlt: 'Easy Assistance flow from customer enquiry through availability check to confirmed booking',
    overview: 'Service businesses lose bookings in the minutes when everyone is busy delivering the service. This build handles the work around the appointment — answering questions, offering a slot that genuinely exists, confirming it, reminding the customer, and picking the conversation up afterwards.',
    problem: {
      title: 'What was going wrong',
      points: [
        'The phone rang and messages piled up mid-service, so enquiries went cold',
        'Availability lived in one person\'s head, which produced both double bookings and idle afternoons',
        'No-shows were absorbed as a cost because reminders were manual',
        'Regulars stopped coming back and nobody noticed until the month\'s takings did',
      ],
    },
    solution: {
      title: 'What we built',
      description: 'A booking flow a customer can complete alone, on top of a schedule that understands services, staff, hours and locations — with a handover to a person the moment judgement is required.',
      approach: [
        'Service questions answered from the business\'s own information',
        'Slots offered against real staff, duration and location constraints',
        'Confirmation, reschedule and cancellation the customer can drive themselves',
        'Reminders before the appointment and follow-up after it',
        'Customer history that makes a returning client feel remembered',
      ],
    },
    techStack: [
      'React front end',
      'Node.js services',
      'PostgreSQL',
      'Language-model APIs for enquiry handling',
      'Scheduled reminder delivery',
    ],
    results: {
      title: 'What changes for the business',
      metrics: [
        {
          label: 'Coverage',
          value: 'Enquiry → follow-up',
          description: 'One system spans the whole booking lifecycle',
        },
        {
          label: 'Out of hours',
          value: 'Still booking',
          description: 'Enquiries are handled when the shop is closed',
        },
        {
          label: 'Schedule',
          value: 'Constraint-aware',
          description: 'Staff, duration, breaks and locations respected before a slot is offered',
        },
      ],
      outcomes: [
        'Enquiries turn into appointments while the customer is still interested',
        'The diary reflects what the team can actually deliver',
        'Reminders and follow-up happen without anyone remembering to send them',
        'Returning customers arrive to a business that already knows their history',
      ],
    },
    workflow: {
      title: 'How a booking happens',
      steps: [
        { phase: 'Enquiry arrives', description: 'From the website or a messaging channel' },
        { phase: 'Questions answered', description: 'Service details handled, booking needs collected' },
        { phase: 'Real slot offered', description: 'Checked against service, staff and location' },
        { phase: 'Booking confirmed', description: 'The customer picks a time and it is locked in' },
        { phase: 'Reminder sent', description: 'Before the appointment, on their channel' },
        { phase: 'Followed up', description: 'Notes recorded, feedback and rebooking prompted' },
      ],
    },
    nextSteps: 'Next is deposit handling, calendar sync and demand reporting, so owners can staff against when customers actually want to book.',
    productId: 'easy-assistance',
  },
  {
    id: 'easy-ecommerce',
    category: 'Online store and commerce operations',
    domain: 'Commerce',
    title: 'A Store of Your Own Without a Development Project',
    excerpt: 'Storefront, catalogue, local checkout and delivery in one system, so getting online stops requiring a developer, a designer and three subscriptions.',
    industry: 'Retail and e-commerce',
    timeline: 'Ongoing build',
    impact: 'Launching online stops depending on someone else\'s timeline',
    tags: [
      { label: 'Store builder', color: 'primary' },
      { label: 'Local checkout', color: 'success' },
      { label: 'Delivery rules', color: 'accent' },
    ],
    image: '/case-visuals/case-easy-ecommerce.svg',
    imageAlt: 'Easy E-commerce flow from guided store setup through order capture to delivery',
    overview: 'Merchants moving off social selling face a development project before their first sale: a website, a payment setup, a courier account and a spreadsheet to hold it together. This build collapses that into one system, drafted for the merchant and then edited by them.',
    problem: {
      title: 'What was going wrong',
      points: [
        'Getting online meant a developer, a theme licence and several monthly subscriptions before any revenue',
        'Product titles, descriptions and photos had to be written one at a time, so half the catalogue never got published',
        'Orders lived in messages and stock lived in a notebook, and the two disagreed by the weekend',
        'Cash-on-delivery refusals and courier charges consumed margin nobody was tracking',
      ],
    },
    solution: {
      title: 'What we built',
      description: 'A store that starts from a description of the business and arrives as something working, with the operational side — stock, orders, delivery, customers — attached from day one.',
      approach: [
        'A drafted first store the merchant edits, rather than a blank template',
        'Catalogue tools that make publishing a full range realistic',
        'Checkout built around local payment and delivery habits',
        'Delivery-charge rules and controls for orders likely to be refused',
        'Orders, stock, customers and follow-up in one dashboard',
      ],
    },
    techStack: [
      'React and TypeScript',
      'Server-rendered storefront',
      'PostgreSQL',
      'Courier and payment integrations',
      'Language-model APIs for product content',
    ],
    results: {
      title: 'What changes for the business',
      metrics: [
        {
          label: 'Time to live',
          value: 'Days',
          description: 'No development project standing between the business and its first order',
        },
        {
          label: 'Operations',
          value: 'One dashboard',
          description: 'Orders, stock, customers and delivery in the same place',
        },
        {
          label: 'Checkout',
          value: 'Local-first',
          description: 'Built around how customers here actually pay and receive',
        },
      ],
      outcomes: [
        'A merchant can launch and change their own store without booking a developer',
        'Stock and orders stop contradicting each other',
        'Refused deliveries are prevented at checkout rather than absorbed later',
        'The customer list belongs to the business, not to a platform feed',
      ],
    },
    workflow: {
      title: 'How a store goes live',
      steps: [
        { phase: 'Describe the business', description: 'What is sold, and who buys it' },
        { phase: 'Review the draft', description: 'A working store structure and starting content is proposed' },
        { phase: 'Make it yours', description: 'Theme, layout, branding and copy adjusted directly' },
        { phase: 'Go live', description: 'Published on the merchant\'s own domain' },
        { phase: 'Take orders', description: 'Orders arrive in one dashboard with customer details' },
        { phase: 'Ship and follow up', description: 'Courier booked, customer updated, performance visible' },
      ],
    },
    nextSteps: 'Next is multi-location stock, deeper courier coverage and merchandising suggestions based on what a store actually sells.',
    productId: 'easy-ecommerce',
  },
  {
    id: 'reel-studio',
    category: 'Content production',
    domain: 'AI & Automation',
    title: 'Short-Form Video Production That Runs Unattended',
    excerpt: 'A generation pipeline that survives failure, reports where each job stands, and turns video production from a person-shaped bottleneck into scheduled output.',
    industry: 'Media and marketing',
    timeline: '9 weeks',
    impact: 'Video output no longer capped by one operator\'s day',
    tags: [
      { label: 'Unattended pipeline', color: 'primary' },
      { label: 'Failure recovery', color: 'accent' },
      { label: 'Job visibility', color: 'success' },
    ],
    image: '/case-visuals/case-reel-studio.svg',
    imageAlt: 'Reel Studio pipeline visual showing staged generation progress and recovery points',
    overview: 'Short-form video was produced by hand, one item at a time, with no way to know how long a batch would take or what to do when a long job failed halfway. The delivered system runs the work as queued jobs, reports progress per stage, and resumes rather than restarts.',
    problem: {
      title: 'What was going wrong',
      points: [
        'Production was manual and time-intensive, so output was capped by one person\'s day',
        'Nobody could say when a batch would be ready',
        'A failure late in a long job meant starting from the beginning',
        'Finished files were scattered and hard to retrieve',
      ],
    },
    solution: {
      title: 'What we built',
      description: 'A queue-driven pipeline with checkpoints between stages, status reporting for operators, and cloud storage for output.',
      approach: [
        'Jobs queued and processed in defined stages instead of by hand',
        'Checkpoints so a failure resumes rather than restarts',
        'Progress and estimated completion visible per job',
        'Output stored centrally and retrievable by reference',
        'Operator controls for the whole workflow in one interface',
      ],
    },
    techStack: [
      'Python and FastAPI',
      'GPU generation pipeline',
      'FFmpeg processing',
      'Cloud object storage',
      'Queue-driven job model',
    ],
    results: {
      title: 'What changed',
      metrics: [
        {
          label: 'Throughput',
          value: 'Queued',
          description: 'Work proceeds without an operator watching it',
        },
        {
          label: 'Long jobs',
          value: 'Resumable',
          description: 'A late failure no longer discards completed work',
        },
        {
          label: 'Planning',
          value: 'Estimated',
          description: 'Each job reports where it is and when it should finish',
        },
      ],
      outcomes: [
        'Output scales with capacity rather than with operator hours',
        'Failures cost minutes instead of a full run',
        'Delivery dates can be promised because progress is visible',
        'Finished assets are retrievable without hunting through folders',
      ],
    },
    workflow: {
      title: 'How a job runs',
      steps: [
        { phase: 'Queue', description: 'The request is validated and queued' },
        { phase: 'Generate', description: 'Staged production work runs unattended' },
        { phase: 'Checkpoint', description: 'Progress saved so failure resumes' },
        { phase: 'Store', description: 'Output persisted to cloud storage' },
        { phase: 'Report', description: 'Completion and status returned to the operator' },
      ],
    },
    nextSteps: 'Next is cost-and-quality reporting per batch, so production spend can be compared against output.',
  },
  {
    id: 'rag-chatbot',
    category: 'Customer and knowledge operations',
    domain: 'AI & Automation',
    title: 'An Assistant That Answers From Your Documents, Not Guesswork',
    excerpt: 'Routine questions answered from the organisation\'s own policies and files, with the source attached, so support time goes to the cases that need judgement.',
    industry: 'Knowledge-heavy operations',
    timeline: '6 weeks',
    impact: 'Routine questions answered without a person in the loop',
    tags: [
      { label: 'Grounded answers', color: 'primary' },
      { label: 'Cited sources', color: 'accent' },
      { label: 'Support relief', color: 'success' },
    ],
    image: '/case-visuals/case-rag-chatbot.svg',
    imageAlt: 'Knowledge assistant flow from question through document retrieval to a cited answer',
    overview: 'A team was answering the same questions from documents nobody could find, while a general-purpose assistant would have invented answers with total confidence. The delivered system answers only from the organisation\'s own material and shows which document each answer came from.',
    problem: {
      title: 'What was going wrong',
      points: [
        'The same questions were answered by hand from documents that were hard to locate',
        'A general assistant produced confident answers that were wrong on company specifics',
        'Written policies and procedures went unread because searching them was slower than asking a colleague',
        'Support headcount had to grow with question volume',
      ],
    },
    solution: {
      title: 'What we built',
      description: 'An assistant restricted to the organisation\'s own material, which retrieves the relevant passage before answering and shows where the answer came from.',
      approach: [
        'Documents ingested and indexed so the relevant passage can be found reliably',
        'Answers constructed only from retrieved material',
        'Every answer carries the source it came from',
        'Updates to a document take effect immediately, with no retraining',
        'Question logs that reveal what the organisation cannot yet answer',
      ],
    },
    techStack: [
      'Python API service',
      'Vector search index',
      'Language-model APIs',
      'Document ingestion pipeline',
      'Answer logging and review',
    ],
    results: {
      title: 'What changed',
      metrics: [
        {
          label: 'Answers',
          value: 'Sourced',
          description: 'Each response references the document behind it',
        },
        {
          label: 'Retrieval',
          value: 'Sub-second',
          description: 'The relevant passage is found before the answer is written',
        },
        {
          label: 'Routine questions',
          value: 'Self-served',
          description: 'Common enquiries no longer reach a person',
        },
        {
          label: 'Updates',
          value: 'Immediate',
          description: 'Changing a document changes the answers',
        },
      ],
      outcomes: [
        'Staff get answers in seconds instead of asking a colleague',
        'Answers are checkable, because the source is attached',
        'Support attention concentrates on cases that need judgement',
        'Existing written knowledge finally gets used',
      ],
    },
    workflow: {
      title: 'How a question is answered',
      steps: [
        { phase: 'Question asked', description: 'A person asks in plain language' },
        { phase: 'Material retrieved', description: 'The relevant passages are located in the organisation\'s documents' },
        { phase: 'Answer composed', description: 'The response is written only from what was retrieved' },
        { phase: 'Source attached', description: 'The answer arrives with the document it came from' },
        { phase: 'Gap logged', description: 'Questions with no good source are recorded for review' },
      ],
    },
    nextSteps: 'Next is follow-up questions in context, additional languages, and connections to systems that change during the day.',
  },
];

export function getCaseStudyById(id: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.id === id);
}

export function getCaseStudiesByCategory(category: string): CaseStudy[] {
  return caseStudies.filter(cs => cs.category === category);
}

export function getProductBuildCaseStudies(): CaseStudy[] {
  return caseStudies.filter(cs => cs.productId);
}

export function getClientCaseStudies(): CaseStudy[] {
  return caseStudies.filter(cs => !cs.productId);
}

/**
 * Images live in `public/assets/` because the paths above are absolute URLs, not
 * bundler imports — anything under `src/assets` would 404 in production.
 */
export function getCaseStudyImage(id: string): { src: string; alt: string } | undefined {
  const study = getCaseStudyById(id);
  return study ? { src: study.image, alt: study.imageAlt } : undefined;
}
