'use client';

import { InfoPopup } from "@/components/ui/popup";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DynamicHeroImage } from "@/components/ui/DynamicHeroImage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [consentHandled, setConsentHandled] = useState(false);

  useEffect(() => {
    // Simulación simple para evitar errores de hidratación con cookies en cliente directo
    const consent = document.cookie.includes('analytics_consent');
    setConsentHandled(consent);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <InfoPopup 
        popupId="popup_cita_online" 
        variant="corner" 
        slidePosition="left"
        consentHandled={consentHandled} 
      />
      
      <header className="mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          Laboratorio de Componentes
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Visualización de componentes dinámicos y premium para el sistema.
        </p>
      </header>

      <main className="max-w-5xl mx-auto space-y-20">
        
        {/* Sección de Imagen Dinámica Premium (Referencia oficial) */}
        <section className="space-y-8">
          <DynamicHeroImage 
            src="/images/img-sub/artritis-reumatoide-img16022026.webp"
            alt="Imagen de prueba dinámica"
            title="Inflamación, dolor y cansancio: lo que debes saber sobre la Artritis Reumatoide"
            priority
          />
          
          <p className="text-center text-sm text-muted-foreground italic">
            Componente DynamicHeroImage: Animaciones sincronizadas, degradados de alto contraste y jerarquía H2.
          </p>
        </section>

        {/* Sección de Video */}
        <section>
          <Card className="overflow-hidden border-none shadow-xl bg-secondary/30">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">Reproductor Multimedia Nativo</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg border bg-black group">
                <iframe
                  src="https://www.youtube.com/embed/wLUbTxMGNMY"
                  title="Video institucional Emssanar EPS"
                  className="absolute inset-0 h-full w-full opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-6 text-center space-y-2">
                <p className="text-sm font-medium text-primary">
                  Integración mediante iframe nativo
                </p>
                <p className="text-xs text-muted-foreground max-w-lg mx-auto">
                  Solución técnica optimizada que reduce el peso del sitio y mejora los tiempos de carga al no depender de scripts externos masivos.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
