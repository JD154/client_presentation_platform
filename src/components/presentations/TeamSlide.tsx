import {
  Users,
  Settings,
  Clock,
  GitBranch,
  Target,
  Shield,
  Lightbulb,
  Zap,
} from 'lucide-react'
import type { TeamSlideContent } from '../../lib/types'

interface Props {
  title: string
  content: TeamSlideContent
}

const roleIcons = {
  DevOps: Settings,
  Backend: GitBranch,
  Frontend: Lightbulb,
  QA: Shield,
}

export function TeamSlide({ title, content }: Props) {
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
          {content.methodology}
        </p>
      </div>

      {/* Main Content - Three Column Layout */}
      <div className="grid lg:grid-cols-3 gap-8 flex-1">
        {/* Team Roles - Column 1 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <div className="w-8 h-8 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mr-3">
              <Target className="w-5 h-5 text-white" />
            </div>
            Team Roles
          </h2>

          <div className="grid gap-4">
            {content.team.map((member, index) => {
              const IconComponent =
                roleIcons[member.role as keyof typeof roleIcons] || Users

              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-linear-to-br from-indigo-400 to-purple-400 rounded-lg mr-3 shrink-0 flex items-center justify-center group-hover:from-indigo-300 group-hover:to-purple-300 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-semibold text-white mb-1">
                        {member.role}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium mb-1">
                        {member.focus}
                      </p>
                      <p className="text-xs text-gray-400">
                        {member.experience}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Workstreams & Process - Column 2 */}
        <div className="space-y-6">
          {/* Workstreams */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-linear-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center mr-3">
                <Zap className="w-5 h-5 text-white" />
              </div>
              Workstreams
            </h2>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow-lg">
              <div className="space-y-3">
                {content.workstreams.map((stream, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-white text-sm">
                        {stream.name}
                      </div>
                      <div className="text-xs font-semibold text-blue-300 bg-blue-500/20 border border-blue-400/30 px-2 py-1 rounded-full">
                        {stream.duration}
                      </div>
                    </div>
                    <div className="text-xs text-gray-300">
                      {stream.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Process Highlights */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 text-white hover:bg-white/15 transition-all duration-300">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <div className="w-2 h-2 bg-linear-to-br from-green-400 to-emerald-400 rounded-full mr-3" />
              Process Highlights
            </h3>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex justify-between items-center">
                <div className="font-semibold text-blue-300">
                  Sprint Duration
                </div>
                <div className="text-gray-300">2-week cycles</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-semibold text-blue-300">Team Capacity</div>
                <div className="text-gray-300">~4h/day per role</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-semibold text-blue-300">
                  Total Timeline
                </div>
                <div className="text-gray-300">3 months (6 sprints)</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-semibold text-blue-300">
                  Delivery Model
                </div>
                <div className="text-gray-300">Concurrent</div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Framework - Column 3 */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <div className="w-8 h-8 bg-linear-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-3">
              <Clock className="w-5 h-5 text-white" />
            </div>
            Collaboration
          </h2>

          <div className="space-y-4">
            {content.collaboration.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 shadow-lg hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-base font-semibold text-white mb-2">
                  {item.aspect}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold bg-linear-to-br from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
              320
            </div>
            <div className="text-sm text-gray-300">Story Points</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-linear-to-br from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
              832
            </div>
            <div className="text-sm text-gray-300">Total Hours</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-linear-to-br from-orange-400 to-red-400 bg-clip-text text-transparent mb-1">
              6
            </div>
            <div className="text-sm text-gray-300">Sprint Cycles</div>
          </div>
          <div>
            <div className="text-3xl font-bold bg-linear-to-br from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-1">
              4
            </div>
            <div className="text-sm text-gray-300">Team Members</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  )
}
