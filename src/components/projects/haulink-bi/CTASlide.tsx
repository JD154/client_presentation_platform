import { motion } from 'framer-motion'
import { CheckSquare, Users, FileText } from 'lucide-react'

const ctaContent = {
  nextSteps: [
    {
      step: '1',
      title: 'Approve BI Benchmark',
      description:
        'Confirm environment and access. We share the test plan for sign-off (and CRD if required)',
      icon: CheckSquare,
    },
    {
      step: '2',
      title: 'Provision & Validate',
      description:
        'Recreate proof-of-concept, turn on updates, run checks, finalize dashboards',
      icon: Users,
    },
    {
      step: '3',
      title: 'Acceptance & Handover',
      description:
        'Approve data guide and dashboards, confirm access, agree check-in windows',
      icon: FileText,
    },
  ],
  contact: {
    team: '2025 @ UKLOK Team',
  },
}

export function CTASlide() {
  const content = ctaContent

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-8 overflow-hidden bg-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,255,0,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,245,245,0.5),transparent_60%)]" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00FF00]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.5, 0],
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
        className="relative z-10 w-full max-w-6xl"
      >
        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-8 text-3xl font-bold text-center text-black">
            Next Steps
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {content.nextSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                  className="relative p-6 border bg-white/80 backdrop-blur-sm border-gray-200 rounded-lg hover:border-[#00FF00] transition-all duration-300"
                >
                  {/* Step number badge */}
                  <div className="absolute top-0 right-0 -mt-3 -mr-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#00FF00] text-black font-black text-xl">
                      {step.step}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-[#00FF00]/10 border border-[#00FF00]/30">
                      <Icon className="w-8 h-8 text-[#00FF00]" />
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-800">
                    {step.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="pt-8 text-center border-t border-gray-200"
        >
          <div className="mb-4 text-2xl font-bold text-black">
            {content.contact.team}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
