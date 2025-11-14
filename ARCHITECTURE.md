# Arquitectura del Proyecto - Refactoring Completado

## 📁 Nueva Estructura

### Componentes por Proyecto

```
src/components/projects/
├── flo/                    # Presentaciones específicas de FLO
│   ├── index.tsx          # Renderer principal con lógica de renderizado
│   ├── HeroSlide.tsx
│   ├── ValuePropositionSlide.tsx
│   ├── MetricsSlide.tsx
│   ├── ScopeSlide.tsx
│   ├── TimelineSlide.tsx
│   ├── ArchitectureSlide.tsx
│   ├── TeamSlide.tsx
│   ├── SecuritySlide.tsx
│   ├── FutureExpansionSlide.tsx
│   └── CTASlide.tsx
└── toldito/               # [PENDIENTE] Presentaciones de Toldito
    └── index.tsx
```

### Sistema de Presentaciones

```
src/lib/data/presentations/
├── index.tsx              # Registry central + defaultSlideRenderer
├── flo.ts                 # Configuración de presentación FLO
└── toldito.ts            # Configuración de presentación Toldito (placeholder)
```

### Datos de Clientes

```
data/clients/
├── cn/                    # Cliente: Chetan Nandakumar
│   ├── client.json
│   └── projects/
│       ├── flo/
│       │   └── config.json
│       └── ai-assistant/
│           └── config.json
└── ln/                    # Cliente: Lennon Ramirez
    ├── client.json
    └── projects/
        └── toldito/
            ├── config.json
            └── reconciliation-proposal.md
```

## 🔧 Cómo Funciona

### 1. Registry Pattern

El archivo `src/lib/data/presentations/index.tsx` contiene:

- **presentationRegistry**: Mapea `projectId` → configuración de presentación
- **rendererRegistry**: Mapea `projectId` → función de renderizado personalizada
- **getPresentation()**: Obtiene la configuración de una presentación
- **getSlideRenderer()**: Obtiene el renderer específico del proyecto
- **defaultSlideRenderer()**: Renderer de respaldo para proyectos sin slides

### 2. Renderizado Dinámico

Cada proyecto exporta su propia función `renderSlide()` en `index.tsx`:

```typescript
export function renderSlide(slide: Slide, goToNext?: () => void) {
  switch (slide.type) {
    case 'hero':
      return <HeroSlide key={slide.id} onNext={goToNext} />
    // ... más casos
  }
}
```

### 3. Carga en PresentationPage

`PresentationPage.tsx` ahora usa el sistema dinámico:

```typescript
const slideRenderer = projectId
  ? getSlideRenderer(projectId) || defaultSlideRenderer
  : defaultSlideRenderer

<PresentationLayout slides={presentation.slides} client={client}>
  {slideRenderer}
</PresentationLayout>
```

## ✨ Características Nuevas

### URL Hash Sync

- Cada slide guarda su `id` en el hash de la URL (ej: `#hero`, `#timeline`)
- Al recargar la página, se restaura la posición exacta
- Soporte para navegación del navegador (atrás/adelante)
- Cambios manuales del hash actualizan la slide

Implementado en `PresentationLayout.tsx`:

- Inicializa desde `window.location.hash` al montar
- Actualiza hash cuando cambia la slide actual
- Escucha eventos `hashchange` para sincronización bidireccional

## 🚀 Agregar Nuevo Cliente/Proyecto

### Paso 1: Crear estructura de datos

```bash
# En data/clients/
mkdir -p {client-id}/projects/{project-id}
```

### Paso 2: Crear archivos de configuración

```json
// data/clients/{client-id}/client.json
{
  "id": "client-id",
  "name": "Nombre del Cliente",
  "colors": {
    "primary": "#color",
    "secondary": "#color",
    "accent": "#color"
  },
  "description": "Descripción"
}

// data/clients/{client-id}/projects/{project-id}/config.json
{
  "id": "project-id",
  "clientId": "client-id",
  "name": "Nombre del Proyecto",
  "description": "Descripción",
  "status": "active",
  "tags": ["tag1", "tag2"]
}
```

### Paso 3: Registrar en código

```typescript
// src/lib/data/clients.ts
const clients: Client[] = [
  // ... clientes existentes
  {
    id: 'client-id',
    name: 'Nombre',
    colors: { ... },
    description: '...'
  }
]

// src/lib/data/projects.ts
const projects: Project[] = [
  // ... proyectos existentes
  {
    id: 'project-id',
    clientId: 'client-id',
    name: '...',
    // ...
  }
]
```

### Paso 4: Crear presentación

```typescript
// src/lib/data/presentations/{project-id}.ts
export const myPresentation: Presentation = {
  projectId: 'project-id',
  config: { ... },
  slides: [ ... ]
}

// src/lib/data/presentations/index.tsx
import { myPresentation } from './{project-id}'

const presentationRegistry = {
  // ... existentes
  'project-id': myPresentation
}
```

### Paso 5: Crear slides (opcional)

```bash
mkdir src/components/projects/{project-id}
```

Crear slides personalizadas y exportar renderer:

```typescript
// src/components/projects/{project-id}/index.tsx
export function renderSlide(slide: Slide, goToNext?: () => void) {
  // Lógica de renderizado
}

// Registrar en presentations/index.tsx
import { renderSlide as renderMySlide } from '../../components/projects/{project-id}'

const rendererRegistry = {
  // ... existentes
  'project-id': renderMySlide,
}
```

## 📝 Notas Importantes

- **Componentes compartidos**: `src/components/client/`, `layout/`, `ui/` son genéricos
- **Slides específicas**: Cada proyecto tiene sus propios componentes en `projects/{projectId}/`
- **Separación de concerns**: Data en `/data`, lógica en `/src/lib`, UI en `/src/components`
- **Extensibilidad**: Agregar proyectos no requiere modificar código existente (solo registry)
- **Fallback**: Proyectos sin renderer usan `defaultSlideRenderer` que muestra placeholder

## 🎯 Estado Actual

### ✅ Completado

- ✅ Estructura de carpetas refactorizada
- ✅ Cliente LN (Lennon Ramirez) agregado
- ✅ Proyecto Toldito configurado (sin slides aún)
- ✅ Slides de FLO migradas a contexto propio
- ✅ Sistema de registry implementado
- ✅ Carga dinámica de presentaciones
- ✅ URL hash sync implementado
- ✅ Sin errores de compilación
- ✅ Backward compatibility con FLO mantenida

### 🔜 Pendiente (Siguiente Fase)

- ⏳ Crear slides específicas para Toldito basadas en `reconciliation-proposal.md`
- ⏳ Implementar renderer de Toldito
- ⏳ Testing end-to-end de ambos clientes

## 🧪 Testing

Para verificar el funcionamiento:

```bash
# Compilar
npm run build

# Desarrollo
npm run dev
```

Rutas disponibles:

- `/` - Homepage con todos los clientes
- `/client/cn` - Proyectos de Chetan Nandakumar
- `/client/ln` - Proyectos de Lennon Ramirez
- `/client/cn/project/flo` - Presentación de FLO (funcional)
- `/client/ln/project/toldito` - Presentación de Toldito (placeholder)
