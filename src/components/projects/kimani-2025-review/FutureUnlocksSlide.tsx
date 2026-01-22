import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

interface FutureUnlocksSlideProps {
  className?: string
}

export function FutureUnlocksSlide({ className }: FutureUnlocksSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-5xl font-light text-[#F5F1E8] font-serif mb-4 tracking-wide uppercase">
          Future Unlocks: KLIFE & Scaling
        </h2>

        <div className="h-px bg-linear-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video bg-linear-to-br from-[#D4AF37]/20 to-[#8B7355]/20 border border-[#D4AF37]/30 flex items-center justify-center mb-8">
              <div className="text-[#D4AF37] text-7xl">🪙</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-light text-[#D4AF37] mb-4">
                KLIFE Token Infrastructure
              </h3>
              <p className="text-[#F5F1E8]/80 font-light leading-relaxed">
                Admin controls, traceability, and token management foundations
                are in place. The technical infrastructure is ready for
                activation—deployment becomes execution, not engineering.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-light text-[#D4AF37] mb-4">
                Sustainable Scaling Path
              </h3>
              <p className="text-[#F5F1E8]/80 font-light leading-relaxed">
                With authentication, onboarding, and core UX stabilized, the
                platform can scale without compromising member experience.
                Growth becomes a capacity decision, not a technical barrier.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
