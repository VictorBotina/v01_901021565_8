'use server';
/**
 * @fileOverview Servicio de obtención de artículos con caché avanzada para Next.js 16.
 */
import { Article } from "@/app/types/article";
import { fetchFromStrapi } from "@/lib/api";

/**
 * Obtiene artículos de la API de Strapi, opcionalmente filtrados por categoría.
 * @param categoryName - El nombre de la categoría por la cual filtrar.
 */
export async function getArticles(categoryName?: string): Promise<Article[]> {
  'use cache';
  const params: any = {
    sort: { date: 'desc' },
    fields: ["title", "description", "date", "slug", "keywords"],
    populate: {
      image: { fields: ["url", "formats"] },
      author: { fields: ["name"] },
      category: { fields: ["name", "slug"] },
    },
  };

  if (categoryName) {
    params.filters = {
      category: {
        name: {
          $eq: categoryName,
        },
      },
    };
  }

  try {
    const data = await fetchFromStrapi("articles", params);
    if (Array.isArray(data)) {
        return data.map(article => ({
            ...article, 
            slug: article.slug || article.id.toString() 
        }));
    }
    return [];
  } catch (error) {
    console.error("📦 getArticles falló, devolviendo un array vacío.");
    return [];
  }
}

/**
 * Obtiene un artículo específico por su ID de Strapi.
 */
export async function getArticleById(id: string): Promise<Article | null> {
  'use cache';
  if (!id) return null;
  
  const params = {
    fields: ["title", "description", "date", "slug", "keywords"],
    populate: {
      image: { fields: ["url"] },
      category: { fields: ["name", "slug"] },
      author: {
        fields: ["name", "bio"],
        populate: { avatar: { fields: ["url"] } },
      },
      content: {
        populate: '*',
      },
    },
  };

  try {
    const data = await fetchFromStrapi(`articles/${id}`, params);
    return data ? (data as Article) : null;
  } catch (error) {
    console.error(`📦 getArticleById falló para el ID '${id}'.`);
    return null;
  }
}

/**
 * Obtiene un artículo específico por su slug.
 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  'use cache';
  const params = {
    filters: { slug: { $eq: slug } },
    fields: ["title", "description", "date", "slug", "keywords"],
    populate: {
      image: { fields: ["url", "formats"] },
      category: { fields: ["name", "slug"] },
      author: { 
        fields: ["name", "bio"],
        populate: { avatar: { fields: ["url"] } } 
      },
      content: { 
        populate: '*'
      },
    },
  };

  try {
    const data = await fetchFromStrapi("articles", params);
    if (!data || !Array.isArray(data) || data.length === 0) {
      return null;
    }
    const article = data[0] as Article;
    
    if (article.id) {
        const fullArticle = await fetchFromStrapi(`articles/${article.id}`, {
            populate: {
                content: { populate: '*' }
            }
        });
        if (fullArticle && fullArticle.content) {
            article.content = fullArticle.content;
        }
    }

    return article;
  } catch (error) {
    console.error(`📦 getArticleBySlug falló para el slug '${slug}'.`);
    return null;
  }
}
