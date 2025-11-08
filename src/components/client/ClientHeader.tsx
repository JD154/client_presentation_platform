import type { Client } from '../../lib/types'
import { cn } from '../../lib/utils'

interface ClientHeaderProps {
  client: Client
  className?: string
}

export function ClientHeader({ client, className }: ClientHeaderProps) {
  return (
    <div
      className={cn('border-b bg-linear-to-br p-6', className)}
      style={{
        backgroundImage: `linear-gradient(135deg, ${client.colors.primary}10, ${client.colors.secondary})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {client.logo && (
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-12 w-auto"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {client.name}
            </h1>
            {client.description && (
              <p className="text-muted-foreground mt-1">{client.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
