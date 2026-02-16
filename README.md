# Arquitectura del Proyecto - Entidad Digital

Este documento describe la arquitectura de la aplicación Next.js, sus tecnologías principales y las instrucciones para el control de versiones.

## 1. Tecnologías Principales
- **Framework:** Next.js (App Router)
- **UI:** Tailwind CSS + ShadCN UI
- **IA:** Genkit (Firebase)
- **CMS:** Strapi
- **Base de Datos:** Supabase

## 2. Control de Versiones (GitHub)

Para subir tus cambios al repositorio oficial (`v01_901021565_8`), utiliza los siguientes comandos en tu terminal:

### Sincronización Inicial
```bash
# Asegurar que el remoto apunte al repositorio correcto
git remote set-url origin https://github.com/VictorBotina/v01_901021565_8.git

# Preparar los archivos para el envío
git add .

# Guardar los cambios localmente
git commit -m "Sincronización de proyecto con repositorio v01 y mejoras SEO"

# Subir los cambios a GitHub (forzar si es necesario)
git push -u origin main
```

### Resolución de Conflictos (Si recibes error non-fast-forward)
Si recibes un error al hacer el push porque el historial es diferente o el remoto tiene archivos que tú no, utiliza el comando de fuerza para sobrescribir el repositorio con tu versión local:
```bash
git push -f origin main
```

## 3. Estructura de Directorios
- `src/app/`: Rutas y páginas (Server Components por defecto).
- `src/components/`: Componentes React reutilizables.
- `src/lib/`: Utilidades y configuración de APIs.
- `src/ai/`: Lógica de Inteligencia Artificial con Genkit.

---
*Nota: Se ha configurado la URL de producción en el layout para asegurar el funcionamiento de los metadatos SEO.*
