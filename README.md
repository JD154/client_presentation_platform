# Client Presentation Platform

A modern, scalable web application for creating and displaying interactive client presentations. Built with React, TypeScript, and Vite with a dynamic multi-client/multi-project architecture.

## 🚀 Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI + Custom components
- **Routing**: React Router
- **Build Tool**: Vite with Hot Module Replacement (HMR)

## ✨ Features

- 🎨 **Multi-Client Architecture** - Support for N clients with N projects each
- 📊 **Dynamic Presentations** - Project-specific slide components with custom renderers
- 🔗 **URL Hash Sync** - Maintains slide position on page reload and browser navigation
- 🎯 **Theme Customization** - Client-specific color schemes and branding
- ⚡ **Fast Navigation** - Keyboard shortcuts and smooth transitions
- 📱 **Responsive Design** - Works seamlessly across devices
- 🔒 **Type-Safe** - Full TypeScript coverage

## 🏗️ Architecture

### Project Structure

```
client_presentation_platform/
├── src/
│   ├── components/
│   │   ├── client/              # Generic client components
│   │   ├── layout/              # Layout components (PresentationLayout, etc.)
│   │   ├── ui/                  # Reusable UI components
│   │   └── projects/            # 🆕 Project-specific presentations
│   │       ├── flo/             # FLO project slides
│   │       │   ├── index.tsx    # Slide renderer
│   │       │   ├── HeroSlide.tsx
│   │       │   ├── ValuePropositionSlide.tsx
│   │       │   └── ... (10 more slides)
│   │       └── toldito/         # Toldito project slides (upcoming)
│   │
│   ├── lib/
│   │   ├── data/
│   │   │   ├── clients.ts       # Client registry
│   │   │   ├── projects.ts      # Project registry
│   │   │   └── presentations/   # 🆕 Presentation system
│   │   │       ├── index.tsx    # Central registry + default renderer
│   │   │       ├── flo.ts       # FLO presentation config
│   │   │       └── toldito.ts   # Toldito presentation config
│   │   ├── types.ts
│   │   └── utils.ts
│   │
│   └── pages/
│       ├── HomePage.tsx         # Client listing
│       ├── ClientPage.tsx       # Project listing per client
│       └── PresentationPage.tsx # Dynamic presentation viewer
│
└── data/
    └── clients/
        ├── cn/                  # Chetan Nandakumar
        │   ├── client.json
        │   └── projects/
        │       ├── flo/
        │       │   └── config.json
        │       └── ai-assistant/
        │           └── config.json
        └── ln/                  # 🆕 Lennon Ramirez
            ├── client.json
            └── projects/
                └── toldito/
                    ├── config.json
                    └── reconciliation-proposal.md
```

### How It Works

1. **Registry Pattern**: Each project is registered in `presentations/index.tsx` with its configuration and optional custom renderer
2. **Dynamic Loading**: `PresentationPage` loads the appropriate renderer based on `projectId`
3. **Fallback Renderer**: Projects without custom slides use a default placeholder renderer
4. **URL Hash Sync**: Current slide ID is stored in URL hash for persistence across reloads

## 🎯 Current Clients & Projects

### Client: CN (Chetan Nandakumar)

- **FLO** - Intelligent Communication Platform ✅ _Full presentation with 10 slides_
- **AI Assistant** - AI-powered assistant ✅ _Reuses FLO presentation_

### Client: LN (Lennon Ramirez) 🆕

- **Toldito** - Reconciliation Module ⏳ _Configured, slides pending_

## 🚦 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Available Routes

- `/` - Homepage with all clients
- `/client/:clientId` - Projects for a specific client
- `/client/:clientId/project/:projectId` - View presentation

**Examples:**

- `/client/cn` - Chetan's projects
- `/client/cn/project/flo` - FLO presentation (fully functional)
- `/client/ln` - Lennon's projects
- `/client/ln/project/toldito` - Toldito presentation (placeholder)

## 🔧 Adding New Clients/Projects

### 1. Create Client Data

```bash
# Create directory structure
mkdir -p data/clients/{client-id}/projects/{project-id}
```

**`data/clients/{client-id}/client.json`:**

```json
{
  "id": "client-id",
  "name": "Client Name",
  "colors": {
    "primary": "#3D6BA3",
    "secondary": "#F4F9FE",
    "accent": "#2563eb"
  },
  "description": "Brief description"
}
```

**`data/clients/{client-id}/projects/{project-id}/config.json`:**

```json
{
  "id": "project-id",
  "clientId": "client-id",
  "name": "Project Name",
  "description": "Project description",
  "status": "active",
  "createdAt": "2025-11-14T00:00:00Z",
  "updatedAt": "2025-11-14T00:00:00Z",
  "tags": ["tag1", "tag2"]
}
```

### 2. Register in Code

**`src/lib/data/clients.ts`:**

```typescript
const clients: Client[] = [
  // ... existing clients
  {
    id: 'client-id',
    name: 'Client Name',
    colors: {
      /* ... */
    },
    description: '...',
  },
]
```

**`src/lib/data/projects.ts`:**

```typescript
const projects: Project[] = [
  // ... existing projects
  {
    id: 'project-id',
    clientId: 'client-id',
    name: 'Project Name',
    // ...
  },
]
```

### 3. Create Presentation Config

**`src/lib/data/presentations/{project-id}.ts`:**

```typescript
export const myPresentation: Presentation = {
  projectId: 'project-id',
  config: {
    title: 'Presentation Title',
    subtitle: 'Subtitle',
    theme: 'client',
    transitions: true,
    duration: 30,
  },
  slides: [
    {
      id: 'hero',
      type: 'hero',
      title: 'Welcome',
      animation: 'fade-in',
    },
    // ... more slides
  ],
}
```

**Register in `src/lib/data/presentations/index.tsx`:**

```typescript
import { myPresentation } from './my-project'

const presentationRegistry = {
  // ... existing
  'project-id': myPresentation,
}
```

### 4. (Optional) Create Custom Slides

```bash
mkdir src/components/projects/{project-id}
```

**`src/components/projects/{project-id}/index.tsx`:**

```typescript
import type { Slide } from '../../../lib/types'

export function renderSlide(slide: Slide, goToNext?: () => void) {
  switch (slide.type) {
    case 'hero':
      return <HeroSlide key={slide.id} onNext={goToNext} />
    // ... more cases
    default:
      return <div>Slide not implemented</div>
  }
}
```

**Register renderer in `presentations/index.tsx`:**

```typescript
import { renderSlide as renderMySlide } from '../../components/projects/{project-id}'

const rendererRegistry = {
  // ... existing
  'project-id': renderMySlide,
}
```

## 🎨 Presentation Features

### Keyboard Shortcuts

- `→` or `Space` - Next slide
- `←` - Previous slide
- `Esc` - Return to project list

### URL Hash Navigation

Each slide's ID is synced with the URL hash:

- `/client/cn/project/flo#hero` - Opens FLO on hero slide
- `/client/cn/project/flo#timeline` - Opens FLO on timeline slide
- Refresh preserves position
- Browser back/forward works seamlessly

### Theme Customization

Client colors are applied automatically from their configuration:

```css
--primary: client.colors.primary
--secondary: client.colors.secondary
--accent: client.colors.accent
```

## 📚 Documentation

For detailed architecture information, see [ARCHITECTURE.md](./ARCHITECTURE.md)

## 🧪 Code Quality

- **TypeScript** - Full type safety
- **ESLint** - Code quality checks
- **Vite** - Fast builds and HMR
- **Component Structure** - Clear separation by project

## 📝 License

Private project for client presentations.
