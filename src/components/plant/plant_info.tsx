"use client"; // Acordeões são interativos, então precisam ser Client Components

import React from "react";

// 1. Importa os componentes do Card
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// 2. Importa os componentes do Accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// --- DADOS DE EXEMPLO ---
// Em um app real, você receberia isso via props
const MOCK_PLANT_INFO = {
  nomePopular: "Ora-pro-nóbis",
  nomeCientifico: "Pereskia aculeata",
  descricao: "A Ora-pro-nóbis é uma cactácea trepadeira folhosa, nativa do continente americano. É conhecida por seu alto valor nutricional, sendo rica em proteínas, fibras, ferro e vitaminas A, B e C. É uma PANC (Planta Alimentícia Não Convencional) muito popular em algumas regiões do Brasil, especialmente em Minas Gerais.",
  receitas: [
    {
      nome: "Omelete de Ora-pro-nóbis",
      url: "#", // Substitua pelo link real
    },
    {
      nome: "Pão de Queijo com Ora-pro-nóbis",
      url: "#", // Substitua pelo link real
    },
    {
      nome: "Refogado de Carne com Ora-pro-nóbis",
      url: "#", // Substitua pelo link real
    },
  ],
};
// --- FIM DOS DADOS DE EXEMPLO ---

/**
 * PlantInfo
 * Exibe as informações de uma planta usando Card e Accordion.
 */
function PlantInfo() {
  return (
    // Definimos uma largura máxima para o componente
    <div className="w-full max-w-lg mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>{MOCK_PLANT_INFO.nomePopular}</CardTitle>
          <CardDescription>
            Nome Científico: <i>{MOCK_PLANT_INFO.nomeCientifico}</i>
          </CardDescription>
        </CardHeader>
        
        {/* O Accordion fica dentro do CardContent */}
        <CardContent>
           <p className="text-base leading-relaxed">
                  {MOCK_PLANT_INFO.descricao}
            </p>
          <Accordion type="single" collapsible className="w-full">
            {/* Item 1: Receitas */}
            <AccordionItem value="item-1">
              <AccordionTrigger>Receitas Sugeridas</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-5 space-y-2">
                  {MOCK_PLANT_INFO.receitas.map((receita, index) => (
                    <li key={index}>
                      <a 
                        href={receita.url}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        {receita.nome}
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            {/* Você pode adicionar mais itens aqui, ex: "Cuidados", "Valor Nutricional" */}

          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

export default PlantInfo;