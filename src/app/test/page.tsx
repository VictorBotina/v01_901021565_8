'use client';

import { InfoPopup } from "@/components/ui/popup";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DynamicHeroImage } from "@/components/ui/DynamicHeroImage";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TestPage() {
  const [consentHandled, setConsentHandled] = useState(false);

  useEffect(() => {
    // Simulación simple para evitar errores de hidratación
    const consent = typeof document !== 'undefined' && document.cookie.includes('analytics_consent');
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
      
      <header className="mb-12 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight md:text-5xl"
        >
          Laboratorio de Componentes
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Prueba de cabecera dinámica con mayor impacto visual y jerarquía H2.
        </p>
      </header>

      <main className="max-w-6xl mx-auto space-y-20">
        
        {/* Prueba de DynamicHeroImage con altura mejorada */}
        <section>
          <DynamicHeroImage 
            src="/images/img-sub/artritis-reumatoide-img16022026.webp"
            alt="Imagen de prueba dinámica"
            title="Inflamación, dolor y cansancio: lo que debes saber sobre la Artritis Reumatoide"
            priority
          />
          
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground italic">
              El texto se mantiene en la base con un degradado de protección para máxima legibilidad.
            </p>
          </div>
        </section>

        {/* Sección de Video Institucional */}
        <section>
          <Card className="overflow-hidden border-none shadow-xl bg-secondary/30">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl">Multimedia Nativa</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg border bg-black">
                <iframe
                  src="https://www.youtube.com/embed/wLUbTxMGNMY"
                  title="Video institucional Emssanar EPS"
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
