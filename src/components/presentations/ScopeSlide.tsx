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
  must: 'Must Have',
  should: 'Should Have',
  could: 'Could Have',
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
    <div className="relative flex flex-col min-h-screen p-12 bg-linear-to-br from-gray-900 via-slate-800 to-blue-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  )
}
