import { motion } from 'framer-motion'
import type { Project } from '../../lib/types'
import { ProjectCard } from './ProjectCard'

interface ProjectGridProps {
  projects: Project[]
  onViewPresentation?: (projectId: string) => void
}

export function ProjectGrid({
  projects,
  onViewPresentation,
}: ProjectGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground">
          <p className="text-lg">No hay proyectos disponibles</p>
          <p className="text-sm mt-2">
            Los proyectos aparecerán aquí cuando sean creados
          </p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map(project => (
        <motion.div key={project.id} variants={itemVariants}>
          <ProjectCard
            project={project}
            onViewPresentation={onViewPresentation}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
