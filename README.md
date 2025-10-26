# Livraê

Plataforma de delivery de livros — aluguel e venda. Este repositório contém a interface front-end construída com React + Vite. A aplicação permite navegar pelo catálogo, buscar livros, visualizar detalhes e (futuramente) realizar aluguel/compra.

## Sobre

O Livraê é uma plataforma de aluguel de livros físicos, que conecta leitores e estudantes. Além disso, tem o objetivo de promove o acesso acessível ao conhecimento e incentiva a circulação de livros, evitando que fiquem parados nas estantes.

## Tecnologias

- React 19
- Vite
- react-router-dom
- react-slick + slick-carousel (carrossel)
- ESLint

## Estrutura do projeto (atualizada)

Raiz (arquivos importantes):

- `package.json` - dependências e scripts
- `vite.config.js` - configuração do Vite
- `eslint.config.js` - regras do ESLint
- `index.html` - entrada HTML
- `public/` - assets públicos

`src/` (principais arquivos e pastas):

- `main.jsx` - ponto de bootstrap do React
- `App.jsx` - componente App principal / rotas
- `assets/` - imagens, ícones e outros recursos estáticos (ex.: `image/Banner`, `image/Books`)
- `components/` - componentes React reorganizados:
  - `components/layout/` — componentes de layout (ex.: `header.jsx`, `footer.jsx`)
  - `components/catalog/` — componentes do catálogo (ex.: `buscar.jsx`, `card.jsx`)
- `pages/` - páginas da aplicação (ex.: `catalogo.jsx`, `livro.jsx`, `livro-buscado.jsx`)
- `css/` - arquivos CSS (ex.: `App.css`, `header.css`, `index.css`)
- `hooks/` - hooks customizados (ex.: `useMenu.js`)

Observação: o projeto foi reorganizado para separar claramente componentes de layout, componentes do catálogo e páginas.

## Como rodar localmente

Pré-requisitos:

- Node.js (recomenda-se v16+)
- npm (ou pnpm/yarn se preferir)

Comandos principais (na raiz do projeto):

```powershell
npm install
npm run dev     # inicia o servidor de desenvolvimento (Vite)
npm run build   # gera a versão de produção
npm run preview # preview da build local
npm run lint    # roda o ESLint
```

Abra `http://localhost:5173` (ou a porta mostrada pelo Vite) para ver a aplicação em modo desenvolvimento.
