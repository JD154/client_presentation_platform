import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Slide, Client } from '../../lib/types'
import { SlideNavigation } from './SlideNavigation'
import { ProgressIndicator } from './ProgressIndicator'
import { cn } from '../../lib/utils'

interface PresentationLayoutProps {
  slides: Slide[]
  client?: Client
  children: (slide: Slide, goToNext?: () => void) => React.ReactNode
  onHome?: () => void
  className?: string
}

export function PresentationLayout({
  slides,
  client,
  children,
  onHome,
  className,
}: PresentationLayoutProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1))
  }, [slides.length])

  const goToPrevious = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0))
  }, [])

  // Initialize current slide from URL hash on mount
  useEffect(() => {
    const hash = window.location.hash?.slice(1)
    if (!hash) return
    const index = slides.findIndex(s => s.id === hash)
    if (index >= 0) {
      setCurrentSlide(index)
    }
  }, [slides])

  // Keep URL hash in sync with the current slide
  useEffect(() => {
    const id = slides[currentSlide]?.id
    if (!id) return
    const desiredHash = `#${id}`
    if (window.location.hash !== desiredHash) {
      window.location.hash = desiredHash
    }
  }, [currentSlide, slides])

  // Update current slide if the hash changes (browser back/forward)
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash?.slice(1)
      if (!hash) return
      const index = slides.findIndex(s => s.id === hash)
      if (index >= 0) {
        setCurrentSlide(index)
      }
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [slides])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Evitar conflictos cuando hay campos de input enfocados
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goToNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === 'Escape' && onHome) {
        e.preventDefault()
        onHome()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToNext, goToPrevious, onHome])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  // Apply client theme if available
  const clientTheme = client
    ? ({
        '--primary': client.colors.primary,
        '--secondary': client.colors.secondary,
        '--accent': client.colors.accent || client.colors.primary,
      } as React.CSSProperties)
    : {}

  return (
    <div
      className={cn('relative min-h-screen w-screen bg-background', className)}
      style={clientTheme}
    >
      <AnimatePresence mode="wait" custom={0}>
        <motion.div
          key={currentSlide}
          custom={0}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="w-full min-h-screen"
        >
          {children(slides[currentSlide], goToNext)}
        </motion.div>
      </AnimatePresence>

      {/* Controles de navegación con z-index alto para asegurar visibilidad */}
      <div className="fixed inset-0 z-40 pointer-events-none">
        <div className="pointer-events-auto">
          <SlideNavigation
            currentSlide={currentSlide}
            totalSlides={slides.length}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onHome={onHome}
          />
        </div>

        <div className="pointer-events-auto">
          <ProgressIndicator
            currentSlide={currentSlide}
            totalSlides={slides.length}
          />
        </div>
      </div>
    </div>
  )
}
