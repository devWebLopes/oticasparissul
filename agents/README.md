# Agentes Especializados — Óticas Paris Sul

Índice dos agentes de IA responsáveis por cada função no ciclo de desenvolvimento.

## Agentes Disponíveis

| Agente | Papel | Skills Referenciadas | Arquivo |
|---|---|---|---|
| **Frontend Agent** | Desenvolvimento de interfaces React, componentes, estilos e navegação | web-development, accessibility, codegen-and-types | [frontend-agent.md](frontend-agent.md) |
| **Backend Agent** | APIs Express 5, lógica de negócio, integração com banco de dados | api-development, database-development, codegen-and-types | [backend-agent.md](backend-agent.md) |
| **QA Agent** | Testes, validação de acessibilidade e qualidade do código | accessibility, devops-and-workspaces | [qa-agent.md](qa-agent.md) |
| **DevOps Agent** | Configuração do workspace, builds, pipelines e infraestrutura | devops-and-workspaces | [devops-agent.md](devops-agent.md) |

## Como Acionar

- Cada agente é especializado em sua camada e domínio.
- Consulte o `agents/README.md` para entender qual agente chamar para cada tarefa.
- Todos os agentes seguem as diretrizes documentadas em `docs/` e as `skills/` associadas.
- Antes de iniciar qualquer tarefa, consulte `agents.md` na raiz do projeto.

## Fluxo de Colaboração

1. **Frontend Agent** constrói a interface e integra com APIs tipadas.
2. **Backend Agent** implementa a API e valida dados.
3. **QA Agent** valida acessibilidade, tipagem e funcionalidade.
4. **DevOps Agent** garante que builds e typechecks passem em todo o workspace.

## Regras Gerais dos Agentes
- Sempre consultar `docs/` antes de implementar.
- Usar as skills listadas em seu arquivo de agente.
- Seguir os padrões arquiteturais definidos em `docs/diretrizes-arquiteturais.md`.
- Respeitar `prefers-reduced-motion` e padrões A11y.
- Nunca commitar sem passar `pnpm run typecheck`.
