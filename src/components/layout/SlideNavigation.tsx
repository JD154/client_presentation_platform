import { ChevronLeft, ChevronRight, Home } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

interface SlideNavigationProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onHome?: () => void
  className?: string
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onHome,
  className,
}: SlideNavigationProps) {
  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 flex items-center gap-1 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-1.5 shadow-sm z-50',
        className
      )}
    >
      {onHome && (
        <Button
          variant="ghost"
          size="icon"
          onClick={onHome}
          className="h-8 w-8 hover:bg-white/80 transition-colors"
        >
          <Home className="h-4 w-4" />
        </Button>
      )}

      <Button
        variant="ghost"
        size="icon"
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="h-8 w-8 hover:bg-white/80 transition-colors"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <span className="text-xs text-gray-600 px-2 py-1 bg-white/70 rounded-md min-w-[50px] text-center">
        {currentSlide + 1} / {totalSlides}
      </span>

      <Button
        variant="ghost"
        size="icon"
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="h-8 w-8 hover:bg-white/80 transition-colors"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
