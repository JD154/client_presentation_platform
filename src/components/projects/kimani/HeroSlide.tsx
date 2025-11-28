import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../../ui/button'
import { cn } from '../../../lib/utils'

interface HeroSlideProps {
  className?: string
  onNext?: () => void
}

const heroContent = {
  subtitle: 'Giving Your Club a Heart, a Memory, and a Mind',
  description:
    'From kibbutz roots to a global community where exclusivity is earned by generosity. Kimani transforms hospitality through AI-powered concierge services, intelligent memory systems, and contribution-based membership.',
  ctaText: 'Begin the Journey',
}

export function HeroSlide({ className, onNext }: HeroSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className
      )}
    >
      {/* Kimani gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#2a2a2a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-[#8B7355]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      </div>

      {/* Elegant particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37]/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center text-[#F5F1E8]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="mb-12"
          >
            <div className="mb-6 font-serif font-light tracking-wide text-7xl md:text-9xl">
              <span className="bg-gradient-to-br from-[#D4AF37] to-[#F5F1E8] bg-clip-text text-transparent">
                Kimani Life
              </span>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8 max-w-md mx-auto" />

            {heroContent.subtitle && (
              <div className="text-2xl md:text-3xl font-light text-[#D4AF37] mb-12 tracking-wide font-serif uppercase">
                {heroContent.subtitle}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-[#F5F1E8] max-w-4xl mx-auto leading-relaxed mb-16 font-light"
          >
            {heroContent.description}
          </motion.div>

          {heroContent.ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="text-lg px-12 py-4 h-auto bg-transparent border border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#D4AF37] rounded-none shadow-2xl transform hover:scale-105 transition-all duration-300 font-light tracking-wider uppercase"
                onClick={() => {
                  if (onNext) {
                    onNext()
                  }
                }}
              >
                {heroContent.ctaText}
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
