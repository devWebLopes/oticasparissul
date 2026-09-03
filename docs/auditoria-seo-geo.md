# Auditoria SEO/GEO — Óticas Paris Sul (baseline)

**Data:** 2026-09-03
**Escopo:** home `https://oticasparissul.com.br/` — site institucional de negócio local.
**Método:** inspeção estática do código (`index.html`, `App.tsx`, `public/`,
`vercel.json`) cruzada com `plans/plan-002-prd-seo-geo.md`, aplicando as skills
`seo-audit`, `addyosmani/seo`, `ai-seo` e `schema`.

> Esta é uma auditoria de **código-fonte**. Itens marcados como
> "verificar em produção" exigem validação no domínio publicado e no Google
> Search Console (não podem ser confirmados por leitura estática).

---

## 1. Resumo executivo

A base técnica está **forte**: metadados completos, JSON-LD de entidade e lojas,
`robots.txt`, `sitemap.xml` e `llms.txt` já presentes e coerentes. As pendências
remanescentes concentram-se em:

1. Conteúdo principal renderizado no cliente (SPA) — risco de indexação.
2. Imagem social em 150×150 (ideal 1200×630).
3. Inconsistências menores de NAP e conteúdo.
4. Itens de produção (HTTP→HTTPS, TTFB, rewrites × PNGs).

**Top 5 por prioridade:**

| # | Prioridade | Ação |
|---|---|---|
| 1 | Alta | Confirmar indexação do conteúdo JS-only (SPA) no Search Console |
| 2 | Alta | Imagem social 1200×630 (`og:image`/`twitter:image`) |
| 3 | Média | Enriquecer schema (`contactPoint`, `geo`, `Service`, `dateModified`) |
| 4 | Média | Padronizar NAP e corrigir typos |
| 5 | Verificar em produção | HTTP→HTTPS, TTFB e rewrite × PNGs |

---

## 2. O que já está OK (não mexer)

- `<title>`, meta `description`, `robots` com `index, follow`, `canonical`
  self-referential em HTTPS.
- `lang="pt-BR"`, `charset UTF-8`, `theme-color`.
- Open Graph completo (`locale`, `site_name`, `type`, `url`, `title`,
  `description`, `image`, dimensões e `alt`).
- Twitter Card (`summary`, `title`, `description`, `image`).
- JSON-LD `@graph` com `Organization`, `WebSite`, `WebPage` e 2 `Optician`
  (Matriz + Filial 01), com `address`, `telephone` e `openingHoursSpecification`.
- `robots.txt` permissivo com crawlers de IA liberados e `Sitemap` declarado.
- `sitemap.xml` válido (home).
- `llms.txt` bem estruturado (GEO).
- Alt text correto nas imagens de conteúdo; logos decorativos com `alt=""`.
- Hierarquia de headings: 1 único `h1` + `h2`/`h3` lógicos.
- `sameAs` apenas com Instagram oficial (conforme `docs/seo-geo.md`).

---

## 3. Achados técnicos

### T-01 [Alta] Conteúdo principal renderizado somente via JavaScript (SPA)
- **Impacto:** Alto.
- **Evidência:** `index.html` contém `<div id="root"></div>`; todo o conteúdo
  visível (`h1`, serviços, lojas, NAP) é renderizado por React no cliente. Os
  metadados e o JSON-LD estão no HTML estático, mas o corpo não.
- **Correção:** validar com crawler sem JS e no Google Search Console
  (inspeção de URL). Googlebot renderiza JS, então pode estar OK — mas **não
  assumir**. Considerar prerender/SSR apenas se a indexação real falhar.

### T-02 [Alta] Imagem social em 150×150
- **Impacto:** Médio/Alto (compartilhamento degradado).
- **Evidência:** `og:image` e `twitter:image` apontam para
  `https://oticasparissul.com.br/oticas-paris-sul-logo.png` (150×150).
- **Correção:** produzir imagem 1200×630 (JPEG/PNG ≤ 300 KB), salvar em
  `public/` e atualizar `og:image*`, `twitter:image` e (se desejado) `logo`/`image`
  do JSON-LD. Segue a recomendação de `docs/seo-geo.md`.

### T-03 [Média] Schema incompleto (oportunidades)
- **Impacto:** Médio.
- **Evidência:** `Organization` sem `contactPoint`; `Optician` sem `geo`
  (latitude/longitude) e sem `priceRange`; `WebPage` sem `datePublished`/
  `dateModified`; não há schema de `Service` para os serviços.
- **Correção:** adicionar `contactPoint` (customer service) na `Organization`,
  `geo` nas duas lojas, `dateModified` no `WebPage` e, opcionalmente,
  `Service`/`FAQPage` **somente** se houver conteúdo real correspondente.

### T-04 [Verificar em produção] Rewrite pode interceptar PNGs da raiz
- **Impacto:** Médio (`og:image`/logo quebrados).
- **Evidência:** o rewrite em `vercel.json` exclui `assets|favicon|robots.txt|
  sitemap.xml|llms.txt`, mas **não** exclui `oticas-paris-sul-logo.png`,
  `whatsapp-icon.png`, `brand-*.png`.
- **Correção:** confirmar que
  `https://oticasparissul.com.br/oticas-paris-sul-logo.png` responde 200 com
  PNG (não HTML). Se interceptar, ampliar a exceção do rewrite.

### T-05 [Verificar em produção] HTTP → HTTPS e TTFB
- **Impacto:** Alto (P0 no plano).
- **Evidência:** não verificável por código; `vercel.json` não declara redirect
  explícito HTTP→HTTPS.
- **Correção:** medir em produção — 1 redirect permanente HTTP→HTTPS e TTFB
  < 800 ms (desejável < 400 ms). TTFB depende de DNS/CDN/TLS.

---

## 4. Achados on-page e conteúdo

### O-01 [Média] NAP com pequenas inconsistências
- `index.html` (JSON-LD): "Rua Primeiro de Março, 127" + "São Leopoldo".
- `App.tsx`: "Rua Primeiro de Março, 127 - S. Leopoldo".
- `llms.txt`: "Rua Primeiro de Março, 127 - São Leopoldo/RS".
- **Correção:** padronizar (ex.: "Rua Primeiro de Março, 127 - São Leopoldo/RS")
  em todas as fontes. Também padronizar "Oticas" → "Óticas" (nome das lojas em
  `App.tsx` difere do JSON-LD/`llms.txt`).

### O-02 [Baixa] Typos no conteúdo
- "Montagens em suas armações" → "Podemos **colacar**..." ("colocar").
- "Gravações" → "gravações **a lazer**" ("a laser").
- **Correção:** ajustar em `App.tsx` (e em `llms.txt`, se replicado).

### O-03 [Baixa] `maximum-scale=1` no viewport
- `index.html`: `<meta name="viewport" content="width=device-width,
  initial-scale=1.0, maximum-scale=1" />`.
- **Correção:** remover `maximum-scale=1` — bloqueia zoom (falha WCAG 1.4.4).

### O-04 [Baixa] `title` pouco orientado a busca local
- "Óticas Paris Sul - Sua visão em primeiro lugar" não cita "São Leopoldo" nem
  "ótica"; a meta description já cita São Leopoldo.
- **Correção (opcional):** considerar "Óticas Paris Sul | Ótica em São Leopoldo - RS".

---

## 5. GEO / AI SEO

- `llms.txt` presente e bem estruturado ✅
- Crawlers de IA permitidos em `robots.txt` ✅
- Sinais de frescor (`lastmod` e "Atualizado em 2026-09-03") ✅
- Extrabilidade de conteúdo depende de JS (ver T-01) — mesma ressalva para
  sistemas de IA que não renderizam JavaScript.
- Presença de terceiros (Wikipedia, sites de review) não verificada — recomendada
  para citações por IA (`ai-seo`).

---

## 6. Plano de ação priorizado

1. **Crítico (produção):** validar HTTP→HTTPS, TTFB, indexação do SPA e PNGs
   (T-05, T-01, T-04) no Search Console e no domínio publicado.
2. **Alto:** imagem social 1200×630 (T-02).
3. **Médio:** enriquecer schema (T-03) e padronizar NAP (O-01).
4. **Baixo/quick wins:** typos (O-02), `maximum-scale=1` (O-03), `title` local (O-04).

---

## 7. Checklist de validação (antes de encerrar)

- [ ] `robots.txt`, `sitemap.xml` e `llms.txt` respondem 200 em produção.
- [ ] JSON-LD valida no Rich Results Test (não via `curl`/`web_fetch`).
- [ ] HTTP redireciona para HTTPS em um único salto.
- [ ] `og:image`/`twitter:image` 1200×630 e retornam 200.
- [ ] Conteúdo principal aparece em crawler sem JavaScript (ou documentado).
- [ ] `sameAs` contém apenas perfis oficiais confirmados.
