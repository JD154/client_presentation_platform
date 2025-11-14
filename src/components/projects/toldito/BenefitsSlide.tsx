import { motion } from 'framer-motion'
import { Clock, Eye, Lock, Zap } from 'lucide-react'
import { Card, CardContent } from '../../ui/card'
import { cn } from '../../../lib/utils'

interface BenefitsSlideProps {
  className?: string
}

const iconMap = {
  clock: Clock,
  eye: Eye,
  lock: Lock,
  zap: Zap,
}

// Content for Toldito benefits
const benefitsContent = {
  metrics: [
    {
      value: 'Automático',
      label: 'El Sistema Trabaja Por Ti',
      description:
        'Empareja transacciones automáticamente. Menos trabajo manual',
      icon: 'clock',
    },
    {
      value: '100%',
      label: 'Visibilidad Total',
      description: 'Dashboard en tiempo real con KPIs de conciliación y aging',
      icon: 'eye',
    },
    {
      value: '100%',
      label: 'Auditoría Completa',
      description: 'Evidencia auditada de quién, cuándo y por qué se concilió',
      icon: 'lock',
    },
  ],
}

export function BenefitsSlide({ className }: BenefitsSlideProps) {
  const title = 'Beneficios Inmediatos'
  const content = benefitsContent
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      className={cn(
        'min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-slate-900 to-black p-8 relative',
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
        className="relative z-10 mb-16 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          {title}
        </h2>
        <div className="w-32 h-1 mx-auto rounded-full bg-linear-to-br from-yellow-400 to-amber-400" />
        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">
          Valor tangible desde el primer día de implementación
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl"
      >
        {content.metrics.map((metric, index) => {
          const Icon = iconMap[metric.icon as keyof typeof iconMap]

          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full text-center transition-all duration-300 bg-white/10 backdrop-blur-lg border-yellow-500/20 hover:bg-white/15 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 group">
                <CardContent className="p-8">
                  {Icon && (
                    <motion.div
                      className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-all duration-300 rounded-full bg-linear-to-br from-yellow-400 to-amber-500 group-hover:from-yellow-300 group-hover:to-amber-400"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="w-10 h-10 text-black" />
                    </motion.div>
                  )}

                  <motion.div
                    className="mb-4 text-3xl font-black text-white bg-linear-to-br from-yellow-300 to-amber-300 bg-clip-text"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  >
                    {metric.value}
                  </motion.div>

                  <h3 className="mb-3 text-xl font-semibold text-gray-100">
                    {metric.label}
                  </h3>

                  {metric.description && (
                    <p className="text-sm leading-relaxed text-gray-300">
                      {metric.description}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
