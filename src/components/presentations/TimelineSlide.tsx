import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import type { TimelineSlideContent } from '../../lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { cn } from '../../lib/utils'

interface TimelineSlideProps {
  content: TimelineSlideContent
  title: string
  className?: string
}

export function TimelineSlide({
  content,
  title,
  className,
}: TimelineSlideProps) {
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
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
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
                  <div className="w-1 h-16 bg-gradient-to-b from-blue-400/50 to-cyan-400/30 mt-4 rounded-full" />
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
                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  )
}
