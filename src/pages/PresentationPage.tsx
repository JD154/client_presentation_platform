import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import type { Client, Project, Presentation, Slide } from '../lib/types'
import { getClient } from '../lib/data/clients'
import { getProject } from '../lib/data/projects'
import { getPresentation } from '../lib/data/presentations'
import { PresentationLayout } from '../components/layout/PresentationLayout'
import { HeroSlide } from '../components/presentations/HeroSlide'
import { ValuePropositionSlide } from '../components/presentations/ValuePropositionSlide'
import { MetricsSlide } from '../components/presentations/MetricsSlide'
import { ScopeSlide } from '../components/presentations/ScopeSlide'
import { TimelineSlide } from '../components/presentations/TimelineSlide'
import { ArchitectureSlide } from '../components/presentations/ArchitectureSlide'
import { TeamSlide } from '../components/presentations/TeamSlide'
import { SecuritySlide } from '../components/presentations/SecuritySlide'
import { FutureExpansionSlide } from '../components/presentations/FutureExpansionSlide'
import { CTASlide } from '../components/presentations/CTASlide'

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

  const renderSlide = (slide: Slide, goToNext?: () => void) => {
    switch (slide.type) {
      case 'hero':
        return (
          <HeroSlide
            key={slide.id}
            content={slide.content as any}
            onNext={goToNext}
          />
        )

      case 'value-proposition':
        return (
          <ValuePropositionSlide
            key={slide.id}
            title={slide.title}
            content={slide.content as any}
          />
        )

      case 'metrics':
        return (
          <MetricsSlide
            key={slide.id}
            title={slide.title}
            content={slide.content as any}
          />
        )

      case 'scope':
        return (
          <ScopeSlide
            key={slide.id}
            title={slide.title}
            content={slide.content as any}
          />
        )

      case 'timeline':
        return (
          <TimelineSlide
            key={slide.id}
            title={slide.title}
            content={slide.content as any}
          />
        )

      case 'architecture':
        return (
          <ArchitectureSlide
            key={slide.id}
            title={slide.title}
            content={slide.content as any}
          />
        )

      case 'team':
        return (
          <TeamSlide
            key={slide.id}
            title={slide.title}
            content={slide.content as any}
          />
        )

      case 'security':
        return (
          <SecuritySlide
            key={slide.id}
            title={slide.title}
            content={slide.content as any}
          />
        )

      case 'future-expansion':
        return (
          <FutureExpansionSlide
            key={slide.id}
            title={slide.title}
            content={slide.content as any}
          />
        )

      case 'cta':
        return (
          <CTASlide
            key={slide.id}
            title={slide.title}
            content={slide.content as any}
          />
        )

      default:
        return (
          <div
            key={slide.id}
            className="h-full flex items-center justify-center bg-gray-100"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {slide.title}
              </h2>
              <p className="text-gray-600">
                Tipo de slide no implementado: {slide.type}
              </p>
            </div>
          </div>
        )
    }
  }

  if (!client || !project || !presentation) {
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
      {renderSlide}
    </PresentationLayout>
  )
}
