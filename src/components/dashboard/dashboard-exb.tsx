import PlantOverview from "./chart";
import FooterDashboard from "./footer";
import HeaderDashboard from "./header";
import TableDashboard from "./table";


export default function DashboardOverView() {
  return (
    <div className="container mx-auto px-6 py-6 md:px-20 lg:py-5">
      <HeaderDashboard />
      {/* Layout responsivo: 
        - Telas pequenas: Carrossel em cima, Info embaixo.
        - Telas grandes (lg): Lado a lado.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7 py-5">
        
        {/* Coluna 1: Carrossel de Fotos */}
        <div className="flex items-center justify-center h-auto">
          <PlantOverview />
        </div>
        
        {/* Coluna 2: Informações da Planta */}
        <div className="flex items-center justify-center h-auto">
          <TableDashboard />
        </div>
        
      </div>
    </div>
  )
}