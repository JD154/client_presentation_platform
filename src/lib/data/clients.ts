import type { Client } from '../types'

// Mock clients data
const clients: Client[] = [
  {
    id: 'cn',
    name: 'Chetan Nandakumar',
    colors: {
      primary: '#3D6BA3',
      secondary: '#F4F9FE',
    },
    description: 'Client focused on AI solutions for process automation',
  },
  {
    id: 'ln',
    name: 'Lennon Ramirez',
    colors: {
      primary: '#1e293b',
      secondary: '#f1f5f9',
      accent: '#0ea5e9',
    },
    description:
      'Financial technology solutions focusing on reconciliation and ledger management',
  },
  {
    id: 'ab',
    name: 'Amir Benesh',
    colors: {
      primary: '#D4AF37',
      secondary: '#F5F1E8',
      accent: '#8B7355',
      background: '#0a0a0a',
    },
    description:
      'Visionary entrepreneur building exclusive community platforms where generosity defines access and AI enhances human connection',
  },
  {
    id: 'gb',
    name: 'Gay Burke',
    colors: {
      primary: '#00FF00',
      secondary: '#F5F5F5',
      accent: '#FF0000',
      background: '#1A1A1A',
    },
    description:
      'Transportation technology solutions focused on simplifying hauling operations and business intelligence',
  },
]

export function getAllClients(): Client[] {
  return clients
}

export function getClient(id: string): Client | null {
  return clients.find(client => client.id === id) || null
}

export async function loadClientData(clientId: string): Promise<Client | null> {
  // In a real app, this would fetch from an API or file system
  try {
    const response = await fetch(`/data/clients/${clientId}/client.json`)
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Error loading client data:', error)
  }

  return getClient(clientId)
}
