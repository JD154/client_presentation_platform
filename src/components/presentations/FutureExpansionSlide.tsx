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
import type { FutureExpansionSlideContent } from '../../lib/types'

interface Props {
  title: string
  content: FutureExpansionSlideContent
}

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

export function FutureExpansionSlide({ title, content }: Props) {
  const categories = content.expansions.reduce((acc, expansion) => {
    if (!acc[expansion.category]) {
      acc[expansion.category] = []
    }
    acc[expansion.category].push(expansion)
    return acc
  }, {} as Record<string, typeof content.expansions>)

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 p-12 flex flex-col relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 via-transparent to-cyan-600/10" />

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <div className="w-32 h-1 bg-linear-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6" />
        <p className="text-xl text-gray-300 font-medium max-w-4xl mx-auto mb-6">
          {content.vision}
        </p>
      </div>

      {/* Enhancement Areas */}
      <div className="max-w-7xl mx-auto flex-1 mb-12 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <div className="w-8 h-8 bg-linear-to-br from-purple-400 to-indigo-400 rounded-full flex items-center justify-center mr-3">
              <Star className="w-5 h-5 text-white" />
            </div>
            Enhancement Areas
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {(() => {
            // Reorder categories for better visual balance
            const categoryEntries = Object.entries(categories)
            const reorderedCategories = [
              categoryEntries.find(([name]) => name === 'Enterprise & Scale'),
              categoryEntries.find(([name]) => name === 'AI & Intelligence'),
              categoryEntries.find(
                ([name]) => name === 'Multi-Channel Integration'
              ),
              categoryEntries.find(
                ([name]) => name === 'Automation & Workflow'
              ),
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
                      <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {categoryName}
                      </h3>
                      <div className="ml-4 text-sm font-semibold text-blue-300 bg-blue-500/20 border border-blue-400/30 px-3 py-2 rounded-full">
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
                              <div className="w-12 h-12 bg-linear-to-br from-purple-400 to-indigo-400 rounded-lg mr-4 shrink-0 flex items-center justify-center">
                                <IconComponent className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-white text-base mb-2">
                                  {expansion.title}
                                </h4>
                                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                                  {expansion.description}
                                </p>
                                <div className="flex items-center gap-2">
                                  <div className="text-xs font-semibold text-green-300 bg-green-500/20 border border-green-400/30 px-2 py-1 rounded-full">
                                    {expansion.impact} impact
                                  </div>
                                  <div className="text-xs font-semibold text-orange-300 bg-orange-500/20 border border-orange-400/30 px-2 py-1 rounded-full">
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
      <div className="mt-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-white text-center relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-3">
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold">The Ultimate Vision</span>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed">
          One intelligent interface for all communication channels, learning
          your style and handling routine tasks automatically
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
