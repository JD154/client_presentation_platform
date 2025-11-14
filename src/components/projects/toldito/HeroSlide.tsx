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
  subtitle: 'Módulo de Conciliación Financiera Inteligente',
  description:
    'Nuevo módulo integrado a tu sistema administrativo que automatiza la conciliación de transacciones. Concilia el 90% de tus movimientos en menos de 15 minutos, con trazabilidad total y precisión del 85% en matching automático, sin cambiar de plataforma.',
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
            className="absolute w-2 h-2 rounded-full bg-yellow-400/20"
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

      <div className="relative z-10 max-w-6xl px-8 mx-auto text-center text-white">
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
            <div className="mb-4 text-6xl font-black tracking-tight md:text-8xl">
              <span className="text-transparent bg-linear-to-br from-yellow-400 via-amber-400 to-yellow-300 bg-clip-text">
                Toldito Amarillo
              </span>
            </div>

            {content.subtitle && (
              <div className="mb-8 text-2xl font-light tracking-wide text-yellow-100 md:text-4xl">
                {content.subtitle}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto mb-12 text-xl font-light leading-relaxed text-gray-200 md:text-2xl"
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
                className="h-auto px-12 py-6 text-lg font-bold text-black transition-all duration-300 transform border-0 rounded-full shadow-2xl bg-linear-to-br from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 hover:scale-105"
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
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
