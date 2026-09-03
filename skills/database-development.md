# Database Development — PostgreSQL + Drizzle ORM

## Quando Aplicar
Quando trabalhar com schema, migrations, queries ou qualquer operação relacionada ao banco de dados em `lib/db/`.

## Stack
- **PostgreSQL** — banco de dados relacional.
- **Drizzle ORM** — ORM type-safe com schema-first approach.
- **drizzle-kit** — CLI para migrations e introspecção.
- **drizzle-zod** — geração de schemas Zod a partir do schema Drizzle.
- **pg** — driver nativo PostgreSQL.

## Regras Obrigatórias
1. Definir o schema primeiro (schema-first); nunca usar migrations ad-hoc para mudanças estruturais.
2. Usar `drizzle-zod` para gerar schemas de validação a partir do schema Drizzle.
3. Todas as relações devem ser definidas com `relations()`.
4. Usar `drizzle-kit push` para dev e `drizzle-kit migrate` para produção.
5. Nunca alterar migrations já aplicadas em produção — sempre criar novas.
6. Tipar todas as queries com os tipos gerados pelo Drizzle.

## Ferramentas
- `pnpm --filter @workspace/db run push` — push de schema (dev).
- `pnpm --filter @workspace/db run push-force` — push forçado (cuidado).
- `pnpm run typecheck` — validar types em todo o workspace.

## Padrões
- Schema em `lib/db/src/schema/` — cada tabela em um arquivo.
- Migrations geradas por `drizzle-kit`.
- Exports via `lib/db/src/index.ts` e `lib/db/src/schema/index.ts`.
- Configuração em `lib/db/drizzle.config.ts`.

## Gotchas
- `DATABASE_URL` é obrigatória como variável de ambiente.
- O workspace catalog do pnpm controla as versões do drizzle-orm e drizzle-kit.
- Changes no schema requerem regeneração dos schemas Zod e do Orval spec.
