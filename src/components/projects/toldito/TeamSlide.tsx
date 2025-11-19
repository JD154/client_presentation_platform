import {
  Users,
  Settings,
  GitBranch,
  Lightbulb,
  Shield,
  Zap,
} from 'lucide-react'
import { cn } from '../../../lib/utils'

interface TeamSlideProps {
  className?: string
}

const roleIcons = {
  DevOps: Settings,
  Backend: GitBranch,
  Frontend: Lightbulb,
  QA: Shield,
}

// Content derived from Toldito proposal (smaller squad and phases)
const teamContent = {
  methodology: 'Demo cada dos semanas; seguimiento semanal y ajustes rápidos.',
  team: [
    {
      role: 'Backend',
      focus: 'Construye reglas que proponen emparejamientos confiables.',
      experience: 'Amplia experiencia en datos y procesos financieros.',
    },
    {
      role: 'Frontend',
      focus: 'Crea pantallas simples, rápidas y fáciles de usar.',
      experience: 'Experiencia creando interfaces rápidas y accesibles.',
    },
    {
      role: 'DevOps',
      focus: 'Mantiene entornos estables y despliegues seguros y repetibles.',
      experience:
        'Experiencia operando sistemas en producción estable y segura.',
    },
    {
      role: 'QA',
      focus: 'Define casos y valida cada entrega con datos reales.',
      experience: 'Experiencia en pruebas completas de punta a punta.',
    },
  ],
  workstreams: [
    {
      name: 'Planning — Prerrequisitos',
      description:
        'Aseguramos coordinación con el cliente y preparamos alcance con precisión.',
      duration: '1–2 semanas',
    },
    {
      name: 'Sprint 1 — Plan y esquema',
      description: 'Pantalla inicial y base de reglas listas para probar.',
      duration: '2 semanas',
    },
    {
      name: 'Sprint 2 — Emparejar y consultas',
      description:
        'Generamos propuestas de emparejamiento y consultas de datos confiables.',
      duration: '2 semanas',
    },
    {
      name: 'Sprint 3 — Aplicar sin duplicados',
      description:
        'Evidencias y notas completas; pulimos rendimiento y estabilidad.',
      duration: '2 semanas',
    },
  ],
  stats: [
    { label: 'Semanas', value: '5–7' },
    { label: 'Personas', value: '3–4' },
    { label: 'Cadencia', value: '2 semanas' },
  ],
}

export function TeamSlide({ className }: TeamSlideProps) {
  const title = 'Equipo y Flujos de Trabajo'
  const content = teamContent

  return (
    <div
      className={cn(
        'min-h-screen bg-linear-to-br from-gray-900 via-slate-900 to-black p-12 flex flex-col relative',
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-yellow-600/10 via-transparent to-amber-600/10" />

      {/* Header */}
      <div className="relative z-10 mb-10 text-center">
        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          {title}
        </h2>
        <div className="w-32 h-1 mx-auto mb-6 rounded-full bg-linear-to-br from-yellow-400 to-amber-400" />
        <p className="max-w-4xl mx-auto text-xl text-gray-300">
          {content.methodology}
        </p>
      </div>

      {/* Two columns: Team and Workstreams */}
      <div className="relative z-10 grid flex-1 gap-8 lg:grid-cols-2">
        {/* Team */}
        <div>
          <h3 className="flex items-center mb-6 text-2xl font-bold text-white">
            <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-linear-to-br from-yellow-400 to-amber-400">
              <Users className="w-5 h-5 text-black" />
            </div>
            Equipo base
          </h3>
          <div className="grid gap-4">
            {content.team.map((member, idx) => {
              const IconComponent =
                roleIcons[member.role as keyof typeof roleIcons] || Users
              return (
                <div
                  key={idx}
                  className="p-5 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-yellow-500/20 rounded-xl hover:bg-white/15 group"
                >
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-12 h-12 mr-4 rounded-lg bg-linear-to-br from-yellow-400 to-amber-500 group-hover:from-yellow-300 group-hover:to-amber-400 shrink-0">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 font-semibold text-white">
                        {member.role}
                      </div>
                      <div className="mb-1 text-sm text-gray-300">
                        {member.focus}
                      </div>
                      <div className="text-xs text-gray-400">
                        {member.experience}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Workstreams */}
        <div>
          <h3 className="flex items-center mb-6 text-2xl font-bold text-white">
            <div className="flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-linear-to-br from-amber-400 to-yellow-500">
              <Zap className="w-5 h-5 text-black" />
            </div>
            Workstreams por fases
          </h3>
          <div className="grid gap-4">
            {content.workstreams.map((ws, idx) => (
              <div
                key={idx}
                className="p-5 transition-colors duration-200 border rounded-xl border-yellow-500/20 bg-white/10 backdrop-blur-lg hover:bg-white/15"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-white">{ws.name}</div>
                  <div className="px-2 py-1 text-xs font-semibold text-yellow-900 rounded-full bg-yellow-400/80">
                    {ws.duration}
                  </div>
                </div>
                <div className="text-sm text-gray-300">{ws.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom stats */}
      <div className="relative z-10 p-6 mt-8 border rounded-2xl border-white/10 bg-white/5 backdrop-blur-lg">
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-3">
          {content.stats.map((s, i) => (
            <div key={i}>
              <div className="mb-1 text-3xl font-bold text-transparent bg-linear-to-br from-yellow-400 to-amber-400 bg-clip-text">
                {s.value}
              </div>
              <div className="text-sm text-gray-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
