# Copilot Instructions for AI Agents

## Visão Geral do Projeto

- Este é um projeto Next.js (App Router) criado com `create-next-app`.
- O código principal está na pasta `app/`, seguindo a estrutura recomendada do Next.js 13+.
- O projeto utiliza o sistema de fontes do Next.js (`next/font`) para otimização automática de fontes (Geist).

## Fluxos de Desenvolvimento

- Para rodar localmente, use:
  - `pnpm dev` (preferencial)
  - Alternativamente: `npm run dev`, `yarn dev` ou `bun dev`
- O hot reload está habilitado: edite arquivos em `app/` e veja as mudanças em tempo real.
- O arquivo inicial da aplicação é `app/page.tsx`.

## Convenções e Padrões

- Utilize componentes React e arquivos `.tsx` dentro de `app/`.
- O arquivo `app/layout.tsx` define o layout global.
- Estilos globais ficam em `app/globals.css`.
- Siga a estrutura de rotas baseada em pastas do Next.js App Router.
- Prefira hooks e componentes funcionais.

## Integrações e Dependências

- O projeto depende do Next.js, React, e PostCSS.
- O deploy recomendado é via [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).
- Veja `package.json` para dependências e scripts customizados.

## Exemplos de Arquivos-Chave

- `app/page.tsx`: Página principal.
- `app/layout.tsx`: Layout global.
- `app/globals.css`: Estilos globais.
- `next.config.ts`: Configurações do Next.js.
- `postcss.config.mjs`: Configuração de CSS.

## Outras Observações

- Não há instruções ou padrões customizados além dos padrões Next.js/React.
- Consulte o `README.md` para instruções básicas e links úteis.

---

Se necessário, atualize este arquivo conforme padrões ou fluxos evoluírem.
