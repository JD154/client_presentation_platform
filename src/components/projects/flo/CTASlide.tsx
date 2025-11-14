import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface CTASlideProps {
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
            className="absolute w-1 h-1 rounded-full bg-white/20"
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
        className="relative z-10 max-w-6xl text-center"
      >
        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-linear-to-br from-pink-400 to-red-400">
              <div className="text-4xl">❤️</div>
            </div>
          </div>
          <h1 className="mb-8 text-5xl font-black text-transparent md:text-7xl bg-linear-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text">
            Thank You!
          </h1>
        </motion.div>

        {/* PDF Reminder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="p-10 border shadow-2xl bg-white/10 backdrop-blur-lg border-white/20 rounded-2xl"
        >
          <div className="mb-6 ">
            <a
              href="/flo_proposal_html_version.html"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open proposal HTML version in new tab"
              className="flex items-center justify-center"
            >
              <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-full bg-linear-to-br from-blue-400 to-cyan-400">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                View the detailed proposal
              </h2>
            </a>
          </div>
          <p className="mb-6 text-xl leading-relaxed text-gray-200">
            You will also receive the complete proposal in PDF format with all
            the technical details, timelines and specifications mentioned in
            this presentation.
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
