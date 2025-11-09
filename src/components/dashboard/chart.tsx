"use client" // Gráficos Recharts exigem ser Client Components

import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"
import { Droplet, Thermometer, CloudDrizzle, Sun } from "lucide-react"

// --- DADOS DE EXEMPLO (MOCK DATA) ---
// Em um app real, você receberia isso da sua API (ex: por planta)

// 1. Dados para os Cartões de Estatística
const MOCK_STATS_DATA = [
  {
    id: "humidity",
    title: "Umidade do solo",
    value: "58%",
    description: "+3% desde ontem",
    icon: <Droplet className="h-5 w-5 text-blue-500" />,
    emoji: "🌿",
  },
  {
    id: "temperature",
    title: "Temperatura",
    value: "24°C",
    description: "Ideal",
    icon: <Thermometer className="h-5 w-5 text-red-500" />,
    emoji: "🌡️",
  },
  {
    id: "irrigation",
    title: "Volume de irrigação",
    value: "1.2L",
    description: "Últimas 24h",
    icon: <CloudDrizzle className="h-5 w-5 text-cyan-500" />,
    emoji: "💧",
  },
  {
    id: "sunlight",
    title: "Luz solar (UV)",
    value: "Alto (7)",
    description: "Média de 6h/dia",
    icon: <Sun className="h-5 w-5 text-yellow-500" />,
    emoji: "☀️",
  },
]

// 2. Dados para o Gráfico de Linha (Histórico de Umidade)
const MOCK_CHART_DATA = [
  { time: "00:00", humidity: 55 },
  { time: "03:00", humidity: 56 },
  { time: "06:00", humidity: 58 },
  { time: "09:00", humidity: 62 },
  { time: "12:00", humidity: 60 },
  { time: "15:00", humidity: 57 },
  { time: "18:00", humidity: 55 },
  { time: "21:00", humidity: 54 },
  { time: "24:00", humidity: 55 },
]

// Configuração do Gráfico (para o Tooltip)
const chartConfig = {
  humidity: {
    label: "Umidade",
    color: "#2563eb", // azul
  },
} satisfies ChartConfig

/**
 * Componente de Cartão de Estatística (KPI Card)
 */
interface StatCardProps {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}

function StatCard({ title, value, description, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

/**
 * Componente Principal: PlantOverview
 * Mostra um panorama geral dos dados da planta.
 */
function PlantOverview() {
  return (
    <div className="space-y-6">
      
      {/* 1. Grid de Cartões de Estatística */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MOCK_STATS_DATA.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* 2. Gráfico de Histórico */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Umidade (Últimas 24h)</CardTitle>
          <CardDescription>
            Acompanhe a variação da umidade do solo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <LineChart
              data={MOCK_CHART_DATA}
              margin={{
                left: -20, // Ajusta o gráfico para mais perto da borda
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                fontSize={12}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                fontSize={12}
                tickFormatter={(value) => `${value}%`} // Adiciona o '%' no eixo Y
              />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />
              <Line
                dataKey="humidity"
                type="monotone"
                stroke="var(--color-humidity)" // Usa a cor do chartConfig
                strokeWidth={3}
                dot={true}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>

    </div>
  )
}

export default PlantOverview