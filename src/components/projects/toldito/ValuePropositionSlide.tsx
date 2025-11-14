import {
  Clock,
  Target,
  Shield,
  TrendingUp,
  CheckCircle,
  Zap,
  Database,
  FileCheck,
} from 'lucide-react'

const iconMap = {
  clock: Clock,
  target: Target,
  zap: Zap,
  shield: Shield,
  'trending-up': TrendingUp,
  'check-circle': CheckCircle,
  database: Database,
  'file-check': FileCheck,
}

// Content for Toldito reconciliation value proposition
const valuePropositionContent = {
  mainValue:
    'Tu operación ya ingiere y valida transacciones desde múltiples fuentes. Toldito transforma ese flujo en un Libro de Órdenes conciliado que empareja entradas/salidas automáticamente, con trazabilidad total y auditoría completa.',
  benefits: [
    {
      title: 'Conciliación Rápida',
      description:
        '90% de movimientos conciliados en menos de 15 minutos con asistencia',
      icon: 'clock',
      metric: '≥90%',
    },
    {
      title: 'Matching Automático',
      description:
        'Precisión del 85% en matches automáticos con tolerancias configurables',
      icon: 'target',
      metric: '≥85%',
    },
    {
      title: 'Trazabilidad Total',
      description:
        '100% de acciones con evidencia auditada: quién, cuándo y por qué',
      icon: 'shield',
      metric: '100%',
    },
    {
      title: 'Velocidad Operativa',
      description:
        'Respuesta ultrarrápida en vistas de conciliación y acciones masivas',
      icon: 'zap',
      metric: '≤2s',
    },
  ],
  outcomes: [
    {
      label: 'Ahorro de Tiempo',
      description: 'De horas manuales a minutos automáticos',
      icon: 'clock',
    },
    {
      label: 'Visibilidad Inmediata',
      description: 'KPIs en tiempo real de tasa de conciliación',
      icon: 'trending-up',
    },
    {
      label: 'Auditoría Completa',
      description: 'Evidencia total para compliance y auditoría',
      icon: 'file-check',
    },
    {
      label: 'Sin Interrupciones',
      description: 'Construido sobre tu stack actual (Hasura, BullMQ)',
      icon: 'check-circle',
    },
    {
      label: 'Multimoneda',
      description: 'Normalización automática con tipos de cambio',
      icon: 'database',
    },
    {
      label: 'Evidencias',
      description: 'Metadata, adjuntos y notas operativas',
      icon: 'shield',
    },
  ],
}

export function ValuePropositionSlide() {
  const title = 'El Desafío de la Conciliación'
  const content = valuePropositionContent
  return (
    <div className="relative flex flex-col min-h-screen p-12 bg-linear-to-br from-gray-900 via-slate-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-yellow-600/10 via-transparent to-amber-600/10" />

      {/* Header */}
      <div className="relative z-10 mb-12 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          {title}
        </h1>
        <div className="w-32 h-1 mx-auto mb-6 rounded-full bg-linear-to-br from-yellow-400 to-amber-400" />
        <div className="max-w-4xl mx-auto text-xl font-medium leading-relaxed text-gray-300 md:text-2xl">
          {content.mainValue}
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="relative z-10 mb-12">
        <h2 className="mb-8 text-2xl font-bold text-left text-white">
          Indicadores Clave de Rendimiento
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
              ? iconMap[benefit.icon as keyof typeof iconMap]
              : Clock

            return (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-yellow-500/20 rounded-xl hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-full bg-linear-to-br from-yellow-400 to-amber-500 group-hover:from-yellow-300 group-hover:to-amber-400">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  {benefit.metric && (
                    <div className="text-3xl font-black text-transparent bg-linear-to-br from-yellow-300 to-amber-300 bg-clip-text">
                      {benefit.metric}
                    </div>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Business Outcomes */}
      <div>
        <h2 className="mb-6 text-2xl font-bold text-left text-white">
          Beneficios Inmediatos
        </h2>
        <div className="relative z-10 p-8 border bg-white/5 backdrop-blur-lg border-yellow-500/10 rounded-2xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {content.outcomes.map((outcome, index) => {
              const IconComponent = outcome.icon
                ? iconMap[outcome.icon as keyof typeof iconMap]
                : CheckCircle

              return (
                <div key={index} className="flex items-start">
                  <div className="p-2 mt-1 mr-3 rounded-lg bg-linear-to-br from-yellow-400 to-amber-500 shrink-0">
                    <IconComponent className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-white">
                      {outcome.label}
                    </h4>
                    <p className="text-sm text-gray-300">
                      {outcome.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
