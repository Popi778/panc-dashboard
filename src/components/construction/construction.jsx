import React from 'react'
import { Cog } from 'lucide-react' // Ícone de "configuração" ou "construção"

/**
 * Página de Receitas (Em Construção)
 * O layout.tsx já adiciona Nav e Footer.
 */
export default function Construcao() {
  return (
    // 1. O 'layout.tsx' já nos dá um <main class="flex-1">.
    //    Este 'div' vai preencher 100% da altura ('h-full') desse 'main'
    //    e centralizar seu conteúdo.
    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
      
      {/* 2. A Animação */}
      <Cog className="h-20 w-20 animate-spin text-primary" />

      {/* 3. O Conteúdo */}
      <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl">
        Em Construção
      </h1>
      <p className="mt-4 text-lg leading-8 text-muted-foreground">
        Nossa página de receitas está no forno!
      </p>
      <p className="text-muted-foreground">
        Volte em breve para descobrir sabores incríveis com PANC.
      </p>

    </div>
  )
}