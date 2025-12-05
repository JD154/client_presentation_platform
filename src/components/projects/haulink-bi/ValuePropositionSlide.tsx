import { motion } from 'framer-motion'
import { Database, RefreshCw, Eye, BarChart3 } from 'lucide-react'

const iconMap = {
  database: Database,
  'refresh-cw': RefreshCw,
  eye: Eye,
  'bar-chart': BarChart3,
}

const valuePropositionContent = {
  mainValue:
    'Connect your finance system with your operations database so both sides tell the same story. See changes as they happen and look back in time with complete traceability.',
  benefits: [
    {
      title: 'One Source of Truth',
      description:
        'QuickBooks and Haulink operations data unified in a single view with automatic reconciliation',
      icon: 'database',
      highlight: 'Real-time Sync',
    },
    {
      title: 'Live Updates',
      description:
        'See changes as they happen with automatic data refresh and scheduled syncs to catch everything',
      icon: 'refresh-cw',
      highlight: 'Always Current',
    },
    {
      title: 'Clear Visibility',
      description:
        'Easy-to-read dashboards that explain where profitability shifts and why, with before/after views',
      icon: 'eye',
      highlight: 'No Guesswork',
    },
    {
      title: 'Executive Ready',
      description:
        '3–5 dashboards with visual maps showing exactly where each number comes from',
      icon: 'bar-chart',
      highlight: 'Instant Insights',
    },
  ],
  outcomes: [
    {
      label: 'Profitability Tracking',
      description: 'See where profits swing from invoice to payment',
    },
    {
      label: 'Asset Performance',
      description: 'How results vary by asset and category',
    },
    {
      label: 'Clean Reconciliation',
      description: 'Before/after views that reconcile both systems',
    },
    {
      label: 'Centralized Reporting',
      description: 'One place to see results, reducing tool switching',
    },
  ],
}

export function ValuePropositionSlide() {
  const title = 'One Truth, Two Systems'
  const content = valuePropositionContent

  return (
    <div className="relative flex flex-col min-h-screen p-12 bg-white">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-br from-[#F5F5F5] via-white to-[#F5F5F5]" />
      </div>

      {/* Radial gradient accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,0,0.03),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,255,0,0.02),transparent_40%)]" />

      {/* Header */}
      <div className="relative z-10 mb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-5xl font-bold text-black md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-40 h-1 mx-auto mb-8 bg-[#00FF00]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-xl font-medium leading-relaxed text-gray-800 md:text-2xl"
        >
          {content.mainValue}
        </motion.div>
      </div>

      {/* Benefits Grid */}
      <div className="relative z-10 mb-12">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-8 text-3xl font-bold text-left text-[#00FF00]"
        >
          Core Capabilities
        </motion.h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="p-6 transition-all duration-300 border bg-white/80 backdrop-blur-sm border-gray-200 rounded-lg hover:bg-white hover:border-[#00FF00] hover:shadow-lg group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-[#00FF00]/10 border border-[#00FF00]/30 group-hover:bg-[#00FF00]/20 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-[#00FF00]" />
                  </div>
                  {benefit.highlight && (
                    <div className="px-3 py-1 text-xs font-bold text-black bg-[#00FF00] rounded-full">
                      {benefit.highlight}
                    </div>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-bold text-black">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-800">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Outcomes Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="relative z-10"
      >
        <h2 className="mb-6 text-3xl font-bold text-left text-black">
          What You'll Answer
        </h2>
        <div className="p-8 border bg-[#F5F5F5]/50 backdrop-blur-sm border-gray-200 rounded-lg">
          <div className="grid gap-6 md:grid-cols-2">
            {content.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start">
                <div className="w-2 h-2 mt-2 mr-4 bg-[#00FF00] rounded-full shrink-0" />
                <div>
                  <h4 className="mb-1 text-lg font-bold text-black">
                    {outcome.label}
                  </h4>
                  <p className="text-sm text-gray-800">{outcome.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
    </div>
  )
}
