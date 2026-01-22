import { motion } from 'framer-motion'
import { UserPlus } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface WelcomeSlideProps {
  className?: string
}

export function WelcomeSlide({ className }: WelcomeSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]" />

      <div className="relative z-10 px-8 py-16 mx-auto max-w-7xl">
        <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl" />
              <div className="relative bg-linear-to-br from-[#D4AF37]/20 to-[#8B7355]/20 p-16 border border-[#D4AF37]/30">
                <UserPlus
                  className="w-64 h-64 text-[#D4AF37]"
                  strokeWidth={1}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl font-light text-[#F5F1E8] font-serif mb-8 uppercase tracking-wide">
              <span className="text-[#D4AF37]">2.</span> Welcome & Narrative
              Loops
            </h2>

            <h3 className="text-2xl font-light text-[#D4AF37] mb-8 font-serif">
              A Cultural Handshake
            </h3>

            <div className="space-y-6 text-[#F5F1E8]/80 text-lg font-light">
              <p>
                The "Privileged Concierge" and welcome flows were executed with
                narrative intent. Welcome messages (video + text automation) and
                integrated push notifications ensure members feel welcomed
                before they are managed.
              </p>

              <div className="h-px bg-linear-to-r from-[#D4AF37] via-[#D4AF37]/50 to-transparent my-6" />

              <p className="italic">
                Kimani's first interaction is a{' '}
                <span className="text-[#D4AF37]">cultural handshake</span>, not
                a feature tour. Retention here is emotional, not mechanical.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
