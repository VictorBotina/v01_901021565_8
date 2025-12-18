
# Arquitectura del Proyecto

Este documento describe la arquitectura de la aplicación Next.js, sus tecnologías principales y la estructura de directorios.

## 1. Tecnologías Principales

- **Framework:** [Next.js](https://nextjs.org/) (con App Router).
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/).
- **UI y Estilos:**
  - [Tailwind CSS](https://tailwindcss.com/): Framework CSS "utility-first" para un diseño rápido y personalizable.
  - [ShadCN UI](https://ui.shadcn.com/): Colección de componentes de UI reutilizables construidos sobre Tailwind CSS y Radix UI. La configuración se encuentra en `components.json` y el tema base en `src/app/globals.css`.
- **Inteligencia Artificial:**
  - [Genkit](https://firebase.google.com/docs/genkit): Framework de Firebase para construir flujos de IA. La configuración principal se encuentra en `src/ai/genkit.ts`.
- **Fetching de Datos:**
  - **Strapi:** Utilizado como CMS Headless para gestionar el contenido (ej. artículos de blog). La lógica de conexión está en `src/lib/api.ts`.
  - **Supabase:** Utilizado como base de datos para funcionalidades específicas (ej. obtener detalles de oficinas).

## 2. Estructura de Directorios

La estructura del proyecto sigue las convenciones de Next.js App Router para una organización clara y escalable.

```
/
├── public/                # Archivos estáticos (imágenes, fuentes, datos JSON)
├── src/
│   ├── app/               # Directorio principal de la aplicación (App Router)
│   │   ├── (rutas)/       # Carpetas que definen las rutas de la aplicación
│   │   │   ├── page.tsx   # Componente de UI para una ruta específica
│   │   │   └── layout.tsx # Layout que envuelve a una ruta y sus hijos
│   │   ├── globals.css    # Estilos globales y variables de tema de ShadCN
│   │   └── layout.tsx     # Layout raíz de toda la aplicación
│   │
│   ├── components/        # Componentes de React reutilizables
│   │   ├── ui/            # Componentes base de ShadCN (Button, Card, etc.)
│   │   ├── layout/        # Componentes de estructura (Header, Footer, etc.)
│   │   └── ...            # Otros componentes personalizados
│   │
│   ├── lib/               # Lógica no-UI, utilidades y datos
│   │   ├── api.ts         # Funciones para conectar con la API de Strapi
│   │   ├── utils.ts       # Funciones de utilidad (ej. `cn` para clases)
│   │   ├── navigation-data.ts # Datos para la navegación principal
│   │   └── ...            # Otros helpers y datos estáticos
│   │
│   ├── hooks/             # Hooks de React personalizados (ej. use-popup)
│   │
│   └── ai/                # Funcionalidades de Inteligencia Artificial con Genkit
│       ├── genkit.ts      # Configuración e inicialización de Genkit
│       └── flows/         # Flujos de IA que orquestan llamadas a modelos
│
├── next.config.ts         # Configuración de Next.js
└── tailwind.config.ts     # Configuración de Tailwind CSS
```

## 3. Principios de Arquitectura

### App Router y Server Components

- **Rutas:** La aplicación utiliza el **App Router** de Next.js. Las rutas se definen mediante carpetas dentro de `src/app`. Cada carpeta con un archivo `page.tsx` se convierte en una ruta pública.
- **Server Components por Defecto:** La mayoría de los componentes son **Server Components**. Esto mejora el rendimiento al renderizar el HTML en el servidor y enviar un mínimo de JavaScript al cliente.
- **Client Components:** Los componentes que requieren interactividad (hooks como `useState`, `useEffect`) o acceso a APIs del navegador deben ser marcados con la directiva `"use client";` al inicio del archivo.

### Flujo de Datos

1.  **Server-Side Fetching:** Para obtener datos de APIs (como Strapi o Supabase), se utilizan funciones `async` directamente en los Server Components (`page.tsx` o `layout.tsx`). Esto permite que los datos se carguen en el servidor antes de renderizar la página.
2.  **Contenido Estático:** Datos que no cambian con frecuencia (como la estructura de navegación o datos de pop-ups) se almacenan en archivos JSON o TS dentro de `src/lib` y `public/data`.
3.  **Server Actions:** Para mutaciones de datos (ej. enviar un formulario), se utilizan **Server Actions**, que son funciones asíncronas marcadas con `"use server";`. Esto elimina la necesidad de crear endpoints de API para operaciones simples.

### Estilos y UI

- **ShadCN UI:** La base de los componentes de UI proviene de ShadCN. No se modifican directamente los archivos en `src/components/ui`, sino que se componen en componentes más complejos en otras carpetas de `src/components`.
- **Theming:** Los colores y estilos se controlan a través de variables CSS en `src/app/globals.css`, siguiendo el sistema de temas de ShadCN. Esto permite una fácil personalización del aspecto visual.
- **Clases Dinámicas:** La utilidad `cn` de `src/lib/utils.ts` se usa para combinar clases de Tailwind de manera condicional y segura.

### Accesibilidad

La aplicación incluye funcionalidades de accesibilidad como cambio de tema (claro/oscuro), modo de alto contraste y ajuste del tamaño de fuente. La lógica principal se encuentra en los componentes dentro de `src/components/layout/header`.

### Estrategia de Contenidos con Strapi (CMS Headless)

- **Propósito:** Strapi se utiliza como un **CMS Headless** para gestionar contenido dinámico que puede necesitar actualizaciones frecuentes sin requerir cambios en el código. Esto incluye artículos del blog, comunicados de prensa, datos para pop-ups, entre otros.
- **Desacoplamiento:** Esta estrategia desacopla la gestión de contenido del desarrollo del frontend. Permite que editores o administradores de contenido puedan crear, actualizar y publicar información directamente desde el panel de Strapi.
- **Conexión:** La lógica para comunicarse con la API de Strapi se centraliza en `src/lib/api.ts`. Este archivo contiene funciones (`fetchFromStrapi`) que manejan las solicitudes HTTP, la autenticación y el aplanamiento de la estructura de datos compleja que devuelve Strapi.
- **Consumo de Datos:** Los Server Components (como las páginas del blog en `src/app/blog/...`) importan y utilizan las funciones de `src/lib/api.ts` y `src/app/services/articleService.ts` para obtener los datos del CMS durante el proceso de renderizado en el servidor.
