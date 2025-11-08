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
