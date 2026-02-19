# Estado Actual del Proyecto - Migración a Next.js 16.1

Este documento certifica que el sistema ha sido actualizado siguiendo la documentación oficial de la rama 16 y sirve como guía de referencia para el desarrollo de nuevas secciones.

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
| `NEXT_PUBLIC_STRAPI_API_URL` | Conexión CMS Strapi | Configurado |
| `NEXT_PUBLIC_STRAPI_API_TOKEN` | Token de acceso Strapi | Configurado |
| `NEXT_PUBLIC_SUPABASE_URL` | Base de Datos Oficinas | Consumido en `officeService.ts` |
| `NEXT_PUBLIC_SUPABASE_API_KEY` | Key de acceso Supabase | Consumido en `officeService.ts` |

## 3. Inventario de Mejoras Implementadas

### Seguridad y Credenciales
- **Variables de Env**: Consumidas dinámicamente mediante `process.env` en Server Actions. No hay llaves hardcoded.

### SEO y Accesibilidad (Optimizado)
- **MetadataBase**: Configurada para producción (`https://v01-901021565-8.vercel.app`).
- **Open Graph**: Resolución de imágenes corregida para evitar errores 400/403.
- **Gestión de Imágenes**: Estándar de cabeceras dinámicas (`DynamicHeroImage`) con revelado por scroll.

### Multimedia y Video
- **YouTube**: Se utiliza integración **nativa vía `<iframe>`**. No se dependen de paquetes externos adicionales, optimizando el bundle de JavaScript.

## 4. Guía de Referencia: Estándar Visual y Estructura (Modelo Premium)

Para agregar nuevas páginas, se debe seguir el estándar implementado en `/afiliados`:

### A. Metadatos SEO y Open Graph
Toda página debe exportar un objeto `metadata` para garantizar el posicionamiento:
```typescript
export const metadata: Metadata = {
  title: 'Título Descriptivo',
  description: 'Resumen optimizado para buscadores.',
  keywords: ['palabra clave 1', 'palabra clave 2'],
  openGraph: {
    title: 'Título Social',
    description: 'Descripción Social',
    url: '/ruta-de-la-pagina',
    images: [{ url: '/ruta-imagen.webp', width: 1200, height: 630 }]
  }
};
```

### B. Cabecera Dinámica (Hero)
Se debe utilizar el componente `DynamicHeroImage`.
- **Título Principal (mainTitle)**: Se asigna al prop `mainTitle`. Aparece de forma fija (H1) dentro de la imagen.
- **Frase de apertura (title)**: Se asigna al prop `title`. Es el texto que se revela suavemente mediante scroll.
- **Lógica de Revelado**: El texto secundario aparece cuando el usuario hace scroll y desaparece cuando la imagen sale del área visible.

### C. Estructura de Contenido (UX/UI)
1. **Imagen Hero**: Componente `<DynamicHeroImage />` que integra el H1.
2. **Introducción**: Bloque de texto centralizado para contextualizar al usuario.
3. **Secciones de Rejilla/Acordeones**: Usar componentes de ShadCN para organizar información densa.
4. **Llamadas a la Acción (CTA)**: Usar `Button` con variantes coherentes.

### D. Animaciones de Impacto
Para frases de cierre, usar el componente `<AnimatedPhrase />` con efecto fade-in de una sola ejecución.

---
*Documento actualizado - 10 de febrero de 2026 (Documentación de estándar Hero con H1 integrado).*
