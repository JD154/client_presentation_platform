import type { Presentation } from '../../types'

/**
 * Complete presentation data for Kimani project
 * Revolutionary members club platform by Amir Benesh
 */
export const kimaniPresentation: Presentation = {
  projectId: 'kimani',
  config: {
    title: 'Kimani — Heart, Memory & Mind',
    subtitle:
      'Giving Your Club a Heart, a Memory, and a Mind - From kibbutz roots to global community where exclusivity is earned by generosity',
    theme: 'client',
    transitions: true,
    duration: 35,
  },
  slides: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Kimani',
      animation: 'fade-in',
    },
    {
      id: 'origin-story',
      type: 'custom',
      title: 'From the Negev to the World',
      animation: 'slide-in-up',
    },
    {
      id: 'value-proposition',
      type: 'value-proposition',
      title: 'The Three Organs of Kimani',
      animation: 'slide-in-right',
    },
    {
      id: 'klife-token',
      type: 'custom',
      title: 'KLIFE Token & Rollout Phases',
      animation: 'slide-in-up',
    },
    {
      id: 'partnership',
      type: 'custom',
      title: 'Ownership & Partnership',
      animation: 'slide-in-right',
    },
    {
      id: 'cta',
      type: 'cta',
      title: 'Ready to Begin?',
      animation: 'fade-in',
    },
  ],
}
