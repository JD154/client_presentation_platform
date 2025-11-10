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

const roleIcons = {
  DevOps: Settings,
  Backend: GitBranch,
  Frontend: Lightbulb,
  QA: Shield,
}

// Hardcoded content for FLO project team
const teamContent = {
  methodology:
    'Concurrent workstreams with 2-week sprints to minimize time-to-value while reducing risk',
  team: [
    {
      role: 'DevOps',
      focus: 'Infrastructure, CI/CD, observability, security hardening',
      experience: '~4 hours/day focused on scalable infrastructure patterns',
    },
    {
      role: 'Backend',
      focus: 'API/BFF, domain models, AI integration, data processing',
      experience: '~4 hours/day on service orchestration and business logic',
    },
    {
      role: 'Frontend',
      focus: 'React UI, user experience, real-time updates, accessibility',
      experience: '~4 hours/day on intuitive interfaces and responsive design',
    },
    {
      role: 'QA',
      focus: 'Test automation, performance validation, security testing',
      experience: '~4 hours/day on quality gates and acceptance criteria',
    },
  ],
  workstreams: [
    {
      name: 'Infrastructure & Security',
      description: 'DevOps + QA security validation',
      duration: 'Continuous',
    },
    {
      name: 'Core Platform Development',
      description: 'Backend + Frontend integration',
      duration: 'Sprint-based',
    },
    {
      name: 'AI & Intelligence Layer',
      description: 'Backend AI + Frontend UX optimization',
      duration: 'Parallel tracks',
    },
    {
      name: 'Quality & Performance',
      description: 'QA + DevOps monitoring and optimization',
      duration: 'Cross-sprint',
    },
  ],
  collaboration: [
    {
      aspect: 'Ownership Model (Chatan Aligned)',
      description:
        'Chatan owns domain models, business logic, and UI decisions. UKLOK provides reusable infrastructure patterns and knowledge systems.',
    },
    {
      aspect: 'Communication Cadence',
      description:
        'Weekly demos, telemetry reviews, backlog refinement. Ad-hoc product syncs as needed for rapid iteration.',
    },
    {
      aspect: 'Deliverables Per Sprint',
      description:
        'Running build in staging, demoable flows, technical documentation, rollback plans for safe deployment.',
    },
    {
      aspect: 'Quality Gates',
      description:
        'DoR/DoD validation, performance benchmarks, security reviews, user acceptance testing before each release.',
    },
  ],
}

export function TeamSlide() {
  const title = 'Cross-Functional Team & Methodology'
  const content = teamContent
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
        <div className="w-32 h-1 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-400 to-cyan-400" />
        <p className="max-w-4xl mx-auto mb-6 text-xl font-medium text-gray-300">
          {content.methodology}
        </p>
      </div>

      {/* Main Content - Three Column Layout */}
      <div className="grid flex-1 gap-8 lg:grid-cols-3">
        {/* Team Roles - Column 1 */}
        <div className="space-y-6">
          <h2 className="flex items-center mb-6 text-2xl font-bold text-white">
            <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-linear-to-br from-blue-400 to-cyan-400">
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
                    <div className="flex items-center justify-center w-12 h-12 mr-3 transition-all duration-300 rounded-lg bg-linear-to-br from-indigo-400 to-purple-400 shrink-0 group-hover:from-indigo-300 group-hover:to-purple-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 text-base font-semibold text-white">
                        {member.role}
                      </h3>
                      <p className="mb-1 text-sm font-medium text-gray-300">
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
            <h2 className="flex items-center mb-6 text-2xl font-bold text-white">
              <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-linear-to-br from-orange-400 to-red-400">
                <Zap className="w-5 h-5 text-white" />
              </div>
              Workstreams
            </h2>

            <div className="p-6 border shadow-lg bg-white/10 backdrop-blur-lg border-white/20 rounded-xl">
              <div className="space-y-3">
                {content.workstreams.map((stream, index) => (
                  <div
                    key={index}
                    className="p-4 transition-colors duration-200 border rounded-lg bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium text-white">
                        {stream.name}
                      </div>
                      <div className="px-2 py-1 text-xs font-semibold text-blue-300 border rounded-full bg-blue-500/20 border-blue-400/30">
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
          <div className="p-6 text-white transition-all duration-300 border bg-white/10 backdrop-blur-lg border-white/20 rounded-xl hover:bg-white/15">
            <h3 className="flex items-center mb-4 text-lg font-bold">
              <div className="w-2 h-2 mr-3 rounded-full bg-linear-to-br from-green-400 to-emerald-400" />
              Process Highlights
            </h3>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-blue-300">
                  Sprint Duration
                </div>
                <div className="text-gray-300">2-week cycles</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-blue-300">Team Capacity</div>
                <div className="text-gray-300">~4h/day per role</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-blue-300">
                  Total Timeline
                </div>
                <div className="text-gray-300">3 months (6 sprints)</div>
              </div>
              <div className="flex items-center justify-between">
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
          <h2 className="flex items-center mb-6 text-2xl font-bold text-white">
            <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-linear-to-br from-green-400 to-emerald-400">
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
                <h3 className="mb-2 text-base font-semibold text-white">
                  {item.aspect}
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="relative z-10 p-6 mt-8 border shadow-xl bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl">
        <div className="grid gap-6 text-center md:grid-cols-4">
          <div>
            <div className="mb-1 text-3xl font-bold text-transparent bg-linear-to-br from-blue-400 to-cyan-400 bg-clip-text">
              320
            </div>
            <div className="text-sm text-gray-300">Story Points</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-transparent bg-linear-to-br from-green-400 to-emerald-400 bg-clip-text">
              832
            </div>
            <div className="text-sm text-gray-300">Total Hours</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-transparent bg-linear-to-br from-orange-400 to-red-400 bg-clip-text">
              6
            </div>
            <div className="text-sm text-gray-300">Sprint Cycles</div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-transparent bg-linear-to-br from-purple-400 to-indigo-400 bg-clip-text">
              4
            </div>
            <div className="text-sm text-gray-300">Team Members</div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-gray-900 to-transparent" />
    </div>
  )
}
