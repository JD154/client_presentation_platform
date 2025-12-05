import { motion } from 'framer-motion'
import { Target, Activity, CheckCircle2, Users } from 'lucide-react'

const iconMap = {
  target: Target,
  activity: Activity,
  'check-circle': CheckCircle2,
  users: Users,
}

const metricsContent = {
  metrics: [
    {
      value: 'Zero',
      label: 'Production Impact',
      description:
        'All work in safe test environment with no production changes',
      icon: 'check-circle',
    },
    {
      value: '100%',
      label: 'Data Reliability',
      description:
        'Matching results verified for checked items between both systems',
      icon: 'target',
    },
    {
      value: 'Live',
      label: 'Update Frequency',
      description: 'Data updates run on schedule and when changes happen',
      icon: 'activity',
    },
    {
      value: 'One',
      label: 'Central Platform',
      description:
        'All dashboards inside Haulink, reducing time spent switching tools',
      icon: 'users',
    },
  ],
  successCriteria: [
    {
      category: 'Demo Quality',
      items: [
        'No unexpected errors during demos',
        'All data sources connected and syncing',
        'Dashboards render correctly with real data',
      ],
    },
    {
      category: 'Data Accuracy',
      items: [
        'QuickBooks and Haulink data match for checked items',
        'Reconciliation views show clear before/after comparison',
        'Visual map explains data flow and connections',
      ],
    },
    {
      category: 'Operational Excellence',
      items: [
        'Automated updates run reliably on schedule',
        'Error handling and retry logic working',
        'Status updates delivered on agreed cadence',
      ],
    },
    {
      category: 'User Experience',
      items: [
        'Dashboards answer key business questions',
        'Navigation is intuitive and clear',
        'Performance meets expectations (fast load times)',
      ],
    },
  ],
}

export function MetricsSlide() {
  const title = 'Success Criteria'
  const content = metricsContent

  return (
    <div className="relative flex flex-col min-h-screen p-12 bg-white">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-br from-[#F5F5F5] via-white to-[#F5F5F5]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.03),transparent_50%)]" />

      {/* Header */}
      <div className="relative z-10 mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-3xl font-bold text-black md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-40 h-1 mx-auto mb-6 bg-[#00FF00]"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-xl text-gray-800"
        >
          How we measure success and ensure quality delivery
        </motion.p>
      </div>

      {/* Key Metrics */}
      <div className="relative z-10 mb-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="p-6 text-center border bg-white/80 backdrop-blur-sm border-gray-200 rounded-lg hover:border-[#00FF00] transition-all duration-300 group"
              >
                {Icon && (
                  <motion.div
                    className="w-16 h-16 bg-[#00FF00]/10 border border-[#00FF00]/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00FF00]/20 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="h-8 w-8 text-[#00FF00]" />
                  </motion.div>
                )}

                <motion.div
                  className="text-3xl font-black text-[#00FF00] mb-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  {metric.value}
                </motion.div>

                <h3 className="mb-3 text-lg font-bold text-black">
                  {metric.label}
                </h3>

                {metric.description && (
                  <p className="text-sm leading-relaxed text-gray-800">
                    {metric.description}
                  </p>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Success Criteria Grid */}
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mb-6 text-3xl font-bold text-black"
        >
          Detailed Success Criteria
        </motion.h2>
        <div className="grid gap-5 md:grid-cols-2">
          {content.successCriteria.map((criteria, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
              className="p-6 border bg-white/80 backdrop-blur-sm border-gray-200 rounded-lg hover:border-[#00FF00] transition-all duration-300"
            >
              <h3 className="mb-4 text-xl font-bold text-black">
                {criteria.category}
              </h3>
              <div className="space-y-3">
                {criteria.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-[#00FF00] mr-3 mt-0.5 shrink-0" />
                    <span className="text-sm leading-relaxed text-gray-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="relative z-10 mt-10 p-6 text-center border bg-white/80 backdrop-blur-sm border-[#00FF00]/30 rounded-lg"
      >
        <p className="text-lg font-medium text-black">
          We're accountable for delivering a working BI baseline that answers
          your key business questions
        </p>
      </motion.div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
    </div>
  )
}
