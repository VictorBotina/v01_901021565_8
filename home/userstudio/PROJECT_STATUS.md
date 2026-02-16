# Estado Actual del Proyecto - Migración a Next.js 16.1

Este documento certifica que el sistema ha sido actualizado siguiendo la documentación oficial de la rama 16 y sirve como guía de referencia para el desarrollo de nuevas secciones.

## 1. Versiones de Core y Env
- **Next.js:** `latest` (Rama 16.1).
- **React / React-DOM:** `latest` (React 19+).
- **TypeScript:** `^5.x`
- **URL de Producción Oficial:** `https://v01-901021565-8.vercel.app`

## 2. Configuración de Entorno (Producción)
Variables requeridas en el panel de Vercel para el funcionamiento de servicios dinámicos:

| Variable | Uso | Estado |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | SEO y Open Graph (Debe ser `https://v01-901021565-8.vercel.app`) | Configurado |
| `NEXT_PUBLIC_STRAPI_API_URL` | Conexión CMS Strapi | Requerido |
| `NEXT_PUBLIC_STRAPI_API_TOKEN` | Token de acceso Strapi | Requerido |
| `NEXT_PUBLIC_SUPABASE_URL` | Base de Datos Oficinas | Requerido |
| `NEXT_PUBLIC_SUPABASE_API_KEY` | Key de acceso Supabase | Requerido |

## 3. Guía de Referencia: Estructura de Páginas (Modelo "Canales de Atención")
Para agregar nuevas páginas, se debe seguir la estructura probada en `/afiliados/subsidiado/informacion/canales-de-atencion`:

### A. Metadatos SEO y Open Graph
Toda página debe exportar un objeto `metadata` para garantizar el posicionamiento y la correcta visualización al compartir:
```typescript
export const metadata: Metadata = {
  title: 'Título Descriptivo y Atractivo',
  description: 'Resumen de 150-160 caracteres para buscadores.',
  keywords: ['palabra clave 1', 'palabra clave 2'],
  openGraph: {
    title: 'Título para Redes Sociales',
    description: 'Descripción para Redes Sociales',
    url: '/ruta-de-la-pagina',
    images: [{ url: '/ruta-imagen.webp', width: 1200, height: 630 }]
  }
};
```

### B. Gestión de Imágenes
- **Optimización**: Usar el componente `Image` de `next/image`.
- **Contenedores**: Envolver la imagen en un `div` con `relative` y `aspect-ratio` para evitar saltos de diseño (CLS).
- **SEO**: Siempre incluir el atributo `alt` descriptivo.

### C. Estructura de Contenido (UX/UI)
1. **Header**: Título H1 claro, imagen hero opcional y breve introducción.
2. **Secciones de Rejilla (Grid)**: Usar `Card` de ShadCN para agrupar servicios o ítems repetitivos.
3. **Componentización de Datos**: Almacenar datos repetitivos (como canales o redes sociales) en constantes/arrays y usar `.map()` para renderizar.
4. **Llamadas a la Acción (CTA)**: Usar `Button` con variantes `outline` o `default`.

### D. Integración de Componentes Híbridos
- **ArticleSection**: Al final de cada landing importante, incluir `<ArticleSection title="Título de la Sección" />` para mostrar noticias locales desde `articles.json`.

## 4. Multimedia y Video (Estándar Nativo)
- **YouTube**: Se utiliza integración **nativa vía `<iframe>`**. 
- **Ventaja**: No depende de paquetes externos, optimizando el bundle de JavaScript.
- **Implementación**: Envolver el iframe en un `div` con `aspect-video` para responsividad.

## 5. Gestión de Imágenes y Git LFS
- **Nota Crítica**: Se han identificado archivos de imagen que se cargan como punteros Git LFS (107 bytes) en lugar de binarios reales. Para asegurar la visualización en producción, los archivos en `public/` deben ser cargados como binarios reales o configurar el soporte LFS en el pipeline de despliegue.

---
*Documento actualizado - 10 de febrero de 2026 (Documentación de referencia para arquitectura de páginas).*
