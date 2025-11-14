import type { Presentation } from '../../types'

/**
 * Complete presentation data for FLO project
 * Based on the detailed proposal for intelligent communication platform
 */
export const floPresentation: Presentation = {
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
    },
    {
      id: 'value-proposition',
      type: 'value-proposition',
      title: 'Revolutionizing Communication Efficiency',
      animation: 'slide-in-up',
    },
    {
      id: 'scope',
      type: 'scope',
      title: 'Structured Development Scope',
      animation: 'slide-in-right',
    },
    {
      id: 'team',
      type: 'team',
      title: 'Cross-Functional Team & Methodology',
      animation: 'slide-in-up',
    },
    {
      id: 'timeline',
      type: 'timeline',
      title: 'Concurrent Development Roadmap (6 Sprints)',
      animation: 'slide-in-right',
    },
    {
      id: 'architecture',
      type: 'architecture',
      title: 'Service-Agnostic & Extensible Architecture',
      animation: 'slide-in-up',
    },
    {
      id: 'future-expansion',
      type: 'future-expansion',
      title: 'Future Possibilities After V1',
      animation: 'slide-in-right',
    },
    {
      id: 'security',
      type: 'security',
      title: 'Security & Compliance Framework',
      animation: 'slide-in-up',
    },
    {
      id: 'cta',
      type: 'cta',
      title: 'Ready to Transform Your Communication Workflow?',
      animation: 'fade-in',
    },
  ],
}
