import type { Slide } from '../../../lib/types'
import {
  HeroSlide,
  GuidingQuestionSlide,
  ExecutiveSynthesisSlide,
  TrustAndAccessSlide,
  WelcomeSlide,
  ConciergeDirectionSlide,
  JudgmentSignalSlide,
  OptionalitySlide,
  FutureUnlocksSlide,
  ClosingSlide,
} from './index'

/**
 * Slide renderer for Kimani 2025 Review presentation
 */
export function renderSlide(slide: Slide, goToNext?: () => void) {
  switch (slide.id) {
    case 'hero':
      return <HeroSlide key={slide.id} onNext={goToNext} />
    case 'guiding-question':
      return <GuidingQuestionSlide key={slide.id} />
    case 'executive-synthesis':
      return <ExecutiveSynthesisSlide key={slide.id} />
    case 'trust-and-access':
      return <TrustAndAccessSlide key={slide.id} />
    case 'welcome':
      return <WelcomeSlide key={slide.id} />
    case 'concierge-direction':
      return <ConciergeDirectionSlide key={slide.id} />
    case 'judgment-signal':
      return <JudgmentSignalSlide key={slide.id} />
    case 'optionality':
      return <OptionalitySlide key={slide.id} />
    case 'future-unlocks':
      return <FutureUnlocksSlide key={slide.id} />
    case 'closing':
      return <ClosingSlide key={slide.id} />
    default:
      return (
        <div
          key={slide.id}
          className="flex items-center justify-center h-full bg-[#0a0a0a] text-[#F5F1E8]"
        >
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-light">{slide.title}</h2>
            <p className="text-[#D4AF37]">Slide en desarrollo</p>
          </div>
        </div>
      )
  }
}
