import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { useModal } from '@/context/ModalContext';

const caseStudyData: Record<string, any> = {
  'lead-enrichment-automation': {
    title: 'Lead Enrichment Automation for B2B SaaS',
    client: 'B2B SaaS Company',
    industry: 'Software as a Service',
    timeline: '4 weeks',
    category: 'AI Automation',
    overview:
      'A fast-growing B2B SaaS company was manually enriching 500+ leads per week, spending 20+ hours on data entry and research. The process was slow, error-prone, and prevented the sales team from focusing on high-value activities.',
    problem: {
      title: 'The Problem',
      points: [
        '20+ hours per week spent on manual lead enrichment',
        'Inconsistent data quality across CRM records',
        'Sales team unable to prioritize high-value leads',
        'Delayed follow-ups due to incomplete information',
      ],
    },
    solution: {
      title: 'The Solution',
      description:
        'We built an intelligent automation system using Make.com, OpenAI GPT-4, and HubSpot integration. The system automatically enriches lead data, scores leads based on fit, and updates the CRM in real-time.',
      approach: [
        'Implemented webhook triggers for new lead captures',
        'Built AI-powered data enrichment using GPT-4 and external APIs',
        'Created intelligent lead scoring algorithm',
        'Automated CRM updates and team notifications',
        'Set up error handling and quality checks',
      ],
    },
    techStack: [
      'Make.com for workflow orchestration',
      'OpenAI GPT-4 for intelligent data processing',
      'HubSpot API for CRM integration',
      'Clearbit API for company data',
      'Custom webhooks for real-time updates',
    ],
    results: {
      title: 'Results & Impact',
      metrics: [
        {
          label: 'Time Saved',
          value: '90%',
          description: 'Reduced from 20 hours to 2 hours per week',
        },
        {
          label: 'Data Accuracy',
          value: '95%',
          description: 'Consistently accurate enriched data',
        },
        {
          label: 'Lead Scoring',
          value: '3x Faster',
          description: 'Automated qualification process',
        },
        {
          label: 'Revenue Impact',
          value: '$50K+',
          description: 'Estimated annual savings',
        },
      ],
      outcomes: [
        'Sales team now focuses on selling, not data entry',
        'Faster response times to high-value leads',
        'Improved lead conversion rates',
        'Scalable process that handles 10x volume',
      ],
    },
    workflow: {
      title: 'System Workflow',
      steps: [
        {
          phase: 'Before',
          description: 'Manual research for each lead, 15-20 minutes per lead',
        },
        {
          phase: 'Trigger',
          description: 'New lead submitted via form or imported to CRM',
        },
        {
          phase: 'Enrichment',
          description:
            'AI automatically enriches with company data, tech stack, social profiles',
        },
        {
          phase: 'Scoring',
          description: 'GPT-4 analyzes fit based on ICP criteria',
        },
        {
          phase: 'After',
          description:
            'Enriched, scored lead in CRM with automated notification, <2 minutes',
        },
      ],
    },
    nextSteps:
      'The system is now being expanded to include automated email sequences, meeting scheduling, and predictive analytics for deal closure probability.',
  },
  'ai-chatbot-rag': {
    title: 'RAG-Based Customer Support Chatbot',
    client: 'E-commerce Platform',
    industry: 'E-commerce',
    timeline: '6 weeks',
    category: 'AI Agents',
    overview:
      'A growing e-commerce platform was overwhelmed with customer support inquiries, with wait times exceeding 24 hours. Support costs were scaling linearly with growth.',
    problem: {
      title: 'The Problem',
      points: [
        'Support costs growing 50% quarter over quarter',
        '24+ hour average response time',
        'Support team overwhelmed with repetitive questions',
        '10,000+ pages of documentation underutilized',
      ],
    },
    solution: {
      title: 'The Solution',
      description:
        "We built an AI chatbot using RAG (Retrieval-Augmented Generation) technology, training it on the company's entire knowledge base. The chatbot provides accurate, contextual answers 24/7.",
      approach: [
        'Processed and indexed 10K+ support documents',
        'Built vector database for semantic search',
        'Implemented Claude API for response generation',
        'Created fallback to human support when needed',
        'Added analytics dashboard for monitoring',
      ],
    },
    techStack: [
      'Claude API for natural language processing',
      'Pinecone vector database for RAG',
      'LangChain for orchestration',
      'React for chat interface',
      'Python backend with FastAPI',
    ],
    results: {
      title: 'Results & Impact',
      metrics: [
        {
          label: 'Response Time',
          value: '<1 min',
          description: 'From 24+ hours to instant',
        },
        {
          label: 'Accuracy',
          value: '95%',
          description: 'Correct answers without human intervention',
        },
        {
          label: 'Cost Reduction',
          value: '70%',
          description: 'Support costs decreased significantly',
        },
        {
          label: 'Satisfaction',
          value: '4.8/5',
          description: 'Customer satisfaction score',
        },
      ],
      outcomes: [
        '60% of inquiries resolved automatically',
        'Support team handles only complex cases',
        'Available 24/7 in multiple languages',
        'Continuous learning from interactions',
      ],
    },
    workflow: {
      title: 'System Architecture',
      steps: [
        {
          phase: 'User Query',
          description: 'Customer asks question in natural language',
        },
        {
          phase: 'Vector Search',
          description: 'System searches knowledge base for relevant context',
        },
        {
          phase: 'AI Processing',
          description:
            'Claude generates accurate response using retrieved context',
        },
        {
          phase: 'Response',
          description: 'Contextual answer with source citations',
        },
        {
          phase: 'Escalation',
          description: 'Complex cases automatically routed to human support',
        },
      ],
    },
    nextSteps:
      'Adding proactive support features, multi-language support, and integration with order management system for personalized assistance.',
  },
  'multi-tenant-commerce-ai': {
    title: 'Multi-Tenant Commerce AI Platform for E-Commerce Businesses',
    client: 'SaaS Platform',
    industry: 'E-Commerce',
    timeline: '12 weeks',
    category: 'Web App',
    overview:
      'A production-grade, multi-tenant SaaS platform enabling e-commerce businesses to centralize product management, order processing, and customer communication — powered by AI-driven conversations using RAG technology. The platform handles multiple channels (WhatsApp, Meta Messenger, Instagram) while providing subscription-based access and intelligent automated support at scale.',
    problem: {
      title: 'The Problem',
      points: [
        'E-commerce businesses managing products, orders, and customers across disconnected tools',
        'Customer support fragmented across WhatsApp, Instagram, and Meta platforms',
        'No centralized knowledge base for automated, context-aware responses',
        'Manual workflows and repetitive tasks limiting business scalability',
        'Lack of multi-tenant architecture for SaaS-based product offerings',
      ],
    },
    solution: {
      title: 'The Solution',
      description:
        'We designed and built a fully functional, multi-tenant SaaS platform with centralized product and order management, unified multi-channel messaging, AI-powered conversations using RAG and internal knowledge bases, and subscription-based billing. The platform enables e-commerce businesses to scale operations without adding headcount.',
      approach: [
        'Built React 18 Single Page Application with modern UI/UX',
        'Developed modular Express.js monolith backend with clear separation of concerns',
        'Implemented RAG-based AI conversation system with vector database for knowledge retrieval',
        'Integrated WhatsApp, Meta Messenger, and Instagram APIs for unified messaging',
        'Created subscription billing system with tiered plans and tenant-based access control',
        'Designed structured knowledge base for AI-powered context-aware responses',
        'Set up production deployment with scalability and multi-tenancy in mind',
      ],
    },
    features: {
      title: 'Key Features Breakdown',
      items: [
        {
          name: 'Product Management',
          description:
            'Centralized product catalog per tenant with inventory tracking, variants, and pricing',
        },
        {
          name: 'Order Processing',
          description:
            'Real-time order tracking, status updates, and automated workflow management',
        },
        {
          name: 'Multi-Channel Messaging',
          description:
            'Unified inbox for WhatsApp, Meta Messenger, and Instagram direct messages',
        },
        {
          name: 'AI Conversations (RAG)',
          description:
            'Context-aware responses powered by knowledge base integration and vector search',
        },
        {
          name: 'Subscription Billing',
          description:
            'Tiered subscription plans with tenant-based access control and usage limits',
        },
        {
          name: 'Knowledge Base',
          description:
            'Structured content repository for AI retrieval and automated customer support',
        },
      ],
    },
    architecture: {
      title: 'System Architecture',
      layers: [
        {
          component: 'Frontend',
          tech: 'React 18 Single Page Application with modern state management',
        },
        {
          component: 'Backend',
          tech: 'Node.js + Express.js modular monolith with clear module separation',
        },
        {
          component: 'AI Layer',
          tech: 'RAG pipeline with vector database for semantic knowledge retrieval',
        },
        {
          component: 'Messaging APIs',
          tech: 'WhatsApp Business API, Meta Messenger API, Instagram Graph API',
        },
        {
          component: 'Billing',
          tech: 'Payment gateway integration with subscription management',
        },
      ],
    },
    techStack: [
      'React 18 (SPA)',
      'Node.js + Express.js',
      'RAG-based conversational AI',
      'LLM APIs (GPT-4 / Claude)',
      'Vector Database (Pinecone/Qdrant)',
      'PostgreSQL (Relational Data)',
      'WhatsApp Business API',
      'Meta / Instagram APIs',
      'Subscription billing service',
    ],
    results: {
      title: 'Results & Impact',
      metrics: [
        {
          label: 'Manual Workload',
          value: '80%',
          description: 'Reduction in manual customer support tasks',
        },
        {
          label: 'Response Time',
          value: '<30 sec',
          description: 'Average AI-powered response time',
        },
        {
          label: 'Multi-Tenant',
          value: 'Scalable',
          description: 'Production-ready SaaS architecture',
        },
        {
          label: 'Channels',
          value: '3+',
          description: 'WhatsApp, Instagram, Meta Messenger unified',
        },
      ],
      outcomes: [
        'Centralized operations dashboard for multiple tenants',
        'Faster, AI-driven customer support without hiring additional staff',
        'Scalable architecture ready for hundreds of tenants',
        'Subscription revenue model with tiered access control',
      ],
    },
    workflow: {
      title: 'Platform Architecture Flow',
      steps: [
        {
          phase: 'Frontend (React SPA)',
          description:
            'Modern web interface for product management, orders, and messaging',
        },
        {
          phase: 'Backend (Express.js)',
          description:
            'Modular monolith with clear separation: auth, products, orders, messaging, AI',
        },
        {
          phase: 'AI Pipeline (RAG)',
          description:
            'Vector search retrieves relevant knowledge → LLM generates context-aware response',
        },
        {
          phase: 'Multi-Channel Integration',
          description:
            'WhatsApp, Instagram, and Meta APIs unified in single messaging interface',
        },
        {
          phase: 'Subscription & Billing',
          description:
            'Tiered plans with usage-based access control per tenant',
        },
      ],
    },
    scalability: {
      title: 'Scalability & Future Enhancements',
      points: [
        'Support for additional tenants without code changes',
        'Advanced analytics and reporting dashboards',
        'Additional AI workflows (product recommendations, upsells)',
        'Multi-language support for global e-commerce businesses',
        'Mobile app for on-the-go management',
      ],
    },
    nextSteps:
      'The platform is in active production with plans to expand AI capabilities, add advanced analytics, and introduce mobile applications for tenant administrators.',
  },
  'payrun-hrm-mobile': {
    title: 'PAYRUN Mobile HR Management App',
    client: 'Growing Businesses',
    industry: 'Human Resources',
    timeline: '16 weeks',
    category: 'Mobile App',
    overview:
      'PAYRUN is a comprehensive, mobile-first Human Resource Management (HRM) application designed for modern, growing businesses. It centralizes employee management, time tracking, leave management, and recruitment into a single, intuitive mobile experience built for scalability and reliability.',
    problem: {
      title: 'The Challenge',
      points: [
        'Businesses rely on fragmented tools to manage HR workflows, causing inefficiencies',
        'Poor real-time visibility into workforce operations and attendance',
        'Lack of secure, offline-capable mobile HR solutions',
        "Existing HRM tools don't scale with organizational growth",
        'HR teams need unified platform for employee data, time tracking, and recruitment',
      ],
    },
    solution: {
      title: 'Our Solution',
      description:
        'PAYRUN delivers an all-in-one HRM mobile platform with a modular architecture, real-time updates, and offline support—ensuring reliability, speed, and ease of use. Built with Flutter for cross-platform deployment, BLoC for state management, and Hive for local storage.',
      approach: [
        'Developed cross-platform mobile app using Flutter (iOS & Android)',
        'Implemented BLoC architecture for predictable, scalable state management',
        'Integrated Hive database for fast, lightweight local storage with offline support',
        'Built REST API communication layer for backend synchronization',
        'Implemented push notifications for real-time alerts and updates',
        'Added socket-based communication for live events and status updates',
        'Designed modular UI components for long-term maintainability',
      ],
    },
    features: {
      title: 'Core Features',
      items: [
        {
          name: 'Employee Management',
          description:
            'Centralized employee profiles, role assignments, and organizational hierarchy',
        },
        {
          name: 'Time Tracking & Attendance',
          description:
            'Real-time clock in/out, GPS-based attendance, and automated timesheet generation',
        },
        {
          name: 'Leave & Absence Management',
          description:
            'Leave request submission, approval workflows, and balance tracking',
        },
        {
          name: 'Job Posting & Recruitment',
          description:
            'Internal job postings, application tracking, and candidate management',
        },
        {
          name: 'Centralized HR Dashboard',
          description:
            'At-a-glance workforce metrics, attendance summaries, and pending approvals',
        },
        {
          name: 'Real-time Notifications',
          description:
            'Push notifications for leave approvals, time reminders, and system updates',
        },
      ],
    },
    architecture: {
      title: 'App Architecture & Engineering',
      description:
        'PAYRUN follows a clean and modular architecture that separates business logic, UI, and data layers. This ensures maintainability, testability, and long-term scalability as the product evolves.',
      principles: [
        'Layered architecture with clear separation of concerns',
        'Reusable UI components across all screens',
        'Scalable BLoC state management pattern',
        'Offline-first design approach with data synchronization',
      ],
    },
    techStack: [
      'Flutter (Cross-platform iOS & Android)',
      'BLoC for state management',
      'Hive Database (local storage)',
      'REST APIs (backend communication)',
      'Push Notifications (FCM)',
      'Socket.IO (real-time events)',
      'Provider for dependency injection',
      'Custom UI component library',
    ],
    designPrinciples: {
      title: 'Design & UX Principles',
      description:
        'A clean, mobile-first UI focused on clarity, accessibility, and efficiency. The design system ensures consistency across screens while supporting future feature expansion.',
      elements: [
        'Modern, professional, and enterprise-ready interface',
        'Neutral color palette with subtle accent colors',
        'Rounded components with consistent spacing tokens',
        'Accessible typography optimized for mobile screens',
        'Intuitive navigation with bottom tab bar',
        'Clear visual hierarchy for complex workflows',
      ],
    },
    scalability: {
      title: 'Built for Scale',
      description:
        'The app is designed to support growing teams through efficient local caching, real-time data syncing, and a pay-as-you-go business model that allows businesses to scale users and job postings on demand.',
      features: [
        'Efficient local data caching for offline access',
        'Real-time data synchronization when online',
        'Multi-tenant architecture ready for SaaS deployment',
        'Pay-as-you-go pricing for users and job postings',
        'Modular feature flags for enterprise customization',
      ],
    },
    results: {
      title: 'Business Impact',
      metrics: [
        {
          label: 'HR Workflows',
          value: '3x Faster',
          description: 'Reduced time for common HR tasks',
        },
        {
          label: 'Workforce Visibility',
          value: 'Real-time',
          description: 'Live attendance and status tracking',
        },
        {
          label: 'Offline Support',
          value: '100%',
          description: 'Full functionality without internet',
        },
        {
          label: 'User Satisfaction',
          value: '4.6/5',
          description: 'Employee and HR admin ratings',
        },
      ],
      outcomes: [
        'Faster HR workflows with automated time tracking and approvals',
        'Improved workforce visibility through real-time dashboards',
        'Reduced operational overhead with centralized HR management',
        'Reliable offline access for field teams and remote workers',
        'Real-time employee updates and notifications',
      ],
    },
    workflow: {
      title: 'Development Workflow',
      steps: [
        {
          phase: 'Discovery & Planning',
          description:
            'User research with HR teams, feature prioritization, technical architecture design',
        },
        {
          phase: 'Design System',
          description:
            'Created mobile-first design system with reusable components and style tokens',
        },
        {
          phase: 'Core Development',
          description:
            'Built employee management, time tracking, and leave modules with offline support',
        },
        {
          phase: 'API Integration',
          description:
            'Integrated REST APIs, push notifications, and real-time socket communication',
        },
        {
          phase: 'Testing & Launch',
          description:
            'QA testing on iOS/Android, performance optimization, production deployment',
        },
      ],
    },
    nextSteps:
      'PAYRUN is production-ready with ongoing enhancements including advanced analytics, payroll integration, performance review modules, and white-label capabilities for enterprise clients.',
  },
};

export default function CaseStudyDetail() {
  const { openModal } = useModal();
  const { id } = useParams();
  const study = id ? caseStudyData[id] : null;

  if (!study) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-primary hover:underline">
            Back to Case Studies
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-4">
            {study.category}
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold font-['Space_Grotesk'] mb-6">
            {study.title}
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Client</div>
                <div className="font-semibold">{study.client}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Industry</div>
                <div className="font-semibold">{study.industry}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="text-sm text-muted-foreground">Timeline</div>
                <div className="font-semibold">{study.timeline}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          {/* Overview */}
          <div>
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
              Project <span className="text-primary">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {study.overview}
            </p>
          </div>

          {/* Problem */}
          <div className="bg-card border border-destructive/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6">
              {study.problem.title}
            </h2>
            <ul className="space-y-3">
              {study.problem.points.map((point: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-destructive"></div>
                  </div>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-4">
              {study.solution.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {study.solution.description}
            </p>
            <div className="bg-card border border-primary/20 rounded-xl p-6">
              <h3 className="font-semibold mb-4 text-primary">Our Approach</h3>
              <ul className="space-y-3">
                {study.solution.approach.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Features (if exists) */}
          {study.features && (
            <div>
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                {study.features.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {study.features.items.map((feature: any, idx: number) => (
                  <div
                    key={idx}
                    className="bg-card border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-primary">
                      {feature.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System Architecture (if exists) */}
          {study.architecture && (
            <div className="bg-card border border-primary/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                {study.architecture.title}
              </h2>
              {study.architecture.description && (
                <p className="text-muted-foreground mb-6">
                  {study.architecture.description}
                </p>
              )}
              <div className="space-y-4">
                {study.architecture.layers &&
                  study.architecture.layers.map((layer: any, idx: number) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-3 h-3 rounded-sm bg-primary"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary mb-1">
                          {layer.component}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {layer.tech}
                        </p>
                      </div>
                    </div>
                  ))}
                {study.architecture.principles &&
                  study.architecture.principles.map(
                    (principle: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {principle}
                        </span>
                      </div>
                    )
                  )}
              </div>
            </div>
          )}

          {/* Design Principles (if exists) */}
          {study.designPrinciples && (
            <div className="bg-gradient-to-br from-card to-secondary border border-primary/20 rounded-xl p-8">
              <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
                {study.designPrinciples.title}
              </h2>
              <p className="text-muted-foreground mb-6">
                {study.designPrinciples.description}
              </p>
              <ul className="space-y-3">
                {study.designPrinciples.elements.map(
                  (element: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">{element}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="bg-secondary/50 rounded-xl p-8">
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {study.techStack.map((tech: string, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-background/50 rounded-lg p-3"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow */}
          <div>
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-6">
              {study.workflow.title}
            </h2>
            <div className="space-y-4">
              {study.workflow.steps.map((step: any, idx: number) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-semibold text-sm">
                      {idx + 1}
                    </div>
                    {idx < study.workflow.steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-primary/20 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-semibold mb-1 text-primary">
                      {step.phase}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-8">
            <h2 className="text-3xl font-bold font-['Space_Grotesk'] mb-8 text-center">
              {study.results.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {study.results.metrics.map((metric: any, idx: number) => (
                <div
                  key={idx}
                  className="bg-background/50 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-background/50 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Key Outcomes</h3>
              <ul className="space-y-2">
                {study.results.outcomes.map((outcome: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scalability & Future Enhancements (if exists) */}
          {study.scalability && (
            <div className="bg-card border border-primary/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-6">
                {study.scalability.title}
              </h2>
              {study.scalability.description && (
                <p className="text-muted-foreground mb-6">
                  {study.scalability.description}
                </p>
              )}
              <ul className="space-y-3">
                {study.scalability.points &&
                  study.scalability.points.map((point: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                {study.scalability.features &&
                  study.scalability.features.map(
                    (feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    )
                  )}
              </ul>
            </div>
          )}

          {/* Next Steps */}
          <div className="bg-card border border-primary/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] mb-4">
              Next <span className="text-primary">Steps</span>
            </h2>
            <p className="text-muted-foreground">{study.nextSteps}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Want Similar <span className="text-primary">Results?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-primary text-background rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50 inline-flex items-center justify-center"
            >
              Book Free Consultation <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <Link
              to="/case-studies"
              className="px-8 py-4 bg-secondary border border-primary/30 text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-all"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
