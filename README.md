# 🌱 PANC-Dashboard — Frontend

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff)
![Shadcn/UI](https://img.shields.io/badge/Shadcn%2FUI-000000?logo=storybook&logoColor=white)
![React](https://img.shields.io/badge/React-149ECA?logo=react&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38bdf8?logo=tailwindcss&logoColor=white)

Este é o repositório do **frontend do PANC-Dashboard**, uma plataforma completa para **catálogo, monitoramento e gerenciamento de Plantas Alimentícias Não Convencionais (PANC)**.

O projeto foi desenvolvido com **Next.js + Shadcn/UI**, oferecendo uma experiência fluida tanto para o público geral quanto para administradores e pesquisadores.

---

## 🚀 Tecnologias Utilizadas

- **Next.js** (App Router)
- **Shadcn/UI** + **TailwindCSS**
- **React Hook Form** + **Zod**
- **Recharts**
- **Framer Motion**
- **Sonner** (toasts)
- **Lucide React** + **Tabler Icons**

---

## 🧭 Estrutura Geral do Sistema

O sistema é dividido em duas áreas principais:

### 🏛️ **Área Pública**
Acessível a todos os visitantes, com layout público (Nav + Footer).

#### **/home — Página Inicial**
- Objetivos do projeto  
- Equipe responsável  
- Carrossel com receitas  

#### **/catalog — Catálogo**
- Lista completa de PANC cadastradas  
- Busca dinâmica  
- Visualização detalhada das plantas  

#### **/recipes — Receitas**
- Página dedicada às receitas  
- Atualmente exibindo mensagem: *"Em Construção"*  

---

### 🔒 **Área Administrativa (Dashboard)**
Rotas internas protegidas, com layout especial (Sidebar administrativa).

#### **/** — Login
- Validação de e-mail e senha com Zod  
- Exibição de erros via toasts  

#### **/dashboard — Painel Principal**
- **Controle IoT**: ligar irrigação, reiniciar coleta, exportar CSV  
- **Gráficos em tempo real** (Recharts)  
- **Tabela de Status** com respectivas cores de saúde  

#### **/dashboard/register — Cadastro de Plantas**
- Formulário de cadastro via React Hook Form  
- Tabela com registros existentes  

---

## ✨ Principais Componentes

- **PlantSearch** — Combobox com atalho `⌘K`  
- **PlantView** — Carrossel de imagens  
- **PlantInfo** — Accordion com informações da planta  
- **MainLayout** — Oculta nav/footer automaticamente no dashboard  
- **PageTransition** — Animações suaves entre páginas  
- **Toast Feedback** — Sonner para ações como login, IoT e cadastros  

---

## 🛠️ Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/agnesmva/panc-frontend
cd panc-frontend - navegue até a pasta
```

### 2. Instale as dependências do projeto
```bash
npm install
```
### 3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```


### Estrutura Principal do Projeto
```bash
panc-frontend/
 ├─ app/
 │   ├─ home/
 │   ├─ catalog/
 │   ├─ recipes/
 │   └─ dashboard/
 │       ├─ register/
 │       └─ ...
 ├─ components/
 │   ├─ ui/
 │   ├─ plant/
 │   └─ dashboard/
 ├─ lib/
 ├─ public/
 └─ README.md
```
