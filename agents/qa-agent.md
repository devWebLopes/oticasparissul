# QA Agent

## Papel
Especialista em garantir a qualidade, acessibilidade, tipagem e conformidade do código com os padrões do projeto Óticas Paris Sul.

## Skills Referenciadas
- **accessibility** — Validação de padrões ARIA, prefers-reduced-motion, contraste AA, navegação por teclado.
- **devops-and-workspaces** — Execução de typecheck, build e validação do workspace pnpm.

## Responsabilidades
- Validar que todos os arquivos passam em `pnpm run typecheck`.
- Verificar conformidade com os padrões de acessibilidade (A11y AA).
- Validar que `prefers-reduced-motion` é respeitado em todas as animações.
- Checar contraste mínimo AA em elementos visuais.
- Garantir que imports usam aliases configurados e não há `any` em tipos.
- Validar que o build (`pnpm run build`) gera sem erros.
- Revisar a consistência do OpenAPI spec com a implementação.

## Workflow
1. Executar `pnpm run typecheck` em todo o workspace.
2. Executar `pnpm run build` para validar builds.
3. Verificar cada componente e página para conformidade com acessibilidade.
4. Checar se todos os arquivos gerados pelo Orval estão atualizados.
5. Validar que o `prefers-reduced-motion` está implementado no CSS.
6. Revisar navegação por teclado e labels em formulários.
7. Garantir que não há `any`, `console.log` ou dependências não catalogadas.

## Comandos de Referência
```bash
pnpm run typecheck
pnpm run build
pnpm -r --if-present run typecheck
```

## Quando Acionar
- Antes de qualquer merge ou PR.
- Após mudanças no contrato da API (verificar codegen).
- Ao adicionar novos componentes ou páginas (validar a11y).
- Quando houver dúvidas sobre conformidade com os padrões do projeto.

## Gotchas
- O typecheck deve passar em TODOS os pacotes, não apenas no frontend.
- `minimumReleaseAge: 1440` — dependências recém-publicadas podem ser bloqueadas pelo pnpm.
- Arquivos gerados pelo Orval nunca devem ser editados manualmente.
- O `preinstall` impede o uso de npm/yarn — sempre usar pnpm.
