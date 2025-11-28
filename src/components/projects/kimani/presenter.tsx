import type { Slide } from '../../../lib/types'
import {
  HeroSlide,
  OriginStorySlide,
  ValuePropositionSlide,
  KlifeTokenSlide,
  PartnershipSlide,
  CTASlide,
} from './index'

/**
 * Render function for Kimani project slides
 * Maps slide types to their corresponding React components
 */
export function renderSlide(slide: Slide, goToNext?: () => void) {
  switch (slide.type) {
    case 'hero':
      return <HeroSlide key={slide.id} onNext={goToNext} />

    case 'value-proposition':
      return <ValuePropositionSlide key={slide.id} />

    case 'cta':
      return <CTASlide key={slide.id} onNext={goToNext} />

    // Custom slide types for Kimani
    case 'custom':
      switch (slide.id) {
        case 'origin-story':
          return <OriginStorySlide key={slide.id} />

        case 'klife-token':
          return <KlifeTokenSlide key={slide.id} />

        case 'partnership':
          return <PartnershipSlide key={slide.id} />

        default:
          return (
            <div
              key={slide.id}
              className="h-full flex items-center justify-center bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]"
            >
              <div className="text-center">
                <h2 className="text-3xl font-light text-[#F5F1E8] font-serif mb-4">
                  {slide.title}
                </h2>
                <p className="text-[#D4AF37] font-light">
                  Custom slide in development: {slide.id}
                </p>
              </div>
            </div>
          )
      }

    default:
      return (
        <div
          key={slide.id}
          className="h-full flex items-center justify-center bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]"
        >
          <div className="text-center">
            <h2 className="text-3xl font-light text-[#F5F1E8] font-serif mb-4">
              {slide.title}
            </h2>
            <p className="text-[#D4AF37] font-light">
              Slide type not implemented: {slide.type}
            </p>
          </div>
        </div>
      )
  }
}

// Re-export all slide components
export * from './index'
