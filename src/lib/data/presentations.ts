import type {
  Presentation,
  HeroSlideContent,
  ValuePropositionSlideContent,
  MetricsSlideContent,
  ScopeSlideContent,
  TimelineSlideContent,
  ArchitectureSlideContent,
  TeamSlideContent,
  SecuritySlideContent,
  FutureExpansionSlideContent,
  CTASlideContent,
} from '../types'

// Complete presentation data for FLO project based on detailed proposal
const floPresentation: Presentation = {
  projectId: 'flo',
  config: {
    title: 'FLO — Intelligent Communication Platform',
    subtitle:
      'Transforming Communications Through AI-Powered Prioritization and Drafting',
    theme: 'client',
    transitions: true,
    duration: 45,
  },
  slides: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Meet FLO',
      animation: 'fade-in',
      content: {
        subtitle: 'The Future of Intelligent Communication',
        description:
          'FLO delivers immediate, compounding value by prioritizing critical communications and drafting high-quality replies in seconds. Transform your inbox from chaos to clarity with AI that understands what matters most.',
        backgroundImage: '/api/placeholder/1920/1080',
        ctaText: 'Discover The Vision',
        ctaLink: '#value-proposition',
      } as HeroSlideContent,
    },
    {
      id: 'value-proposition',
      type: 'value-proposition',
      title: 'Revolutionizing Communication Efficiency',
      animation: 'slide-in-up',
      content: {
        mainValue:
          'FLO is an input-centric platform designed to connect multiple sources into a single prioritization and drafting engine, starting with Gmail for speed and safety.',
        benefits: [
          {
            title: 'Time Savings',
            description:
              'Reduce average response time to priority emails by 50% within 2 weeks',
            icon: 'clock',
            metric: '50%',
          },
          {
            title: 'Auto-Triage Coverage',
            description:
              'Automated classification with high perceived precision and feedback loops',
            icon: 'target',
            metric: '≥30%',
          },
          {
            title: 'Lightning Speed',
            description:
              'First draft generation in seconds with thread context understanding',
            icon: 'zap',
            metric: '≤3s',
          },
          {
            title: 'Security First',
            description:
              'Zero P0 incidents with OAuth/OIDC and encrypted data handling',
            icon: 'shield',
            metric: '100%',
          },
        ],
        outcomes: [
          {
            label: 'Immediate Productivity',
            description: 'Users see value within first week of use',
            icon: 'trending-up',
          },
          {
            label: 'Compounding Returns',
            description: 'AI learns and improves with each interaction',
            icon: 'lightbulb',
          },
          {
            label: 'Seamless Integration',
            description: 'Works within existing Gmail workflow',
            icon: 'check-circle',
          },
          {
            label: 'Future Ready',
            description: 'Extensible to multiple communication channels',
            icon: 'users',
          },
        ],
      } as ValuePropositionSlideContent,
    },
    {
      id: 'metrics',
      type: 'metrics',
      title: 'Guaranteed Business Outcomes (V1)',
      animation: 'slide-in-up',
      content: {
        metrics: [
          {
            label: 'Response Time Reduction',
            value: '~50%',
            description:
              'Average time to respond to priority emails within 2 weeks',
            icon: 'clock',
          },
          {
            label: 'Auto-Triage Precision',
            value: '≥85%',
            description:
              'Perceived precision with thumbs up/down feedback loop',
            icon: 'target',
          },
          {
            label: 'Draft Generation Speed',
            value: '≤3s P50',
            description: 'P50 / ≤7s P95 for threads ≤10 messages',
            icon: 'zap',
          },
          {
            label: 'Security Incidents',
            value: '0',
            description: 'P0 incidents with OAuth/OIDC & encrypted PII',
            icon: 'trending-up',
          },
        ],
      } as MetricsSlideContent,
    },
    {
      id: 'scope',
      type: 'scope',
      title: 'Structured Development Scope',
      animation: 'slide-in-right',
      content: {
        must: [
          {
            title: 'Google OAuth Integration',
            description:
              'Minimal scopes with secure token handling and session management',
            priority: 'must' as const,
          },
          {
            title: 'Message Ingestion & Normalization',
            description:
              'Recent messages normalized from MIME to canonical JSON format',
            priority: 'must' as const,
          },
          {
            title: 'Priority Inbox Engine',
            description:
              'Rules + lightweight model with clear explanations for rankings',
            priority: 'must' as const,
          },
          {
            title: 'Assisted Draft Generation',
            description:
              'Reply/forward/new with thread context, selectable tone, source citation',
            priority: 'must' as const,
          },
          {
            title: 'Minimal UI Experience',
            description:
              'Priority list, thread view, context panel, "Generate draft" functionality',
            priority: 'must' as const,
          },
          {
            title: 'Telemetry & Observability',
            description:
              'Feedback loops, feature flags, and comprehensive monitoring',
            priority: 'must' as const,
          },
        ],
        should: [
          {
            title: 'Advanced Rules Engine',
            description:
              'VIP handling, SLA management, keyword-based categorization',
            priority: 'should' as const,
          },
          {
            title: 'RAG Knowledge Base',
            description:
              'pgvector-powered knowledge base for contextual responses',
            priority: 'should' as const,
          },
          {
            title: 'Reply Templates',
            description: 'Reusable templates for common response patterns',
            priority: 'should' as const,
          },
          {
            title: 'User Settings & Preferences',
            description:
              'Customizable rules, tone preferences, notification settings',
            priority: 'should' as const,
          },
        ],
        could: [
          {
            title: 'Slack/Teams Integration',
            description:
              'Cross-platform notifications and quick reply capabilities',
            priority: 'could' as const,
          },
          {
            title: 'Daily Summaries',
            description:
              'Automated digest generation with key highlights and actions',
            priority: 'could' as const,
          },
          {
            title: 'Prompt A/B Testing',
            description:
              'Experimental framework for optimizing AI prompt performance',
            priority: 'could' as const,
          },
        ],
      } as ScopeSlideContent,
    },
    {
      id: 'timeline',
      type: 'timeline',
      title: 'Concurrent Development Roadmap (6 Sprints)',
      animation: 'slide-in-right',
      content: {
        phases: [
          {
            title: 'Sprint 1-2: Foundation & Core Auth (Dec 1 - Dec 28)',
            duration: '4 weeks',
            description:
              'Infrastructure setup, Google OAuth, and Priority Inbox foundation with complete ingestion pipeline',
            deliverables: [
              'Functional login with OAuth/OIDC security',
              'Gmail ingestion with deduplication and MIME parsing',
              'Priority listing with AI explanations',
              'End-to-end tracing and logging infrastructure',
              'Internal demo ready for pilot users',
            ],
          },
          {
            title:
              'Sprint 3-4: Intelligence & Assisted Drafts (Dec 29 - Jan 25)',
            duration: '4 weeks',
            description:
              'AI-powered prioritization with explanations and assisted draft generation with guardrails',
            deliverables: [
              'Stable prioritizer with consistent rankings',
              'First assisted drafts with thread grounding',
              'Tone selection and citation implementation',
              'Human-in-the-loop validation workflows',
              'Pilot-ready for ≤5 users',
            ],
          },
          {
            title: 'Sprint 5-6: Performance & Production (Jan 26 - Feb 22)',
            duration: '4 weeks',
            description:
              'Telemetry implementation, performance optimization, and production hardening for scale',
            deliverables: [
              'Live feedback loops and user telemetry',
              'Performance targets achieved (≤3s P50)',
              'Security posture reviews and hardening',
              'V1 complete and ready for expansion',
              'Scalability testing and cost monitoring',
            ],
          },
        ],
      } as TimelineSlideContent,
    },
    {
      id: 'architecture',
      type: 'architecture',
      title: 'Service-Agnostic & Extensible Architecture',
      animation: 'slide-in-up',
      content: {
        components: [
          {
            name: 'Gmail Adapter (V1)',
            description:
              'Secure OAuth with incremental pull, dedupe, MIME parse, backoff strategies',
            icon: 'mail',
            connections: ['prioritizer', 'drafts'],
          },
          {
            name: 'Prioritizer Engine',
            description:
              'Rules + lightweight model with explanations, user feedback integration',
            icon: 'brain',
            connections: ['store', 'telemetry'],
          },
          {
            name: 'Assisted Drafts Service',
            description:
              'Prompt orchestration, guardrails, citation, human-in-the-loop validation',
            icon: 'message-square',
            connections: ['store', 'auth'],
          },
          {
            name: 'Auth & Security Layer',
            description:
              'OIDC/OAuth, minimal scopes, encrypted PII, least privilege access',
            icon: 'lock',
            connections: ['all-services'],
          },
          {
            name: 'Postgres + pgvector',
            description:
              'Secure data store with vector search, multi-tenant isolation',
            icon: 'database',
            connections: ['knowledge-base'],
          },
          {
            name: 'Observability Stack',
            description:
              'OpenTelemetry, structured logging, metrics, feature flags',
            icon: 'bar-chart',
            connections: ['monitoring'],
          },
          {
            name: 'Future Adapters',
            description: 'Ready for Slack, Teams, WhatsApp, webhooks expansion',
            icon: 'link',
            connections: ['prioritizer'],
          },
          {
            name: 'Redis + BullMQ',
            description:
              'Job queues, caching, background processing for scalability',
            icon: 'zap',
            connections: ['processing'],
          },
        ],
      } as ArchitectureSlideContent,
    },
    {
      id: 'team',
      type: 'team',
      title: 'Cross-Functional Team & Methodology',
      animation: 'slide-in-up',
      content: {
        methodology:
          'Concurrent workstreams with 2-week sprints to minimize time-to-value while reducing risk',
        team: [
          {
            role: 'DevOps',
            focus: 'Infrastructure, CI/CD, observability, security hardening',
            experience:
              '~4 hours/day focused on scalable infrastructure patterns',
          },
          {
            role: 'Backend',
            focus: 'API/BFF, domain models, AI integration, data processing',
            experience:
              '~4 hours/day on service orchestration and business logic',
          },
          {
            role: 'Frontend',
            focus:
              'React UI, user experience, real-time updates, accessibility',
            experience:
              '~4 hours/day on intuitive interfaces and responsive design',
          },
          {
            role: 'QA',
            focus: 'Test automation, performance validation, security testing',
            experience: '~4 hours/day on quality gates and acceptance criteria',
          },
        ],
        workstreams: [
          {
            name: 'Infrastructure & Security',
            description: 'DevOps + QA security validation',
            duration: 'Continuous',
          },
          {
            name: 'Core Platform Development',
            description: 'Backend + Frontend integration',
            duration: 'Sprint-based',
          },
          {
            name: 'AI & Intelligence Layer',
            description: 'Backend AI + Frontend UX optimization',
            duration: 'Parallel tracks',
          },
          {
            name: 'Quality & Performance',
            description: 'QA + DevOps monitoring and optimization',
            duration: 'Cross-sprint',
          },
        ],
        collaboration: [
          {
            aspect: 'Ownership Model (CN Aligned)',
            description:
              'CN owns domain models, business logic, and UI decisions. UKLOK provides reusable infrastructure patterns and knowledge systems.',
          },
          {
            aspect: 'Communication Cadence',
            description:
              'Weekly demos, telemetry reviews, backlog refinement. Ad-hoc product syncs as needed for rapid iteration.',
          },
          {
            aspect: 'Deliverables Per Sprint',
            description:
              'Running build in staging, demoable flows, technical documentation, rollback plans for safe deployment.',
          },
          {
            aspect: 'Quality Gates',
            description:
              'DoR/DoD validation, performance benchmarks, security reviews, user acceptance testing before each release.',
          },
        ],
      } as TeamSlideContent,
    },
    {
      id: 'security',
      type: 'security',
      title: 'Security & Compliance Framework',
      animation: 'slide-in-up',
      content: {
        principles: [
          {
            title: 'Minimal Scopes & Least Privilege',
            description:
              'OAuth with minimal required scopes, role-based access controls, and principle of least privilege throughout',
            icon: 'key',
            implementation: [
              'Gmail API minimal read/write scopes only',
              'Role-based access control (RBAC) implementation',
              'Token rotation and expiration policies',
              'Audit trails for all access patterns',
            ],
          },
          {
            title: 'Encryption Everywhere',
            description:
              'PII encrypted at rest and in transit, secure token handling, and data minimization practices',
            icon: 'lock',
            implementation: [
              'AES-256 encryption for data at rest',
              'TLS 1.3 for all data in transit',
              'Encrypted database connections',
              'Secure key management with rotation',
            ],
          },
          {
            title: 'Privacy by Design',
            description:
              'PII minimization, data retention policies, and user control over personal information',
            icon: 'shield',
            implementation: [
              'Minimal PII collection and storage',
              'User-controlled data retention settings',
              'Right to deletion and data export',
              'Privacy-preserving analytics and logging',
            ],
          },
          {
            title: 'Zero Trust Architecture',
            description:
              'No implicit trust, continuous verification, and comprehensive monitoring of all components',
            icon: 'eye',
            implementation: [
              'Continuous authentication validation',
              'Network segmentation and micro-perimeters',
              'Comprehensive audit logging',
              'Real-time threat detection and response',
            ],
          },
        ],
        compliance: [
          {
            standard: 'OAuth 2.0 / OIDC',
            description:
              'Industry standard authentication with secure token handling',
            status: 'implemented' as const,
          },
          {
            standard: 'GDPR Compliance',
            description: 'European data protection regulation adherence',
            status: 'planned' as const,
          },
          {
            standard: 'SOC 2 Type II',
            description: 'Security, availability, and confidentiality controls',
            status: 'planned' as const,
          },
          {
            standard: 'ISO 27001',
            description: 'Information security management system standards',
            status: 'planned' as const,
          },
          {
            standard: 'CCPA Compliance',
            description: 'California Consumer Privacy Act requirements',
            status: 'planned' as const,
          },
          {
            standard: 'Data Encryption',
            description: 'AES-256 encryption at rest, TLS 1.3 in transit',
            status: 'implemented' as const,
          },
        ],
      } as SecuritySlideContent,
    },
    {
      id: 'future-expansion',
      type: 'future-expansion',
      title: 'Future Possibilities After V1',
      animation: 'slide-in-right',
      content: {
        vision:
          'One intelligent interface for all communication channels, learning your style and handling routine tasks automatically',
        expansions: [
          {
            category: 'AI & Intelligence',
            title: 'Knowledge-Grounded Answers',
            description:
              'Replies reinforced with company context and cited sources to build trust and accuracy',
            impact: 'high' as const,
            effort: 'medium' as const,
            icon: 'brain',
          },
          {
            category: 'AI & Intelligence',
            title: 'Smart Follow-ups & Reminders',
            description:
              'Automatic nudges and reminders to keep conversations moving after meetings or time-sensitive threads',
            impact: 'medium' as const,
            effort: 'low' as const,
            icon: 'clock',
          },
          {
            category: 'AI & Intelligence',
            title: 'Summaries That Matter',
            description:
              'Daily digests and topic snapshots for fast catch-up on busy channels and conversations',
            impact: 'medium' as const,
            effort: 'low' as const,
            icon: 'bar-chart',
          },
          {
            category: 'Automation & Workflow',
            title: 'Assisted Replies Everywhere',
            description:
              'Draft, refine, and send with your voice and tone across all channels with reusable templates',
            impact: 'high' as const,
            effort: 'medium' as const,
            icon: 'message-square',
          },
          {
            category: 'Automation & Workflow',
            title: 'Rules and Automations',
            description:
              'Personal and team workflows to triage, route, label, and assign - no-code where possible',
            impact: 'medium' as const,
            effort: 'medium' as const,
            icon: 'settings',
          },
          {
            category: 'Enterprise & Scale',
            title: 'Controls and Compliance',
            description:
              'Fine-grained permissions, audit trails, and privacy-by-design for enterprise readiness',
            impact: 'medium' as const,
            effort: 'high' as const,
            icon: 'shield',
          },
          {
            category: 'Enterprise & Scale',
            title: 'Insights and Performance',
            description:
              'Live dashboards for time saved, response SLAs, and quality signals from user feedback',
            impact: 'medium' as const,
            effort: 'medium' as const,
            icon: 'bar-chart',
          },
          {
            category: 'Enterprise & Scale',
            title: 'Everywhere You Work',
            description:
              'Mobile-friendly experience (PWA), notifications, and flexible APIs to embed FLO into your tools',
            impact: 'high' as const,
            effort: 'high' as const,
            icon: 'smartphone',
          },
          {
            category: 'Multi-Channel Integration',
            title: 'Omnichannel Expansion',
            description:
              'Connect Slack, Microsoft Teams, WhatsApp, Telegram - one intelligent inbox for everything',
            impact: 'high' as const,
            effort: 'low' as const,
            icon: 'message-square',
          },
          {
            category: 'Multi-Channel Integration',
            title: 'Cross-Channel Prioritization',
            description:
              'Unified view that surfaces what truly needs attention, regardless of source platform',
            impact: 'high' as const,
            effort: 'medium' as const,
            icon: 'zap',
          },
        ],
      } as FutureExpansionSlideContent,
    },
    {
      id: 'cta',
      type: 'cta',
      title: 'Ready to Transform Your Communication Workflow?',
      animation: 'fade-in',
      content: {
        primaryAction: {
          text: 'Start Your FLO Journey Today',
          link: "mailto:chetan@uklok.com?subject=FLO Project - Let's Begin",
        },
        secondaryAction: {
          text: 'Schedule Strategic Demo',
          link: 'https://calendly.com/uklok/flo-strategic-demo',
        },
        contact: {
          email: 'hello@uklok.com',
          phone: '+1 (555) FLO-TEAM',
          website: 'uklok.com/flo',
        },
      } as CTASlideContent,
    },
  ],
}

export function getPresentation(projectId: string): Presentation | null {
  // In a real app, this would load from files or API
  if (projectId === 'flo' || projectId === 'ai-assistant') {
    return floPresentation
  }
  return null
}

export async function loadPresentationData(
  clientId: string,
  projectId: string
): Promise<Presentation | null> {
  try {
    const response = await fetch(
      `/data/clients/${clientId}/projects/${projectId}/content.json`
    )
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Error loading presentation data:', error)
  }

  return getPresentation(projectId)
}
