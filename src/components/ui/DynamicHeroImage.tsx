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
 * Incluye efectos de zoom, movimiento sutil, degradados de contraste y tipografía optimizada.
 */
export function DynamicHeroImage({ src, alt, title, priority = false }: DynamicHeroImageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="group relative w-full aspect-[21/9] md:aspect-[3/1] rounded-[2rem] overflow-hidden shadow-2xl bg-muted border border-white/10 mb-12"
    >
      {/* Capa de imagen con movimiento infinito sutil */}
      <motion.div
        animate={{ 
          scale: [1, 1.02, 1],
          rotate: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute inset-0"
      >
        <Image 
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          priority={priority}
        />
      </motion.div>

      {/* Degradado elegante para profundidad y legibilidad del texto blanco */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-75" />
      
      {/* Contenedor de texto centrado en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold text-white leading-tight drop-shadow-2xl"
        >
          {title}
        </motion.h2>
      </div>
    </motion.div>
  );
}
