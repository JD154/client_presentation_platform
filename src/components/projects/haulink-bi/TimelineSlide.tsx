import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, AlertCircle, PlayCircle } from 'lucide-react'

const timelineContent = {
  phases: [
    {
      day: 'Phase 1',
      title: 'Approve & Provision',
      description:
        'Confirm environment and access. Share test plan for sign-off (and CRD if required)',
      status: 'approval',
      deliverables: [
        'Environment access confirmed',
        'Test plan reviewed and approved',
        'CRD submitted (if required)',
      ],
    },
    {
      day: 'Phase 2',
      title: 'Build & Validate',
      description:
        'Recreate proof-of-concept in your environment, turn on automatic updates, run matching checks',
      status: 'development',
      deliverables: [
        'Data pipelines configured',
        'Automatic syncs enabled',
        'Initial reconciliation checks completed',
        'Dashboards drafted',
      ],
    },
    {
      day: 'Phase 3',
      title: 'Finalize & Demo',
      description:
        'Finalize dashboards, share acceptance notes, prepare guided demo',
      status: 'delivery',
      deliverables: [
        'Dashboards finalized',
        'Data guide prepared',
        'Demo environment ready',
        'Acceptance criteria met',
      ],
    },
  ],
  note: '3 phases after we have access and you approve the plan',
}

const statusConfig = {
  approval: {
    icon: AlertCircle,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  development: {
    icon: PlayCircle,
    color: 'text-[#00FF00]',
    bg: 'bg-[#00FF00]/10',
    border: 'border-[#00FF00]/30',
  },
  delivery: {
    icon: CheckCircle2,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
  },
}

export function TimelineSlide() {
  const title = 'Implementation Phases'
  const content = timelineContent

  return (
    <div className="relative flex flex-col min-h-screen p-12 bg-white">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-br from-[#F5F5F5] via-white to-[#F5F5F5]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(0,255,0,0.03),transparent_50%)]" />

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center max-w-3xl mx-auto text-xl text-gray-800"
        >
          <Calendar className="w-6 h-6 mr-3 text-[#00FF00]" />
          {content.note}
        </motion.div>
      </div>

      {/* Timeline */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="space-y-6">
          {content.phases.map((phase, index) => {
            const config =
              statusConfig[phase.status as keyof typeof statusConfig]
            const Icon = config.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="flex items-start gap-6 group"
              >
                {/* Timeline indicator */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-20 h-20 ${config.bg} border-2 ${config.border} rounded-full flex flex-col items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${config.color}`} />
                  </div>
                  {index < content.phases.length - 1 && (
                    <div
                      className={`w-0.5 h-20 ${config.bg} mt-4 rounded-full`}
                    />
                  )}
                </div>

                {/* Phase content */}
                <div className="flex-1">
                  <div
                    className={`p-6 border ${config.border} ${config.bg} backdrop-blur-sm rounded-lg hover:scale-[1.01] transition-all duration-300 shadow-lg`}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div
                          className={`text-sm font-bold ${config.color} mb-1 uppercase tracking-wider`}
                        >
                          {phase.day}
                        </div>
                        <h3 className="text-2xl font-bold text-black">
                          {phase.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mb-5 text-lg leading-relaxed text-gray-800">
                      {phase.description}
                    </p>

                    {/* Deliverables */}
                    <div>
                      <h4 className="mb-3 text-sm font-bold tracking-wider text-gray-400 uppercase">
                        Key Deliverables
                      </h4>
                      <div className="grid gap-2">
                        {phase.deliverables.map((deliverable, dIndex) => (
                          <div
                            key={dIndex}
                            className="flex items-start p-2 rounded bg-black/20"
                          >
                            <div
                              className={`w-1.5 h-1.5 mt-2 mr-3 ${config.color.replace(
                                'text-',
                                'bg-'
                              )} rounded-full shrink-0`}
                            />
                            <span className="text-sm text-gray-800">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Summary callout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="relative z-10 max-w-5xl mx-auto mt-10 p-6 text-center border bg-[#00FF00]/10 backdrop-blur-sm border-[#00FF00]/30 rounded-lg"
      >
        <div className="flex items-center justify-center gap-8">
          <div>
            <div className="text-4xl font-black text-[#00FF00]">Fast</div>
            <div className="text-xs tracking-wider text-gray-800 uppercase">
              Delivery
            </div>
          </div>
          <div className="w-px h-12 bg-[#00FF00]/30" />
          <div>
            <div className="text-4xl font-black text-[#00FF00]">Safe</div>
            <div className="text-xs tracking-wider text-gray-800 uppercase">
              Test Environment
            </div>
          </div>
          <div className="w-px h-12 bg-[#00FF00]/30" />
          <div>
            <div className="text-4xl font-black text-[#00FF00]">Clear</div>
            <div className="text-xs tracking-wider text-gray-800 uppercase">
              Acceptance Criteria
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
    </div>
  )
}
