import type { Presentation } from '../types'

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
    },
    {
      id: 'value-proposition',
      type: 'value-proposition',
      title: 'Revolutionizing Communication Efficiency',
      animation: 'slide-in-up',
    },
    {
      id: 'metrics',
      type: 'metrics',
      title: 'Guaranteed Business Outcomes',
      animation: 'slide-in-up',
    },
    {
      id: 'scope',
      type: 'scope',
      title: 'Structured Development Scope',
      animation: 'slide-in-right',
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
      id: 'team',
      type: 'team',
      title: 'Cross-Functional Team & Methodology',
      animation: 'slide-in-up',
    },
    {
      id: 'security',
      type: 'security',
      title: 'Security & Compliance Framework',
      animation: 'slide-in-up',
    },
    {
      id: 'future-expansion',
      type: 'future-expansion',
      title: 'Future Possibilities After V1',
      animation: 'slide-in-right',
    },
    {
      id: 'cta',
      type: 'cta',
      title: 'Ready to Transform Your Communication Workflow?',
      animation: 'fade-in',
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
