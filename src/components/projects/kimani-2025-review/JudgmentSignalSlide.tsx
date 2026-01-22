import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

interface JudgmentSignalSlideProps {
  className?: string
}

export function JudgmentSignalSlide({ className }: JudgmentSignalSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-5xl font-light text-[#F5F1E8] font-serif mb-8 tracking-wide uppercase">
          Judgment Signal
        </h2>

        <div className="h-px bg-linear-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#1a1a1a] border border-[#D4AF37]/20 p-10"
          >
            <h3 className="text-2xl font-light text-[#D4AF37] mb-6">
              Meetings to Decisions
            </h3>
            <p className="text-[#F5F1E8]/80 font-light leading-relaxed mb-6">
              A critical positive signal was the conversion of conversations
              into execution contracts. From meeting-derived themes, 16
              decision-driven tasks were identified with a 75% completion
              success rate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1a1a1a] border border-[#D4AF37]/20 p-10"
          >
            <h3 className="text-2xl font-light text-[#D4AF37] mb-6">
              Product Reality
            </h3>
            <p className="text-[#F5F1E8]/80 font-light leading-relaxed mb-6">
              This indicates that meetings are not performative and feedback
              loops are accountable. Time spent together reliably compounds into
              product reality, essential for a founder-led vision.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
