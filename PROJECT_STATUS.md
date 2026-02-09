# Estado Actual del Proyecto y Plan de Migración a Next.js 16.x

Este documento proporciona un desglose técnico detallado del estado del sistema al 24 de mayo de 2024, con el objetivo de servir como base para la futura actualización a la rama 16.x de Next.js.

## 1. Versiones de Core y Entorno
Actualmente, el proyecto opera en la frontera tecnológica de Next.js 15, pero mantiene una base de React 18 que deberá ser el primer punto de atención en la migración.

- **Next.js:** `15.5.9` (App Router activo).
- **React / React-DOM:** `^18.3.1` (Se requiere actualización a v19 para Next.js 16).
- **TypeScript:** `^5.x`
- **Node.js Recomendado:** `>=20.x`

## 2. Inventario Exhaustivo de Dependencias

### UI y Estilos (ShadCN / Radix / Tailwind)
El sistema de diseño es altamente modular, basado en Radix UI y Tailwind CSS.
- **Tailwind CSS:** `^3.4.1` (Utiliza variables CSS HSL).
- **Radix UI Primitives:** Varias versiones en `@radix-ui/react-*` (Accordion, Dialog, Sheet, etc.).
- **Framer Motion:** `11.2.10` (Utilizado para animaciones de popups y menús).
- **Lucide React:** `0.475.0` (Librería de iconos principal).

### Funcionalidades Específicas
- **Inteligencia Artificial:** `@genkit-ai/google-genai` y `genkit` en versión `1.20.0`.
- **Backend / Bases de Datos:**
  - `firebase`: `^11.9.1`
  - `@supabase/supabase-js`: `^2.43.4`
- **Gestión de Datos y API:**
  - `axios`: `^1.7.2`
  - `qs`: `^6.12.3` (Para consultas complejas a Strapi).
- **Componentes Especializados:**
  - `react-leaflet` / `leaflet`: `^4.2.1` / `^1.9.4` (Mapas de oficinas).
  - `recharts`: `^2.15.1` (Gráficos).
  - `embla-carousel-react`: `^8.6.0` (Carrusel Hero).

### Utilidades de Cliente
- **date-fns:** `^3.6.0` (Formateo de fechas de Strapi).
- **fuse.js:** `^7.0.0` (Buscador local de accesos rápidos).
- **next-themes:** `^0.3.0` (Modo oscuro/claro).

## 3. Arquitectura Técnica Actual

### Estructura de Rutas
- **App Router:** Uso extensivo de rutas dinámicas (ej. `/blog/subsidiado/[slug]`) y layouts anidados.
- **Server Components:** Utilizados por defecto en páginas de blog y secciones institucionales para optimizar el SEO y la carga.
- **Client Components:** Restringidos a formularios (PQRS), mapas interactivos y componentes de accesibilidad.

### Flujo de Datos (Data Fetching)
- **Strapi SDK:** El sistema utiliza una función centralizada `fetchFromStrapi` en `src/lib/api.ts` que maneja el aplanamiento de atributos (flatenning) de la API v4/v5.
- **Server Actions:** Implementadas para el manejo de cookies de consentimiento (`src/app/actions.ts`).

## 4. Análisis de Viabilidad para Next.js 16.x

### Riesgos Identificados
1. **React 19:** Next.js 16 requerirá obligatoriamente React 19. Muchas librerías de componentes actuales (como Leaflet) pueden presentar advertencias de "Peer Dependency" o requerir el uso de `--force` durante la instalación.
2. **Framer Motion:** La versión 11 es estable, pero debe verificarse la compatibilidad con el nuevo motor de renderizado de React 19.
3. **Genkit:** Al ser un framework de Firebase en constante evolución, se debe asegurar que los "Flows" de servidor no tengan conflictos con las nuevas optimizaciones de caching de Next.js 16.

### Plan de Trabajo Sugerido
1. **Fase 1 (Preparación):** Actualizar React y React-DOM a la versión `19.0.0` sobre la versión actual de Next.js 15 para identificar errores de hidratación.
2. **Fase 2 (Auditoría):** Revisar todos los componentes que usan `useEffect` para asegurar que son compatibles con las mejoras de concurrencia de React 19.
3. **Fase 3 (Migración de Next.js):** Actualizar `next` a `16.x` una vez se publique la rama estable.
4. **Fase 4 (Refactorización):** Aprovechar las nuevas APIs de caching y los posibles cambios en `use cache` (si se vuelve estable) para reemplazar patrones antiguos de Strapi fetching.

---
*Este documento debe ser actualizado tras cada cambio significativo en el package.json.*
