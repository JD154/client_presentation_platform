import { motion } from 'framer-motion'
import { Shield, CheckCircle2, Eye, FileCheck } from 'lucide-react'

const qaApproach = [
  {
    icon: Shield,
    title: 'Testing Continuo',
    description: 'Cada feature pasa por tests antes de llegar a tus manos',
    highlights: ['Tests unitarios', 'Tests de integración', 'Tests E2E'],
  },
  {
    icon: Eye,
    title: 'Visibilidad Total',
    description:
      'Acceso directo a staging para validar avances en cualquier momento',
    highlights: [
      'Ambiente de staging 24/7',
      'Actualizaciones diarias',
      'Demos semanales',
    ],
  },
  {
    icon: FileCheck,
    title: 'Validación Continua',
    description: 'Checkpoints de validación al final de cada fase',
    highlights: [
      'Revisión con cliente',
      'Ajustes incluidos',
      'Sin sorpresas finales',
    ],
  },
]

export function QASlide() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-12 bg-linear-to-br from-gray-900 via-slate-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-emerald-600/10 via-transparent to-green-600/10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-16 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Calidad y Transparencia
        </h2>
        <div className="w-32 h-1 mx-auto rounded-full bg-linear-to-br from-emerald-400 to-green-400" />
        <p className="max-w-3xl mx-auto mt-6 text-xl text-gray-300">
          Cero ansiedad · Visibilidad total · Control en cada paso
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl space-y-12">
        {/* QA Approach Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {qaApproach.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl hover:bg-white/10 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br from-emerald-400 to-green-500">
                  <Icon className="text-white w-9 h-9" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-center text-white">
                  {item.title}
                </h3>
                <p className="mb-4 text-center text-gray-300">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 border rounded-lg bg-emerald-500/10 border-emerald-500/30"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm text-gray-200">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
