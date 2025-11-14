import { motion } from 'framer-motion'
import { Database, Layers, Plus, CheckCircle2 } from 'lucide-react'

const techStack = [
  { name: 'Base de datos de cuentas y transacciones', icon: Database },
  { name: 'Sistema de procesamiento en segundo plano', icon: Layers },
  { name: 'Aplicación de gestión empresarial', icon: Layers },
  { name: 'Automatizaciones y archivo de documentos', icon: Database },
  { name: 'Control de acceso y seguridad', icon: Layers },
]

const newModule = {
  name: 'Módulo de Conciliación',
  features: [
    'Área de trabajo para revisar y aprobar conciliaciones',
    'Proceso automático que compara facturas con pagos',
    'Pantallas intuitivas para gestionar coincidencias',
    'Reportes visuales para seguimiento del negocio',
  ],
}

export function TechApproachSlide() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-12 bg-linear-to-br from-gray-900 via-slate-900 to-black">
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
        <h2 className="mb-6 text-4xl font-bold text-white md:text-6xl">
          Construido Sobre Lo Que Tienes
        </h2>
        <div className="w-32 h-1 mx-auto rounded-full bg-linear-to-br from-yellow-400 to-amber-400" />
        <p className="max-w-3xl mx-auto mt-6 text-xl text-gray-300">
          Sin romper nada · Evolución, no revolución
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Existing Stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 border bg-white/5 backdrop-blur-lg border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-green-400 to-emerald-500">
                  <CheckCircle2 className="text-white w-7 h-7" />
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
                      className="flex items-center gap-3 p-3 transition-colors duration-200 border rounded-lg bg-white/5 border-green-500/20 hover:bg-white/10"
                    >
                      <Icon className="w-5 h-5 text-green-400" />
                      <span className="font-medium text-gray-200">
                        {tech.name}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              <div className="p-4 mt-6 border rounded-lg bg-green-500/10 border-green-500/30">
                <p className="text-sm font-medium text-center text-green-100">
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
            className="absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 md:flex left-1/2 top-1/2"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full shadow-2xl bg-linear-to-br from-yellow-400 to-amber-500 shadow-yellow-500/50">
              <Plus className="w-10 h-10 font-bold text-black" />
            </div>
          </motion.div>

          {/* New Module */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="p-8 transition-all duration-300 border bg-white/10 backdrop-blur-lg border-yellow-500/30 rounded-2xl hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-yellow-400 to-amber-500">
                  <Plus className="text-black w-7 h-7" />
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
                    className="flex items-start gap-3 p-3 border rounded-lg bg-yellow-500/10 border-yellow-500/30"
                  >
                    <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full shrink-0" />
                    <span className="text-sm leading-relaxed text-gray-200">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="p-4 mt-6 border rounded-lg bg-yellow-500/10 border-yellow-500/30">
                <p className="text-sm font-medium text-center text-yellow-100">
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
          <div className="inline-block px-8 py-4 border rounded-full bg-white/5 border-white/10">
            <p className="font-medium text-gray-200">
              Reutilizamos{' '}
              <span className="font-bold text-yellow-400">100%</span> de tu
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
