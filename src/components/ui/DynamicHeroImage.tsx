'use client';

import { motion, useScroll, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

interface DynamicHeroImageProps {
  src: string;
  alt: string;
  title: string; // Frase de apertura dinámica
  mainTitle?: string; // Título principal fijo (H1)
  priority?: boolean;
}

/**
 * Componente de cabecera dinámica premium para páginas institucionales.
 * Permite integrar un título principal fijo y una frase de apertura que se revela con el scroll.
 */
export function DynamicHeroImage({ src, alt, title, mainTitle, priority = false }: DynamicHeroImageProps) {
  const containerRef = useRef(null);
  
  const isInView = useInView(containerRef, { 
    amount: 0.2,
    once: false 
  });
  
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (scrollY.get() > 10) {
      setHasScrolled(true);
    }

    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 10) {
        setHasScrolled(true);
      } else if (latest <= 5) {
        setHasScrolled(false);
      }
    });
    
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative w-full aspect-[4/3] sm:aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl bg-muted border border-white/10 mb-12"
    >
      {/* Capa de imagen con movimiento infinito sutil */}
      <motion.div
        animate={{ 
          scale: [1, 1.03, 1],
          rotate: [0, 0.2, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0"
      >
        <Image 
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          priority={priority}
        />
      </motion.div>

      {/* Degradado profundo optimizado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
      
      {/* Contenedor de contenido centralizado */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center sm:p-10 md:p-14">
        
        {/* Título Principal (H1) - Fijo */}
        {mainTitle && (
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] max-w-5xl mx-auto mb-4">
            {mainTitle}
          </h1>
        )}

        {/* Frase de apertura - Dinámica y más pequeña */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: (hasScrolled && isInView) ? 1 : 0,
            y: (hasScrolled && isInView) ? 0 : 20
          }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            opacity: { duration: 0.5 }
          }}
          className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium text-white/90 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          {title}
        </motion.h2>
      </div>
    </motion.div>
  );
}
