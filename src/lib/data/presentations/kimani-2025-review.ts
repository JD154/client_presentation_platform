import type { Presentation } from '../../types'

/**
 * Complete presentation data for Kimani 2025 Annual Review
 * Executive report on execution and experiential impact
 */
export const kimani2025ReviewPresentation: Presentation = {
  projectId: 'kimani-2025-review',
  config: {
    title: 'Kimani Workspace — 2025 Annual Review',
    subtitle:
      'Execution & Experiential Impact: How 2025 execution translated into member experience elevation',
    theme: 'client',
    transitions: true,
    duration: 25,
  },
  slides: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Kimani Workspace — 2025 Annual Review',
      animation: 'fade-in',
    },
    {
      id: 'guiding-question',
      type: 'custom',
      title: 'The Guiding Question',
      animation: 'slide-in-up',
    },
    {
      id: 'executive-synthesis',
      type: 'custom',
      title: 'Executive Synthesis',
      animation: 'fade-in',
    },
    /* {
      id: 'trust-and-access',
      type: 'custom',
      title: '1. Trust & Access',
      animation: 'slide-in-right',
    },
    {
      id: 'welcome',
      type: 'custom',
      title: '2. Welcome & Narrative Loops',
      animation: 'slide-in-right',
    }, */
    {
      id: 'concierge-direction',
      type: 'custom',
      title: '3. Concierge Direction',
      animation: 'slide-in-up',
    },
    {
      id: 'judgment-signal',
      type: 'custom',
      title: 'Judgment Signal',
      animation: 'fade-in',
    },
    {
      id: 'optionality',
      type: 'custom',
      title: 'Optionality Preservation',
      animation: 'slide-in-right',
    },
    {
      id: 'future-unlocks',
      type: 'custom',
      title: 'Future Unlocks: KLIFE & Scaling',
      animation: 'slide-in-up',
    },
    {
      id: 'closing',
      type: 'custom',
      title: 'Closing Reflection',
      animation: 'fade-in',
    },
  ],
}
