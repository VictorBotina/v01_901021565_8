# Estado Actual del Proyecto y Plan de Migración a Next.js 16.x

Este documento proporciona un desglose técnico detallado del estado del sistema al 24 de mayo de 2024, con el objetivo de servir como base para la futura actualización a la rama 16.x de Next.js.

## 1. Versiones de Core y Entorno
Actualmente, el proyecto ha completado la **Fase 1** y se encuentra ejecutando la **Fase 2**.

- **Next.js:** `15.5.9` (App Router activo).
- **React / React-DOM:** `^19.0.0` (Actualizado).
- **TypeScript:** `^5.x`
- **Node.js Recomendado:** `>=20.x`

## 2. Inventario Exhaustivo de Dependencias

### UI y Estilos (ShadCN / Radix / Tailwind)
El sistema de diseño es altamente modular, basado en Radix UI y Tailwind CSS.
- **Tailwind CSS:** `^3.4.1` (Utiliza variables CSS HSL).
- **Radix UI Primitives:** Varias versiones en `@radix-ui/react-*`.
- **Framer Motion:** `11.2.10`.
- **Lucide React:** `0.475.0`.

### Funcionalidades Específicas
- **Inteligencia Artificial:** `genkit` 1.20.0.
- **Backend / Bases de Datos:** `firebase` ^11.9.1, `supabase` ^2.43.4.
- **Gestión de Datos y API:** `axios`, `qs`.

## 3. Auditoría de Migración (React 19 / Next.js 15+)

### Acciones Realizadas
1.  **Refactorización de APIs Asíncronas**: Se actualizaron todos los Server Components que consumen `cookies()` y `params` para usar `await`, cumpliendo con los requisitos de Next.js 15.
2.  **Corrección de Hidratación**: Se eliminaron llamadas dinámicas a `new Date()` dentro del ciclo de renderizado de componentes de servidor para evitar discrepancias.

## 4. Plan de Trabajo Sugerido

1.  **Fase 1 (Preparación) [COMPLETADO]:** Actualización a React 19.
2.  **Fase 2 (Auditoría) [COMPLETADO]:** Refactorización de componentes para concurrencia y APIs asíncronas.
3.  **Fase 3 (Migración de Next.js) [PENDIENTE]:** Actualizar `next` a `16.x` una vez disponible.
4.  **Fase 4 (Refactorización Avanzada) [PENDIENTE]:** Implementación de `use cache`.

---
*Este documento debe ser actualizado tras cada cambio significativo en el package.json.*
