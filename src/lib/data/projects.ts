import type { Project } from '../types'

// Mock projects data
const projects: Project[] = [
  {
    id: 'flo',
    clientId: 'cn',
    name: 'FLO — Intelligent Communication Assistant',
    description:
      'Revolutionary AI-powered platform that prioritizes communications and drafts high-quality replies in seconds',
    status: 'active',
    createdAt: '2025-11-01T00:00:00Z',
    updatedAt: '2025-11-08T00:00:00Z',
    tags: [
      'AI',
      'Communication',
      'Productivity',
      'Gmail',
      'Prioritization',
      'Drafting',
    ],
  },
  {
    id: 'toldito',
    clientId: 'lr',
    name: 'Toldito — Módulo de Conciliación',
    description:
      'Reconciliation module for financial ledger with full traceability and audit capabilities',
    status: 'active',
    createdAt: '2025-11-14T00:00:00Z',
    updatedAt: '2025-11-14T00:00:00Z',
    tags: ['FinTech', 'Reconciliation', 'Ledger', 'Audit', 'BullMQ', 'Hasura'],
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProject(projectId: string): Project | null {
  return projects.find(project => project.id === projectId) || null
}

export function getClientProjects(clientId: string): Project[] {
  return projects.filter(project => project.clientId === clientId)
}

export async function loadProjectData(
  clientId: string,
  projectId: string
): Promise<Project | null> {
  try {
    const response = await fetch(
      `/data/clients/${clientId}/projects/${projectId}/config.json`
    )
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Error loading project data:', error)
  }

  return getProject(projectId)
}
