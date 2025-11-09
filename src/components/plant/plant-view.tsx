"use client"; // Carrosséis são interativos, então precisam ser Client Components

import * as React from "react";

// Importa os componentes do shadcn que acabamos de adicionar
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Usaremos o Card para dar um enquadramento bonito para as imagens
import { Card, CardContent } from "@/components/ui/card";

// --- DADOS DE EXEMPLO ---
// Em um aplicativo real, você receberia isso via props ou de uma API
const MOCK_PLANT_IMAGES = [
  {
    src: "https://placehold.co/600x600/22c55e/ffffff?text=Planta+Foto+1",
    alt: "Foto 1 da planta: vista frontal",
  },
  {
    src: "https://placehold.co/600x600/a3e635/000000?text=Planta+Foto+2",
    alt: "Foto 2 da planta: detalhe da folha",
  },
  {
    src: "https://placehold.co/600x600/84cc16/ffffff?text=Planta+Foto+3",
    alt: "Foto 3 da planta: florescimento",
  },
  {
    src: "https://placehold.co/600x600/16a34a/ffffff?text=Planta+Foto+4",
    alt: "Foto 4 da planta: com vaso",
  },
];
// --- FIM DOS DADOS DE EXEMPLO ---


/**
 * PlantView
 * Um componente de carrossel para exibir uma galeria de fotos da planta.
 */
function PlantView() {
  return (
    // Definimos uma largura máxima para o carrossel não ficar gigante em telas grandes
    <div className="w-full max-w-lg mx-auto py-8">
      
      <Carousel 
        className="w-full"
        // 'opts' são opções do Embla. 'loop: true' faz o carrossel ser infinito.
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {/* Fazemos um loop nas nossas imagens de exemplo */}
          {MOCK_PLANT_IMAGES.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                {/* Usamos o Card para enquadrar a imagem */}
                <Card>
                  {/* - 'aspect-square' força a imagem a ser um quadrado perfeito.
                    - 'p-0' remove o padding padrão do CardContent.
                    - 'overflow-hidden rounded-lg' garante que a imagem não vaze
                      das bordas arredondadas do Card.
                  */}
                  <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Botões de Navegação (Anterior / Próximo) */}
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      
      </Carousel>
    </div>
  );
}

export default PlantView;