import type { Presentation } from '../../types'

/**
 * Complete presentation data for Haulink BI Benchmark project
 * Based on the detailed proposal for BI baseline setup
 */
export const haulinkBiPresentation: Presentation = {
  projectId: 'haulink-bi',
  config: {
    title: 'Haulink BI Benchmark',
    subtitle: 'Clear Reporting Baseline for Profitability Insights',
    theme: 'client',
    transitions: true,
    duration: 25,
  },
  slides: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Haulink BI Benchmark',
      animation: 'fade-in',
    },
    {
      id: 'architecture',
      type: 'architecture',
      title: 'Data Integration Architecture',
      animation: 'slide-in-up',
    },
    {
      id: 'value-proposition',
      type: 'value-proposition',
      title: 'One Truth, Two Systems',
      animation: 'slide-in-up',
    },
    {
      id: 'scope',
      type: 'scope',
      title: 'BI Benchmark Scope',
      animation: 'slide-in-right',
    },
    {
      id: 'timeline',
      type: 'timeline',
      title: 'Implementation Phases',
      animation: 'slide-in-right',
    },
    {
      id: 'security',
      type: 'security',
      title: 'Security & Risk Management',
      animation: 'slide-in-up',
    },
    {
      id: 'metrics',
      type: 'metrics',
      title: 'Success Criteria',
      animation: 'slide-in-right',
    },
    {
      id: 'cta',
      type: 'cta',
      title: 'Ready to See Your Numbers Tell the Same Story?',
      animation: 'fade-in',
    },
  ],
}
