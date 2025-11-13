import React from 'react'
import Link from 'next/link'
import Image from 'next/image' // Para a foto do projeto
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'
import { url } from 'inspector'

// --- DADOS DE EXEMPLO (MOCK DATA) ---
// Em um app real, você buscaria isso de um CMS ou API
const mockParticipants = [
  { name: "Juliana Audi Giannoni", role: "Coordenadora", fallback: "JG", url : "https://res.cloudinary.com/dwkzysoyd/image/upload/v1763069633/photo_2025-11-13_18-33-21_k9pp1x.jpg"},
  { name: "João Cardia", role: "Pesquisador (TI)", fallback: "JS", url: "https://res.cloudinary.com/dwkzysoyd/image/upload/v1763070149/joao_bvsoeg.png" },
  { name: "Maria Oliveira", role: "Pesquisadora (Biologia)", fallback: "MO", url: "https://res.cloudinary.com/dwkzysoyd/image/upload/v1763069633/photo_2025-11-13_18-33-21_k9pp1x.jpg" },
  { name: "Carlos Souza", role: "Voluntário", fallback: "CS", url: "https://res.cloudinary.com/dwkzysoyd/image/upload/v1763070149/joao_bvsoeg.png" },
  { name: "Carlos Souza", role: "Voluntário", fallback: "CS" },
  { name: "Carlos Souza", role: "Voluntário", fallback: "CS" },
  { name: "Carlos Souza", role: "Voluntário", fallback: "CS" },
  { name: "Carlos Souza", role: "Voluntário", fallback: "CS" },
]

const mockRecipes = [
  {
    title: "Ora-pro-nóbis",
    description: "Rica em proteína e ferro, perfeita para o café da manhã.",
    imgSrc : "https://res.cloudinary.com/dwkzysoyd/image/upload/v1763048949/planta1_faylww.jpg",
    url: "/recipes/omelete-ora-pro-nobis",
  },
  {
    title: "Chá de Hibisco",
    description: "Um toque verde e nutritivo no clássico chá",
    imgSrc : "https://res.cloudinary.com/dwkzysoyd/image/upload/v1763049044/cha-de-hibisco_fnqfw7.jpg",
    url: "/recipes/pao-de-queijo-taioba",
  },
  {
    title: "Salada de Capuchinha",
    description: "Flores e folhas com um sabor levemente apimentado.",
    imgSrc : "https://res.cloudinary.com/dwkzysoyd/image/upload/v1763048878/salada_tbmmux.jpg",
    url: "/recipes/salada-capuchinha",
  },
]
// --- FIM DOS DADOS DE EXEMPLO ---


/**
 * Página Inicial (Home)
 * O layout.tsx já adiciona Nav e Footer.
 * Esta página renderiza apenas o conteúdo <main>.
 */
export default function HomePage() {
  return (
    
    <main className="w-full">
      {/* --- Seção 1: Sobre o Projeto --- */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna de Texto */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Bem-vindo ao Projeto PANC
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Este é um espaço dedicado à pesquisa e disseminação das
              Plantas Alimentícias Não Convencionais (PANC), sob a coordenação
              da Profª Drª Juliana Audi Giannoni.
            </p>
            <p className="mt-4 text-muted-foreground">
              Nossa plataforma cataloga, monitora e explora o potencial
              nutricional e gastronômico dessas plantas incríveis. Explore
              nosso catálogo, acompanhe os dados do nosso dashboard
              ou experimente nossas receitas.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="/catalog">Explorar Catálogo</Link>
              </Button>
            </div>
          </div>
          
          {/* Coluna de Imagem */}
          <div className="relative w-full h-80 md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://res.cloudinary.com/dwkzysoyd/image/upload/v1763049127/panc_xeaoqc.jpg"
              alt="Foto do Projeto PANC"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>

      {/* --- Seção 2: Participantes --- */}
      <section className="bg-muted dark:bg-gray-900 w-full">
        <div className="container mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl font-bold">Nossa Equipe</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Conheça os pesquisadores, alunos e voluntários que
            tornam este projeto possível.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {mockParticipants.map((person) => (
              <div key={person.name} className="flex flex-col items-center">
                <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-white dark:border-gray-800 shadow-lg">
                  <AvatarImage src={person.url} alt={person.name} />
                  <AvatarFallback className="text-3xl">{person.fallback}</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-semibold text-lg">{person.name}</h3>
                <p className="text-sm text-primary">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Seção 3: Receitas em Destaque --- */}
      <section className="container mx-auto px-6 py-20 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Receitas em Destaque</h2>
          <p className="text-muted-foreground mt-4">
            Descubra sabores incríveis com nossas Plantas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockRecipes.map((recipe) => (
            <Card key={recipe.title} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src={recipe.imgSrc}
                    alt={recipe.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-6">
                <CardTitle>{recipe.title}</CardTitle>
                <CardDescription className="mt-2">
                  {recipe.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={recipe.url}>Ver Receita</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>     
    </main>
  );
}