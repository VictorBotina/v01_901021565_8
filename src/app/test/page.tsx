'use client';

import { InfoPopup } from "@/components/ui/popup";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
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
          Página de Pruebas
        </motion.h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Laboratorio de componentes e integraciones multimedia de alta fidelidad.
        </p>
      </header>

      <main className="max-w-5xl mx-auto space-y-20">
        
        {/* Sección de Imagen Dinámica Premium */}
        <section className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl bg-muted border border-white/10"
          >
            {/* Efecto de Movimiento sutil de fondo */}
            <motion.div
              animate={{ 
                scale: [1, 1.02, 1],
                rotate: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0"
            >
              <Image 
                src="/images/img-sub/artritis-reumatoide-img16022026.webp"
                alt="Imagen de prueba dinámica"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
            </motion.div>

            {/* Degradado elegante para contraste y profundidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70" />
            
            {/* Capa de brillo dinámico al pasar el cursor */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Contenedor de contenido flotante centrado en la parte inferior */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-2xl md:text-4xl font-bold text-white leading-tight drop-shadow-lg"
              >
                Inflamación, dolor y cansancio: <br className="hidden md:block" />
                lo que debes saber sobre la Artritis Reumatoide
              </motion.h2>
            </div>
          </motion.div>
          
          <p className="text-center text-sm text-muted-foreground italic">
            Visualización optimizada con capas de profundidad y tipografía de alto contraste.
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
