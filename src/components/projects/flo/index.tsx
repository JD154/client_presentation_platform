import type { Slide } from '../../../lib/types'
import { HeroSlide } from './HeroSlide'
import { ValuePropositionSlide } from './ValuePropositionSlide'
import { MetricsSlide } from './MetricsSlide'
import { ScopeSlide } from './ScopeSlide'
import { TimelineSlide } from './TimelineSlide'
import { ArchitectureSlide } from './ArchitectureSlide'
import { TeamSlide } from './TeamSlide'
import { SecuritySlide } from './SecuritySlide'
import { FutureExpansionSlide } from './FutureExpansionSlide'
import { CTASlide } from './CTASlide'

/**
 * Render function for FLO project slides
 * Maps slide types to their corresponding React components
 */
export function renderSlide(slide: Slide, goToNext?: () => void) {
  switch (slide.type) {
    case 'hero':
      return <HeroSlide key={slide.id} onNext={goToNext} />

    case 'value-proposition':
      return <ValuePropositionSlide key={slide.id} />

    case 'metrics':
      return <MetricsSlide key={slide.id} />

    case 'scope':
      return <ScopeSlide key={slide.id} />

    case 'timeline':
      return <TimelineSlide key={slide.id} />

    case 'architecture':
      return <ArchitectureSlide key={slide.id} />

    case 'team':
      return <TeamSlide key={slide.id} />

    case 'security':
      return <SecuritySlide key={slide.id} />

    case 'future-expansion':
      return <FutureExpansionSlide key={slide.id} />

    case 'cta':
      return <CTASlide key={slide.id} />

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
