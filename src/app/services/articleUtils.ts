// src/app/services/articleUtils.ts
import { ArticleContentSection, RichTextBlock } from "@/app/types/article";
import { getStrapiURL } from "@/lib/api";

/**
 * Función para formatear la fecha, útil para la UI. 
 * Segura para usar en Server y Client Components.
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "";
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      const utcDate = new Date(dateString.split('T')[0] + 'T00:00:00');
       return utcDate.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: 'UTC',
      });
    }
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: 'UTC',
    });
  } catch (error) {
    console.error("Error al formatear la fecha:", dateString, error);
    return "Fecha inválida";
  }
}

/**
 * Calcula el tiempo de lectura estimado.
 */
export function calculateReadingTime(content: ArticleContentSection[] | undefined): string {
  if (!content || !Array.isArray(content)) return "5 min";

  let totalWords = 0;
  try {
    content.forEach((section) => {
       if (section.text && Array.isArray(section.text)) {
         section.text.forEach((block: RichTextBlock) => {
           if (block.type === 'paragraph' && Array.isArray(block.children)) {
             block.children.forEach((child) => {
                if (child.type === 'text' && typeof child.text === 'string') {
                    totalWords += child.text.trim().split(/\s+/).length;
                }
             });
           }
         });
       }
    });
  } catch (error) {
    console.error("Error calculando el tiempo de lectura:", error);
    return "5 min";
  }
  
  const readingTimeMinutes = Math.ceil(totalWords / 200);
  return `${readingTimeMinutes} min de lectura`;
}

/**
 * Obtiene la URL completa del avatar del autor.
 */
export const getAuthorAvatarUrl = (avatarData: { url: string } | null | undefined): string | null => {
  if (avatarData && avatarData.url) {
    return getStrapiURL(avatarData.url);
  }
  return null;
};
