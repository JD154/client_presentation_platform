import type { Presentation, Slide } from '../../types'
import { floPresentation } from './flo'
import { tolditoPresentation } from './toldito'
import { kimaniPresentation } from './kimani'

// Import project-specific renderers
import { renderSlide as renderFloSlide } from '../../../components/projects/flo'
import { renderSlide as renderTolditoSlide } from '../../../components/projects/toldito'
import { renderSlide as renderKimaniSlide } from '../../../components/projects/kimani/presenter'

/**
 * Presentation data registry
 * Maps projectId to their presentation configuration
 */
const presentationRegistry: Record<string, Presentation> = {
  flo: floPresentation,
  toldito: tolditoPresentation,
  kimani: kimaniPresentation,
}

/**
 * Slide renderer registry
 * Maps projectId to their custom slide rendering function
 */
type SlideRenderer = (slide: Slide, goToNext?: () => void) => React.ReactNode

const rendererRegistry: Record<string, SlideRenderer> = {
  flo: renderFloSlide,
  'ai-assistant': renderFloSlide, // Reusing FLO renderer for ai-assistant
  toldito: renderTolditoSlide,
  kimani: renderKimaniSlide,
}

/**
 * Get presentation configuration for a project
 */
export function getPresentation(projectId: string): Presentation | null {
  return presentationRegistry[projectId] || null
}

/**
 * Get slide renderer function for a project
 */
export function getSlideRenderer(projectId: string): SlideRenderer | undefined {
  return rendererRegistry[projectId]
}

/**
 * Load presentation data from file system (for dynamic loading)
 */
export async function loadPresentationData(
  clientId: string,
  projectId: string
): Promise<Presentation | null> {
  try {
    const response = await fetch(
      `/data/clients/${clientId}/projects/${projectId}/content.json`
    )
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.error('Error loading presentation data:', error)
  }

  // Fallback to registry
  return getPresentation(projectId)
}

/**
 * Get default fallback slide renderer for projects without custom renderer
 */
export function defaultSlideRenderer(
  slide: Slide,
  _goToNext?: () => void
): React.ReactNode {
  return (
    <div
      key={slide.id}
      className="flex items-center justify-center h-full bg-gray-100"
    >
      <div className="text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">{slide.title}</h2>
        <p className="text-gray-600">
          Presentación en desarrollo para este proyecto
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Tipo de slide: {slide.type}
        </p>
      </div>
    </div>
  )
}
