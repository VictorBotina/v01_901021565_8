'use client';

import { motion } from 'framer-motion';

interface AnimatedPhraseProps {
  text: string;
  className?: string;
}

/**
 * Componente para animar frases de cierre o impacto.
 * Realiza un fade-in suave con desplazamiento vertical cuando el elemento entra en el viewport.
 * La animación se ejecuta una sola vez y el elemento permanece visible.
 */
export function AnimatedPhrase({ text, className }: AnimatedPhraseProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={className}
    >
      {text}
    </motion.h2>
  );
}
