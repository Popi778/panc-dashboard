"use client"; // Obrigatório para componentes que usam hooks e interatividade

import React, { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

// Array único para os itens de navegação (princípio DRY)
const navItems = [
  { path: '/home', label: 'Início' },
  { path: '/recipes', label: 'Receitas' },
  { path: '/catalog', label: 'Catálogo' },
  { path: '/login', label: 'Entrar' },
];

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Hook do Next.js para ler o caminho atual (substitui useLocation)
  const pathname = usePathname(); 
  
  // Hook do Next.js para navegação (substitui useNavigate)
  const router = useRouter(); 

  // Função para verificar se o link está ativo (agora usa pathname)
  const isActive = (path: string) => pathname === path;

  // Função para lidar com a navegação mobile (fecha o menu)
  const handleMobileLinkClick = (path: string) => {
    router.push(path); // Navega para a página
    setIsMobileMenuOpen(false); // Fecha o menu
  };

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Container principal - logo e botão mobile */}
        <div className="flex justify-between items-center h-16">
          
          {/* Logo agora usa <Link> do Next.js */}
          <div className="flex-shrink-0">
            <Link href="/home">
              {/* O <img> agora está dentro de um <Link> */}
              <img 
                className="h-20 w-auto cursor-pointer rounded-full" 
                src="https://res.cloudinary.com/dwkzysoyd/image/upload/v1749610754/Branco_kec5wp.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Menu Desktop (agora usa <Link>) */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path} // <Link> usa a prop 'href'
                className={`${isActive(item.path) 
                  ? 'text-[#b6ca59] border-b-2 border-[#b6ca59]' 
                  : 'text-primary-black hover:text-[#b6ca59]'} 
                  font-medium pb-1 transition duration-300`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Botão Mobile alinhado à direita (lógica mantida) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-black hover:text-[#003C43] p-2 focus:outline-none"
              aria-expanded={isMobileMenuOpen}
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile com transição suave (lógica de UI mantida) */}
      {/* A sua lógica de -translate-x-full é ótima e foi mantida */}
      <div className={`md:hidden fixed inset-x-0 top-0 z-40 overflow-y-auto transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0 bg-[#1C9997]/95' : '-translate-x-full bg-transparent pointer-events-none'}`}>
        <div className="min-h-screen pt-20 px-4">
          {/* Adiciona um botão de fechar dentro do menu mobile para melhor UX */}
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-primary-black p-2"
            aria-label="Fechar menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="space-y-6 pt-8">
            {navItems.map((item) => (
              // Links do menu mobile agora usam <Link>
              // mas também usam onClick para fechar o menu
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-left text-primary-black hover:bg-[#003C43]/30 px-6 py-4 rounded-lg text-lg transition ${isActive(item.path) ? 'bg-[#003C43]/30 font-bold' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;