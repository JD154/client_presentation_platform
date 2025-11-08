import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import type { CTASlideContent } from '../../lib/types'
import { cn } from '../../lib/utils'

interface CTASlideProps {
  content: CTASlideContent
  title: string
  className?: string
}

export function CTASlide({ className }: CTASlideProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 text-white p-8 relative',
        className
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-size-[100px_100px]" />
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-6xl relative z-10"
      >
        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-linear-to-br from-pink-400 to-red-400 rounded-full flex items-center justify-center">
              <div className="text-4xl">❤️</div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Thank You!
          </h1>
        </motion.div>

        {/* PDF Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-10 shadow-2xl"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-4">
              <ExternalLink className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">Detailed Proposal</h2>
          </div>
          <p className="text-xl text-gray-200 leading-relaxed mb-6">
            You will receive the complete proposal in PDF format with all the
            technical details, timelines and specifications mentioned in this
            presentation.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
