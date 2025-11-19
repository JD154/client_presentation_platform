import { motion } from 'framer-motion'
import { Calendar, Rocket, TrendingUp } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface CTASlideProps {
  className?: string
}

const nextSteps = [
  {
    icon: Calendar,
    title: 'Planning',
    description:
      'Análisis de negocio, definición de alcance y preparación para un inicio rápido',
  },
  {
    icon: Rocket,
    title: 'Demo Funcional (2-3 semanas)',
    description:
      'Primera versión con conciliación exacta/tolerancias y KPIs esenciales',
  },
  {
    icon: TrendingUp,
    title: 'Valor Desde el Día 1',
    description:
      'Implementación incremental que genera resultados inmediatos medibles',
  },
]

export function CTASlide({ className }: CTASlideProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-slate-900 to-black text-white p-8 relative',
        className
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[100px_100px]" />
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl"
      >
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-5xl font-black text-transparent md:text-7xl bg-linear-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text">
            Próximos Pasos
          </h1>
          <p className="max-w-3xl mx-auto text-2xl text-gray-300">
            Comencemos a transformar tu conciliación financiera
          </p>
        </motion.div>

        {/* Next Steps Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-6 mb-12 md:grid-cols-3"
        >
          {nextSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-yellow-500/20 rounded-xl hover:bg-white/15 hover:border-yellow-500/40 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20"
              >
                <div className="flex items-center justify-center mx-auto mb-4 rounded-full w-14 h-14 bg-linear-to-br from-yellow-400 to-amber-500">
                  <Icon className="text-black w-7 h-7" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-center text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-center text-gray-300">
                  {step.description}
                </p>
              </div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="p-10 border shadow-2xl bg-white/5 backdrop-blur-lg border-yellow-500/20 rounded-2xl">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-linear-to-br from-yellow-400 to-amber-500">
                <span className="text-4xl">🤝</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-white">
                ¿Listo para empezar?
              </h2>
              <p className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-300">
                Recibirás una propuesta personalizada y un plan de proyecto
                detallado para tu revisión y aprobación.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
