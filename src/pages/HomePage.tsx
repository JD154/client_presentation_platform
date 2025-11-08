import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Building2, ArrowRight } from 'lucide-react'
import { getAllClients } from '../lib/data/clients'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Button } from '../components/ui/button'

export function HomePage() {
  const navigate = useNavigate()
  const clients = getAllClients()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Plataforma de
              <span className="bg-linear-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {' '}
                Presentaciones
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crea presentaciones dinámicas e interactivas para tus clientes.
              Navega a través de propuestas profesionales con estilo y
              elegancia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              Clientes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {clients.map(client => (
                <motion.div
                  key={client.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 border-2 hover:border-blue-200">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{client.name}</CardTitle>
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: client.colors.primary }}
                        />
                      </div>
                      <CardDescription className="text-base">
                        {client.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => navigate(`/client/${client.id}`)}
                        className="w-full group"
                        style={{
                          backgroundColor: client.colors.primary,
                          borderColor: client.colors.primary,
                        }}
                      >
                        Ver Proyectos
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
