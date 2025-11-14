import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface TimelineSlideProps {
  className?: string
}

// Content for Toldito timeline - 3 phases
const timelineContent = {
  phases: [
    {
      title: 'Fase 1 — Núcleo',
      duration: '2-3 semanas',
      description:
        'Motor de conciliación, UI básica y KPIs esenciales para demo funcional',
      deliverables: [
        'Migraciones Hasura con policies RLS',
        'Motor de conciliación exacto/tolerancias + normalización FX',
        'UI básica de sesiones y confirmación',
        'KPIs esenciales: cobertura, aging, diferencias',
        'Demo funcional lista para validación',
      ],
    },
    {
      title: 'Fase 2 — Heurística y Evidencias',
      duration: '2 semanas',
      description:
        'Matching semántico avanzado, evidencias operativas y auditoría completa',
      deliverables: [
        'Matching semántico por metadata/adjuntos',
        'Evidencias y notas operativas',
        'Acciones masivas en UI',
        'Auditoría avanzada en validators y timeline',
        'Testing E2E y performance (P50/P95)',
      ],
    },
    {
      title: 'Fase 3 — Optimización y Analítica',
      duration: '2 semanas',
      description:
        'Dashboards ampliados, auto-sugerencias y hardening para producción',
      deliverables: [
        'Dashboards Metabase ampliados por períodos',
        'Auto-sugerencias por servicio y plantillas',
        'Tuning de colas y SLAs',
        'Regresión completa de módulos existentes',
        'V1 completa lista para producción',
      ],
    },
  ],
}

export function TimelineSlide({ className }: TimelineSlideProps) {
  const title = 'Plan de Entrega'
  const content = timelineContent
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      className={cn(
        'min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black p-12 flex flex-col relative',
        className
      )}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-yellow-600/10 via-transparent to-amber-600/10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          {title}
        </h2>
        <div className="w-32 h-1 mx-auto mb-4 rounded-full bg-linear-to-br from-yellow-400 to-amber-400" />
        <p className="max-w-4xl mx-auto text-xl text-gray-300">
          Implementación en 3 fases · 6-7 semanas calendario · Valor incremental
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 w-full max-w-6xl mx-auto"
      >
        <div className="grid gap-8">
          {content.phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex items-start gap-6 group"
            >
              {/* Timeline indicator */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-16 h-16 text-xl font-bold text-black transition-all duration-300 rounded-full shadow-lg bg-linear-to-br from-yellow-400 to-amber-500 group-hover:from-yellow-300 group-hover:to-amber-400">
                  {index + 1}
                </div>
                {index < content.phases.length - 1 && (
                  <div className="w-1 h-16 mt-4 rounded-full bg-linear-to-b from-yellow-400/50 to-amber-400/30" />
                )}
              </div>

              {/* Phase content */}
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-lg border border-yellow-500/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group shadow-xl hover:shadow-yellow-500/10">
                  {/* Phase Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-white">
                        {phase.title}
                      </h3>
                      <div className="inline-block px-4 py-2 text-sm font-medium text-yellow-300 border rounded-full bg-yellow-500/20 border-yellow-400/30">
                        {phase.duration}
                      </div>
                    </div>
                  </div>

                  <p className="mb-6 text-lg leading-relaxed text-gray-300">
                    {phase.description}
                  </p>

                  {/* Deliverables */}
                  {phase.deliverables && phase.deliverables.length > 0 && (
                    <div>
                      <h4 className="flex items-center mb-4 text-lg font-semibold text-white">
                        <div className="w-2 h-2 mr-3 rounded-full bg-linear-to-br from-yellow-400 to-amber-400" />
                        Entregables Clave
                      </h4>
                      <div className="grid gap-3">
                        {phase.deliverables.map((deliverable, delivIndex) => (
                          <div
                            key={delivIndex}
                            className="flex items-start gap-3 p-3 text-sm transition-colors duration-200 rounded-lg bg-white/5 hover:bg-white/10"
                          >
                            <CheckCircle className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed text-gray-300">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
