# SEO — Otimização para Busca e IA (SEO, GEO e Schema)

## Quando Aplicar
Sempre que o trabalho envolver a visibilidade orgânica do site institucional da
Óticas Paris Sul: auditoria de SEO, metadados (`title`, `description`,
`canonical`, `robots`, Open Graph, Twitter Card), dados estruturados
(JSON-LD/schema.org), rastreabilidade (`robots.txt`, `sitemap.xml`), otimização
para mecanismos de resposta por IA (GEO/AEO/LLMO — `llms.txt`) ou revisão de
conteúdo local (lojas, NAP, horários).

## Fontes e Skills Externas
As regras abaixo consolidam quatro skills instaladas globalmente em
`~/.agents/skills/` e a política local do projeto:

- `seo-audit` (coreyhaines31/marketingskills) — auditoria técnica + on-page.
- `seo` (addyosmani/web-quality-skills) — SEO técnico baseado em Lighthouse/Google.
- `ai-seo` (coreyhaines31/marketingskills) — AEO/GEO/LLMO.
- `schema` (coreyhaines31/marketingskills) — dados estruturados (JSON-LD).

Documentos locais obrigatórios: `docs/seo-geo.md` (política e entidade oficial),
`plans/plan-002-prd-seo-geo.md` (backlog de SEO/GEO) e `docs/padroes-codigo.md`.

## Regras Obrigatórias
1. **Entidade única e consistente.** NAP (nome, endereço, telefone, e-mail,
   WhatsApp, horários) vive em uma fonte única e revisada. Hoje há cópias em
   `index.html` (JSON-LD), `App.tsx` e `public/llms.txt` — devem permanecer
   idênticas em todas as fontes.
2. **Metadados canônicos.** Exatamente um `<title>`, uma meta `description`
   distinta do título, um `canonical` self-referential em HTTPS e `robots` com
   `index, follow`. Não duplicar valores no HTML.
3. **Crawlers de IA permitidos (estratégia GEO).** Não bloquear `GPTBot`,
   `ChatGPT-User`, `OAI-SearchBot`, `ClaudeBot`, `Claude-Web`, `PerplexityBot`,
   `CCBot` e `Google-Extended` em `robots.txt`. Política em `docs/seo-geo.md`.
4. **Schema fiel ao conteúdo.** Marcar apenas o que existe e é visível na
   página. `Optician` (subtipo de `LocalBusiness`) para lojas; `Organization`
   para a empresa; `WebSite`/`WebPage` para o site. NUNCA adicionar
   `SearchAction` sem busca real no site.
5. **Validar schema no Rich Results Test / Schema.org Validator.** Não inferir
   ausência/presença de JSON-LD via `web_fetch` ou `curl` — eles removem
   `<script>` e não renderizam JavaScript. Sempre renderizar a página.
6. **`sameAs` somente perfis oficiais confirmados.** Hoje: Instagram
   `https://www.instagram.com/oticasparissul/`.
7. **Imagem social 1200×630.** `og:image` e `twitter:image` devem apontar para
   uma imagem dedicada (JPEG/PNG ≤ 300 KB) — hoje estão em 150×150 (pendência).
8. **HTML sem JavaScript.** O conteúdo principal é renderizado no cliente
   (SPA). Validar com crawler sem JS e no Google Search Console; considerar
   prerender/SSR apenas se a indexação real falhar.
9. **Mobile-first e acessibilidade.** Manter `prefers-reduced-motion`, contraste
   AA, navegação por teclado e alt text correto. Não usar `maximum-scale=1` no
   viewport (bloqueia zoom, falha WCAG 1.4.4).
10. **Sem invenção de peso de ranking.** Não prometer posição nem inventar
    fatores de ranqueamento. Reportar que a validação de indexação/ranking é
    pendente até ser confirmada no Search Console.

## Ferramentas
- Google Search Console (inspeção de URL, sitemap, cobertura).
- Google PageSpeed Insights / Lighthouse (Core Web Vitals).
- Rich Results Test (validação de JSON-LD).
- Schema.org Validator.
- `npx skills` (instalar/atualizar as skills externas).
- `pnpm run typecheck` e `pnpm run build` antes de qualquer release.

## Padrões
- Arquivos públicos em `artifacts/oticas-paris-sul/public/`: `robots.txt`,
  `sitemap.xml`, `llms.txt`, assets de marca e `favicon.svg`.
- Metadados e JSON-LD centralizados em `artifacts/oticas-paris-sul/index.html`.
- Dados de lojas em `artifacts/oticas-paris-sul/src/App.tsx`
  (`LocationCard`/`LocationsSection`).
- Checklist recorrente: ver `docs/seo-geo.md` e `plans/plan-002-prd-seo-geo.md`.

## Gotchas
- `vercel.json` usa rewrite SPA que exclui `robots.txt`, `sitemap.xml`,
  `llms.txt`, `assets` e `favicon`, mas NÃO exclui os PNGs da raiz
  (`oticas-paris-sul-logo.png`, `whatsapp-icon.png`, `brand-*.png`). Confirmar
  em produção que esses PNGs são servidos antes do rewrite.
- TTFB (~1.055 ms no diagnóstico) depende do provedor/DNS/CDN/TLS — ganho
  limitado no código.
- `sitemap.xml` hoje lista apenas a home; atualizar se novas páginas públicas
  forem criadas.
- O campo "Encontre Seu Pedido" não é busca do site: não usar `SearchAction`.
- Typos conhecidos no conteúdo (`colacar` → `colocar`, `a lazer` → `a laser`).
- "Oticas" (sem acento) em `App.tsx` diverge de "Óticas" no JSON-LD/`llms.txt`.
