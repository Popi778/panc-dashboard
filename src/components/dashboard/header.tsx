"use client" // Componente com botões interativos (onClick)

import React, { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Power, RefreshCw, Download, Loader2 } from "lucide-react" 
import { toast } from "sonner"

function HeaderDashboard() {

  const [isBombaLoading, setIsBombaLoading] = useState(false)
  const [isColetaLoading, setIsColetaLoading] = useState(false)
  const [isCsvLoading, setIsCsvLoading] = useState(false)

  
  const handleLigarBomba = async () => {
    console.log("Enviando comando: LIGAR BOMBA");
    setIsBombaLoading(true);
    const apiUrl = 'http://localhost:5000/ligar-bomba';
    const dados = { acao: 'L' };

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados) 
      });

      if (response.ok) {
        // 3. API ATUALIZADA: Mais simples!
        toast.success("Sucesso! ✅", {
          description: "Comando para ligar a bomba foi enviado.",
        })
      } else {
        // 4. API ATUALIZADA: toast.error() para erros
        toast.error("Erro no Servidor", {
          description: "Falha ao enviar comando. Tente novamente.",
        })
      }
    } catch (error) {
      toast.error("Erro de Rede!", {
        description: "Não foi possível conectar ao servidor.",
      })
    } finally {
      setIsBombaLoading(false);
    }
  }

  const handleReiniciarColeta = async () => {
    console.log("Enviando comando: REINICIAR COLETA")
    setIsColetaLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsColetaLoading(false);
    
    toast.info("Coleta Reiniciada 🔄", {
      description: "Os sensores estão fazendo uma nova leitura.",
    })
  }

  const handleExportarCSV = async () => {
    console.log("Iniciando download do CSV...")
    setIsCsvLoading(true);
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsCsvLoading(false);
    
    toast("Download Iniciado 📄", {
      description: "Seu arquivo .csv está sendo preparado.",
    })
  }

  // --- O JSX (sem alterações) ---
  return (
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
          <Button 
            size="sm" 
            onClick={handleLigarBomba} 
            disabled={isBombaLoading} 
          >
            {isBombaLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Ativando...
              </>
            ) : (
              "Ativar Bomba"
            )}
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
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleReiniciarColeta} 
            disabled={isColetaLoading}
          >
            {isColetaLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Reiniciando...
              </>
            ) : (
              "Reiniciar"
            )}
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
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleExportarCSV} 
            disabled={isCsvLoading}
          >
            {isCsvLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Baixando...
              </>
            ) : (
              "Download"
            )}
          </Button>
        </CardFooter>
      </Card>

    </div>
  )
}

export default HeaderDashboard