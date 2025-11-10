import {
  Shield,
  Lock,
  Key,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
} from 'lucide-react'

const iconMap = {
  shield: Shield,
  lock: Lock,
  key: Key,
  eye: Eye,
  'check-circle': CheckCircle,
}

const statusIcons = {
  implemented: CheckCircle,
  planned: Clock,
  ongoing: AlertTriangle,
  'To be planned': Clock,
  'Scoped': CheckCircle,
}

// Hardcoded content for FLO project security
const securityContent = {
  principles: [
    {
      title: 'Minimal Scopes & Least Privilege',
      description: 'OAuth with minimal required scopes, role-based access controls, and principle of least privilege throughout',
      icon: 'key',
      implementation: [
        'Gmail API minimal read/write scopes only',
        'Role-based access control (RBAC) implementation',
        'Token rotation and expiration policies',
        'Audit trails for all access patterns',
      ],
    },
    {
      title: 'Encryption Everywhere',
      description: 'PII encrypted at rest and in transit, secure token handling, and data minimization practices',
      icon: 'lock',
      implementation: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for all data in transit',
        'Encrypted database connections',
        'Secure key management with rotation',
      ],
    },
    {
      title: 'Privacy by Design',
      description: 'PII minimization, data retention policies, and user control over personal information',
      icon: 'shield',
      implementation: [
        'Minimal PII collection and storage',
        'User-controlled data retention settings',
        'Right to deletion and data export',
        'Privacy-preserving analytics and logging',
      ],
    },
    {
      title: 'Zero Trust Architecture',
      description: 'No implicit trust, continuous verification, and comprehensive monitoring of all components',
      icon: 'eye',
      implementation: [
        'Continuous authentication validation',
        'Network segmentation and micro-perimeters',
        'Comprehensive audit logging',
        'Real-time threat detection and response',
      ],
    },
  ],
  compliance: [
    {
      standard: 'OAuth 2.0 / OIDC',
      description: 'Industry standard authentication with secure token handling',
      status: 'Scoped' as const,
    },
    {
      standard: 'GDPR Compliance',
      description: 'European data protection regulation adherence',
      status: 'To be planned' as const,
    },
    {
      standard: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'To be planned' as const,
    },
    {
      standard: 'ISO 27001',
      description: 'Information security management system standards',
      status: 'To be planned' as const,
    },
    {
      standard: 'CCPA Compliance',
      description: 'California Consumer Privacy Act requirements',
      status: 'To be planned' as const,
    },
    {
      standard: 'Data Encryption',
      description: 'AES-256 encryption at rest, TLS 1.3 in transit',
      status: 'Scoped' as const,
    },
  ],
}

export function SecuritySlide() {
  const title = 'Security & Compliance Framework'
  const content = securityContent
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 p-12 flex flex-col relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
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
                        <div className="w-1 h-1 bg-green-400 rounded-full mt-2 mr-3 shrink-0"></div>
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
