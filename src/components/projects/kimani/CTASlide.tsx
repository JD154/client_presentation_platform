import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface CTASlideProps {
  className?: string
  onNext?: () => void
}

export function CTASlide({ className }: CTASlideProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col justify-center py-20 px-8 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]',
        className
      )}
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-light text-[#F5F1E8] font-serif tracking-wide mb-8">
            Thank You
          </h1>

          <div className="h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent max-w-md mx-auto mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="border border-[#D4AF37] p-12 bg-[#D4AF37]/5 backdrop-blur-sm inline-block">
            <div className="flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#D4AF37] mr-3" />
              <span className="text-sm text-[#D4AF37] font-light tracking-widest uppercase">
                Ready to Begin?
              </span>
            </div>
          </div>
        </motion.div>

        {/* Subtle animation elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37]/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
