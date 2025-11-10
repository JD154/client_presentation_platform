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
        'Reduce average response time to priority emails by 50% within 2 weeks',
      icon: 'clock',
      metric: '50%',
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
      label: 'Auto-Triage Precision',
      description: 'Perceived precision with thumbs up/down feedback loop',
      icon: 'target',
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
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 p-12 flex flex-col relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-cyan-600/10" />

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <div className="w-32 h-1 bg-linear-to-br from-blue-400 to-cyan-400 mx-auto rounded-full mb-6" />
        <div className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed max-w-4xl mx-auto">
          {content.mainValue}
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 relative z-10">
        {content.benefits.map((benefit, index) => {
          const IconComponent = benefit.icon
            ? iconMap[benefit.icon as keyof typeof iconMap]
            : Lightbulb

          return (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                {benefit.metric && (
                  <div className="text-3xl font-black bg-linear-to-br from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    {benefit.metric}
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          )
        })}
      </div>

      {/* Business Outcomes */}
      <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 relative z-10">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Guaranteed Business Outcomes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.outcomes.map((outcome, index) => {
            const IconComponent = outcome.icon
              ? iconMap[outcome.icon as keyof typeof iconMap]
              : CheckCircle

            return (
              <div key={index} className="flex items-start">
                <div className="p-2 bg-linear-to-br from-green-400 to-emerald-400 rounded-lg mr-3 mt-1 shrink-0">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    {outcome.label}
                  </h4>
                  <p className="text-sm text-gray-300">{outcome.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
