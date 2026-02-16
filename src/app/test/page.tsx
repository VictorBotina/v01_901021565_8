// src/app/test/page.tsx
import { InfoPopup } from "@/components/ui/popup";
import { cookies } from 'next/headers';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function TestPage() {
  const cookieStore = await cookies();
  const consentHandled = !!cookieStore.get('analytics_consent');

  return (
    <div className="container mx-auto px-4 py-8">
      <InfoPopup 
        popupId="popup_cita_online" 
        variant="corner" 
        slidePosition="left"
        consentHandled={consentHandled} 
      />
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">Página de Pruebas</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Esta página se usa para probar componentes e integraciones multimedia de la plataforma.
        </p>
      </header>

      <main className="max-w-4xl mx-auto space-y-12">
        <section>
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Prueba de Video Nativo (YouTube)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg border bg-black">
                <iframe
                  src="https://www.youtube.com/embed/wLUbTxMGNMY"
                  title="Video institucional Emssanar EPS"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm font-medium text-primary">
                  Integración mediante iframe nativo (Sin librerías externas)
                </p>
                <p className="text-xs text-muted-foreground">
                  Esta técnica asegura que el bundle de JavaScript se mantenga liviano, cargando el reproductor solo cuando es necesario.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
