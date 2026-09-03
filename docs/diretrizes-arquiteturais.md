# Diretrizes Arquiteturais

## Princípios Fundamentais

### 1. Monorepo com pnpm Workspaces
O projeto utiliza pnpm workspaces para gerenciar múltiplos pacotes em um único repositório. Isso permite:
- Compartilhamento eficiente de dependências via hard links.
- Type-checking e builds cross-package.
- Versionamento sincronizado através do catálogo central.

### 2. Camadas de Abstração
A arquitetura segue o princípio de separação em camadas:

- **Camada de Apresentação** (`artifacts/oticas-paris-sul/`): React + Vite + Tailwind. Responsável pela UX e interações do usuário.
- **Camada de API** (`artifacts/api-server/`): Express 5. Processa requisições HTTP, orquestra regras de negócio.
- **Camada de Dados** (`lib/db/`): Drizzle ORM + PostgreSQL. Gerencia schema e migrations.
- **Camada de Validação** (`lib/api-zod/`): Schemas Zod compartilhados entre frontend e backend.
- **Camada de Codegen** (`artifacts/api-spec/`): Orval gera tipos e hooks a partir do OpenAPI spec.

### 3. Type-Safety em Todo o Stack
TypeScript é usado em todas as camadas. Esquemas Zod validam dados em tempo de execução e geram tipos TypeScript automaticamente. O Orval gera clientes tipados a partir do contrato OpenAPI.

### 4. Mobile-First Obrigatório
Todo componente e layout deve ser construído com approach mobile-first. Breakpoints são adicionados apenas para telas maiores.

### 5. Acessibilidade (A11y)
- Todos os componentes devem seguir padrões ARIA.
- `prefers-reduced-motion` deve ser respeitado em todas as animações.
- Contraste mínimo AA para todos os elementos visuais.
- Navegação completa via teclado.

## Decisões de Design

### Por que Express 5?
Express 5 oferece suporte nativo a async handlers, eliminando a necessidade de middlewares de tratamento de erros boilerplate.

### Por que Drizzle ORM?
Drizzle ORM oferece type-safe SQL com schema-first approach, integração nativa com Zod, e suporte a migrations declarativas.

### Por que shadcn/ui com new-york?
O estilo new-york do shadcn/ui fornece uma base consistente, acessível e customizável, alinhada com os tokens de marca do projeto.

### Por que framer-motion?
Para animações progressivas e declarativas no React, com suporte nativo a `prefers-reduced-motion`.

## Padrões de Código

### Estrutura de Arquivos
Cada pacote segue a estrutura:
```
package/
├── src/
│   ├── index.ts        # Ponto de entrada (exports)
│   └── ...             # Implementação
├── tsconfig.json
├── package.json
└── README.md
```

### Convenções de Importação
- Usar aliases configurados em `tsconfig.json` (ex: `@/components`, `@/lib/utils`).
- Imports absolutos via `@workspace/` para pacotes internos do workspace.
- Evitar imports relativos profundos (`./../../`).

### Tratamento de Erros
- Backend: middleware de erro centralizado no Express 5.
- Frontend: boundary de erro em React + `sonner` para notificações.
- Logging: pino em produção, console em desenvolvimento.

## Segurança

- `pnpm-workspace.yaml` configura `minimumReleaseAge: 1440` para defesa contra supply-chain attacks.
- Dependências de produção minimizadas.
- Variáveis de ambiente sensíveis nunca versionadas.
