# Óticas Paris Sul — Cérebro do Projeto

## Contexto e Objetivos

O projeto **Óticas Paris Sul** é um site institucional mobile-first que apresenta o posicionamento, serviços e marcas da Óticas Paris Sul, direcionando visitantes para pedido, lojas, telefone, e-mail, mapas, WhatsApp e Instagram.

**Stack:** pnpm workspaces, Node.js 24, TypeScript 5.9, React 19, Vite 7, Tailwind CSS v4, Express 5, PostgreSQL + Drizzle ORM, Zod, Orval.

**Tipo:** WEB — Arquitetura de micro-frontend via pnpm workspaces.

**Objetivo:** Entregar uma experiência digital acessível, mobile-first, com performance e qualidade em todo o stack.

## Mapa da Estrutura

```
oticasparissul/
├── docs/                       # Documentação do projeto
│   ├── README.md               # Índice principal da arquitetura
│   ├── diretrizes-arquiteturais.md  # Princípios e decisões de design
│   └── padroes-codigo.md       # Convenções TypeScript, React, backend, DB, Git
├── skills/                     # Habilidades técnicas e regras de negócio
│   ├── README.md               # Índice de skills
│   ├── web-development.md      # Frontend React, Tailwind, shadcn/ui
│   ├── api-development.md      # Backend Express 5
│   ├── database-development.md # Drizzle ORM + PostgreSQL
│   ├── codegen-and-types.md    # Orval + Zod
│   ├── accessibility.md        # A11y, ARIA, reduced motion
│   └── devops-and-workspaces.md # pnpm, builds, typecheck, CI/CD
├── agents/                     # Agentes especializados de IA
│   ├── README.md               # Índice de agentes
│   ├── frontend-agent.md       # Interface React, componentes, estilos
│   ├── backend-agent.md        # API Express, lógica de negócio
│   ├── qa-agent.md             # Testes, acessibilidade, qualidade
│   └── devops-agent.md         # Workspace, builds, infraestrutura
├── plans/                      # Planejamentos de tarefa
│   └── plan-001-init-project-structure.md
├── artifacts/                  # Aplicações empacotadas
│   ├── oticas-paris-sul/       # Frontend institucional
│   ├── api-server/             # Backend Express
│   ├── api-spec/               # Especificação OpenAPI + codegen
│   └── mockup-sandbox/         # Ambiente de sandbox
├── lib/                        # Bibliotecas compartilhadas
│   ├── api-client-react/       # Cliente React para API
│   ├── api-zod/                # Schemas Zod compartilhados
│   └── db/                     # Schema e migrations do Drizzle
├── scripts/                    # Scripts utilitários
├── docs/                       # Documentação
├── skills/                     # Skills
├── agents/                     # Agentes
├── plans/                      # Planos
└── agents.md                   # Este arquivo — ponto de entrada da IA
```

## Regras Rígidas de Funcionamento

### 1. Sempre Consulte Este Arquivo Primeiro
Antes de iniciar qualquer nova tarefa ou modificar o código, **consulte obrigatoriamente** este arquivo (`agents.md`). Ele é o ponto de entrada da IA no projeto e contém todas as diretrizes necessárias.

### 2. Siga a Cadeia de Documentação
1. Leia `agents.md` (este arquivo).
2. Consulte `docs/README.md` para entender a arquitetura.
3. Leia `docs/diretrizes-arquiteturais.md` e `docs/padroes-codigo.md` para os padrões.
4. Referencie as `skills/` apropriadas para a tarefa.
5. Identifique o agente correto via `agents/README.md`.
6. Execute o plano correspondente em `plans/`.

### 3. Use o Agente Correto
- **Frontend Agent** para qualquer coisa relacionada à interface React, componentes, estilos e navegação.
- **Backend Agent** para APIs Express 5, lógica de negócio e integração com o banco.
- **QA Agent** para validação de tipo, acessibilidade e qualidade.
- **DevOps Agent** para configuração do workspace, builds e infraestrutura.

### 4. Respeite os Padrões Obrigatórios
- **Mobile-first** em todos os componentes e layouts.
- **Acessibilidade AA** — `prefers-reduced-motion` obrigatório, contraste mínimo, navegação por teclado.
- **Type-safety** — nenhum `any`, tipagem explícita, schemas Zod para validação.
- **pnpm** como gerenciador de pacotes — nunca npm ou yarn.
- **Typecheck obrigatório** — `pnpm run typecheck` deve passar antes de qualquer commit ou modificação.
- **Segurança** — respeitar `minimumReleaseAge: 1440` no `pnpm-workspace.yaml`.

### 5. Validação de Entrega
Antes de considerar qualquer tarefa concluída:
- [ ] `pnpm run typecheck` passa em todo o workspace.
- [ ] `pnpm run build` executa sem erros.
- [ ] Todos os arquivos seguem os padrões de `docs/padroes-codigo.md`.
- [ ] Acessibilidade (A11y) validada.
- [ ] `prefers-reduced-motion` implementado corretamente.
- [ ] OpenAPI spec sincronizado com a implementação (se houver mudanças na API).

### 6. Princípios de Trabalho
- Documente tudo — cada decisão, cada mudança, cada nova funcionalidade.
- Use os planejamentos em `plans/` para tarefas complexas.
- Nunca remova ou modifique arquivos gerados automaticamente (Orval, drizzle-kit).
- Mantenha o catálogo de dependências em `pnpm-workspace.yaml` sincronizado.

## Regras de Emergência
Se este arquivo não puder ser lido ou estiver corrompido:
1. Verifique `docs/README.md` como backup.
2. Consulte `replit.md` para comandos de run e stack.
3. Execute `pnpm run typecheck` para validar o estado atual do projeto.
