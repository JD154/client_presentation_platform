import { motion } from 'framer-motion'
import { cn } from '../../../lib/utils'

interface ExecutiveSynthesisSlideProps {
  className?: string
}

export function ExecutiveSynthesisSlide({
  className,
}: ExecutiveSynthesisSlideProps) {
  return (
    <div
      className={cn(
        'relative min-h-screen flex items-center justify-center',
        className,
      )}
    >
      <div className="absolute inset-0 bg-linear-to-br from-[#0a0a0a] to-[#2a2a2a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-5xl font-light text-[#F5F1E8] font-serif mb-8 tracking-wide uppercase">
          Executive Synthesis
        </h2>

        <div className="h-px bg-linear-to-r from-transparent via-[#D4AF37] to-transparent max-w-md mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] border border-[#D4AF37]/20 p-12 text-center"
          >
            <div className="text-8xl font-light text-[#D4AF37] mb-6">138</div>
            <div className="text-sm tracking-[0.2em] text-[#F5F1E8] uppercase">
              Tasks Created
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1a1a1a] border border-[#D4AF37]/20 p-12 text-center"
          >
            <div className="text-8xl font-light text-[#D4AF37] mb-6">85</div>
            <div className="text-sm tracking-[0.2em] text-[#F5F1E8] uppercase">
              Tasks Completed
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#1a1a1a] border border-[#D4AF37]/20 p-12 text-center"
          >
            <div className="text-8xl font-light text-[#D4AF37] mb-6">62%</div>
            <div className="text-sm tracking-[0.2em] text-[#F5F1E8] uppercase">
              Completion Rate
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-lg font-light italic text-[#D4AF37]/80 max-w-4xl mx-auto">
            Signal: Execution focused on trust, stability, and experiential
            foundations before acceleration.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
