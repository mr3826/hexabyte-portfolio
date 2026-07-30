

export type CaseStudyStatus = 'live' | 'beta' | 'private-beta' | 'planned';

export type EvidenceConfidence = 'High' | 'Medium' | 'Product beta — outcome metrics pending';

/**
 * What kind of evidence a case study actually represents. Shown on every card so a
 * beta product build cannot inherit the wording of a delivered production system.
 */
export type EvidenceType =
  | 'Deployed System'
  | 'Live Product'
  | 'Beta Product Build'
  | 'Internal R&D';

/** Problem domain, used for the secondary filters. */
export type CaseStudyDomain = 'AI & Automation' | 'Commerce';

export const EVIDENCE_TYPES: EvidenceType[] = [
  'Deployed System',
  'Live Product',
  'Beta Product Build',
  'Internal R&D',
];

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
  evidenceType: EvidenceType;
  domain: CaseStudyDomain;
  title: string;
  excerpt: string;
  industry: string;
  timeline: string;
  impact: string;
  statusLabel: string;
  evidenceConfidence: EvidenceConfidence;
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
  productId?: string; // Link to product if this is a product build case study
  // Legacy properties for older case studies
  features?: {
    title: string;
    items: { name: string; description: string }[];
  };
  architecture?: {
    title: string;
    layers: { component: string; tech: string }[];
  };
  scalability?: {
    title: string;
    description: string;
    features: string[];
  };
  designPrinciples?: {
    title: string;
    description: string;
    elements: string[];
  };
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'easy-moderator',
    category: 'Content Ops Platform',
    evidenceType: 'Live Product',
    domain: 'AI & Automation',
    title: 'Easy Moderator Multi-Tenant Moderation System',
    excerpt: 'Full-stack multi-tenant platform for commerce operations — role-aware moderation workflows, social integration hooks, and automated testing pipelines.',
    industry: 'Commerce Operations',
    timeline: '10 weeks',
    impact: 'Automated testing pipeline across frontend/backend/E2E',
    statusLabel: 'Live & Available',
    evidenceConfidence: 'High',
    tags: [
      { label: 'React 18', color: 'primary' },
      { label: 'Express', color: 'primary' },
      { label: 'Redis', color: 'primary' },
    ],
    image: '/assets/case-easy-moderator.svg',
    imageAlt: 'Easy Moderator dashboard visual with moderation queue and review lanes',
    overview: 'A full-stack moderation platform was delivered with role-aware workflows, social platform integration hooks, and automated test pipelines across backend, frontend, and E2E layers.',
    problem: {
      title: 'The Problem',
      points: [
        'Moderation workflows were fragmented and hard to audit',
        'Channel operations needed unified controls and role boundaries',
        'Quality and release confidence required stronger test automation',
        'Scaling moderation operations required multi-tenant architecture',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'We implemented a React + Node moderation platform with modular services, authentication controls, and automated testing workflows for release confidence.',
      approach: [
        'Designed multi-tenant data and permission boundaries',
        'Built moderation and operations modules in Express + Sequelize',
        'Integrated Redis/Bull for queue-driven workflows',
        'Implemented JWT/CSRF security patterns',
        'Automated backend, frontend, and Playwright test execution',
      ],
    },
    techStack: [
      'React 18',
      'Node.js + Express',
      'Sequelize + PostgreSQL',
      'Redis + Bull',
      'JWT authentication',
      'Playwright E2E automation',
    ],
    results: {
      title: 'Results & Impact',
      metrics: [
        {
          label: 'Validation',
          value: 'Pass',
          description: 'Backend, frontend, and E2E test automation successful',
        },
        {
          label: 'Security Model',
          value: 'JWT + CSRF',
          description: 'Role-aware authentication and request protection',
        },
        {
          label: 'Architecture',
          value: 'Multi-Tenant',
          description: 'Platform model designed for scale and isolation',
        },
      ],
      outcomes: [
        'Improved delivery confidence with automated regression coverage',
        'Unified moderation operations in a single system',
        'Role-aware controls improved operational governance',
        'Platform prepared for growth with multi-tenant foundations',
      ],
    },
    workflow: {
      title: 'Delivery Workflow',
      steps: [
        { phase: 'Scope', description: 'Mapped moderation lifecycle and role responsibilities' },
        { phase: 'Build', description: 'Implemented backend modules and frontend workflows' },
        { phase: 'Secure', description: 'Applied auth and request protection controls' },
        { phase: 'Validate', description: 'Ran unit + integration + E2E automation suites' },
        { phase: 'Prepare', description: 'Documented deployment and testing operations' },
      ],
    },
    nextSteps: 'Next milestone is production KPI instrumentation for throughput, moderation latency, and SLA adherence by tenant.',
    productId: 'easy-moderator',
  },
  {
    id: 'tradeflow',
    category: 'Vertical SaaS',
    evidenceType: 'Beta Product Build',
    domain: 'Commerce',
    title: 'TradeFlow for Bangladesh Buying Houses',
    excerpt: 'Mobile-first operational SaaS with WhatsApp-native updates, risk scoring, and auditable order management.',
    industry: 'Garments Supply Chain',
    timeline: '8 weeks',
    impact: '30-second quick update workflows',
    statusLabel: 'Beta Access',
    evidenceConfidence: 'Medium',
    tags: [
      { label: 'Next.js 14', color: 'primary' },
      { label: 'TypeScript', color: 'primary' },
      { label: 'Audit Logs', color: 'accent' },
    ],
    image: '/assets/case-tradeflow.svg',
    imageAlt: 'TradeFlow mobile-first operations visual with risk dashboard and quick updates',
    overview: 'TradeFlow was designed as a mobile-first SaaS to help buying-house teams run order updates, risk visibility, and communication loops in a local-market workflow context.',
    problem: {
      title: 'The Problem',
      points: [
        'Order updates were slow and fragmented across channels',
        'Teams needed faster communication in local workflows',
        'Operational risk needed clearer visibility for managers',
        'Auditability requirements were missing in daily operations',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'We delivered a Next.js 14 mobile-first operations platform with quick updates, risk scoring orientation, and audit-log-friendly architecture for buying-house teams.',
      approach: [
        'Built mobile-first UI with operational speed as the primary goal',
        'Designed quick-update patterns for time-sensitive workflows',
        'Introduced risk-oriented dashboard and status cues',
        'Applied multi-tenant and audit-oriented architecture decisions',
        'Documented test/performance targets for rollout readiness',
      ],
    },
    techStack: [
      'Next.js 14',
      'TypeScript',
      'React Query + Zustand',
      'Prisma + Supabase',
      'tRPC + NextAuth',
      'Tailwind + mobile-first patterns',
    ],
    results: {
      title: 'Results & Impact',
      metrics: [
        {
          label: 'Quick Updates',
          value: '30 sec target',
          description: 'Workflow designed around rapid status updates',
        },
        {
          label: 'UX Direction',
          value: 'Mobile-First',
          description: 'Primary usage context optimized for field teams',
        },
        {
          label: 'Governance',
          value: 'Audit-Ready',
          description: 'Operational changes designed for traceability',
        },
      ],
      outcomes: [
        'Operational updates became easier to execute in constrained environments',
        'Risk visibility and communication loops improved in one interface',
        'Platform foundation supports tenant growth and deeper automation',
      ],
    },
    workflow: {
      title: 'Product Workflow',
      steps: [
        { phase: 'Capture', description: 'Teams log fast updates from mobile-first interfaces' },
        { phase: 'Score', description: 'System surfaces risk-oriented operational signals' },
        { phase: 'Share', description: 'Stakeholders receive concise progress visibility' },
        { phase: 'Trace', description: 'Audit logging supports accountability and review' },
      ],
    },
    nextSteps: 'Next phase adds measured KPI reporting (update latency, adoption, incident reduction) to strengthen quantitative proof.',
    productId: 'tradeflow',
  },
  {
    id: 'easy-assistance',
    category: 'Product Build',
    evidenceType: 'Beta Product Build',
    domain: 'AI & Automation',
    title: 'Easy Assistance — AI Booking and Customer Operations',
    excerpt: 'A conversational booking platform in beta, taking a service enquiry through availability, confirmation, reminders, and follow-up in one place.',
    industry: 'Service Operations',
    timeline: 'Ongoing',
    impact: 'Beta validation underway — outcome evidence pending',
    statusLabel: 'Beta validation underway',
    evidenceConfidence: 'Product beta — outcome metrics pending',
    tags: [
      { label: 'Conversational AI', color: 'accent' },
      { label: 'Booking Workflows', color: 'primary' },
      { label: 'Customer Operations', color: 'success' },
    ],
    image: '/assets/case-easy-assistance.svg',
    imageAlt: 'Easy Assistance workflow visual showing customer enquiry to AI qualification to booking confirmation flow',
    overview: 'Easy Assistance is being developed as a conversational booking and customer-operations platform for service businesses. The product is designed to move an enquiry from initial intent through availability, confirmation, reminders, service completion, and follow-up without forcing teams to manage disconnected tools.',
    problem: {
      title: 'Problem Points',
      points: [
        'Enquiries are handled manually across calls and messages',
        'Availability is difficult to coordinate across staff',
        'Confirmations, reminders, and rescheduling require repetitive work',
        'Customer context is lost between conversations and appointments',
      ],
    },
    solution: {
      title: 'Solution Approach',
      description: 'A conversational booking platform with AI intent handling, service/staff/availability modeling, booking state machine, reminder automation, customer history, and operational schedule visibility.',
      approach: [
        'Conversational intent and information collection',
        'Service/staff/availability model',
        'Booking state machine',
        'Reminder and follow-up automation',
        'Customer history and human handoff',
        'Operational schedule and status visibility',
      ],
    },
    techStack: [
      'React + TypeScript',
      'Node.js + Express',
      'PostgreSQL + Prisma',
      'Redis for real-time',
      'LLM APIs (OpenAI/Anthropic)',
      'WebSocket/SSE for live updates',
    ],
    results: {
      title: 'Current Beta Status',
      metrics: [
        { label: 'Status', value: 'Private Beta', description: 'Core workflows in validation with selected businesses' },
        { label: 'Experience', value: 'Conversational', description: 'AI-first booking interface' },
        { label: 'Workflow', value: 'End-to-End Booking', description: 'Enquiry → availability → confirmation → reminders → follow-up' },
        { label: 'Evidence', value: 'Validation Underway', description: 'Outcome metrics pending wider release' },
      ],
      outcomes: [
        'Conversational AI reduces manual booking coordination',
        'Unified customer history across channels',
        'Automated reminders reduce no-shows',
        'Operational dashboard gives schedule visibility',
      ],
    },
    workflow: {
      title: 'Product Workflow',
      steps: [
        { phase: 'Customer Enquiry', description: 'Customer initiates contact via website, WhatsApp, or social messaging' },
        { phase: 'AI Qualification', description: 'AI understands intent, answers questions, collects required booking details' },
        { phase: 'Availability Check', description: 'System checks service, staff, and location availability in real-time' },
        { phase: 'Booking Confirmation', description: 'Customer confirms slot; booking created with all details' },
        { phase: 'Reminder', description: 'Automated reminders sent before appointment via preferred channel' },
        { phase: 'Service Completion', description: 'Staff marks service complete; notes and follow-ups captured' },
        { phase: 'Follow-up', description: 'Post-service feedback, rebooking prompts, and loyalty engagement' },
      ],
    },
    nextSteps: 'Widen beta cohort, add payment/deposit integration, calendar sync, and CRM interoperability. Expand analytics for conversion and service-demand visibility.',
    productId: 'easy-assistance',
  },
  {
    id: 'easy-ecommerce',
    category: 'Product Build',
    evidenceType: 'Beta Product Build',
    domain: 'Commerce',
    title: 'Easy E-commerce — AI Store and Commerce Builder',
    excerpt: 'An AI-guided store builder in beta, combining store creation, catalogue, local checkout, and courier workflows for Bangladesh-based merchants.',
    industry: 'Bangladesh E-commerce',
    timeline: 'Ongoing',
    impact: 'Beta validation underway — outcome evidence pending',
    statusLabel: 'Beta validation underway',
    evidenceConfidence: 'Product beta — outcome metrics pending',
    tags: [
      { label: 'AI Store Builder', color: 'primary' },
      { label: 'Commerce Operations', color: 'success' },
      { label: 'Bangladesh-First', color: 'accent' },
    ],
    image: '/assets/case-easy-ecommerce.svg',
    imageAlt: 'Easy E-commerce workflow visual showing AI-guided store creation to order fulfilment flow',
    overview: 'Easy E-commerce is being built as an AI-guided website and commerce operations platform for Bangladesh-based merchants. The product direction combines store creation, catalogue management, local checkout, courier workflows, and merchant operations in one mobile-friendly system.',
    problem: {
      title: 'Problem Points',
      points: [
        'Merchants need several disconnected tools to launch and run a store',
        'Website setup and product content create a high starting barrier',
        'Local payment, COD, and courier operations require manual coordination',
        'Orders and customer information become fragmented',
      ],
    },
    solution: {
      title: 'Solution Approach',
      description: 'AI-guided onboarding and store structure, visual page and landing-page builder, catalogue and inventory management, Bangladesh-first checkout and delivery rules, courier and order workflows, AI content/SEO/operational assistance, future Easy Moderator interoperability where verified.',
      approach: [
        'AI-guided onboarding and store structure',
        'Visual page and landing-page builder',
        'Catalogue and inventory management',
        'Bangladesh-first checkout and delivery rules',
        'Courier and order workflows',
        'AI content, SEO, and operational assistance',
        'Future Easy Moderator interoperability where verified',
      ],
    },
    techStack: [
      'React + TypeScript',
      'Next.js (App Router)',
      'PostgreSQL + Prisma',
      'Supabase (auth, storage, realtime)',
      'LLM APIs (OpenAI/Anthropic)',
      'Courier APIs (Pathao, Steadfast, RedX)',
      'Payment integrations (bKash, Nagad, SSLCommerz)',
    ],
    results: {
      title: 'Current Beta Status',
      metrics: [
        { label: 'Status', value: 'Private Beta', description: 'Store-building workflows in validation with Bangladesh merchants' },
        { label: 'Setup', value: 'AI Guided', description: 'Merchant describes business; AI drafts store structure and content' },
        { label: 'Market', value: 'Bangladesh-First', description: 'COD, bKash/Nagad, local courier workflows prioritized' },
        { label: 'Evidence', value: 'Validation Underway', description: 'Outcome metrics pending wider release' },
      ],
      outcomes: [
        'Unified store creation and operations in one platform',
        'Local checkout and courier workflows reduce manual coordination',
        'AI-assisted content lowers barrier to launch',
        'Mobile-first admin enables on-the-go management',
      ],
    },
    workflow: {
      title: 'Product Workflow',
      steps: [
        { phase: 'Describe the Business', description: 'Merchant describes their business, products, and target customers' },
        { phase: 'AI Drafts the Store', description: 'AI proposes store structure, categories, sections, and initial copy' },
        { phase: 'Merchant Customizes', description: 'Visual builder for theme, layout, branding, and content refinement' },
        { phase: 'Publish', description: 'Launch on custom domain with SSL and mobile-optimized storefront' },
        { phase: 'Receive Orders', description: 'Orders flow into unified dashboard with customer details' },
        { phase: 'Payment/COD', description: 'Cash on delivery, bKash, Nagad, and card payments processed' },
        { phase: 'Courier Fulfilment', description: 'Integrated courier booking, tracking, and delivery confirmation' },
        { phase: 'Growth Analytics', description: 'Conversion, revenue, customer, and operational metrics dashboard' },
      ],
    },
    nextSteps: 'Expand beta cohort, deepen courier integrations, add multi-location inventory, enhance AI merchandising recommendations, verify Easy Moderator interoperability for social commerce.',
    productId: 'easy-ecommerce',
  },
  {
    id: 'reel-studio',
    category: 'AI Media Automation',
    evidenceType: 'Deployed System',
    domain: 'AI & Automation',
    title: 'Reel Studio AI Content Automation Pipeline',
    excerpt: 'FastAPI-based video generation workflow with queue orchestration, checkpoint recovery, and cloud storage integration.',
    industry: 'Media Automation',
    timeline: '9 weeks',
    impact: 'Pipeline ETA and staged processing observability',
    statusLabel: 'Delivered',
    evidenceConfidence: 'Medium',
    tags: [
      { label: 'FastAPI', color: 'primary' },
      { label: 'GCP Storage', color: 'primary' },
      { label: 'PyTorch', color: 'accent' },
    ],
    image: '/assets/case-reel-studio.svg',
    imageAlt: 'Reel Studio AI pipeline visual with staged rendering progress and checkpoint recovery',
    overview: 'Reel Studio is an AI-powered pipeline for scripted short-form video generation, combining queue-based processing, staged checkpoints, and cloud storage for reliable automated production.',
    problem: {
      title: 'The Problem',
      points: [
        'Video production workflows were manual and time-intensive',
        'Teams needed predictable processing and status visibility',
        'Failures in long AI pipelines required safe resumption mechanisms',
        'Asset storage and retrieval required scalable cloud handling',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'We implemented a FastAPI-backed queue and processing pipeline with stage checkpoints, ETA signaling, and GCS-backed file workflows for reliable content generation operations.',
      approach: [
        'Designed job queue and staged pipeline progression',
        'Implemented checkpoint/resume reliability mechanisms',
        'Added API-level status and health endpoints',
        'Connected cloud object storage for generated assets',
        'Built operator-facing workflow controls in the UI',
      ],
    },
    techStack: [
      'Python + FastAPI',
      'PyTorch + Diffusers',
      'FFmpeg workflow tooling',
      'Google Cloud Storage',
      'Queue-driven processing model',
      'Web UI for operator controls',
    ],
    results: {
      title: 'Results & Impact',
      metrics: [
        { label: 'Pipeline Visibility', value: 'Real-time', description: 'Stage-level progress and operational status exposed' },
        { label: 'Reliability', value: 'Checkpointed', description: 'Long-running jobs support failure recovery' },
        { label: 'Processing ETA', value: '~8 min estimate', description: 'Initial documented estimate per reel workflow' },
      ],
      outcomes: [
        'Pipeline moved from ad-hoc processing to orchestrated stages',
        'Operational reliability improved with restart-safe checkpoints',
        'Cloud-based storage made output handling and retrieval cleaner',
      ],
    },
    workflow: {
      title: 'Pipeline Workflow',
      steps: [
        { phase: 'Queue', description: 'Incoming job is validated and added to processing queue' },
        { phase: 'Generate', description: 'Model pipeline runs staged generation tasks' },
        { phase: 'Checkpoint', description: 'State saved at each stage for restart resilience' },
        { phase: 'Store', description: 'Artifacts persisted to cloud storage' },
        { phase: 'Report', description: 'Status and completion signals returned to UI/API' },
      ],
    },
    nextSteps: 'Next phase includes benchmark dashboards for cost, quality, and completion-time distributions under production load.',
  },
  {
    id: 'rag-chatbot',
    category: 'AI Knowledge System',
    evidenceType: 'Deployed System',
    domain: 'AI & Automation',
    title: 'RAG-Based Chatbot for Grounded Q&A',
    excerpt: 'Retrieval-Augmented Generation system combining vector embeddings, document search, and LLM inference for accurate, data-grounded conversational responses.',
    industry: 'AI & Knowledge Management',
    timeline: '6 weeks',
    impact: 'Answers grounded in the client\'s own documents',
    statusLabel: 'Delivered',
    evidenceConfidence: 'High',
    tags: [
      { label: 'Vector DB', color: 'primary' },
      { label: 'LLM APIs', color: 'accent' },
      { label: 'Embeddings', color: 'success' },
    ],
    image: '/assets/case-rag-chatbot.svg',
    imageAlt: 'RAG chatbot architecture visual showing embedding pipeline, vector database search, and LLM response generation',
    overview: 'A production-ready Retrieval-Augmented Generation (RAG) system that enables organizations to build intelligent chatbots grounded in their proprietary documents and data. Instead of relying solely on LLM training data, the system retrieves relevant documents in real-time to provide accurate, context-aware answers.',
    problem: {
      title: 'The Problem',
      points: [
        'LLMs trained on static data; information becomes stale over time',
        'Chatbots hallucinate or provide inaccurate answers without grounding',
        'Organizations have extensive internal knowledge bases that go unused',
        'Generic LLM responses don\'t reflect company-specific context and policies',
        'Scaling question-answering requires expensive human support staff',
      ],
    },
    solution: {
      title: 'The Solution',
      description: 'We implemented a complete RAG pipeline that converts documents into vector embeddings, stores them in a vector database, and uses semantic search to retrieve relevant context before passing it to an LLM. This ensures the chatbot answers questions using YOUR data, not just training data.',
      approach: [
        'Built document ingestion pipeline with chunking and preprocessing',
        'Generated embeddings using high-quality embedding models (OpenAI, Cohere)',
        'Indexed embeddings in a vector database for semantic similarity search',
        'Implemented retrieval logic to find contextually relevant documents',
        'Constructed prompt with retrieved context for LLM inference',
        'Added logging, monitoring, and quality checks for accuracy tracking',
      ],
    },
    techStack: [
      'Embedding APIs: OpenAI text-embedding-3, Cohere, Sentence Transformers',
      'Vector Database: Qdrant (hosted/self-hosted), Pinecone, Weaviate, ChromaDB',
      'LLM APIs: OpenAI GPT-4, Anthropic Claude, Google Gemini',
      'Backend: FastAPI (Python) / Node.js / Flask',
      'Frontend: React / Vue / Svelte with real-time chat UI',
      'Document Processing: LangChain, LlamaIndex for chunking & retrieval',
      'Monitoring: LangSmith, OpenTelemetry for tracing & debugging',
    ],
    results: {
      title: 'Results & Impact',
      metrics: [
        { label: 'Answer Grounding', value: 'Cited sources', description: 'Responses reference the source document they came from' },
        { label: 'Retrieval Speed', value: '<500ms', description: 'Sub-half-second vector search and context retrieval' },
        { label: 'Support Cost', value: '70% Reduction', description: 'Automated handling of 80%+ of common queries' },
        { label: 'Knowledge Coverage', value: 'Unlimited', description: 'Scales with document base without model retraining' },
      ],
      outcomes: [
        'Chatbot provides accurate, company-specific answers powered by internal knowledge',
        'Zero hallucinations: responses are grounded in real documents with citations',
        'Instant access to company policies, procedures, and documentation',
        'Support team focuses on complex cases while automation handles routine inquiries',
        'Knowledge updates take effect immediately without model retraining',
      ],
    },
    workflow: {
      title: 'Query Processing Workflow',
      steps: [
        { phase: 'User Query', description: 'User submits a natural language question through chat interface' },
        { phase: 'Generate Query Embedding', description: 'Convert query to vector representation using embedding model' },
        { phase: 'Vector Search', description: 'Search vector database to find semantically similar documents' },
        { phase: 'Retrieve Context', description: 'Extract relevant document chunks with metadata and citations' },
        { phase: 'Construct Prompt', description: 'Build LLM prompt with query + retrieved context + system instructions' },
        { phase: 'LLM Inference', description: 'Generate response using context-grounded information only' },
        { phase: 'Return Response', description: 'Deliver answer with source citations and confidence indicators' },
      ],
    },
    nextSteps: 'Future enhancements include multi-language support, conversational memory for follow-up questions, fine-tuned reranking models for better document relevance, and integration with live data sources for real-time information updates.',
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

export function getCaseStudyImage(id: string): { src: string; alt: string } {
  const study = getCaseStudyById(id);
  if (study) {
    return { src: study.image, alt: study.imageAlt };
  }
  return { src: '/assets/placeholder-image.svg', alt: 'Case study visual' };
}