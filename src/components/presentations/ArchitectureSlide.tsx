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
import { cn } from '../../lib/utils'

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
      name: 'Postgres + pgvector',
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
      name: 'Redis + BullMQ',
      description: 'Job queues, caching, background processing for scalability',
      icon: 'zap',
      connections: ['processing'],
    },
  ],
  extraDescription:
    '*The Inbound Adapter includes the Gmail Adapter, which provides secure integration with Gmail using OAuth, performs incremental email extraction, deduplication, MIME parsing, and backoff strategies for robustness and efficiency.',
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
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h2>
        <div className="w-32 h-1 bg-linear-to-br from-blue-400 to-cyan-400 mx-auto rounded-full mb-4" />
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Modular, scalable microservices architecture designed for
          multi-channel expansion
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.components.map((component, index) => {
            const Icon = iconMap[component.icon as keyof typeof iconMap]

            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="h-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                  <div className="text-center pb-4">
                    {Icon && (
                      <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {component.name}
                    </h3>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-300 text-sm leading-relaxed">
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
          className="mt-12 text-center relative z-10"
        >
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Modular & Scalable Architecture
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Each component is designed to function independently, enabling
              granular scalability and expansion to multiple communication
              channels.
            </p>
            {content.extraDescription && (
              <p className="text-xs text-gray-400 italic mt-4">
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
