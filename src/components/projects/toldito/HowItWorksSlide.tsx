import { motion } from 'framer-motion'
import { Inbox, GitMerge, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Inbox,
    title: 'Ingesta',
    description:
      'Transacciones desde múltiples fuentes: Zelle, transferencias, Binance, wallets',
    color: 'from-yellow-400 to-amber-400',
  },
  {
    icon: GitMerge,
    title: 'Conciliación',
    description:
      'Motor inteligente con reglas por servicio, tolerancias y matching automático',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    icon: CheckCircle,
    title: 'Validación',
    description:
      'Dashboard con sugerencias, confirmación manual y evidencias auditadas',
    color: 'from-yellow-500 to-amber-600',
  },
]

export function HowItWorksSlide() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-12 bg-linear-to-br from-gray-900 via-slate-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-yellow-600/10 via-transparent to-amber-600/10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-16 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Cómo Funciona
        </h2>
        <div className="w-32 h-1 mx-auto rounded-full bg-linear-to-br from-yellow-400 to-amber-400" />
        <p className="max-w-3xl mx-auto mt-6 text-xl text-gray-300">
          Tres pasos simples para transformar el caos en orden
        </p>
      </motion.div>

      {/* Steps Flow */}
      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative"
              >
                {/* Connecting Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute z-20 hidden md:block top-1/2 -right-6">
                    <ArrowRight className="w-8 h-8 text-yellow-400" />
                  </div>
                )}

                {/* Step Card */}
                <div className="relative h-full p-8 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-yellow-500/20 rounded-2xl hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 group">
                  {/* Step Number */}
                  <div className="absolute flex items-center justify-center w-12 h-12 text-xl font-black text-black rounded-full shadow-lg -top-4 -left-4 bg-linear-to-br from-yellow-400 to-amber-500">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Icon className="w-10 h-10 text-black" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="mb-4 text-2xl font-bold text-center text-white">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-center text-gray-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
