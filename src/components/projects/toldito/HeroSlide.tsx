import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../../ui/button'
import { cn } from '../../../lib/utils'

interface HeroSlideProps {
  className?: string
  onNext?: () => void
}

// Content for Toldito reconciliation module
const heroContent = {
  subtitle: 'Conciliación Financiera Inteligente',
  description:
    'Transforma transacciones dispersas en un libro ordenado automáticamente. Toldito concilia el 90% de tus movimientos en menos de 15 minutos, con trazabilidad total y precisión del 85% en matching automático.',
  ctaText: 'Descubre la Solución',
  ctaLink: '#value-proposition',
}

export function HeroSlide({ className, onNext }: HeroSlideProps) {
  const content = heroContent
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className
      )}
    >
      {/* Dynamic gradient background - Yellow/Black theme */}
      <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-slate-900 to-black">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-500/10 via-transparent to-amber-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,204,21,0.08),transparent_50%)]" />
      </div>

      {/* Animated particles - Yellow theme */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-8"
          >
            <div className="text-6xl md:text-8xl font-black tracking-tight mb-4">
              <span className="bg-linear-to-br from-yellow-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Toldito
              </span>
            </div>

            {content.subtitle && (
              <div className="text-2xl md:text-4xl font-light text-yellow-100 mb-8 tracking-wide">
                {content.subtitle}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12 font-light"
          >
            {content.description}
          </motion.div>

          {content.ctaText && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="text-lg px-12 py-6 h-auto bg-linear-to-br from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black border-0 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
                onClick={() => {
                  if (onNext) {
                    onNext()
                  } else if (content.ctaLink?.startsWith('#')) {
                    const element = document.querySelector(content.ctaLink)
                    element?.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                {content.ctaText}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
