"use client" // Componentes de tabela com dados dinâmicos são geralmente client

import React from "react"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils" // Importa o utilitário de classes
import PlantSearch from "../plant/plant-search"

// --- DADOS DE EXEMPLO ---
type PlantStatus = "ok" | "atencao" | "urgente"

type PlantData = {
  id: string
  nome: string
  localizacao: string
  visitas: number
  status: PlantStatus
}

const MOCK_DATA: PlantData[] = [
  { id: "1", nome: "Ora-pro-nóbis", localizacao: "Vaso A-01", visitas: 1520, status: "ok" },
  { id: "2", nome: "Peixinho-da-horta", localizacao: "Canteiro B-03", visitas: 890, status: "atencao" },
  { id: "3", nome: "Moringa", localizacao: "Vaso C-02", visitas: 450, status: "ok" },
  { id: "4", nome: "Beldroega", localizacao: "Horta Suspensa", visitas: 120, status: "urgente" },
  { id: "5", nome: "Taioba", localizacao: "Canteiro B-01", visitas: 760, status: "ok" },
]
// --- FIM DOS DADOS DE EXEMPLO ---


/**
 * Componente TableDashboard
 * Exibe uma barra de pesquisa e uma tabela com o status das plantas.
 */
function TableDashboard() {
  
  // Função para mapear o status para as cores do Badge
  const getBadgeVariant = (status: PlantStatus) => {
    switch (status) {
      case "ok":
        // Verde (usamos classes customizadas, pois o shadcn não tem 'success' por padrão)
        return "bg-green-100 text-green-800 border-green-200 hover:bg-green-100"
      case "atencao":
        // Amarelo (usamos classes customizadas)
        return "bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100"
      case "urgente":
        // Vermelho (podemos usar a variante 'destructive')
        return "bg-red-100 text-red-800 border-red-200 hover:bg-red-100"
      default:
        return "secondary"
    }
  }

  // Função para formatar o texto do status
  const formatStatusText = (status: PlantStatus) => {
    switch (status) {
      case "ok":
        return "Planta OK"
      case "atencao":
        return "Precisa de Atenção"
      case "urgente":
        return "Urgente"
      default:
        return status
    }
  }


  return (
    <div className="w-full space-y-8">
      {/* 1. Barra de Pesquisa (movida para a página principal) */}
      {/* <PlantSearch /> */}
      <PlantSearch />
      {/* 2. Tabela de Dados */}
      <div className="rounded-lg border shadow-md">
        <Table>
          <TableCaption>Lista de plantas monitoradas na horta.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Nome da Planta</TableHead>
              <TableHead>Localização</TableHead>
              <TableHead>Visitas na Página</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {MOCK_DATA.map((planta) => (
              <TableRow key={planta.id}>
                <TableCell className="font-medium">{planta.nome}</TableCell>
                <TableCell>{planta.localizacao}</TableCell>
                <TableCell>{planta.visitas}</TableCell>
                <TableCell className="text-right">
                  <Badge 
                    variant="outline" // Usamos outline para a borda
                    // 3. Aplicamos as classes de cor dinamicamente
                    className={cn("uppercase", getBadgeVariant(planta.status))}
                  >
                    {formatStatusText(planta.status)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TableDashboard