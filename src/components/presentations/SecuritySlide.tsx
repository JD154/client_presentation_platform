import {
  Shield,
  Lock,
  Key,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
} from 'lucide-react'
import type { SecuritySlideContent } from '../../lib/types'

interface Props {
  title: string
  content: SecuritySlideContent
}

const iconMap = {
  shield: Shield,
  lock: Lock,
  key: Key,
  eye: Eye,
  'check-circle': CheckCircle,
}

const statusColors = {
  implemented: 'text-green-600 bg-green-100',
  planned: 'text-blue-600 bg-blue-100',
  ongoing: 'text-orange-600 bg-orange-100',
}

const statusIcons = {
  implemented: CheckCircle,
  planned: Clock,
  ongoing: AlertTriangle,
}

export function SecuritySlide({ title, content }: Props) {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 p-12 flex flex-col relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-cyan-600/10" />

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <div className="w-32 h-1 bg-linear-to-br from-blue-400 to-cyan-400 mx-auto rounded-full mb-6" />
        <p className="text-xl text-gray-300 font-medium max-w-4xl mx-auto mb-6">
          Enterprise-grade security with privacy-by-design and zero-trust
          principles
        </p>
      </div>

      {/* Security Principles */}
      <div className="mb-10 relative z-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
          <div className="w-2 h-2 bg-linear-to-br from-red-400 to-orange-400 rounded-full mr-3" />
          Security Architecture Principles
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.principles.map((principle, index) => {
            const IconComponent = principle.icon
              ? iconMap[principle.icon as keyof typeof iconMap]
              : Shield

            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-linear-to-br from-red-400 to-orange-400 rounded-lg mr-4 shrink-0 flex items-center justify-center group-hover:from-red-300 group-hover:to-orange-300 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-3 flex items-center">
                    <div className="w-1 h-1 bg-linear-to-br from-green-400 to-emerald-400 rounded-full mr-2" />
                    Implementation:
                  </h4>
                  <ul className="space-y-2">
                    {principle.implementation.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-gray-300 bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors duration-200"
                      >
                        <div className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Compliance Standards */}
      <div className="flex-1 relative z-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center">
          <div className="w-2 h-2 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full mr-3" />
          Compliance & Standards
        </h2>
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.compliance.map((item, index) => {
              const StatusIcon = statusIcons[item.status]

              return (
                <div
                  key={index}
                  className="border border-white/10 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-white text-sm">
                      {item.standard}
                    </h3>
                    <div className="flex items-center px-3 py-1 rounded-full text-xs font-medium text-blue-300 bg-blue-500/20 border border-blue-400/30">
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {item.status}
                    </div>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Security Guarantees */}
      <div className="mt-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-white relative z-10">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2 text-white flex items-center justify-center">
            <div className="w-2 h-2 bg-linear-to-br from-green-400 to-emerald-400 rounded-full mr-3" />
            Security Guarantees
          </h3>
        </div>
        <div className="grid md:grid-cols-4 gap-4 text-center text-sm">
          <div>
            <div className="text-3xl font-bold mb-1 bg-linear-to-br from-green-400 to-emerald-400 bg-clip-text text-transparent">
              0
            </div>
            <div className="text-gray-300">P0 Security Incidents</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1 bg-linear-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              100%
            </div>
            <div className="text-gray-300">Data Encryption</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1 bg-linear-to-br from-purple-400 to-pink-400 bg-clip-text text-transparent">
              OAuth
            </div>
            <div className="text-gray-300">Secure Authentication</div>
          </div>
          <div>
            <div className="text-2xl font-bold mb-1 bg-linear-to-br from-orange-400 to-red-400 bg-clip-text text-transparent">
              RBAC
            </div>
            <div className="text-gray-300">Access Control</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  )
}
