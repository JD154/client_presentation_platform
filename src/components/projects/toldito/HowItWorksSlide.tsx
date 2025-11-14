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
    <div className="relative min-h-screen flex flex-col items-center justify-center p-12 bg-linear-to-br from-gray-900 via-slate-900 to-black">
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
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Cómo Funciona
        </h2>
        <div className="w-32 h-1 bg-linear-to-br from-yellow-400 to-amber-400 mx-auto rounded-full" />
        <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto">
          Tres pasos simples para transformar el caos en orden
        </p>
      </motion.div>

      {/* Steps Flow */}
      <div className="relative z-10 max-w-7xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
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
                  <div className="hidden md:block absolute top-1/2 -right-6 z-20">
                    <ArrowRight className="w-8 h-8 text-yellow-400" />
                  </div>
                )}

                {/* Step Card */}
                <div className="relative p-8 h-full bg-white/10 backdrop-blur-lg border border-yellow-500/20 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-linear-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-black font-black text-xl shadow-lg">
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
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative z-10 mt-16 text-center"
      >
        <div className="inline-block px-6 py-3 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
          <p className="text-yellow-100 text-sm font-medium">
            ⚡ Todo construido sobre tu infraestructura actual
          </p>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
