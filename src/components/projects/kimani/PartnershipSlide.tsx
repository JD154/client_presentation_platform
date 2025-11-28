import { motion } from 'framer-motion'
import { Building2, Code, Users, Handshake } from 'lucide-react'
import { cn } from '../../../lib/utils'

interface PartnershipSlideProps {
  className?: string
}

const amirResponsibilities = [
  {
    icon: Building2,
    title: 'Brand & Narrative',
    description:
      'Brand identity, storytelling, and membership rules definition',
  },
  {
    icon: Users,
    title: 'Experience Design',
    description: 'Final product decisions and member experience curation',
  },
]

const uklokResponsibilities = [
  {
    icon: Code,
    title: 'Technical Infrastructure',
    description:
      'Infrastructure, orchestration, inner-memory & on-chain patterns',
  },
  {
    icon: Handshake,
    title: 'Modular Architecture',
    description: 'Vendor-neutral tech architecture with no lock-in constraints',
  },
]

export function PartnershipSlide({ className }: PartnershipSlideProps) {
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col justify-center py-20 px-8 bg-gradient-to-br from-[#0a0a0a] to-[#2a2a2a]',
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-light text-[#F5F1E8] font-serif tracking-wide mb-6 uppercase">
            Ownership & Partnership
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent max-w-md mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Amir / Kimani Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light text-[#D4AF37] mb-8 font-serif tracking-widest uppercase text-center">
              Amir / Kimani
            </h3>

            <div className="space-y-6">
              {amirResponsibilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-[#F5F1E8] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#F5F1E8]/80 font-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* UKLOK Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-light text-[#D4AF37] mb-8 font-serif tracking-widest uppercase text-center">
              UKLOK
            </h3>

            <div className="space-y-6">
              {uklokResponsibilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-light text-[#F5F1E8] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#F5F1E8]/80 font-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Partnership Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="border border-[#D4AF37] p-12 bg-[#D4AF37]/5 backdrop-blur-sm">
            <blockquote className="text-2xl font-light text-[#F5F1E8] font-serif italic leading-relaxed">
              "You own the club and the story.
              <br />
              We give Kimani the heart, the memory, and the mind to scale your
              values."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
