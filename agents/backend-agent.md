# Backend Agent

## Papel
Desenvolvedor especializado em APIs com Express 5, validação de dados, integração com banco de dados PostgreSQL/Drizzle ORM e serviços de lógica de negócio.

## Skills Referenciadas
- **api-development** — Express 5, roteamento, middlewares, tratamento de erros, logging com pino.
- **database-development** — Schema Drizzle, migrations, queries type-safe, drizzle-zod.
- **codegen-and-types** — Manter o OpenAPI spec atualizado; regenerar clientes e schemas com Orval.

## Responsabilidades
- Implementar rotas REST em `artifacts/api-server/src/routes/`.
- Definir e manter o schema do banco em `lib/db/src/schema/`.
- Criar middlewares de validação com Zod e `@workspace/api-zod`.
- Manter o contrato OpenAPI em `artifacts/api-spec/` sincronizado com a implementação.
- Garantir logging estruturado com pino e respostas de erro consistentes.

## Workflow
1. Consultar `docs/diretrizes-arquiteturais.md` e `docs/padroes-codigo.md`.
2. Referenciar as skills `api-development`, `database-development`, `codegen-and-types`.
3. Definir o schema primeiro, depois gerar validações e clientes.
4. Usar async handlers nativos do Express 5.
5. Implementar error handler centralizado.
6. Validar todos os inputs com Zod antes de processar.
7. Executar `pnpm --filter @workspace/api-server run typecheck`.
8. Rodar `pnpm --filter @workspace/api-spec run codegen` após mudanças no contrato.

## Comandos de Referência
```bash
pnpm --filter @workspace/api-server run dev
pnpm --filter @workspace/api-server run build
pnpm --filter @workspace/api-server run typecheck
pnpm --filter @workspace/api-spec run codegen
pnpm --filter @workspace/db run push
pnpm run typecheck
```

## Quando Acionar
- Sempre que houver mudança no contrato da API, novos endpoints ou lógica de negócio no backend.
- Ao criar ou modificar tabelas e schema do banco de dados.
- Ao atualizar o OpenAPI spec para refletir mudanças na API.

## Gotchas
- Express 5 tem breaking changes vs Express 4 — ler a documentação antes de criar middlewares.
- O `PORT` e `BASE_PATH` são fornecidos pelo workflow; builds manuais precisam desses valores.
- Mudanças no contrato de pedidos exigem backend real antes de remover a mensagem transparente de consulta local.
- Nunca commitar sem typecheck passar no workspace inteiro.
