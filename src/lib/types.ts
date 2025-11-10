export interface Client {
  id: string
  name: string
  logo?: string
  colors: ClientColors
  description?: string
}

export interface ClientColors {
  primary: string
  secondary: string
  accent?: string
  background?: string
}

export interface Project {
  id: string
  clientId: string
  name: string
  description: string
  status: 'draft' | 'active' | 'completed'
  createdAt: string
  updatedAt: string
  tags?: string[]
}

export interface Presentation {
  projectId: string
  slides: Slide[]
  config: PresentationConfig
}

export interface PresentationConfig {
  title: string
  subtitle?: string
  theme: 'light' | 'dark' | 'client'
  transitions: boolean
  autoPlay?: boolean
  duration?: number // in minutes
}

export interface Slide {
  id: string
  type: SlideType
  title: string
  content?: SlideContent
  animation?: AnimationType
  duration?: number
}

export type SlideType =
  | 'hero'
  | 'value-proposition'
  | 'metrics'
  | 'scope'
  | 'timeline'
  | 'architecture'
  | 'team'
  | 'security'
  | 'future-expansion'
  | 'risks'
  | 'grid'
  | 'summary'
  | 'cta'
  | 'custom'

export type AnimationType =
  | 'slide-in-up'
  | 'slide-in-right'
  | 'fade-in'
  | 'none'

export interface SlideContent {
  [key: string]: any
}

// Specific slide content types
export interface HeroSlideContent extends SlideContent {
  subtitle?: string
  description: string
  backgroundImage?: string
  ctaText?: string
  ctaLink?: string
}

export interface MetricsSlideContent extends SlideContent {
  metrics: Array<{
    label: string
    value: string | number
    description?: string
    icon?: string
  }>
}

export interface TimelineSlideContent extends SlideContent {
  phases: Array<{
    title: string
    duration: string
    description: string
    deliverables?: string[]
  }>
}

export interface ArchitectureSlideContent extends SlideContent {
  components: Array<{
    name: string
    description: string
    icon?: string
    connections?: string[]
  }>
  extraDescription?: string
}

export interface GridSlideContent extends SlideContent {
  items: Array<{
    title: string
    description: string
    icon?: string
    image?: string
  }>
  columns?: number
}

export interface ValuePropositionSlideContent extends SlideContent {
  mainValue: string
  benefits: Array<{
    title: string
    description: string
    icon?: string
    metric?: string
  }>
  outcomes: Array<{
    label: string
    description: string
    icon?: string
  }>
}

export interface ScopeSlideContent extends SlideContent {
  must: Array<{
    title: string
    description: string
    priority: 'must' | 'should' | 'could'
  }>
  should: Array<{
    title: string
    description: string
    priority: 'must' | 'should' | 'could'
  }>
  could: Array<{
    title: string
    description: string
    priority: 'must' | 'should' | 'could'
  }>
}

export interface TeamSlideContent extends SlideContent {
  methodology: string
  team: Array<{
    role: string
    focus: string
    experience: string
  }>
  workstreams: Array<{
    name: string
    description: string
    duration: string
  }>
  collaboration: Array<{
    aspect: string
    description: string
  }>
}

export interface SecuritySlideContent extends SlideContent {
  principles: Array<{
    title: string
    description: string
    implementation: string[]
    icon?: string
  }>
  compliance: Array<{
    standard: string
    description: string
    status: 'implemented' | 'planned' | 'ongoing' | 'To be planned' | 'scoped'
  }>
}

export interface FutureExpansionSlideContent extends SlideContent {
  vision: string
  expansions: Array<{
    category: string
    title: string
    description: string
    impact: 'high' | 'medium' | 'low'
    effort: 'low' | 'medium' | 'high'
    icon?: string
  }>
}

export interface RisksSlideContent extends SlideContent {
  risks: Array<{
    risk: string
    impact: 'high' | 'medium' | 'low'
    probability: 'high' | 'medium' | 'low'
    mitigation: string
    category: 'technical' | 'business' | 'operational'
  }>
}

export interface CTASlideContent extends SlideContent {
  primaryAction: {
    text: string
    link?: string
    action?: () => void
  }
  secondaryAction?: {
    text: string
    link?: string
    action?: () => void
  }
  contact?: {
    email?: string
    phone?: string
    website?: string
  }
}
