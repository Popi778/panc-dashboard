"use client" // Obrigatório para hooks e AnimatePresence

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

/**
 * PageTransition
 * Este componente envolve o 'children' (sua página) e aplica
 * uma animação de fade-in/out quando o 'pathname' (a URL) muda.
 */
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  // O hook usePathname() nos dá a URL atual
  const pathname = usePathname()

  return (
    <AnimatePresence
      mode="wait" // 'wait' garante que a animação de 'exit' termine antes da de 'enter'
    >
      {/* A 'key={pathname}' é a mágica!
        Quando a 'key' muda (a URL muda), o AnimatePresence
        dispara a animação de 'exit' no componente antigo
        e a de 'animate' no novo componente.
      */}
      <motion.div
        key={pathname}
        
        // Estado inicial (começa invisível e 20px abaixo)
        initial={{ opacity: 0, y: 20 }}
        
        // Estado animado (fica visível e na posição Y 0)
        animate={{ opacity: 1, y: 0 }}
        
        // Estado de saída (fica invisível e 20px acima)
        exit={{ opacity: 0, y: -20 }}
        
        // Duração da transição
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition