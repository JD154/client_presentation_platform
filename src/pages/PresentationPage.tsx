import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type { Client, Project, Presentation } from '../lib/types'
import { getClient } from '../lib/data/clients'
import { getProject } from '../lib/data/projects'
import {
  getPresentation,
  getSlideRenderer,
  defaultSlideRenderer,
} from '../lib/data/presentations'
import { PresentationLayout } from '../components/layout/PresentationLayout'

export function PresentationPage() {
  const { clientId, projectId } = useParams<{
    clientId: string
    projectId: string
  }>()
  const navigate = useNavigate()
  const [client, setClient] = useState<Client | null>(null)
  const [project, setProject] = useState<Project | null>(null)
  const [presentation, setPresentation] = useState<Presentation | null>(null)

  useEffect(() => {
    if (clientId && projectId) {
      const clientData = getClient(clientId)
      const projectData = getProject(projectId)
      const presentationData = getPresentation(projectId)

      setClient(clientData)
      setProject(projectData)
      setPresentation(presentationData)
    }
  }, [clientId, projectId])

  const handleGoHome = () => {
    navigate(`/client/${clientId}`)
  }

  // Get the appropriate slide renderer for this project
  const slideRenderer = projectId
    ? getSlideRenderer(projectId) || defaultSlideRenderer
    : defaultSlideRenderer

  if (
    !client ||
    !project ||
    !presentation ||
    !presentation.slides ||
    presentation.slides.length === 0
  ) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando presentación...</p>
        </div>
      </div>
    )
  }

  return (
    <PresentationLayout
      slides={presentation.slides}
      client={client}
      onHome={handleGoHome}
    >
      {slideRenderer}
    </PresentationLayout>
  )
}
