import { motion } from 'framer-motion'
import {
  BarChart,
  Brain,
  Database,
  Folder,
  Link,
  Lock,
  Mail,
  MessageSquare,
  Zap,
} from 'lucide-react'
import { cn } from '../../../lib/utils'

interface ArchitectureSlideProps {
  className?: string
}

// Hardcoded content for FLO project architecture
const architectureContent = {
  components: [
    {
      name: 'Inbound Adapter *',
      description:
        'Secure OAuth with incremental pull, dedupe, MIME parse, backoff strategies',
      icon: 'mail',
      connections: ['prioritizer', 'drafts'],
    },
    {
      name: 'Prioritizer Engine',
      description:
        'Rules + lightweight model with explanations, user feedback integration',
      icon: 'brain',
      connections: ['store', 'telemetry'],
    },
    {
      name: 'Assisted Drafts Service',
      description:
        'Prompt orchestration, guardrails, citation, human-in-the-loop validation',
      icon: 'message-square',
      connections: ['store', 'auth'],
    },
    {
      name: 'Auth & Security Layer',
      description:
        'OIDC/OAuth, minimal scopes, encrypted PII, least privilege access',
      icon: 'lock',
      connections: ['all-services'],
    },
    {
      name: 'Relational and vector database',
      description:
        'Secure data store with vector search, multi-tenant isolation',
      icon: 'database',
      connections: ['knowledge-base'],
    },
    {
      name: 'Observability Stack',
      description: 'OpenTelemetry, structured logging, metrics, feature flags',
      icon: 'bar-chart',
      connections: ['monitoring'],
    },
    {
      name: 'Future Adapters',
      description: 'Ready for Slack, Teams, WhatsApp, webhooks expansion',
      icon: 'link',
      connections: ['prioritizer'],
    },
    {
      name: 'Task management, data storage, and performance optimization',
      description: 'Job queues, caching, background processing for scalability',
      icon: 'zap',
      connections: ['processing'],
    },
  ],
  extraDescription: '*Inbound Adapter in V1 includes the Gmail Adapter',
}

const iconMap = {
  mail: Mail,
  brain: Brain,
  folder: Folder,
  'message-square': MessageSquare,
  link: Link,
  database: Database,
  lock: Lock,
  zap: Zap,
  'bar-chart': BarChart,
}

export function ArchitectureSlide({ className }: ArchitectureSlideProps) {
  const title = 'Service-Agnostic & Extensible Architecture'
  const content = architectureContent
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }

  return (
    <div
      className={cn(
        'min-h-screen flex flex-col justify-center bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 p-8 relative',
        className
      )}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-cyan-600/10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-12 text-center"
      >
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          {title}
        </h2>
        <div className="w-32 h-1 mx-auto mb-4 rounded-full bg-linear-to-br from-blue-400 to-cyan-400" />
        <p className="max-w-4xl mx-auto text-xl text-gray-300">
          Modular, scalable microservices architecture designed for
          multi-channel expansion
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.components.map((component, index) => {
            const Icon = iconMap[component.icon as keyof typeof iconMap]

            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="h-full p-6 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl hover:bg-white/15 hover:scale-105 hover:shadow-2xl group">
                  <div className="pb-4 text-center">
                    {Icon && (
                      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 transition-all duration-300 rounded-full bg-linear-to-br from-blue-400 to-cyan-400 group-hover:from-blue-300 group-hover:to-cyan-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <h3 className="mb-2 text-xl font-bold text-white">
                      {component.name}
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="text-sm leading-relaxed text-gray-300">
                      {component.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="relative z-10 mt-12 text-center"
        >
          <div className="max-w-4xl p-8 mx-auto border bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Modular & Scalable Architecture
            </h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Each component is designed to function independently, enabling
              granular scalability and expansion to multiple communication
              channels.
            </p>
            {content.extraDescription && (
              <p className="mt-4 text-xs italic text-gray-400">
                {content.extraDescription}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
