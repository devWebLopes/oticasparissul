# Padrões de Código

## TypeScript

### Configuração
- `tsconfig.base.json` é compartilhado por todos os pacotes.
- Cada pacote extende o config base com `extends: "../../tsconfig.base.json"`.
- Strict mode habilitado.
- Target: ES2022, Module: ESNext (Node.js 24).

### Regras de Tipos
- Todo parâmetro de função e retorno deve ter tipagem explícita.
- Evitar `any` — usar `unknown` quando o tipo for dinâmico.
- Usar `zod` para validação de dados externos (API, inputs do usuário).
- Types derivados de Zod schemas via `z.infer<typeof schema>`.

### Estrutura de Módulos
- Um arquivo por responsabilidade.
- `index.ts` exporta a API pública do módulo.
- Internals são exportados apenas se necessários para outros pacotes do workspace.

## React (Frontend)

### Componentes
- Componentes funcionais com hooks.
- Props tipadas com interface.
- Composição sobre herança.
- Separar componentes apresentacionais de lógica.

### Estilos
- Tailwind CSS v4 com utilitários.
- Variáveis CSS para tokens de marca.
- `clsx` ou `tailwind-merge` para composição condicional de classes.
- shadcn/ui para componentes prontos.

### Estado
- React Query (`@tanstack/react-query`) para data fetching e cache.
- `react-hook-form` + Zod para formulários.
- Estado local apenas para UI state (não para dados da aplicação).

### Acessibilidade
- `@radix-ui/react-*` para componentes acessíveis (dialogs, dropdowns, tabs).
- `aria-*` attributes em elementos customizados.
- `prefers-reduced-motion` aplicado em todas as animações via CSS.

## Backend (Express 5)

### Roteamento
- Rotas organizadas por recurso em `src/routes/`.
- Middlewares de validação aplicados antes dos handlers.
- Cada rota tem tipagem de request/response via Zod schemas.

### Middlewares
- `pino-http` para logging de requisições.
- `cors` configurado para origens permitidas.
- `cookie-parser` para leitura de cookies.

### Erros
- Error handler centralizado.
- Status HTTP semântico.
- Respostas de erro com formato consistente.

## Banco de Dados

### Drizzle ORM
- Schema definido em `lib/db/src/schema/`.
- Cada tabela em um arquivo separado.
- Migrations via `drizzle-kit`.
- Relações definidas com `relations()`.

### Validação
- `drizzle-zod` para gerar schemas de validação a partir do schema do Drizzle.
- Validação no boundary da API (entrada) e no DB (consistência).

## Git e Versionamento

- Commits em português quando possível, mensagens claras e descritivas.
- Formato: `<tipo>: <descrição>` (ex: `feat: adicionar login`, `fix: corrigir header`).
- Tipos aceitos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
- `.gitignore` configurado para ignorar `node_modules/`, `dist/`, `.env*`.

## Code Quality

- Prettier para formatação.
- TypeScript strict mode.
- `pnpm run typecheck` deve passar em todos os pacotes antes de qualquer merge.
- Linting via configuração do workspace.
