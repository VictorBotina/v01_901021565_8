# Estado Actual del Proyecto - Migración a Next.js 16.1

Este documento certifica que el sistema ha sido actualizado siguiendo la documentación oficial de la rama 16.

## 1. Versiones de Core y Env
El sistema utiliza las versiones más recientes disponibles en el canal estable para habilitar las nuevas capacidades de Turbopack y optimización.

- **Next.js:** `latest` (Rama 16.1 - Siguiendo documentación oficial).
- **React / React-DOM:** `latest` (React 19+).
- **TypeScript:** `^5.x`
- **Node.js Recomendado:** >=20.x

## 2. Inventario de Mejoras Implementadas

### Rendimiento y Tooling (Next.js 16.1)
- **Turbopack File System Caching**: Activado por defecto para mejorar los tiempos de compilación en desarrollo.
- **Bundle Analyzer (Experimental)**: Preparado para optimización de código mediante `next experimental-analyze`.
- **serverExternalPackages**: Manejo mejorado de dependencias transitivas externas.

### Arquitectura de Datos
- **Directiva `use cache`**: Aplicada globalmente a los servicios de Strapi (Artículos) y Supabase (Oficinas).
- **Segregación de Servicios**: Resolución de errores de build mediante la separación de `articleUtils.ts` (cliente/servidor) y `articleService.ts` (exclusivo servidor con `use server`).
- **Carga Optimizado**: Reducción del tiempo de respuesta mediante almacenamiento persistente en el servidor (Data Cache).

### Compatibilidad y Estabilidad
- **Peer Dependencies Overrides**: Configuración en `package.json` para forzar la compatibilidad de módulos antiguos con la rama 16.
- **Hidratación**: Corrección de discrepancias temporales y eliminación de efectos secundarios en el renderizado inicial.

## 3. Análisis de Integración con Strapi (Febrero 2026)

### Diagnóstico de Error: "Invalid key slug"
Se ha identificado una discrepancia técnica entre la lógica del frontend y el esquema actual de Strapi:
- **Problema**: El frontend intenta consultar artículos filtrando por el campo `slug` (usado para URLs amigables y SEO).
- **Causa**: Strapi devuelve un error 400 porque el Content-Type `Article` no posee un atributo llamado `slug` en su esquema.
- **Impacto**: Las páginas de detalle de artículos fallan al cargar ya que el servicio `getArticleBySlug` realiza una petición malformada para el estándar del backend actual.

## 4. Documentación del Modelo de Datos (Esquema Article)

Basado en la implementación de artículos completos (Ej: `/como-radicar-tus-pqrs`), estos son los campos que el frontend está procesando:

### Campos de Primer Nivel
- `id`: Identificador único (UUID o ID numérico).
- `title`: Título principal del artículo.
- `description`: Resumen o introducción corta.
- `date`: Fecha de publicación (Formato ISO).
- `image`: Imagen destacada (Objeto con `url` y `formats`).

### Relaciones y Metadatos
- **`category`**: Objeto con `name` (Nombre legible) y `slug` (Ruta).
- **`author`**:
    - `name`: Nombre del redactor.
    - `bio`: Biografía en formato RichText.
    - `avatar`: Objeto con la `url` de la foto.

### Estructura de Contenido Dinámico (`content`)
El campo `content` es un array de componentes/secciones que permite renderizado flexible:
- `title_seccion`: Subtítulo opcional para cada bloque.
- `text`: Array de bloques RichText (párrafos, listas, negritas).
- `media_url`: Campo opcional para incrustar videos (Ej: YouTube).

## 5. Hoja de Ruta para la Resolución

### Opción A: Sincronización del Esquema en Strapi (Solución Óptima)
Ajustar el backend para soportar la arquitectura de navegación actual.
- **Acción**: En el panel de Strapi (Content-Type Builder), añadir un campo `slug` de tipo `UID` vinculado al campo `title`.
- **Pros**: Beneficio SEO máximo, URLs amigables, mantenimiento mínimo de código.
- **Recomendación**: **Prioridad Alta.**

### Opción B: Transición a IDs Numéricos (Solución de Parche)
Modificar el frontend para que use el ID de la base de datos como identificador único en la URL.
- **Acción**: Cambiar rutas dinámicas de `[slug]` a `[id]` y refactorizar `getArticleBySlug` a `getArticleById`.
- **Contras**: Pérdida de valor SEO, URLs menos legibles.

## 6. Conclusión Final
El proyecto está técnicamente listo para operar en Next.js 16.1. La estructura de consumo de datos está claramente definida pero requiere la habilitación del campo `slug` en el CMS para que la navegación sea funcional según los estándares de diseño propuestos.

---
*Documento actualizado - 9 de febrero de 2026 (Documentación de campos Strapi completada).*
