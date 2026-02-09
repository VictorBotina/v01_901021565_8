'use server';

/**
 * @fileOverview Servicio para la obtención de detalles de oficinas con soporte de caché.
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

/**
 * Obtiene los detalles de una oficina por su ID DANE utilizando la directiva 'use cache'.
 * @param daneId Código DANE del municipio.
 */
export async function getOfficeDetailsAction(daneId: string) {
  'use cache';
  
  if (!supabaseUrl || !supabaseApiKey) {
    throw new Error("Configuración de Supabase incompleta en las variables de entorno.");
  }

  if (!daneId) return null;

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/of_emssanar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseApiKey,
        'Authorization': `Bearer ${supabaseApiKey}`,
      },
      body: JSON.stringify({ "id_dane": daneId }),
      next: { revalidate: 3600 } // Revalidación cada hora como respaldo
    });

    if (!response.ok) {
      return { success: false, error: response.statusText };
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
