import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface TimelineSlideProps {
  className?: string
}

// Hardcoded content for FLO project timeline
const timelineContent = {
  phases: [
    {
      title: 'Sprint 1-2: Foundation & Core Auth (Dec 1 - Dec 28)',
      duration: '4 weeks',
      description:
        'Infrastructure setup, Google OAuth, and Priority Inbox foundation with complete ingestion pipeline',
      deliverables: [
        'Functional login with OAuth/OIDC security',
        'Gmail ingestion with deduplication and MIME parsing',
        'Priority listing with AI explanations',
        'End-to-end tracing and logging infrastructure',
        'Internal demo ready for pilot users',
      ],
    },
    {
      title: 'Sprint 3-4: Intelligence & Assisted Drafts (Dec 29 - Jan 25)',
      duration: '4 weeks',
      description:
        'AI-powered prioritization with explanations and assisted draft generation with guardrails',
      deliverables: [
        'Stable prioritizer with consistent rankings',
        'First assisted drafts with thread grounding',
        'Tone selection and citation implementation',
        'Human-in-the-loop validation workflows',
        'Pilot-ready for ≤5 users',
      ],
    },
    {
      title: 'Sprint 5-6: Performance & Production (Jan 26 - Feb 22)',
      duration: '4 weeks',
      description:
        'Telemetry implementation, performance optimization, and production hardening for scale',
      deliverables: [
        'Live feedback loops and user telemetry',
        'Performance targets achieved (≤3s P50)',
        'Security posture reviews and hardening',
        'V1 complete and ready for expansion',
        'Scalability testing and cost monitoring',
      ],
    },
  ],
}

export function TimelineSlide({ className }: TimelineSlideProps) {
  const title = 'Concurrent Development Roadmap (6 Sprints)'
  const content = timelineContent
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      className={cn(
        'min-h-screen bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 p-12 flex flex-col relative',
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
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <div className="w-32 h-1 bg-linear-to-br from-blue-400 to-cyan-400 mx-auto rounded-full mb-4" />
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Structured delivery in six 2-week sprints with concurrent workstreams
          to minimize time-to-value
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full relative z-10 flex-1"
      >
        <div className="grid gap-8">
          {content.phases.map((phase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-6 items-start group"
            >
              {/* Timeline indicator */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                  {index + 1}
                </div>
                {index < content.phases.length - 1 && (
                  <div className="w-1 h-16 bg-linear-to-b from-blue-400/50 to-cyan-400/30 mt-4 rounded-full" />
                )}
              </div>

              {/* Phase content */}
              <div className="flex-1">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group shadow-xl">
                  {/* Phase Header */}
                  <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {phase.title}
                      </h3>
                      <div className="text-sm font-medium text-blue-300 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full inline-block">
                        {phase.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                    {phase.description}
                  </p>

                  {/* Deliverables */}
                  {phase.deliverables && phase.deliverables.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <div className="w-2 h-2 bg-linear-to-br from-green-400 to-emerald-400 rounded-full mr-3" />
                        Key Deliverables
                      </h4>
                      <div className="grid gap-3">
                        {phase.deliverables.map((deliverable, delivIndex) => (
                          <div
                            key={delivIndex}
                            className="flex items-start gap-3 text-sm bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-colors duration-200"
                          >
                            <CheckCircle className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                            <span className="text-gray-300 leading-relaxed">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
