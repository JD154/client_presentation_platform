import {
  Clock,
  Target,
  Zap,
  Shield,
  Users,
  Lightbulb,
  TrendingUp,
  CheckCircle,
} from 'lucide-react'

const iconMap = {
  clock: Clock,
  target: Target,
  zap: Zap,
  shield: Shield,
  users: Users,
  lightbulb: Lightbulb,
  'trending-up': TrendingUp,
  'check-circle': CheckCircle,
}

// Hardcoded content for FLO project value proposition
const valuePropositionContent = {
  mainValue:
    'FLO is an input-centric platform designed to connect multiple sources into a single prioritization and drafting engine, starting with Gmail for speed and safety.',
  benefits: [
    {
      title: 'Time Savings',
      description:
        'Reduce average response time to priority emails by ±50% within 2 weeks',
      icon: 'clock',
      metric: '±50%',
    },
    {
      title: 'Auto-Triage Coverage',
      description:
        'Automated classification with high perceived precision and feedback loops',
      icon: 'target',
      metric: '≥30%',
    },
    {
      title: 'Lightning Speed',
      description:
        'First draft generation in seconds with thread context understanding',
      icon: 'zap',
      metric: '≤3s',
    },
    {
      title: 'Security First',
      description:
        'Zero P0 incidents with OAuth/OIDC and encrypted data handling',
      icon: 'shield',
      metric: '100%',
    },
  ],
  outcomes: [
    {
      label: 'Immediate Productivity',
      description: 'Users see value within first week of use',
      icon: 'trending-up',
    },
    {
      label: 'Compounding Returns',
      description: 'AI learns and improves with each interaction',
      icon: 'lightbulb',
    },
    {
      label: 'Seamless Integration',
      description: 'Works within existing Gmail workflow',
      icon: 'check-circle',
    },
    {
      label: 'Future Ready',
      description: 'Extensible to multiple communication channels',
      icon: 'users',
    },
    {
      label: 'Draft Generation Speed',
      description: 'P50 / ≤7s P95 for threads ≤10 messages',
      icon: 'zap',
    },
    {
      label: 'Security Incidents',
      description: 'P0 incidents with OAuth/OIDC & encrypted PII',
      icon: 'trending-up',
    },
  ],
}

export function ValuePropositionSlide() {
  const title = 'Revolutionizing Communication Efficiency'
  const content = valuePropositionContent
  return (
    <div className="relative flex flex-col min-h-screen p-12 bg-linear-to-br from-gray-900 via-slate-800 to-blue-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-cyan-600/10" />

      {/* Header */}
      <div className="relative z-10 mb-12 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          {title}
        </h1>
        <div className="w-32 h-1 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-400 to-cyan-400" />
        <div className="max-w-4xl mx-auto text-xl font-medium leading-relaxed text-gray-300 md:text-2xl">
          {content.mainValue}
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="relative z-10 mb-12">
        <h2 className="mb-8 text-2xl font-bold text-left text-white">
          Key Performance Indicators
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
              ? iconMap[benefit.icon as keyof typeof iconMap]
              : Lightbulb

            return (
              <div
                key={index}
                className="p-6 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl hover:bg-white/15 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center justify-center w-16 h-16 transition-all duration-300 rounded-full bg-linear-to-br from-blue-400 to-cyan-400 group-hover:from-blue-300 group-hover:to-cyan-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  {benefit.metric && (
                    <div className="text-3xl font-black text-transparent bg-linear-to-br from-blue-300 to-cyan-300 bg-clip-text">
                      {benefit.metric}
                    </div>
                  )}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {
        /* Business Outcomes */
        <div>
          <h2 className="mb-6 text-2xl font-bold text-left text-white">
            Expected Business Outcomes
          </h2>
          <div className="relative z-10 p-8 border bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {content.outcomes.map((outcome, index) => {
                const IconComponent = outcome.icon
                  ? iconMap[outcome.icon as keyof typeof iconMap]
                  : CheckCircle

                return (
                  <div key={index} className="flex items-start">
                    <div className="p-2 mt-1 mr-3 rounded-lg bg-linear-to-br from-green-400 to-emerald-400 shrink-0">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-semibold text-white">
                        {outcome.label}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      }
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
