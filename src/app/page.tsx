import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  BookOpen,
  LayoutDashboard,
  Thermometer,
  Power,
  BarChart3,
  ListTodo,
} from 'lucide-react'

/**
 * Página Inicial (Home)
 * Fornece uma visão geral do projeto e links para as seções principais.
 */
export default function HomePage() {
  return (
    // O 'layout.tsx' já fornece o 'flex-1', então esta 'main'
    // naturalmente preenche o espaço entre o Nav e o Footer.
    <main className="w-full">
      
      {/* --- Seção Hero --- */}
      <section className="bg-muted dark:bg-gray-900">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            PANC Dashboard
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Monitoramento e Gerenciamento Inteligente da sua Horta de Plantas Alimentícias Não Convencionais (PANC).
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/dashboard">Acessar Dashboard</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/catalog">Explorar Catálogo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* --- Seção de Funcionalidades --- */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Como Funciona</h2>
          <p className="text-muted-foreground mt-4">
            Uma plataforma completa para entusiastas e pesquisadores de PANC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Funcionalidade 1: Explorar */}
          <Card>
            <CardHeader className="items-center">
              <div className="p-3 rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Explore</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>
                Navegue em um catálogo público de plantas, veja fotos,
                informações detalhadas e até receitas sugeridas
                para cada PANC.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Funcionalidade 2: Monitorar */}
          <Card>
            <CardHeader className="items-center">
              <div className="p-3 rounded-full bg-primary/10">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Monitore</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>
                Acesse um dashboard privado com dados em tempo real
                dos seus sensores: Umidade do Solo, Temperatura,
                Luz Solar e Nível dos reservatórios.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Funcionalidade 3: Controle e Aja */}
          <Card>
            <CardHeader className="items-center">
              <div className="p-3 rounded-full bg-primary/10">
                <Power className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Controle e Aja</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>
                Tome ações baseadas nos dados. Use os atalhos para
                Ligar a Bomba, Reiniciar a Coleta de dados ou
                identificar plantas que precisam de atenção.
              </CardDescription>
            </CardContent>
          </Card>

        </div>
      </section>

    </main>
  );
}