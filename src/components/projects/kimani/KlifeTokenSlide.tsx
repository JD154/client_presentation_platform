import { motion } from 'framer-motion'
import { Coins, Globe, TrendingUp } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface KlifeTokenSlideProps {
  className?: string
}

const tokenFeatures = [
  {
    icon: Coins,
    title: 'Ledger of Contribution',
    description:
      'Every act of generosity recorded: hosting, mentoring, curating, referrals',
  },
  {
    icon: Globe,
    title: 'Portable Reputation',
    description:
      'On-chain proofs create neutral, verifiable reputation across platforms',
  },
  {
    icon: TrendingUp,
    title: 'Earned Access',
    description:
      'Unlocks perks, access, and status that are earned through contribution, not purchased',
  },
]

const phases = [
  {
    title: 'I. Beta – Inner Circle',
    description:
      'Small trusted group\nTest concierge, CRM basics, light AI assist',
    status: 'current',
  },
  {
    title: 'II. Curated Core',
    description: 'Expand membership carefully\nRefine AI + first KLIFE perks',
    status: 'next',
  },
  {
    title: 'III. Scaled Community',
    description:
      'Larger membership, contribution-based gates\nRich token mechanics and marketplace',
    status: 'future',
  },
]

export function KlifeTokenSlide({ className }: KlifeTokenSlideProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col justify-center py-20 px-8 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]',
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* KLIFE Token Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#F5F1E8] font-serif tracking-wide mb-6 uppercase">
              KLIFE Token
            </h2>
            <h3 className="text-2xl font-light text-[#D4AF37] mb-8 font-serif">
              The Ledger of Contribution
            </h3>

            <div className="h-px bg-linear-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mb-8" />

            <div className="mb-8 space-y-6">
              {tokenFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex items-center justify-center w-8 h-8 shrink-0">
                    <feature.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-[#F5F1E8] mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-[#F5F1E8]/80 font-light text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="border border-[#D4AF37]/30 p-6 bg-[#D4AF37]/5 backdrop-blur-sm"
            >
              <p className="text-[#F5F1E8] font-light italic text-center">
                KLIFE is how Kimani says "thank you" in a traceable, fair way.
              </p>
            </motion.div>
          </motion.div>

          {/* Rollout Phases Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-[#F5F1E8] font-serif tracking-wide mb-8 uppercase">
              Rollout Phases
            </h2>

            <div className="h-px bg-linear-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mb-12" />

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className={cn(
                    'border p-6 backdrop-blur-sm transition-all duration-300',
                    phase.status === 'current'
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                      : phase.status === 'next'
                      ? 'border-[#D4AF37]/50 bg-[#D4AF37]/5'
                      : 'border-[#D4AF37]/30 bg-[#2a2a2a]/30'
                  )}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-semibold text-[#D4AF37] tracking-wider">
                      {phase.title}
                    </h4>
                    {phase.status === 'current' && (
                      <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
                    )}
                  </div>
                  <p className="text-[#F5F1E8]/80 font-light text-sm leading-relaxed whitespace-pre-line">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
