import { motion } from 'framer-motion'
import { Heart, BookOpen, Brain } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface ValuePropositionSlideProps {
  className?: string
}

const organs = [
  {
    icon: Heart,
    title: 'The Heart',
    subtitle: 'Concierge',
    description:
      'Front line for requests, curation, bookings, follow-up. Feels like "Amir is behind every yes" – fast, human, warm.',
    promise: 'Every interaction feels personally curated, not transactional.',
  },
  {
    icon: BookOpen,
    title: 'The Memory',
    subtitle: 'CRM',
    description:
      'Living memory of members, trips, tastes, and stories. Remembers preferences and context across channels.',
    promise: 'The more members interact, the more Kimani feels like family.',
  },
  {
    icon: Brain,
    title: 'The Mind',
    subtitle: 'AI / Inner Memory',
    description:
      'AI copilots the concierge – never replaces it. Surfaces member history, suggests experiences, drafts replies.',
    promise: 'Scale to hundreds/thousands of members without losing intimacy.',
  },
]

export function ValuePropositionSlide({
  className,
}: ValuePropositionSlideProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col justify-center py-20 px-8 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]',
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-light text-[#F5F1E8] font-serif tracking-wide mb-6 uppercase">
            The Three Organs of Kimani
          </h1>
          <div className="h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent max-w-md mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {organs.map((organ, index) => (
            <motion.div
              key={organ.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
              className="group"
            >
              <div className="border border-[#D4AF37]/30 p-8 bg-[#2a2a2a]/50 backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37] hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#D4AF37]/20">
                <div className="mb-6 text-center">
                  <organ.icon className="w-16 h-16 text-[#D4AF37] mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-2xl font-light text-[#F5F1E8] font-serif uppercase tracking-wider mb-2">
                    {organ.title}
                  </h3>
                  <div className="text-sm text-[#D4AF37] font-light tracking-widest uppercase">
                    {organ.subtitle}
                  </div>
                </div>

                <div className="h-px bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-6" />

                <p className="text-[#F5F1E8] font-light leading-relaxed mb-6 text-center">
                  {organ.description}
                </p>

                <div className="border border-[#D4AF37]/20 p-4 bg-[#D4AF37]/5 backdrop-blur-sm">
                  <p className="text-sm text-[#F5F1E8] font-light italic text-center">
                    <span className="text-[#D4AF37] font-semibold">
                      Promise:
                    </span>{' '}
                    {organ.promise}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="border border-[#D4AF37] p-8 bg-[#D4AF37]/5 backdrop-blur-sm max-w-4xl mx-auto">
            <p className="text-xl text-[#F5F1E8] font-light italic">
              "Kimani bridges the gap between{' '}
              <span className="text-[#D4AF37]">kibbutz values</span> and{' '}
              <span className="text-[#D4AF37]">global luxury</span> – where
              generosity, not money, is the real access key."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
