import { motion } from 'framer-motion'
import { MapPin, Users, Heart, Sparkles } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface OriginStorySlideProps {
  className?: string
}

const journey = [
  {
    icon: MapPin,
    title: 'Born in a Kibbutz',
    subtitle: 'Community before luxury, values before wealth',
    description:
      'From the Negev desert roots to understanding what true community means',
  },
  {
    icon: Users,
    title: 'Global Perspective',
    subtitle: 'NYC • Miami • Paris • Ibiza • Mykonos • St. Tropez',
    description:
      "Curating experiences across the world's most exclusive destinations",
  },
  {
    icon: Heart,
    title: 'Proven Success',
    subtitle: 'Co-built LVH: scaled ultra-luxury without losing soul',
    description:
      'Demonstrated ability to scale premium experiences while maintaining authenticity',
  },
]

export function OriginStorySlide({ className }: OriginStorySlideProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col justify-center py-20 px-8 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]',
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column - Journey */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-[#F5F1E8] font-serif tracking-wide mb-8 uppercase">
              From the Negev
              <br />
              to the World
            </h1>

            <div className="h-px bg-linear-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent mb-12" />

            <div className="space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30 bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-light text-[#F5F1E8] mb-2 font-serif">
                        {item.title}
                      </h3>
                      <p className="text-[#D4AF37] text-sm mb-3 font-light">
                        {item.subtitle}
                      </p>
                      <p className="text-[#F5F1E8]/80 font-light text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - The Bridge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-linear-to-br from-[#D4AF37]/10 to-transparent rounded-lg blur-xl" />

              <div className="relative border border-[#D4AF37] p-12 bg-[#2a2a2a]/80 backdrop-blur-sm">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <Sparkles className="w-12 h-12 text-[#D4AF37]" />
                  </div>

                  <h3 className="text-2xl font-light text-[#D4AF37] mb-6 font-serif italic">
                    "The Bridge"
                  </h3>

                  <p className="text-lg font-light text-[#F5F1E8] leading-relaxed">
                    Kimani is that life story turned into a members club where{' '}
                    <span className="text-[#D4AF37] font-semibold">
                      generosity
                    </span>
                    , not money, is the real access key.
                  </p>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#D4AF37]/50" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#D4AF37]/50" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#D4AF37]/50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#D4AF37]/50" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
