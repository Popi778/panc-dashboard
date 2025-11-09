import PlantView from '@/components/plant/plant-view'
import PlantInfo from '@/components/plant/plant_info'

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      
      {/* Layout responsivo: 
        - Telas pequenas: Carrossel em cima, Info embaixo.
        - Telas grandes (lg): Lado a lado.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        
        {/* Coluna 1: Carrossel de Fotos */}
        <div className="flex items-center justify-center h-auto">
          <PlantView />
        </div>
        
        {/* Coluna 2: Informações da Planta */}
        <div className="flex items-center justify-center h-auto">
          <PlantInfo />
        </div>
        
      </div>
    </div>
  )
}