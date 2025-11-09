"use client" // Componente com botões interativos (onClick)

import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Power, RefreshCw, Download } from "lucide-react" // Ícones para as ações

/**
 * HeaderDashboard
 * Exibe um conjunto de "Cards de Ação Rápida" para o dashboard.
 */
function HeaderDashboard() {

  // --- Funções de Exemplo ---
  // Em um app real, elas fariam chamadas de API
  
  const handleLigarBomba = () => {
    console.log("Enviando comando: LIGAR BOMBA")
    // Lógica de API para ligar a bomba aqui
    // Você pode usar um 'toast' do shadcn para notificação
    alert("Comando para ligar a bomba enviado! (Simulação)")
  }

  const handleReiniciarColeta = () => {
    console.log("Enviando comando: REINICIAR COLETA")
    // Lógica de API...
    alert("Sensores reiniciados! (Simulação)")
  }

  const handleExportarCSV = () => {
    console.log("Iniciando download do CSV...")
    // Lógica para buscar e baixar o CSV aqui
    alert("Download do CSV iniciado! (Simulação)")
  }
  // --- Fim das Funções de Exemplo ---


  return (
    // Um grid responsivo para os cartões de ação
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      
      {/* Card 1: Ligar Bomba */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Ligar Bomba</CardTitle>
          <Power className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Ativa a irrigação da planta selecionada.
          </p>
        </CardContent>
        <CardFooter>
          {/* Usamos a variante 'destructive' para ações perigosas, 
              mas aqui 'primary' (padrão) ou 'secondary' faz sentido.
              Vamos usar 'default' (verde) para 'ligar'.
          */}
          <Button size="sm" onClick={handleLigarBomba}>
            Ativar Bomba
          </Button>
        </CardFooter>
      </Card>

      {/* Card 2: Reiniciar Coleta */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Reiniciar Coleta</CardTitle>
          <RefreshCw className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Força uma nova leitura de todos os sensores.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="outline" onClick={handleReiniciarColeta}>
            Reiniciar
          </Button>
        </CardFooter>
      </Card>

      {/* Card 3: Exportar CSV */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Exportar Dados</CardTitle>
          <Download className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <p className="text-xs text-muted-foreground">
            Baixar o histórico completo em .csv.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="outline" onClick={handleExportarCSV}>
            Download
          </Button>
        </CardFooter>
      </Card>

    </div>
  )
}

export default HeaderDashboard