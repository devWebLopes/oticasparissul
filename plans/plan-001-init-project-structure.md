# Plano — Inicialização da Estrutura Base do Projeto

**Tarefa:** Inicializar a estrutura base do projeto (docs, skills, agents, plans, agents.md)
**Agente Principal:** DevOps Agent
**Skills Utilizadas:** devops-and-workspaces, web-development, api-development, database-development, accessibility, codegen-and-types
**Data:** 2026-09-03

---

## Contexto

O projeto Óticas Paris Sul está em sua inicialização. É necessário criar a estrutura de documentação, skills, agentes, planos e o arquivo mestre para que qualquer pessoa ou agente entenda as guidelines e possa operar no projeto.

## Execução Passo a Passo

### Fase 1: Documentação (`docs/`) — Frontend Agent + Backend Agent

1. **Criar `docs/README.md`**
   - Índice principal da arquitetura.
   - Detalhar stack (pnpm, Node.js 24, React 19, Express 5, PostgreSQL/Drizzle, Zod, Orval).
   - Mapear estrutura de diretórios.
   - Documentar comandos essenciais e variáveis de ambiente.
   - Registrar gotchas e decision points.

2. **Criar `docs/diretrizes-arquiteturais.md`**
   - Princípios de monorepo com pnpm workspaces.
   - Camadas de abstração (apresentação, API, dados, validação, codegen).
   - Type-safety em todo o stack.
   - Padrões mobile-first e acessibilidade.
   - Decisões de design (Express 5, Drizzle ORM, shadcn/ui new-york, framer-motion).

3. **Criar `docs/padroes-codigo.md`**
   - Convenções TypeScript (strict mode, tipos explícitos, evitar `any`).
   - Padrões React (componentes funcionais, hooks, hooks customizados).
   - Padrões backend (rotas por recurso, middlewares, error handler).
   - Padrões de banco de dados (schema-first, drizzle-zod).
   - Convenções Git e versionamento.

### Fase 2: Skills (`skills/`) — DevOps Agent

4. **Criar `skills/README.md`**
   - Índice de todas as skills disponíveis.
   - Mapear cada skill ao seu arquivo e descrever seu escopo.

5. **Criar arquivos de skill individuais:**
   - `skills/web-development.md` — React, Vite, Tailwind, shadcn/ui, framer-motion.
   - `skills/api-development.md` — Express 5, roteamento, middlewares, pino.
   - `skills/database-development.md` — Drizzle ORM, PostgreSQL, migrations.
   - `skills/codegen-and-types.md` — Orval, Zod, geração de tipos.
   - `skills/accessibility.md` — ARIA, prefers-reduced-motion, contraste AA.
   - `skills/devops-and-workspaces.md` — pnpm, builds, typecheck, catálogo.

### Fase 3: Agentes (`agents/`) — DevOps Agent

6. **Criar `agents/README.md`**
   - Índice dos agentes disponíveis.
   - Descrever papel de cada agente e quando acioná-lo.
   - Documentar fluxo de colaboração entre agentes.

7. **Criar arquivos de agente individuais:**
   - `agents/frontend-agent.md` — Responsabilidades, skills, workflow e comandos.
   - `agents/backend-agent.md` — Responsabilidades, skills, workflow e comandos.
   - `agents/qa-agent.md` — Responsabilidades, skills, workflow e comandos.
   - `agents/devops-agent.md` — Responsabilidades, skills, workflow e comandos.

### Fase 4: Planejamento (`plans/`) — DevOps Agent

8. **Criar `plans/plan-001-init-project-structure.md`** (este arquivo)
   - Documentar todo o planejamento da tarefa.
   - Listar agentes responsáveis e skills utilizadas.
   - Definir critérios de validação e entrega.

### Fase 5: Arquivo Mestre (`agents.md`) — DevOps Agent

9. **Criar `agents.md` na raiz do projeto**
   - Contexto e objetivos gerais do projeto.
   - Mapa da estrutura criada (`docs/`, `skills/`, `agents/`, `plans/`).
   - Regras rígidas de funcionamento.

## Critérios de Validação

- [ ] `docs/` contém `README.md`, `diretrizes-arquiteturais.md`, `padroes-codigo.md`.
- [ ] `skills/` contém `README.md` + 6 arquivos de skill individuais.
- [ ] `agents/` contém `README.md` + 4 arquivos de agente individuais.
- [ ] `plans/` contém `plan-001-init-project-structure.md`.
- [ ] `agents.md` existe na raiz com contexto, mapa e regras.
- [ ] `pnpm run typecheck` passa em todos os pacotes.
- [ ] `pnpm run build` executa sem erros.
- [ ] Todos os arquivos seguem os padrões de código definidos em `docs/padroes-codigo.md`.

## Entrega

A estrutura base do projeto estará completamente inicializada com:
- Documentação completa e detalhada.
- Skills que habilitam agentes a operar.
- Agentes especializados para cada função do ciclo de desenvolvimento.
- Plano de execução documentado.
- Arquivo mestre como ponto de entrada da IA.
