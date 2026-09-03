# Accessibility (A11y)

## Quando Aplicar
Em todo componente, página e interação do projeto. Acessibilidade é requisito obrigatório, não opcional.

## Regras Obrigatórias
1. Todos os componentes devem seguir padrões ARIA (WAI-ARIA 1.2).
2. Contraste mínimo AA (4.5:1 para texto normal, 3:1 para texto grande).
3. `prefers-reduced-motion` deve desabilitar ou simplificar todas as animações.
4. Navegação completa via teclado (tab order lógico, focus visível).
5. Textos alternativos em imagens e elementos não-textuais.
6. Usar componentes `@radix-ui/react-*` que já são acessíveis por padrão.
7. Labels explícitos em todos os inputs de formulário.

## Ferramentas
- **@radix-ui/react-*** — primitives acessíveis para dialogs, dropdowns, tabs, etc.
- **framer-motion** — com `prefers-reduced-motion` respeitado via `reduceMotion` ou CSS.
- **tw-animate-css** — animações CSS que respeitam reduced motion.

## Padrões
- Animações progressivas que degradam graciosamente.
- Navegação fixa com menu móvel — testar com leitores de tela e navegação por teclado.
- Tokens de marca em CSS variables para consistência visual.

## Gotchas
- O mobile-first exige testar em viewport pequeno primeiro.
- `prefers-reduced-motion` não é opcional — é obrigatório por exigência do projeto.
- Não usar animações que piscam mais de 3 vezes por segundo (risco de fotosensitive epilepsy).
