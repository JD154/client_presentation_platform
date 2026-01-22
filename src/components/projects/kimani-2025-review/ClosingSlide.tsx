import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

interface ClosingSlideProps {
  className?: string
}

export function ClosingSlide({ className }: ClosingSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl px-8 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="border border-[#D4AF37] p-16 bg-[#2a2a2a]/80 backdrop-blur-sm relative"
        >
          <blockquote className="text-4xl md:text-5xl font-serif italic text-[#F5F1E8] leading-relaxed mb-8">
            "In 2025, we didn't build faster. We built right."
          </blockquote>

          <div className="h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent mb-8" />

          <p className="text-xl font-light text-[#D4AF37]">
            The foundations that enable everything next.
          </p>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#D4AF37]/50" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#D4AF37]/50" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#D4AF37]/50" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#D4AF37]/50" />
        </motion.div>
      </div>
    </div>
  )
}
