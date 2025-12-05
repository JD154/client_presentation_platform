import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Button } from '../../ui/button'
import { cn } from '../../../lib/utils'

interface HeroSlideProps {
  className?: string
  onNext?: () => void
}

const heroContent = {
  subtitle: 'Clear Reporting Baseline for Profitability Insights',
  description:
    'Set up a simple reporting baseline that shows, in plain terms, profitability from job execution to billing and invoicing.',
  ctaText: 'See The Vision',
}

export function HeroSlide({ className, onNext }: HeroSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        className
      )}
    >
      {/* Light background with subtle accents */}
      <div className="absolute inset-0 bg-[#F5F5F5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,0,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,255,0,0.02),transparent_60%)]" />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-br from-white/50 via-transparent to-white/50" />
      </div>

      {/* Floating neon dots */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00FF00] rounded-full shadow-[0_0_10px_#00FF00]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-8 mx-auto text-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo/Brand area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center mb-8">
              <TrendingUp className="w-16 h-16 text-[#00FF00] mr-4" />
              <div className="font-black tracking-tight text-7xl md:text-9xl">
                <span className="text-black">Haulink</span>
                <span className="text-[#00FF00] ml-4">BI</span>
              </div>
            </div>

            <div className="h-0.5 bg-linear-to-r from-transparent via-[#00FF00] to-transparent max-w-2xl mx-auto mb-8" />

            {heroContent.subtitle && (
              <div className="text-2xl font-medium tracking-wide text-gray-800 uppercase md:text-3xl">
                {heroContent.subtitle}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="max-w-4xl mx-auto mb-12 text-xl leading-relaxed text-gray-800 md:text-2xl"
          >
            {heroContent.description}
          </motion.div>

          {/* CTA Button */}
          {heroContent.ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button
                size="lg"
                className="text-lg px-12 py-6 h-auto bg-[#00FF00] hover:bg-[#00FF00]/90 text-black font-bold rounded-md shadow-[0_0_30px_rgba(0,255,0,0.3)] hover:shadow-[0_0_50px_rgba(0,255,0,0.5)] transform hover:scale-105 transition-all duration-300 border-0"
                onClick={() => {
                  if (onNext) {
                    onNext()
                  }
                }}
              >
                {heroContent.ctaText}
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          )}

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-16 text-sm tracking-widest text-gray-600 uppercase"
          >
            Hauling simplified. Insights clarified.
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
