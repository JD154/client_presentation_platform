import { motion } from 'framer-motion'
import { Play, Calendar, Tag } from 'lucide-react'
import type { Project } from '../../lib/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { formatDate } from '../../lib/utils'

interface ProjectCardProps {
  project: Project
  onViewPresentation?: (projectId: string) => void
}

export function ProjectCard({ project, onViewPresentation }: ProjectCardProps) {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'draft':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  const getStatusText = (status: Project['status']) => {
    switch (status) {
      case 'active':
        return 'Activo'
      case 'completed':
        return 'Completado'
      case 'draft':
        return 'Borrador'
      default:
        return status
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-xl">{project.name}</CardTitle>
            <Badge className={getStatusColor(project.status)} variant="outline">
              {getStatusText(project.status)}
            </Badge>
          </div>
          <CardDescription className="text-base">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Actualizado: {formatDate(project.updatedAt)}</span>
            </div>

            {project.tags && project.tags.length > 0 && (
              <div className="flex items-start gap-2">
                <Tag className="h-4 w-4 text-muted-foreground mt-0.5" />
                <div className="flex flex-wrap gap-1">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t mt-4">
            <Button
              onClick={() => onViewPresentation?.(project.id)}
              className="w-full"
              size="sm"
            >
              <Play className="h-4 w-4 mr-2" />
              Ver Presentación
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
