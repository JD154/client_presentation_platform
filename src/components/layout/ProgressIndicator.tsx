import { cn } from '../../lib/utils'

interface ProgressIndicatorProps {
  currentSlide: number
  totalSlides: number
  className?: string
}

export function ProgressIndicator({
  currentSlide,
  totalSlides,
  className,
}: ProgressIndicatorProps) {
  return (
    <div
      className={cn(
        'fixed bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-1.5 bg-white/70 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-2 shadow-sm z-50',
        className
      )}
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={cn(
            'w-2 h-2 rounded-full transition-all duration-200',
            index === currentSlide
              ? 'bg-blue-500 w-6'
              : index < currentSlide
              ? 'bg-blue-300'
              : 'bg-gray-300'
          )}
        />
      ))}
    </div>
  )
}
