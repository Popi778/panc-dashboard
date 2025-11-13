"use client"

import React from "react"
import { MoreHorizontal } from "lucide-react"
import { useRouter } from "next/navigation"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



export function NavUser() {

  const router = useRouter();
  const handleLogout = () =>{
    router.push("/login")
  }
  const handleConfig = () =>{
    window.alert("Página ainda não criada.")
  }
  return (
    <div className="border-t border-gray-700 p-4"> {/* Borda sutil acima */}
      <div className="flex items-center justify-between">
        
        {/* Avatar e Informações do Usuário */}
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            {/* Atualize com a URL da imagem do usuário */}
            <AvatarImage src="https://placehold.co/40x40/black/white?text=A" alt="@shadcn" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-sm">
            <span className="font-medium text-gray-100"></span>
            <span className="text-gray-400">agnes@example.com</span>
          </div>
        </div>

        {/* Menu Dropdown "..." */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem onClick={handleConfig}>Configurações</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Sair</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}