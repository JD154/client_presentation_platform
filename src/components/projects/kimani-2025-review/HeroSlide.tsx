import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

interface HeroSlideProps {
  className?: string
  onNext?: () => void
}

export function HeroSlide({ className }: HeroSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      {/* Elegant dark background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="text-sm font-light tracking-[0.3em] text-[#D4AF37] mb-8 uppercase">
            2025 Annual Review
          </div>

          <h1 className="font-serif text-7xl md:text-8xl font-light text-[#F5F1E8] mb-8 leading-tight">
            Kimani Workspace
          </h1>

          <div className="h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent mb-12 max-w-md mx-auto" />

          <p className="text-2xl font-light text-[#D4AF37] tracking-widest uppercase">
            Execution & Experiential Impact
          </p>
        </motion.div>
      </div>
    </div>
  )
}
