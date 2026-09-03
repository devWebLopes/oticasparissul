# DevOps and Workspaces — pnpm + CI/CD

## Quando Aplicar
Quando configurar, manter ou depurar o workspace pnpm, builds, typechecks ou pipelines de integração.

## Stack
- **pnpm** — gerenciador de pacotes com workspaces.
- **esbuild** — bundler para builds de produção (CJS).
- **TypeScript 5.9** — compilação com strict mode.
- **Prettier** — formatação de código.

## Regras Obrigatórias
1. Usar `pnpm` como gerenciador de pacotes — nunca npm ou yarn.
2. Sempre executar `pnpm run typecheck` antes de commitar ou criar PR.
3. Executar `pnpm run build` para validar builds em todos os pacotes.
4. Dependências só devem ser adicionadas via `pnpm add` no pacote correto.
5. Respeitar `minimumReleaseAge: 1440` do `pnpm-workspace.yaml` (defesa contra supply-chain).
6. Não desabilitar `minimumReleaseAge` sem aprovação explícita.
7. Usar `catalog` do `pnpm-workspace.yaml` para versões padronizadas.

## Ferramentas
- `pnpm run typecheck` — typecheck completo do workspace.
- `pnpm run build` — build completo (typecheck + esbuild).
- `pnpm --filter @workspace/<pacote> run <script>` — rodar script de um pacote específico.
- `pnpm -r --if-present run build` — build em todos os pacotes.

## Padrões
- `pnpm-workspace.yaml` define os caminhos dos pacotes (`artifacts/*`, `lib/*`, `scripts`).
- `tsconfig.base.json` é a base para todos os tsconfigs dos pacotes.
- `package.json` do workspace raiz gerencia scripts globais.

## Gotchas
- Scripts no `package.json` do workspace usam `pnpm -r --if-present` para não falhar se um pacote não tiver o script.
- O `preinstall` impede o uso de npm/yarn e exige pnpm.
- Overrides no `pnpm-workspace.yaml` resolvem vulnerabilidades em dependências transitive.
