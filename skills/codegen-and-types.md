# Codegen and Types — Orval + Zod

## Quando Aplicar
Quando gerar tipos, clientes API ou schemas a partir do contrato OpenAPI. Atualizar o contrato de API e propagar mudanças para frontend e backend.

## Stack
- **Orval** — gerador de clientes OpenAPI com hooks React e Zod schemas.
- **Zod (v4)** — biblioteca de validação com inferência de tipos TypeScript.
- **@workspace/api-spec** — pacote dedicado ao codegen.

## Regras Obrigatórias
1. O OpenAPI spec é a fonte única de verdade para o contrato da API.
2. Após qualquer mudança no spec, rodar `pnpm --filter @workspace/api-spec run codegen`.
3. Nunca editar arquivos gerados pelo Orval manualmente.
4. Schemas Zod sempre derivados via `z.infer<typeof schema>`.
5. Usar os tipos gerados em todo o workspace para manter consistência.

## Ferramentas
- `pnpm --filter @workspace/api-spec run codegen` — regenera hooks e schemas.
- `pnpm run typecheck` — validar que todos os tipos estão sincronizados.

## Padrões
- Espec OpenAPI em `artifacts/api-spec/`.
- Saída do Orval em `lib/api-client-react/` (hooks React) e `lib/api-zod/` (schemas).
- Configuração do Orval em `artifacts/api-spec/orval.config.ts`.

## Gotchas
- Mudanças no contrato de pedidos exigem backend real antes de remover a mensagem transparente de consulta local.
- Após codegen, sempre rodar typecheck no workspace inteiro.
