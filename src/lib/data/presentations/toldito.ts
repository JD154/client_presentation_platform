import type { Presentation } from '../../types'

/**
 * Presentation data for Toldito Reconciliation Module
 * Financial reconciliation platform with automated matching and full traceability
 */
export const tolditoPresentation: Presentation = {
  projectId: 'toldito',
  config: {
    title: 'Toldito — Módulo de Conciliación',
    subtitle:
      'Consolidación y Conciliación del Libro Financiero con Trazabilidad Total',
    theme: 'client',
    transitions: true,
    duration: 30,
  },
  slides: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Toldito: Conciliación Inteligente',
      animation: 'fade-in',
    },
    {
      id: 'value-proposition',
      type: 'value-proposition',
      title: 'El Desafío de la Conciliación',
      animation: 'slide-in-up',
    },
    {
      id: 'how-it-works',
      type: 'custom',
      title: 'Cómo Funciona',
      animation: 'slide-in-right',
    },
    {
      id: 'benefits',
      type: 'metrics',
      title: 'Beneficios Inmediatos',
      animation: 'slide-in-up',
    },
    {
      id: 'timeline',
      type: 'timeline',
      title: 'Plan de Entrega',
      animation: 'slide-in-right',
    },
    {
      id: 'tech-approach',
      type: 'custom',
      title: 'Construido Sobre Lo Que Tienes',
      animation: 'slide-in-up',
    },
    {
      id: 'cta',
      type: 'cta',
      title: 'Próximos Pasos',
      animation: 'fade-in',
    },
  ],
}
