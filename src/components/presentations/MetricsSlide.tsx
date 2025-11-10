import { motion } from 'framer-motion'
import { Clock, Target, Zap, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '../ui/card'
import { cn } from '../../lib/utils'

interface MetricsSlideProps {
  className?: string
}

const iconMap = {
  clock: Clock,
  target: Target,
  zap: Zap,
  'trending-up': TrendingUp,
}

// Hardcoded content for FLO project metrics
const metricsContent = {
  metrics: [
    {
      value: '50%',
      label: 'Time Savings',
      description:
        'Reduce average response time to priority emails within 2 weeks',
      icon: 'clock',
    },
    {
      value: '≥30%',
      label: 'Auto-Triage Coverage',
      description:
        'Automated classification with high perceived precision and feedback loops',
      icon: 'target',
    },
    {
      value: '≤3s',
      label: 'Lightning Speed',
      description:
        'First draft generation in seconds with thread context understanding',
      icon: 'zap',
    },
    {
      value: '100%',
      label: 'Security First',
      description:
        'Zero P0 incidents with OAuth/OIDC and encrypted data handling',
      icon: 'trending-up',
    },
  ],
}

export function MetricsSlide({ className }: MetricsSlideProps) {
  const title = 'Guaranteed Business Outcomes'
  const content = metricsContent
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
        'min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 p-8 relative',
        className
      )}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-cyan-600/10" />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h2>
        <div className="w-32 h-1 bg-linear-to-br from-blue-400 to-cyan-400 mx-auto rounded-full" />
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Measurable results you can count on from day one
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full relative z-10"
      >
        {content.metrics.map((metric, index) => {
          const Icon = iconMap[metric.icon as keyof typeof iconMap]

          return (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center h-full bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <CardContent className="p-8">
                  {Icon && (
                    <motion.div
                      className="w-20 h-20 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </motion.div>
                  )}

                  <motion.div
                    className="text-5xl font-black text-white mb-4 bg-linear-to-br from-blue-300 to-cyan-300 bg-clip-text"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  >
                    {metric.value}
                  </motion.div>

                  <h3 className="text-xl font-semibold text-gray-100 mb-3">
                    {metric.label}
                  </h3>

                  {metric.description && (
                    <p className="text-gray-300 text-sm leading-relaxed">
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
