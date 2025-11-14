import { motion } from 'framer-motion'
import { Database, Layers, Plus, CheckCircle2 } from 'lucide-react'

const techStack = [
  { name: 'Hasura + PostgreSQL', icon: Database },
  { name: 'Redis/BullMQ', icon: Layers },
  { name: 'NestJS Monorepo', icon: Layers },
  { name: 'n8n + MinIO', icon: Database },
  { name: 'Auth0 + Caddy', icon: Layers },
]

const newModule = {
  name: 'Módulo de Conciliación',
  features: [
    'reconcile_session & reconcile_match',
    'Jobs BullMQ: recon:plan, recon:match, recon:apply',
    'UI de conciliación (Next.js)',
    'KPIs y dashboards (Metabase)',
  ],
}

export function TechApproachSlide() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-12 bg-linear-to-br from-gray-900 via-slate-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-size-[50px_50px]" />
      <div className="absolute inset-0 bg-linear-to-br from-yellow-600/10 via-transparent to-amber-600/10" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-16 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Construido Sobre Lo Que Tienes
        </h2>
        <div className="w-32 h-1 bg-linear-to-br from-yellow-400 to-amber-400 mx-auto rounded-full" />
        <p className="text-gray-300 mt-6 text-xl max-w-3xl mx-auto">
          Sin romper nada · Evolución, no revolución
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Existing Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Stack Actual</h3>
              </div>

              <div className="space-y-4">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-green-500/20 hover:bg-white/10 transition-colors duration-200"
                    >
                      <Icon className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200 font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-100 text-sm font-medium text-center">
                  ✅ Continúa funcionando sin cambios
                </p>
              </div>
            </div>
          </motion.div>

          {/* Plus Sign */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-yellow-400 to-amber-500 flex items-center justify-center shadow-2xl shadow-yellow-500/50">
              <Plus className="w-10 h-10 text-black font-bold" />
            </div>
          </motion.div>

          {/* New Module */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-lg border border-yellow-500/30 rounded-2xl p-8 hover:shadow-2xl hover:shadow-yellow-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                  <Plus className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {newModule.name}
                </h3>
              </div>

              <div className="space-y-3">
                {newModule.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30"
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-yellow-400 shrink-0" />
                    <span className="text-gray-200 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-100 text-sm font-medium text-center">
                  ⚡ Agrega valor sin romper contratos
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-8 py-4 bg-white/5 border border-white/10 rounded-full">
            <p className="text-gray-200 font-medium">
              Reutilizamos{' '}
              <span className="text-yellow-400 font-bold">100%</span> de tu
              infraestructura actual
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
    </div>
  )
}
