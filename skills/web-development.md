# Web Development — Frontend

## Quando Aplicar
Quando trabalhar com a aplicação frontend em `artifacts/oticas-paris-sul/`: páginas, componentes, estilos, interações e navegação.

## Stack
- **React 19** com TypeScript
- **Vite 7** como bundler
- **Tailwind CSS v4** com `@tailwindcss/vite` plugin
- **shadcn/ui** (estilo new-york)
- **framer-motion** para animações
- **react-query** (@tanstack/react-query) para data fetching
- **react-hook-form** + Zod para formulários

## Regras Obrigatórias
1. Todos os componentes devem ser mobile-first.
2. Usar `prefers-reduced-motion` para desligar/desabilitar animações.
3. Componentes devem ser tipados com `interface`, nunca `type` para props.
4. Usar aliases (`@/components`, `@/lib/utils`, `@/hooks`) para imports.
5. Estado de dados deve ser gerenciado via React Query, não use useState para dados remotos.
6. Cada componente em um arquivo; exports nomeados via `index.ts`.
7. Respeitar os tokens de marca definidos em `src/index.css`.

## Ferramentas
- `vite` — dev server e build.
- `pnpm --filter @workspace/oticas-paris-sul run dev` — iniciar frontend local.
- `pnpm --filter @workspace/oticas-paris-sul run build` — build de produção.
- `pnpm --filter @workspace/oticas-paris-sul run typecheck` — typecheck.

## Padrões
- Componentes em `src/components/`.
- Hooks customizados em `src/hooks/`.
- Utilitários em `src/lib/utils.ts`.
- Estilos globais e tokens em `src/index.css`.
- Página principal em `src/App.tsx`.

## Gotchas
- O build usa esbuild para CJS bundle.
- O frontend é independente do backend no primeiro build — o campo de pedido mostra mensagem transparente de consulta local quando o backend real não está conectado.
- Navegação fixa com menu móvel — testar em viewport pequeno antes de validar breakpoints maiores.
