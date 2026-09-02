# Óticas Paris Sul

Site institucional mobile-first da Óticas Paris Sul, com serviços ópticos, marcas, acompanhamento de pedido, contatos das lojas e motion acessível.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/oticas-paris-sul/src/App.tsx` — página institucional e interações.
- `artifacts/oticas-paris-sul/src/index.css` — tokens de marca, layout responsivo e sistema de motion.
- `artifacts/oticas-paris-sul/index.html` — metadados SEO, Open Graph e JSON-LD de negócio local.

## Architecture decisions

- A página é frontend-only no primeiro build: o campo de pedido informa com transparência quando a consulta online não está conectada a um sistema real.
- O layout usa CSS mobile-first e uma arte abstrata de lente em CSS para manter a página leve e evitar dependência de mídia externa.
- As animações são progressivas e desligadas para quem prefere movimento reduzido.

## Product

- Apresenta o posicionamento, serviços e marcas da Óticas Paris Sul.
- Direciona visitantes para pedido, lojas, telefone, e-mail, mapas, WhatsApp e Instagram.
- Oferece navegação fixa com menu móvel e microinterações acessíveis.

## User preferences

- A experiência deve ser pensada mobile-first.
- O usuário pediu efeitos de motion com acessibilidade AA e suporte obrigatório a reduced motion.

## Gotchas

- O workflow da aplicação fornece `PORT` e `BASE_PATH`; builds manuais precisam desses valores.
- Mudanças no contrato de pedidos exigem backend real antes de remover a mensagem transparente de consulta local.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
