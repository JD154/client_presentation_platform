import { motion } from 'framer-motion'
import { DollarSign, Database, GitMerge, BarChart4, Server, Shield } from 'lucide-react'
import { AnimatedArchitectureDiagram } from './AnimatedArchitectureDiagram'
import { useState } from 'react'

const architectureContent = {
  components: [
    {
      name: 'QuickBooks Integration',
      description: 'Secure connection to QuickBooks Online via API for invoices, bills, and payments',
      icon: DollarSign,
      layer: 'source',
    },
    {
      name: 'Haulink Operations DB',
      description: 'Direct access to operational data including job execution and asset tracking',
      icon: Server,
      layer: 'source',
    },
    {
      name: 'Data Ingestion Pipeline',
      description: 'Automated sync with retry logic, deduplication, and change detection',
      icon: GitMerge,
      layer: 'processing',
    },
    {
      name: 'Unified Data Store',
      description: 'Normalized data from both systems with full history and audit trails',
      icon: Database,
      layer: 'storage',
    },
    {
      name: 'Reconciliation Engine',
      description: 'Matching logic that connects financial records to operational events',
      icon: GitMerge,
      layer: 'processing',
    },
    {
      name: 'Executive Dashboards',
      description: 'Visual reports showing profitability, asset performance, and reconciliation',
      icon: BarChart4,
      layer: 'presentation',
    },
  ],
}

const layerConfig = {
  source: { 
    label: 'Data Sources', 
    color: 'text-blue-600', 
    bg: 'bg-blue-50', 
    border: 'border-blue-200' 
  },
  processing: { 
    label: 'Processing', 
    color: 'text-green-600', 
    bg: 'bg-green-50', 
    border: 'border-green-200' 
  },
  storage: { 
    label: 'Storage', 
    color: 'text-purple-600', 
    bg: 'bg-purple-50', 
    border: 'border-purple-200' 
  },
  presentation: { 
    label: 'Presentation', 
    color: 'text-orange-600', 
    bg: 'bg-orange-50', 
    border: 'border-orange-200' 
  },
}

export function ArchitectureSlide() {
  const title = 'Data Integration Architecture'
  const content = architectureContent
  const [showDetails, setShowDetails] = useState(false)

  const layers = ['source', 'processing', 'storage', 'presentation'] as const

  return (
    <div className="relative flex flex-col min-h-screen p-8 bg-white">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-linear-to-br from-[#F5F5F5] via-white to-[#F5F5F5]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,255,0,0.03),transparent_50%)]" />

      {/* Header */}
      <div className="relative z-10 mb-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold text-black md:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-32 h-1 mx-auto mb-4 bg-[#00FF00]"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-lg text-gray-800"
        >
          Clean, automated data flow connecting QuickBooks financial data with Haulink operations
        </motion.p>
      </div>

      {/* Animated Architecture Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 mb-6"
      >
        <AnimatedArchitectureDiagram
          onComplete={() => setShowDetails(true)}
        />
      </motion.div>

      {/* Technical Details (shown after animation) */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {layers.map((layer, layerIndex) => {
            const layerStyle = layerConfig[layer]
            const componentsInLayer = content.components.filter((c) => c.layer === layer)

            return componentsInLayer.map((component, index) => {
              const Icon = component.icon

              return (
                <motion.div
                  key={`${layer}-${index}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: layerIndex * 0.1 + index * 0.1 }}
                  className={`p-4 border ${layerStyle.border} ${layerStyle.bg} backdrop-blur-sm rounded-lg hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-lg ${layerStyle.bg} border ${layerStyle.border} mr-3 shrink-0`}>
                      <Icon className={`w-5 h-5 ${layerStyle.color}`} />
                    </div>
                    <div>
                      <div className={`text-xs font-bold uppercase tracking-wider ${layerStyle.color} mb-1`}>
                        {layerStyle.label}
                      </div>
                      <h4 className="mb-2 text-base font-bold text-black">
                        {component.name}
                      </h4>
                      <p className="text-sm leading-relaxed text-gray-800">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })
          })}
        </motion.div>
      )}

      {/* Bottom Summary */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="relative z-10 mt-8 p-6 text-center border bg-white/80 backdrop-blur-sm border-[#00FF00]/30 rounded-lg"
        >
          <p className="text-lg font-medium text-gray-800">
            All components work together to provide real-time visibility into business operations and financial performance
          </p>
        </motion.div>
      )}

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-white to-transparent" />
    </div>
  )
}