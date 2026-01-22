import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

interface GuidingQuestionSlideProps {
  className?: string
}

export function GuidingQuestionSlide({ className }: GuidingQuestionSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#F5F1E8] font-serif mb-16 tracking-wide uppercase">
            The Guiding Question
          </h2>

          <div className="h-px bg-linear-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mb-16" />

          <div className="border-l-2 border-[#D4AF37] pl-12">
            <blockquote className="text-4xl md:text-5xl font-serif italic text-[#F5F1E8] leading-relaxed">
              Did execution build the right foundations, at the right time, with
              the right strategic intent?
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
