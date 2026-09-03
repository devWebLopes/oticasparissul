# SEO e GEO — Política e Entidade Oficial

Documento de referência para as decisões de SEO/GEO da Óticas Paris Sul
(plano `plans/plan-002-prd-seo-geo.md`).

## Domínio canônico

- `https://oticasparissul.com.br/`
- `http://oticasparissul.com.br/` deve redirecionar para HTTPS (301/308, um único salto).

## Arquivos públicos obrigatórios

| Arquivo | Caminho publicado | Finalidade |
|---|---|---|
| `robots.txt` | `/robots.txt` | Regras de rastreamento + declaração do sitemap |
| `sitemap.xml` | `/sitemap.xml` | URLs públicas canônicas |
| `llms.txt` | `/llms.txt` | Instruções para sistemas de IA (GEO) |

Os três arquivos vivem em `artifacts/oticas-paris-sul/public/` e são copiados
para `dist/public/` no build.

## Política de crawlers de IA (GEO)

**Decisão:** permitir os crawlers de IA. O site é institucional, público e o
objetivo é ser citável por assistentes e respostas de IA (ChatGPT, Perplexity,
Claude, Google AI Overviews).

Agentes explicitamente permitidos em `robots.txt`:

- `GPTBot`, `ChatGPT-User`, `OAI-SearchBot` (OpenAI)
- `ClaudeBot`, `Claude-Web` (Anthropic)
- `PerplexityBot` (Perplexity)
- `CCBot` (Common Crawl)
- `Google-Extended` (Google AI)

A regra `User-agent: *` com `Allow: /` também permanece como padrão permissivo.

## Entidade oficial e `sameAs`

A empresa é representada no JSON-LD como `Organization` (`@id` estável
`https://oticasparissul.com.br/#organization`).

Perfis oficiais confirmados (única URL hoje em `sameAs`):

- Instagram: `https://www.instagram.com/oticasparissul/`

**Regra:** só incluir em `sameAs` perfis verificados que pertençam à marca.
Não adicionar perfis de terceiros, diretórios não confirmados ou URLs que
redirecionem para fora da marca.

## Lojas (entidades `Optician`)

| `@id` | Nome | Endereço | Telefone |
|---|---|---|---|
| `#store-matriz` | Óticas Paris Sul - Matriz | Rua Primeiro de Março, 127 - São Leopoldo/RS | (51) 3591-3664 |
| `#store-filial-01` | Óticas Paris Sul - Filial 01 | Rua Independência, 961 - São Leopoldo/RS | (51) 3037-2600 |

Dados de contato (e-mail, WhatsApp, horários) devem ser mantidos em uma única
fonte (hoje em `App.tsx` e `index.html`) e revisados antes de qualquer release.

## Imagem social (Open Graph / Twitter)

`og:image` e `twitter:image` apontam hoje para
`https://oticasparissul.com.br/oticas-paris-sul-logo.png` (150×150).

**Follow-up recomendado:** produzir uma imagem social dedicada de 1200×630
(JPEG/PNG, peso ≤ 300 KB), salvar em `public/` e atualizar as tags
`og:image*` e `twitter:image` para a nova URL.

## Checklist recorrente (por release)

- `pnpm run typecheck` e `pnpm run build`.
- Verificar `title`, `description`, `canonical`, OG e Twitter Card.
- Verificar `robots.txt`, `sitemap.xml` e `llms.txt` em produção (HTTP 200).
- Verificar HTTP → HTTPS em um único salto.
- Validar JSON-LD no Schema Markup Validator / Rich Results Test.
- Verificar HTML sem JavaScript (crawler).
- Revisar lojas, telefones, horários e endereços.
