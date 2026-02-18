'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface DynamicHeroImageProps {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
}

/**
 * Componente de cabecera dinámica premium para páginas institucionales.
 * Optimizado para ocupar mayor espacio vertical y garantizar legibilidad.
 */
export function DynamicHeroImage({ src, alt, title, priority = false }: DynamicHeroImageProps) {
  return (
    <motion.div 
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

      {/* Degradado profundo optimizado para legibilidad en la parte inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
      
      {/* Contenedor de texto centrado en la parte inferior con padding responsivo */}
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] max-w-5xl mx-auto"
        >
          {title}
        </motion.h2>
      </div>
    </motion.div>
  );
}
