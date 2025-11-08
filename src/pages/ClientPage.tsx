import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Plus } from 'lucide-react'
import type { Client, Project } from '../lib/types'
import { getClient } from '../lib/data/clients'
import { getClientProjects } from '../lib/data/projects'
import { ClientHeader } from '../components/client/ClientHeader'
import { ProjectGrid } from '../components/client/ProjectGrid'
import { Button } from '../components/ui/button'

export function ClientPage() {
  const { clientId } = useParams<{ clientId: string }>()
  const navigate = useNavigate()
  const [client, setClient] = useState<Client | null>(null)
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    if (clientId) {
      const clientData = getClient(clientId)
      setClient(clientData)

      if (clientData) {
        const projectsData = getClientProjects(clientId)
        setProjects(projectsData)
      }
    }
  }, [clientId])

  const handleViewPresentation = (projectId: string) => {
    navigate(`/client/${clientId}/project/${projectId}`)
  }

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Cliente no encontrado
          </h2>
          <Button onClick={() => navigate('/')} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al Inicio
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <ClientHeader client={client} />

      {/* Navigation */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Todos los Clientes
          </Button>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Proyectos</h2>
              <p className="text-muted-foreground mt-1">
                {projects.length}{' '}
                {projects.length === 1 ? 'proyecto' : 'proyectos'} disponibles
              </p>
            </div>

            <Button variant="outline" className="gap-2">
              <Plus className="h-4 w-4" />
              Nuevo Proyecto
            </Button>
          </div>

          <ProjectGrid
            projects={projects}
            onViewPresentation={handleViewPresentation}
          />
        </motion.div>
      </main>
    </div>
  )
}
