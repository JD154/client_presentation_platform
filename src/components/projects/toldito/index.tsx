import type { Slide } from '../../../lib/types'
import { HeroSlide } from './HeroSlide'
import { ValuePropositionSlide } from './ValuePropositionSlide'
import { HowItWorksSlide } from './HowItWorksSlide'
import { BenefitsSlide } from './BenefitsSlide'
import { TimelineSlide } from './TimelineSlide'
import { QASlide } from './QASlide'
import { TechApproachSlide } from './TechApproachSlide'
import { CTASlide } from './CTASlide'
import { TeamSlide } from './TeamSlide'

/**
 * Render function for Toldito project slides
 * Maps slide types to their corresponding React components
 */
export function renderSlide(slide: Slide, goToNext?: () => void) {
  switch (slide.type) {
    case 'hero':
      return <HeroSlide key={slide.id} onNext={goToNext} />

    case 'value-proposition':
      return <ValuePropositionSlide key={slide.id} />

    case 'custom':
      // Handle custom slide types based on ID
      if (slide.id === 'how-it-works') {
        return <HowItWorksSlide key={slide.id} />
      } else if (slide.id === 'qa') {
        return <QASlide key={slide.id} />
      } else if (slide.id === 'tech-approach') {
        return <TechApproachSlide key={slide.id} />
      }
      // Fallback for unknown custom slides
      return (
        <div
          key={slide.id}
          className="h-full flex items-center justify-center bg-gray-100"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {slide.title}
            </h2>
            <p className="text-gray-600">Custom slide: {slide.id}</p>
          </div>
        </div>
      )

    case 'metrics':
      return <BenefitsSlide key={slide.id} />

    case 'timeline':
      return <TimelineSlide key={slide.id} />

    case 'team':
      return <TeamSlide key={slide.id} />

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
