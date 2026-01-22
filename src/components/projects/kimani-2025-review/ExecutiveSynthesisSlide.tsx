import { motion } from 'framer-motion'
import { Shield, UserPlus, MessageCircle, Wrench } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface ExecutiveSynthesisSlideProps {
  className?: string
}

const workBreakdown = [
  {
    icon: Shield,
    category: 'Trust & Access',
    percentage: 35,
    count: 30,
    impact: 'Authentication stability, App Store compliance, session integrity',
  },
  {
    icon: UserPlus,
    category: 'Welcome & Retention',
    percentage: 25,
    count: 21,
    impact: 'Onboarding flows, push notifications, welcome automation',
  },
  {
    icon: MessageCircle,
    category: 'Concierge & UX',
    percentage: 30,
    count: 26,
    impact: 'Chat-first direction, admin queues, marketplace integration',
  },
  {
    icon: Wrench,
    category: 'Infrastructure & Ops',
    percentage: 10,
    count: 8,
    impact: 'Production stability, backups, deployment optimization',
  },
]

export function ExecutiveSynthesisSlide({
  className,
}: ExecutiveSynthesisSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]" />

      <div className="relative z-10 px-8 py-16 mx-auto max-w-7xl">
        <h2 className="text-5xl font-light text-[#F5F1E8] font-serif mb-4 tracking-wide uppercase">
          Executive Synthesis
        </h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm tracking-widest text-[#D4AF37]/70 uppercase mb-8"
        >
          ClickUp Implementation Period: March – December 2025
        </motion.p>

        <div className="h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent max-w-md mb-20" />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] border border-[#D4AF37]/20 p-12 text-center"
          >
            <div className="text-8xl font-light text-[#D4AF37] mb-6">138</div>
            <div className="text-sm tracking-[0.2em] text-[#F5F1E8] uppercase">
              Tasks Created
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1a1a1a] border border-[#D4AF37]/20 p-12 text-center"
          >
            <div className="text-8xl font-light text-[#D4AF37] mb-6">85</div>
            <div className="text-sm tracking-[0.2em] text-[#F5F1E8] uppercase">
              Tasks Completed
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#1a1a1a] border border-[#D4AF37]/20 p-12 text-center"
          >
            <div className="text-8xl font-light text-[#D4AF37] mb-6">62%</div>
            <div className="text-sm tracking-[0.2em] text-[#F5F1E8] uppercase">
              Completion Rate
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-light text-[#F5F1E8] font-serif mb-8 tracking-wide uppercase text-center">
            Execution Focus Areas
          </h3>

          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
            {workBreakdown.map((item, index) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                className="border border-[#D4AF37]/30 p-6 bg-[#2a2a2a]/50 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/10">
                      <item.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between mb-3">
                      <h4 className="text-lg font-light text-[#F5F1E8] font-serif">
                        {item.category}
                      </h4>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-light text-[#D4AF37]">
                          {item.percentage}%
                        </span>
                        <span className="text-sm text-[#F5F1E8]/60">
                          ({item.count} tasks)
                        </span>
                      </div>
                    </div>
                    <div className="h-1.5 bg-[#D4AF37]/20 mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percentage}%` }}
                        transition={{ duration: 1, delay: 1.2 + index * 0.15 }}
                        className="h-full bg-[#D4AF37]"
                      />
                    </div>
                    <p className="text-sm text-[#F5F1E8]/70 font-light leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-light italic text-[#D4AF37]/80 max-w-4xl mx-auto">
            Strategic Signal: Foundation-first execution. Build trust and
            stability before scale.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
