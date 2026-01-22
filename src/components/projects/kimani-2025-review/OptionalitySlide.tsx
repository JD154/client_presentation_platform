import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

interface OptionalitySlideProps {
  className?: string
}

export function OptionalitySlide({ className }: OptionalitySlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#D4AF37]/20 to-[#8B7355]/20 flex items-center justify-center border border-[#D4AF37]/30">
              <div className="text-center p-12">
                <div className="text-[#D4AF37]/60 text-8xl font-light mb-4">
                  53
                </div>
                <div className="text-[#F5F1E8]/60 text-xl tracking-wider">
                  Pending Tasks
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-light text-[#F5F1E8] font-serif mb-8 uppercase tracking-wide">
              Optionality Preservation
            </h2>

            <h3 className="text-2xl font-light text-[#D4AF37] mb-8 font-serif">
              Deliberate Holding Pattern
            </h3>

            <div className="space-y-6 text-[#F5F1E8]/80 text-lg font-light">
              <p>
                53 tasks remain pending, with many intentionally in Backlog or
                Unassigned. This is not execution debt—it is{' '}
                <span className="text-[#D4AF37]">optionality preservation</span>
                .
              </p>

              <ul className="space-y-4 list-none">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span>Kimani resisted premature commitment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span>
                    Capacity was protected for higher-order experiential work.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">•</span>
                  <span>
                    In a luxury context, not everything worthy should move
                    immediately.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
