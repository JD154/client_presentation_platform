import { motion } from 'framer-motion'
import { MessageCircle, Shield, Coins } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface ConciergeDirectionSlideProps {
  className?: string
}

export function ConciergeDirectionSlide({
  className,
}: ConciergeDirectionSlideProps) {
  const features = [
    {
      icon: MessageCircle,
      title: 'Chat-First',
      description:
        'Moving towards a chat-first concierge experience that prioritizes human connection over transactional tickets.',
    },
    {
      icon: Shield,
      title: 'Admin Queues',
      description:
        'Role-gated permissions and structured admin queues to ensure privacy and efficiency.',
    },
    {
      icon: Coins,
      title: 'Token-Aware',
      description:
        'Setting the stage for token-aware surfaces where member assets influence their experience.',
    },
  ]

  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-5xl font-light text-[#F5F1E8] font-serif mb-4 uppercase tracking-wide">
          <span className="text-[#D4AF37]">3.</span> Concierge Direction
        </h2>

        <div className="h-px bg-linear-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="border border-[#D4AF37]/30 p-8 bg-[#2a2a2a]/50 backdrop-blur-sm"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="bg-[#D4AF37]/10 p-6 rounded-full">
                  <feature.icon className="w-12 h-12 text-[#D4AF37]" />
                </div>
              </div>

              <h3 className="text-2xl font-light text-[#D4AF37] text-center mb-4">
                {feature.title}
              </h3>

              <p className="text-[#F5F1E8]/70 text-center font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
