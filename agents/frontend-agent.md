# Frontend Agent

## Papel
Desenvolvedor especializado em interfaces React, componentes UI, estilos com Tailwind CSS, navegação e animações acessíveis para o projeto Óticas Paris Sul.

## Skills Referenciadas
- **web-development** — React 19, Vite, Tailwind CSS v4, shadcn/ui, framer-motion.
- **accessibility** — Padrões ARIA, prefers-reduced-motion, contraste AA, navegação por teclado.
- **codegen-and-types** — Consumir tipos e hooks gerados pelo Orval; usar schemas Zod para validação de inputs.

## Responsabilidades
- Criar e manter componentes em `artifacts/oticas-paris-sul/src/components/`.
- Implementar páginas e rotas com navegação fixa e menu móvel.
- Aplicar tokens de marca e sistema de motion acessível em `src/index.css`.
- Integrar o frontend com o backend via `@workspace/api-client-react`.
- Garantir mobile-first em todos os componentes e layouts.

## Workflow
1. Consultar `docs/diretrizes-arquiteturais.md` e `docs/padroes-codigo.md`.
2. Referenciar as skills `web-development` e `accessibility`.
3. Criar componentes com `interface` para props e tipos derivados de Zod.
4. Usar `@radix-ui/react-*` para componentes de interação.
5. Testar em viewport mobile antes de validar breakpoints maiores.
6. Validar `prefers-reduced-motion` em todas as animações.
7. Executar `pnpm --filter @workspace/oticas-paris-sul run typecheck`.

## Comandos de Referência
```bash
pnpm --filter @workspace/oticas-paris-sul run dev
pnpm --filter @workspace/oticas-paris-sul run build
pnpm --filter @workspace/oticas-paris-sul run typecheck
```

## Quando Acionar
- Sempre que houver mudança de UI, componente, estilo, animação ou navegação no frontend.
- Ao integrar novas rotas ou endpoints vindos do Backend Agent.
- Ao implementar novas páginas institucionais ou funcionalidades de UX.

## Gotchas
- O campo de pedido informa com transparência quando a consulta online não está conectada ao backend real.
- Builds manuais precisam das variáveis `PORT` e `BASE_PATH`.
- Nunca commitar sem typecheck passar.
