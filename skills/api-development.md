# API Development — Backend

## Quando Aplicar
Quando trabalhar com o servidor Express em `artifacts/api-server/`: rotas, middlewares, lógica de negócio e integração com o frontend.

## Stack
- **Express 5** — servidor HTTP com suporte nativo a async handlers.
- **pino** — logging estruturado.
- **pino-http** — middleware de logging de requisições.
- **cors** — configuração de CORS.
- **cookie-parser** — leitura de cookies.

## Regras Obrigatórias
1. Usar async handlers nativos do Express 5 — sem `.catch()` manual.
2. Validar todos os inputs com Zod schemas antes de processar.
3. Usar o middleware de erro centralizado para todas as respostas de erro.
4. Status HTTP semântico em todas as respostas.
5. Logging via pino — nunca `console.log` em produção.
6. Tipar `Request` e `Response` com os tipos gerados pelo Orval.
7. Rotas organizadas por recurso em `src/routes/`.

## Ferramentas
- `pnpm --filter @workspace/api-server run dev` — iniciar API server (porta 5000).
- `pnpm --filter @workspace/api-server run build` — build do servidor.
- `pnpm --filter @workspace/api-server run typecheck` — typecheck.

## Padrões
- Middlewares em `src/middleware/`.
- Rotas em `src/routes/`.
- Schemas de validação em `src/schemas/` ou importados de `@workspace/api-zod`.
- Error handler em `src/error-handler.ts`.
- Configuração em `src/config.ts`.

## Gotchas
- Express 5 tem breaking changes em relação ao Express 4 — ler a documentação antes de criar middlewares customizados.
- O `PORT` e `BASE_PATH` são fornecidos pelo workflow; builds manuais precisam desses valores.
- Mudanças no contrato de pedidos exigem backend real antes de remover a mensagem transparente de consulta local.
