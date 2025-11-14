import { CheckCircle, Clock, Lightbulb, ArrowRight } from 'lucide-react'

const priorityIcons = {
  must: CheckCircle,
  should: Clock,
  could: Lightbulb,
}

const priorityLabels = {
  must: 'Must Have',
  should: 'Should Have',
  could: 'Could Have',
}

// Hardcoded content for FLO project scope
const scopeContent = {
  must: [
    {
      title: 'Google OAuth Integration',
      description:
        'Minimal scopes with secure token handling and session management',
      priority: 'must' as const,
    },
    {
      title: 'Message Ingestion & Normalization',
      description:
        'Recent messages normalized from MIME to canonical JSON format',
      priority: 'must' as const,
    },
    {
      title: 'Priority Inbox Engine',
      description:
        'Rules + lightweight model with clear explanations for rankings',
      priority: 'must' as const,
    },
    {
      title: 'Assisted Draft Generation',
      description:
        'Reply/forward/new with thread context, selectable tone, source citation',
      priority: 'must' as const,
    },
    {
      title: 'Minimal UI Experience',
      description:
        'Priority list, thread view, context panel, "Generate draft" functionality',
      priority: 'must' as const,
    },
    {
      title: 'Telemetry & Observability',
      description:
        'Feedback loops, feature flags, and comprehensive monitoring',
      priority: 'must' as const,
    },
  ],
  should: [
    {
      title: 'Advanced Rules Engine',
      description: 'VIP handling, SLA management, keyword-based categorization',
      priority: 'should' as const,
    },
    {
      title: 'RAG Knowledge Base',
      description: 'pgvector-powered knowledge base for contextual responses',
      priority: 'should' as const,
    },
    {
      title: 'Reply Templates',
      description: 'Reusable templates for common response patterns',
      priority: 'should' as const,
    },
    {
      title: 'User Settings & Preferences',
      description:
        'Customizable rules, tone preferences, notification settings',
      priority: 'should' as const,
    },
  ],
  could: [
    {
      title: 'Slack/Teams Integration',
      description: 'Cross-platform notifications and quick reply capabilities',
      priority: 'could' as const,
    },
    {
      title: 'Daily Summaries',
      description:
        'Automated digest generation with key highlights and actions',
      priority: 'could' as const,
    },
    {
      title: 'Prompt A/B Testing',
      description:
        'Experimental framework for optimizing AI prompt performance',
      priority: 'could' as const,
    },
  ],
}

export function ScopeSlide() {
  const title = 'Structured Development Scope'
  const content = scopeContent
  const sections = [
    {
      key: 'must' as const,
      items: content.must,
      color: 'text-green-300',
      bgColor: 'from-green-400 to-emerald-400',
    },
    {
      key: 'should' as const,
      items: content.should,
      color: 'text-blue-300',
      bgColor: 'from-blue-400 to-cyan-400',
    },
    {
      key: 'could' as const,
      items: content.could,
      color: 'text-purple-300',
      bgColor: 'from-purple-400 to-indigo-400',
    },
  ]

  return (
    <div className="relative flex flex-col min-h-screen p-12 bg-linear-to-br from-gray-900 via-slate-800 to-blue-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-cyan-600/10" />

      {/* Header */}
      <div className="relative z-10 mb-10 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          {title}
        </h1>
        <div className="w-32 h-1 mx-auto mb-4 rounded-full bg-linear-to-br from-blue-400 to-cyan-400" />
        <p className="max-w-3xl mx-auto text-xl text-gray-300">
          Structured delivery prioritizing critical features for immediate value
          while planning future expansions
        </p>
      </div>

      {/* Scope Overview */}
      <div className="grid flex-1 gap-8 lg:grid-cols-3">
        {sections.map(section => {
          const IconComponent = priorityIcons[section.key]

          return (
            <div key={section.key} className="flex flex-col">
              {/* Section Header */}
              <div className="p-6 mb-6 border shadow-lg bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
                <div className="flex items-center justify-center mb-3">
                  <div
                    className={`w-16 h-16 bg-linear-to-br ${section.bgColor} rounded-full flex items-center justify-center mr-4`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">
                    {priorityLabels[section.key]}
                  </h2>
                </div>
                <div className="text-sm font-medium text-center text-gray-300">
                  {section.items.length} Features
                </div>
              </div>

              {/* Features List */}
              <div className="flex-1 space-y-4">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex items-start">
                      <div className="mt-1 shrink-0">
                        <ArrowRight className={`w-4 h-4 ${section.color}`} />
                      </div>
                      <div className="ml-3">
                        <h3 className="mb-1 text-sm font-semibold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom Summary */}
      <div className="relative z-10 p-6 mt-8 text-center text-white border bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl">
        <div className="grid items-center gap-4 md:grid-cols-3">
          <div>
            <div className="text-3xl font-bold text-transparent bg-linear-to-br from-green-400 to-emerald-400 bg-clip-text">
              {content.must.length}
            </div>
            <div className="text-sm text-gray-300">Core Features</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-lg font-semibold text-gray-200">
              Extensible Architecture Ready for Multi-Channel Expansion
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-transparent bg-linear-to-br from-blue-400 to-purple-400 bg-clip-text">
              {content.should.length + content.could.length}
            </div>
            <div className="text-sm text-gray-300">Future Features</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
