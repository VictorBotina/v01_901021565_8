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
- **Variables de Entorno**: Se ha validado que las URLs y API Keys de Supabase y Strapi **NO están hardcoded** en el código. Se consumen dinámicamente desde `process.env` en servicios del lado del servidor.

### Rendimiento y Tooling (Next.js 16.1)
- **Turbopack File System Caching**: Activado por defecto.
- **Directiva `use cache`**: Aplicada en servicios de Strapi y Supabase.

### SEO y Accesibilidad (Optimizado)
- **MetadataBase**: Configurada para producción (`https://v01-901021565-8.vercel.app`).
- **Resolución de Error 400/403**: Se ha corregido la URL base del sitio para que los rastreadores accedan a los recursos estáticos.
- **Gestión de Imágenes**: Se ha identificado que archivos de ~107 bytes son punteros de Git LFS. **Recomendación:** Asegurar que las imágenes se suban como archivos binarios reales si el entorno de despliegue no soporta LFS directamente.

### Integración con Strapi
- **Sincronización de Esquema**: El Content-Type `Article` ya soporta `slug` y `keywords`.
- **Navegación Semántica**: Uso de slugs nativos para SEO.

## 4. Control de Versiones (Git)
El proyecto debe sincronizarse mediante:
`git push -f origin main`

---
*Documento actualizado - 10 de febrero de 2026 (Validación de seguridad de variables de entorno).*
