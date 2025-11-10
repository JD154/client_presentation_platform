import {
  MessageSquare,
  Zap,
  Brain,
  Clock,
  BarChart,
  Globe,
  Settings,
  Shield,
  Smartphone,
  ArrowRight,
  Star,
} from 'lucide-react'

const iconMap = {
  'message-square': MessageSquare,
  zap: Zap,
  brain: Brain,
  clock: Clock,
  'bar-chart': BarChart,
  globe: Globe,
  settings: Settings,
  shield: Shield,
  smartphone: Smartphone,
}

// Hardcoded content for FLO project future expansion
const futureExpansionContent = {
  vision:
    'One intelligent interface for all communication channels, learning your style and handling routine tasks automatically',
  expansions: [
    {
      category: 'Automation & Workflow',
      title: 'Rules and Automations',
      description:
        'Personal and team workflows to triage, route, label, and assign - no-code where possible',
      impact: 'medium' as const,
      effort: 'medium' as const,
      icon: 'settings',
    },
    {
      category: 'Automation & Workflow',
      title: 'Assisted Replies Everywhere',
      description:
        'Draft, refine, and send with your voice and tone across all channels with reusable templates',
      impact: 'high' as const,
      effort: 'medium' as const,
      icon: 'message-square',
    },
    {
      category: 'Multi-Channel Integration',
      title: 'Cross-Channel Prioritization',
      description:
        'Unified view that surfaces what truly needs attention, regardless of source platform',
      impact: 'high' as const,
      effort: 'medium' as const,
      icon: 'zap',
    },
    {
      category: 'Multi-Channel Integration',
      title: 'Omnichannel Expansion',
      description:
        'Connect Slack, Microsoft Teams, WhatsApp, Telegram - one intelligent inbox for everything',
      impact: 'high' as const,
      effort: 'low' as const,
      icon: 'message-square',
    },
    {
      category: 'AI & Intelligence',
      title: 'Knowledge-Grounded Answers',
      description:
        'Replies reinforced with company context and cited sources to build trust and accuracy',
      impact: 'high' as const,
      effort: 'medium' as const,
      icon: 'brain',
    },
    {
      category: 'AI & Intelligence',
      title: 'Smart Follow-ups & Reminders',
      description:
        'Automatic nudges and reminders to keep conversations moving after meetings or time-sensitive threads',
      impact: 'medium' as const,
      effort: 'low' as const,
      icon: 'clock',
    },
    {
      category: 'AI & Intelligence',
      title: 'Summaries That Matter',
      description:
        'Daily digests and topic snapshots for fast catch-up on busy channels and conversations',
      impact: 'medium' as const,
      effort: 'low' as const,
      icon: 'bar-chart',
    },

    {
      category: 'Enterprise & Scale',
      title: 'Controls and Compliance',
      description:
        'Fine-grained permissions, audit trails, and privacy-by-design for enterprise readiness',
      impact: 'medium' as const,
      effort: 'high' as const,
      icon: 'shield',
    },
    {
      category: 'Enterprise & Scale',
      title: 'Insights and Performance',
      description:
        'Live dashboards for time saved, response SLAs, and quality signals from user feedback',
      impact: 'medium' as const,
      effort: 'medium' as const,
      icon: 'bar-chart',
    },
    {
      category: 'Enterprise & Scale',
      title: 'Everywhere You Work',
      description:
        'Mobile-friendly experience (PWA), notifications, and flexible APIs to embed FLO into your tools',
      impact: 'high' as const,
      effort: 'high' as const,
      icon: 'smartphone',
    },
  ],
}

export function FutureExpansionSlide() {
  const title = 'Future Possibilities After V1'
  const content = futureExpansionContent
  const categories = content.expansions.reduce((acc, expansion) => {
    if (!acc[expansion.category]) {
      acc[expansion.category] = []
    }
    acc[expansion.category].push(expansion)
    return acc
  }, {} as Record<string, typeof content.expansions>)

  return (
    <div className="relative flex flex-col min-h-screen p-12 bg-linear-to-br from-gray-900 via-slate-800 to-blue-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-transparent to-cyan-600/10" />

      {/* Header */}
      <div className="relative z-10 mb-10 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          {title}
        </h1>
        <div className="w-32 h-1 mx-auto mb-6 rounded-full bg-linear-to-r from-blue-400 to-cyan-400" />
        <p className="max-w-4xl mx-auto mb-6 text-xl font-medium text-gray-300">
          {content.vision}
        </p>
      </div>

      {/* Enhancement Areas */}
      <div className="relative z-10 flex-1 mx-auto mb-12 max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="flex items-center justify-center mb-6 text-2xl font-bold text-white">
            <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-linear-to-br from-purple-400 to-indigo-400">
              <Star className="w-5 h-5 text-white" />
            </div>
            Enhancement Areas
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {(() => {
            // Reorder categories for better visual balance
            const categoryEntries = Object.entries(categories)
            const reorderedCategories = [
              categoryEntries.find(
                ([name]) => name === 'Multi-Channel Integration'
              ),
              categoryEntries.find(
                ([name]) => name === 'Automation & Workflow'
              ),
              categoryEntries.find(([name]) => name === 'Enterprise & Scale'),
              categoryEntries.find(([name]) => name === 'AI & Intelligence'),
            ].filter(Boolean) as [string, typeof content.expansions][]

            return reorderedCategories.map(
              ([categoryName, expansions], categoryIndex) => {
                // Check if this is the last category and if it should be centered
                const isLastCategory =
                  categoryIndex === reorderedCategories.length - 1
                const shouldCenter =
                  isLastCategory && reorderedCategories.length % 2 !== 0

                return (
                  <div
                    key={categoryName}
                    className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-lg hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] ${
                      shouldCenter
                        ? 'lg:col-span-2 lg:max-w-2xl lg:mx-auto'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-center mb-6">
                      <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-linear-to-br from-blue-400 to-cyan-400">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {categoryName}
                      </h3>
                      <div className="px-3 py-2 ml-4 text-sm font-semibold text-blue-300 border rounded-full bg-blue-500/20 border-blue-400/30">
                        {expansions.length} Enhancement
                        {expansions.length !== 1 ? 's' : ''}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {expansions.map((expansion, index) => {
                        const IconComponent = expansion.icon
                          ? iconMap[expansion.icon as keyof typeof iconMap]
                          : Star

                        return (
                          <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]"
                          >
                            <div className="flex items-start mb-4">
                              <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-linear-to-br from-purple-400 to-indigo-400 shrink-0">
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="mb-2 text-base font-semibold text-white">
                                  {expansion.title}
                                </h4>
                                <p className="mb-3 text-sm leading-relaxed text-gray-300">
                                  {expansion.description}
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="px-2 py-1 text-xs font-semibold text-green-300 border rounded-full bg-green-500/20 border-green-400/30">
                                    {expansion.impact} impact
                                  </div>
                                  <div className="px-2 py-1 text-xs font-semibold text-orange-300 border rounded-full bg-orange-500/20 border-orange-400/30">
                                    {expansion.effort} effort
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              }
            )
          })()}
        </div>
      </div>

      {/* Vision Statement */}
      <div className="relative z-10 p-8 mt-6 text-center text-white border bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl">
        <div className="flex items-center justify-center mb-4">
          <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-linear-to-br from-blue-400 to-cyan-400">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold">The Ultimate Vision</span>
        </div>
        <p className="text-lg leading-relaxed text-gray-300">
          One intelligent interface for all communication channels, learning
          your style and handling routine tasks automatically
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
