import { CheckCircle, Clock, Lightbulb, ArrowRight } from 'lucide-react'
import type { ScopeSlideContent } from '../../lib/types'

interface Props {
  title: string
  content: ScopeSlideContent
}

const priorityIcons = {
  must: CheckCircle,
  should: Clock,
  could: Lightbulb,
}

const priorityLabels = {
  must: 'Must Have (V1)',
  should: 'Should Have (Next)',
  could: 'Could Have (Future)',
}

export function ScopeSlide({ title, content }: Props) {
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
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-slate-800 to-blue-900 p-12 flex flex-col relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 via-transparent to-cyan-600/10" />

      {/* Header */}
      <div className="text-center mb-10 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {title}
        </h1>
        <div className="w-32 h-1 bg-linear-to-br from-blue-400 to-cyan-400 mx-auto rounded-full mb-4" />
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Structured delivery prioritizing critical features for immediate value
          while planning future expansions
        </p>
      </div>

      {/* Scope Overview */}
      <div className="grid lg:grid-cols-3 gap-8 flex-1">
        {sections.map(section => {
          const IconComponent = priorityIcons[section.key]

          return (
            <div key={section.key} className="flex flex-col">
              {/* Section Header */}
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 mb-6 shadow-lg">
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
                <div className="text-center text-sm font-medium text-gray-300">
                  {section.items.length} Features
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-4 flex-1">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <div className="flex items-start">
                      <div className="shrink-0 mt-1">
                        <ArrowRight className={`w-4 h-4 ${section.color}`} />
                      </div>
                      <div className="ml-3">
                        <h3 className="font-semibold text-white text-sm mb-1">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-300 leading-relaxed">
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
      <div className="mt-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 text-white text-center relative z-10">
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div>
            <div className="text-3xl font-bold bg-linear-to-br from-green-400 to-emerald-400 bg-clip-text text-transparent">
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
            <div className="text-3xl font-bold bg-linear-to-br from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {content.should.length + content.could.length}
            </div>
            <div className="text-sm text-gray-300">Future Features</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  )
}
