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
    'Un flujo que empareja entradas/salidas automáticamente, con trazabilidad total y auditoría completa.',
  benefits: [
    {
      label: 'Una Sola Verdad',
      description:
        'Todo en un solo lugar. No más comparar archivos ni buscar en múltiples sistemas',
      icon: 'database',
    },
    {
      label: 'Ve Todo en Tiempo Real',
      description: 'Abres el dashboard y sabes exactamente qué está pendiente',
      icon: 'trending-up',
    },
    {
      label: 'Lista Para Auditar',
      description: 'Cada transacción tiene su historia completa documentada',
      icon: 'file-check',
    },
    {
      label: 'Cero Drama Técnico',
      description:
        'Nueva funcionalidad que se integra al sistema existente, sin interrupciones',
      icon: 'check-circle',
    },
    {
      label: 'Todas las Monedas',
      description: 'USD, bolívares, crypto. Todo normalizado automáticamente',
      icon: 'database',
    },
    {
      label: 'Pruebas Adjuntas',
      description:
        'Capturas, montos, referencias. Todo guardado junto a cada movimiento',
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
      <div className="relative z-10 mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          {title}
        </h1>
        <div className="w-32 h-1 mx-auto mb-6 rounded-full bg-linear-to-br from-yellow-400 to-amber-400" />
        <div className="max-w-4xl mx-auto text-xl font-medium leading-relaxed text-gray-300 md:text-2xl">
          {content.mainValue}
        </div>
      </div>

      {/* Central Benefits Grid */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-white md:text-4xl">
          Lo Que Obtienes
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
              ? iconMap[benefit.icon as keyof typeof iconMap]
              : CheckCircle

            return (
              <div
                key={index}
                className="p-8 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-yellow-500/20 rounded-2xl hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 group"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 rounded-full bg-linear-to-br from-yellow-400 to-amber-500 group-hover:from-yellow-300 group-hover:to-amber-400">
                  <IconComponent className="w-10 h-10 text-black" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-center text-white">
                  {benefit.label}
                </h3>
                <p className="text-base leading-relaxed text-center text-gray-300">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
