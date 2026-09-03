# Óticas Paris Sul — Documentação do Projeto

## Visão Geral

Site institucional mobile-first da **Óticas Paris Sul**, com serviços ópticos, marcas, acompanhamento de pedido, contatos das lojas e motion acessível.

## Stack

| Camada | Tecnologia |
|---|---|
| **Gerenciador de Pacotes** | pnpm workspaces |
| **Runtime** | Node.js 24 |
| **Linguagem** | TypeScript 5.9 |
| **Frontend** | React 19, Vite 7, Tailwind CSS v4, shadcn/ui (new-york), framer-motion |
| **Backend** | Express 5 |
| **Banco de Dados** | PostgreSQL + Drizzle ORM |
| **Validação** | Zod (v4), drizzle-zod |
| **Codegen de API** | Orval (a partir do OpenAPI spec) |
| **Build** | esbuild (CJS bundle) |
| **Logs** | pino |

## Tipo de Projeto

**WEB** — Site institucional mobile-first com arquitetura de micro-frontend via pnpm workspaces.

## Estrutura de Diretórios

```
oticasparissul/
├── artifacts/                  # Aplicações empacotadas
│   ├── oticas-paris-sul/       # Frontend institucional (React + Vite)
│   ├── api-server/             # Backend Express
│   ├── api-spec/               # Especificação OpenAPI + codegen (Orval)
│   └── mockup-sandbox/         # Ambiente de sandbox para protótipos
├── lib/                        # Bibliotecas compartilhadas
│   ├── api-client-react/       # Cliente React para consumir a API
│   ├── api-zod/                # Schemas Zod compartilhados
│   └── db/                     # Schema e migrations do Drizzle
├── docs/                       # Documentação do projeto
├── skills/                     # Skills e regras de negócio
├── agents/                     # Agentes especializados
├── plans/                      # Planejamentos de tarefa
├── scripts/                    # Scripts utilitários
└── agents.md                   # Arquivo mestre de entrada da IA
```

## Padrões Arquiteturais

### Micro-Frontend via Workspaces
O projeto é dividido em pacotes independentes dentro de um workspace pnpm. Cada pacote tem seu próprio `package.json`, `tsconfig`, e ciclo de vida de build, mas compartilha dependências via catálogo centralizado em `pnpm-workspace.yaml`.

### Separação de Responsabilidades
- **`artifacts/`**: Aplicações finais prontas para deploy.
- **`lib/`**: Bibliotecas compartilhadas (schemas, clientes, utilitários de DB) consumidas pelos artifacts.
- **`scripts/`**: Scripts utilitários de desenvolvimento e manutenção.

### Mobile-First e Acessibilidade
- Layout responsivo com CSS mobile-first e Tailwind CSS v4.
- Arte abstrata de lente em CSS para manter a página leve.
- Animações progressivas com suporte obrigatório a `prefers-reduced-motion`.
- Navegação fixa com menu móvel e microinterações acessíveis (padrão AA).

## Comandos Essenciais

```bash
pnpm --filter @workspace/api-server run dev   # Roda o API server (porta 5000)
pnpm run typecheck                             # Typecheck completo
pnpm run build                                 # Build completo
pnpm --filter @workspace/api-spec run codegen  # Regenera hooks e schemas
pnpm --filter @workspace/db run push           # Push de schema (dev)
```

## Regras de Naming

- Pacotes seguem o padrão `@workspace/<nome>`.
- Arquivos de configuração usam kebab-case (ex: `tsconfig.json`, `drizzle.config.ts`).
- Componentes React seguem PascalCase.
- Utilitários e hooks seguem camelCase.

## Variáveis de Ambiente

- `DATABASE_URL` — String de conexão PostgreSQL (obrigatória).
- `PORT` — Porta da aplicação (fornecida pelo workflow).
- `BASE_PATH` — Caminho base para builds (fornecida pelo workflow).

## Gotchas

- O workflow da aplicação fornece `PORT` e `BASE_PATH`; builds manuais precisam desses valores.
- Mudanças no contrato de pedidos exigem backend real antes de remover a mensagem transparente de consulta local.
- O campo de pedido informa com transparência quando a consulta online não está conectada a um sistema real.
