import { motion } from 'framer-motion'
import { CheckCircle2, Package, Presentation } from 'lucide-react'

const scopeContent = {
  scope: [
    {
      title: 'Data Integration',
      description:
        'Bring across invoices, bills, payments, and related records from QuickBooks and connect them to Haulink operations',
      category: 'Integration',
    },
    {
      title: 'Real-Time Updates',
      description:
        'Show updates quickly when things change, plus scheduled refreshes to ensure nothing is missed',
      category: 'Integration',
    },
    {
      title: 'Clean Data Views',
      description:
        'Well-organized data from finance and operations, plus combined views that reconcile both systems',
      category: 'Data',
    },
    {
      title: 'Executive Dashboards',
      description:
        '3–5 dashboards showing profitability shifts, asset performance, and reconciliation views',
      category: 'Reporting',
    },
    {
      title: 'Visual Data Map',
      description:
        'Short visual map and guide that explains where each number comes from',
      category: 'Documentation',
    },
  ],
  deliverables: [
    'Test environment set up',
    'Automatic data updates configured',
    'Clean, organized data from both systems',
    'Combined reconciliation views',
    '3–5 executive dashboards',
    'Visual data map and documentation',
  ],
  acceptance: [
    'Short, guided demo with prepared data',
    'Spot-checks showing QuickBooks and Haulink match',
    'Simple visual map of number connections',
    'No distracting errors during demo',
  ],
}

export function ScopeSlide() {
  const title = 'BI Benchmark Scope'
  const content = scopeContent

  const categoryColors = {
    Integration: {
      border: 'border-[#00FF00]/30',
      bg: 'bg-[#00FF00]/5',
      text: 'text-[#00FF00]',
    },
    Data: {
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/5',
      text: 'text-blue-400',
    },
    Reporting: {
      border: 'border-yellow-500/30',
      bg: 'bg-yellow-500/5',
      text: 'text-yellow-400',
    },
    Documentation: {
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/5',
      text: 'text-purple-400',
    },
  }

  return (
    <div className="relative flex flex-col min-h-screen p-12 bg-white">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-br from-[#F5F5F5] via-white to-[#F5F5F5]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.05),transparent_50%)]" />

      {/* Header */}
      <div className="relative z-10 mb-10 text-center">
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
          className="w-40 h-1 mx-auto mb-6 bg-[#00FF00]"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto text-xl text-gray-800"
        >
          Clear deliverables for a baseline BI system in your test environment
        </motion.p>
      </div>

      {/* Main Scope Grid */}
      <div className="relative z-10 mb-10">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center mb-6 text-2xl font-bold text-[#00FF00]"
        >
          <Package className="w-6 h-6 mr-3" />
          What We'll Build
        </motion.h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.scope.map((item, index) => {
            const colors =
              categoryColors[item.category as keyof typeof categoryColors]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className={`p-5 border ${colors.border} ${colors.bg} backdrop-blur-sm rounded-lg hover:scale-[1.02] transition-all duration-300 group`}
              >
                <div
                  className={`text-xs font-bold ${colors.text} mb-3 uppercase tracking-wider`}
                >
                  {item.category}
                </div>
                <h3 className="mb-2 text-lg font-bold text-black">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-800">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Deliverables and Acceptance in 2 columns */}
      <div className="relative z-10 grid gap-6 lg:grid-cols-2">
        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="p-6 border bg-white/80 backdrop-blur-sm border-gray-200 rounded-lg"
        >
          <h3 className="flex items-center mb-4 text-xl font-bold text-black">
            <CheckCircle2 className="w-5 h-5 mr-3 text-[#00FF00]" />
            Deliverables
          </h3>
          <div className="space-y-3">
            {content.deliverables.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 mt-2 mr-3 bg-[#00FF00] rounded-full shrink-0" />
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Acceptance Criteria */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="p-6 border bg-white/80 backdrop-blur-sm border-gray-200 rounded-lg"
        >
          <h3 className="flex items-center mb-4 text-xl font-bold text-black">
            <Presentation className="w-5 h-5 mr-3 text-[#00FF00]" />
            Acceptance Criteria
          </h3>
          <div className="space-y-3">
            {content.acceptance.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-1.5 h-1.5 mt-2 mr-3 bg-[#00FF00] rounded-full shrink-0" />
                <p className="text-sm text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Timeline callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="relative z-10 p-6 mt-6 text-center border bg-[#00FF00]/10 backdrop-blur-sm border-[#00FF00]/30 rounded-lg"
      >
        <div className="text-5xl font-black text-[#00FF00] mb-2">3–5 Days</div>
        <div className="text-sm font-medium text-gray-700 uppercase tracking-wider">
          After access and approval
        </div>
      </motion.div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
    </div>
  )
}
