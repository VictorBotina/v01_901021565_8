# Estado Actual del Proyecto - Migración a Next.js 16.1

Este documento certifica que el sistema ha sido actualizado siguiendo la documentación oficial de la rama 16.

## 1. Versiones de Core y Env
- **Next.js:** `latest` (Rama 16.1).
- **React / React-DOM:** `latest` (React 19+).
- **TypeScript:** `^5.x`
- **URL de Producción Oficial:** `https://v01-901021565-8.vercel.app`
- **Repositorio Oficial:** `https://github.com/VictorBotina/v01_901021565_8`

## 2. Configuración de Entorno (Producción)
Para que el sitio funcione correctamente en el despliegue, deben configurarse las siguientes variables en el panel de Vercel:

| Variable | Uso | Estado |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | SEO y Open Graph | `https://v01-901021565-8.vercel.app` |
| `NEXT_PUBLIC_STRAPI_API_URL` | Conexión CMS Strapi | Requerido |
| `NEXT_PUBLIC_STRAPI_API_TOKEN` | Token de acceso Strapi | Requerido |
| `NEXT_PUBLIC_SUPABASE_URL` | Base de Datos Oficinas | Consumido en `officeService.ts` |
| `NEXT_PUBLIC_SUPABASE_API_KEY` | Key de acceso Supabase | Consumido en `officeService.ts` |

## 3. Inventario de Mejoras Implementadas

### Seguridad y Credenciales
- **Variables de Env**: Consumidas dinámicamente mediante `process.env` en Server Actions. No hay llaves hardcoded.

### SEO y Accesibilidad (Optimizado)
- **MetadataBase**: Configurada para producción (`https://v01-901021565-8.vercel.app`).
- **Open Graph**: Resolución de imágenes corregida para evitar errores 400/403.
- **Gestión de Imágenes**: Identificación de punteros Git LFS (107 bytes). Se requiere carga de binarios reales para visualización en OG.

### Multimedia y Video
- **YouTube**: Se utiliza integración **nativa vía `<iframe>`**. No se dependen de paquetes externos adicionales, optimizando el bundle de JavaScript.
- **Utilidades**: Función `getYoutubeEmbedUrl` implementada en componentes de blog para transformar URLs dinámicamente.

### Integración con Strapi
- **Sincronización de Esquema**: Soporte nativo para `slug`, `keywords` y `content` dinámico.

## 4. Gestión de Noticias (Arquitectura Híbrida)
- **Dinámico (Strapi)**: Blog principal y artículos detallados.
- **Local (JSON)**: Componente `ArticleSection` consume `public/articles.json` para máxima disponibilidad y rendimiento en landings.

---
*Documento actualizado - 10 de febrero de 2026 (Documentación de multimedia y video).*
