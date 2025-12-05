import { motion } from 'framer-motion'
import { Shield, AlertTriangle, CheckCircle2, RefreshCw } from 'lucide-react'

const securityContent = {
  environment: {
    title: 'Safe Sandbox Environment',
    description:
      'All work happens in a test environment. Zero impact on production systems.',
    icon: Shield,
    highlights: [
      'No production changes',
      'Isolated test environment',
      'Read-only access where possible',
    ],
  },
  access: {
    title: 'Minimal Access Policy',
    description:
      'We request only the minimum permissions needed to complete the BI benchmark.',
    icon: CheckCircle2,
    highlights: [
      'Least privilege access',
      'Time-limited credentials',
      'Full access audit trail',
    ],
  },
  risks: [
    {
      risk: 'Sync limits or errors',
      impact: 'medium',
      mitigation:
        'Retry logic, alerts, and manual reconciliation for missing data',
    },
    {
      risk: 'System differences',
      impact: 'low',
      mitigation:
        'Side-by-side comparison views: QuickBooks | Linked View | Haulink',
    },
    {
      risk: 'Dashboard formula errors',
      impact: 'medium',
      mitigation:
        'Single accountable owner builds dashboards; treat as "do not edit" post-approval',
    },
    {
      risk: 'Data privacy concerns',
      impact: 'low',
      mitigation:
        'All data stays in your environment; UKLOK team follows strict confidentiality',
    },
  ],
  changeProcess: {
    title: 'Approval-First Approach',
    steps: [
      'Share test plan and checklist',
      'Wait for your sign-off',
      'Submit CRD if required by your process',
      'Only proceed after approval',
    ],
  },
}

const impactColors = {
  high: {
    text: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/30',
  },
  medium: {
    text: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  low: {
    text: 'text-[#00FF00]',
    bg: 'bg-[#00FF00]/10',
    border: 'border-[#00FF00]/30',
  },
}

export function SecuritySlide() {
  const title = 'Security & Risk Management'
  const content = securityContent

  return (
    <div className="relative flex flex-col min-h-screen p-12 bg-white">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-br from-[#F5F5F5] via-white to-[#F5F5F5]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.03),transparent_50%)]" />

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
          className="max-w-4xl mx-auto text-xl text-gray-800"
        >
          Safety first: controlled environment, minimal access, transparent
          process
        </motion.p>
      </div>

      {/* Security Principles */}
      <div className="relative z-10 mb-8">
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {[content.environment, content.access].map((principle, index) => {
            const Icon = principle.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="p-6 border bg-white/5 backdrop-blur-sm border-[#00FF00]/20 rounded-lg hover:border-[#00FF00]/40 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-lg bg-[#00FF00]/10 border border-[#00FF00]/30 mr-4">
                    <Icon className="w-8 h-8 text-[#00FF00]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-2 pt-4 border-t border-white/10">
                  {principle.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start">
                      <div className="w-1.5 h-1.5 mt-2 mr-3 bg-[#00FF00] rounded-full shrink-0" />
                      <span className="text-sm text-gray-800">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Risks and Mitigation */}
      <div className="relative z-10 mb-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center mb-6 text-2xl font-bold text-black"
        >
          <AlertTriangle className="w-6 h-6 mr-3 text-yellow-500" />
          Risk Assessment & Mitigation
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          {content.risks.map((item, index) => {
            const colors =
              impactColors[item.impact as keyof typeof impactColors]

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className={`p-5 border ${colors.border} ${colors.bg} backdrop-blur-sm rounded-lg`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-base font-bold text-black">
                    {item.risk}
                  </h4>
                  <div
                    className={`px-3 py-1 text-xs font-bold ${colors.text} border ${colors.border} rounded-full uppercase`}
                  >
                    {item.impact}
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Mitigation
                  </div>
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {item.mitigation}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Change Process */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="relative z-10"
      >
        <div className="p-6 border bg-white/80 backdrop-blur-sm border-gray-200 rounded-lg">
          <div className="flex items-center mb-4">
            <RefreshCw className="w-6 h-6 mr-3 text-[#00FF00]" />
            <h3 className="text-xl font-bold text-black">
              {content.changeProcess.title}
            </h3>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {content.changeProcess.steps.map((step, index) => (
              <div
                key={index}
                className="flex items-start p-4 rounded-lg bg-gray-50"
              >
                <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-[#00FF00]/20 border border-[#00FF00]/30 shrink-0">
                  <span className="text-sm font-bold text-[#00FF00]">
                    {index + 1}
                  </span>
                </div>
                <span className="text-sm text-gray-800 leading-relaxed">
                  {step}
                </span>
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
