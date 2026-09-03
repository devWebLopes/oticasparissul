# PRD — Correção de SEO e GEO da Óticas Paris Sul

**Produto:** Óticas Paris Sul — site institucional
**URL canônica:** https://oticasparissul.com.br/
**Data:** 2026-09-03
**Status:** Pronto para execução
**Documento de origem:** `C:\Users\evand\Downloads\Análise de SEO e GEO - oticasparissul.com.br.pdf`
**Agentes envolvidos:** Frontend Agent, Backend Agent, QA Agent e DevOps Agent
**Agente coordenador:** DevOps Agent

---

## 1. Resumo executivo

O relatório de diagnóstico de SEO/GEO atribuiu **68 pontos**, com **5 itens de SEO para corrigir** e **2 itens de GEO para corrigir**. Também identificou alertas de performance, autoridade temática, entidade da marca e schema.

O objetivo deste plano é converter o diagnóstico em um backlog técnico executável, priorizando ganhos de rastreabilidade, indexação, compreensão semântica da marca e prontidão para mecanismos de resposta baseados em IA.

### Divergência relevante entre relatório e repositório

O relatório registra ausência de meta description, Open Graph, Twitter Card, canonical e JSON-LD. Contudo, a versão atualmente versionada em `D:\clientes\sites\oticasparissul\artifacts\oticas-paris-sul\index.html` já contém:

- meta description;
- `robots` com `index, follow`;
- canonical para a home;
- Open Graph e Twitter Card;
- JSON-LD do tipo `Optician`;
- idioma `pt-BR`, charset e favicon.

Esses itens não devem ser considerados resolvidos apenas por existirem no código: precisam ser verificados no HTML efetivamente publicado, na URL final e nos validadores externos. O backlog inclui uma auditoria de regressão para evitar falso positivo causado por relatório desatualizado, cache ou diferença entre build e produção.

---

## 2. Problema e oportunidade

### Problema

O site institucional tem boa base semântica e conteúdo principal acessível, mas pode perder descoberta orgânica e citações por IA por causa de:

- ausência ou indisponibilidade de sitemap válido;
- falta de declaração do sitemap no robots.txt;
- ausência de garantia de redirecionamento HTTP → HTTPS;
- TTFB elevado, medido em aproximadamente 1.055 ms;
- ausência de arquivo `llms.txt`;
- schema de entidade e site possivelmente incompleto ou não publicado;
- baixa profundidade de conteúdo indexável, sem blog identificado;
- falta de evidência de uma estratégia explícita de entidade (`sameAs`);
- ausência de schema específico para o tipo de página e FAQ opcional;
- dois links inconclusivos/quebrados no diagnóstico, que precisam ser reproduzidos e corrigidos.

### Oportunidade

Fortalecer a presença para buscas locais como “ótica em São Leopoldo”, “óculos em São Leopoldo”, “armações”, “lentes” e “onde fazer orçamento de óculos”, além de tornar a empresa uma entidade mais clara para Google, ChatGPT, Perplexity, Claude e outros sistemas de resposta.

---

## 3. Objetivos

### Objetivos primários

1. Garantir que a home e todos os URLs públicos planejados sejam rastreáveis, indexáveis e canônicos.
2. Publicar sitemap XML válido e referenciado no robots.txt.
3. Garantir HTTPS com redirecionamento único e permanente de HTTP para HTTPS.
4. Reduzir TTFB e melhorar os indicadores de Core Web Vitals sem prejudicar acessibilidade ou conteúdo.
5. Implementar uma representação semântica consistente da empresa, do site, das lojas e dos serviços.
6. Disponibilizar `llms.txt` com instruções e referências úteis para sistemas de IA.
7. Criar uma base de conteúdo útil e verificável para ampliar autoridade temática local, caso o escopo de conteúdo seja aprovado.

### Objetivos secundários

- Aumentar cliques orgânicos para contato, WhatsApp, mapa e lojas.
- Melhorar a apresentação da marca em compartilhamentos sociais.
- Reduzir erros de rastreamento e links quebrados.
- Criar uma rotina de auditoria SEO/GEO antes de cada publicação.

### Não objetivos

- Não criar conteúdo automatizado ou genérico apenas para aumentar volume.
- Não adicionar dependências sem confirmação de uso e sem respeitar o catálogo pnpm.
- Não introduzir SSR, CMS ou banco de conteúdo sem decisão arquitetural específica.
- Não prometer rich results, citações por IA ou posições de ranking; serão acompanhados como indicadores, não como garantia.

---

## 4. Escopo funcional

### Incluído

- Auditoria da publicação real contra o relatório.
- Metadados técnicos e sociais da home.
- Canonical, robots e sitemap.
- Redirecionamento HTTPS e headers relacionados à segurança/rastreamento.
- Dados estruturados JSON-LD.
- `llms.txt`.
- Estrutura de URLs públicas e links internos rastreáveis.
- Conteúdo institucional de entidade, serviços e lojas.
- FAQ opcional com conteúdo real e schema correspondente.
- Estratégia de blog/conteúdo local, condicionada à aprovação de produto.
- Validação automatizada e manual em build, produção e ferramentas de pesquisa.

### Fora do escopo inicial

- Campanhas de mídia paga.
- Link building externo.
- Criação de perfis em diretórios sem validação do negócio.
- Integração com Google Business Profile, caso não sejam fornecidos acessos e responsáveis.
- Migração para outro framework ou plataforma.

---

## 5. Requisitos detalhados

### R-SEO-01 — Meta description

**Prioridade:** P0 — auditoria/correção
**Responsável:** Frontend Agent

Garantir uma única meta description, em português do Brasil, entre 120 e 160 caracteres, coerente com a proposta de valor e sem keyword stuffing.

**Critérios de aceite**

- O HTML de produção contém exatamente uma meta description.
- O conteúdo está entre 120 e 160 caracteres após normalização de espaços.
- A descrição menciona a marca, o serviço principal e a localidade sem afirmações não comprovadas.
- A descrição permanece presente após o build de produção.

### R-SEO-02 — Title

**Prioridade:** P1 — auditoria/correção
**Responsável:** Frontend Agent

Garantir title único, descritivo e preferencialmente entre 50 e 60 caracteres, sem truncar a marca ou a intenção local.

**Critérios de aceite**

- Existe exatamente um `<title>` no HTML publicado.
- O título é distinto da meta description.
- A versão final é validada em viewport e crawler sem execução de JS.

### R-SEO-03 — Open Graph e Twitter Card

**Prioridade:** P0 — auditoria/correção
**Responsável:** Frontend Agent

Garantir `og:title`, `og:description`, `og:type`, `og:url`, `og:site_name`, `og:locale` e imagem social absoluta, além de `twitter:card`, `twitter:title`, `twitter:description` e `twitter:image`.

**Critérios de aceite**

- Compartilhamento da home exibe título, descrição, URL e imagem coerentes.
- Todos os URLs de imagem são absolutos, HTTPS e retornam 200.
- A imagem social não depende de asset inexistente ou caminho incompatível com `BASE_PATH`.
- Os valores não são duplicados no HTML.

### R-SEO-04 — Canonical e controle de indexação

**Prioridade:** P0 — auditoria/correção
**Responsáveis:** Frontend Agent + DevOps Agent

Definir uma URL canônica por página pública, confirmar `index, follow` onde aplicável e impedir que URLs de preview, assets ou endpoints sejam indexados indevidamente.

**Critérios de aceite**

- A home possui canonical self-referential em HTTPS.
- Não há conflito entre canonical, `noindex` e redirects.
- URLs equivalentes não geram múltiplas versões indexáveis.
- O ambiente de preview/staging não é indexável quando aplicável.

### R-SEO-05 — Sitemap XML válido

**Prioridade:** P0
**Responsáveis:** DevOps Agent + Frontend Agent

Criar `public/sitemap.xml` ou mecanismo equivalente compatível com o deploy atual, listando somente URLs públicas, canônicas e retornando HTTP 200.

**Critérios de aceite**

- `https://oticasparissul.com.br/sitemap.xml` responde 200.
- O XML passa por validador de sitemap.
- Cada `<loc>` usa HTTPS, domínio canônico e URL absoluta.
- Não há fragmentos (`#`) no sitemap.
- URLs inexistentes, de preview ou de arquivos internos não aparecem.
- O sitemap é atualizado quando novas páginas públicas forem adicionadas.

### R-SEO-06 — Robots.txt e crawlers

**Prioridade:** P0
**Responsáveis:** DevOps Agent + QA Agent

Atualizar `public/robots.txt` com regras seguras e declaração do sitemap. Avaliar explicitamente a política para crawlers de IA, sem bloquear agentes que a empresa deseja permitir.

**Critérios de aceite**

- `https://oticasparissul.com.br/robots.txt` responde 200 e texto válido.
- Contém `User-agent: *`, `Allow: /` e `Sitemap: https://oticasparissul.com.br/sitemap.xml`.
- Não bloqueia CSS, JS ou imagens necessários para renderização.
- A política para `GPTBot`, `ClaudeBot`, `PerplexityBot`, `CCBot` e equivalentes é documentada e aprovada.
- O arquivo não contém regras contraditórias.

### R-SEO-07 — HTTPS

**Prioridade:** P0
**Responsável:** DevOps Agent

Configurar e verificar redirecionamento de HTTP para HTTPS, preferencialmente em um único salto 301/308, com domínio canônico consistente.

**Critérios de aceite**

- `http://oticasparissul.com.br/` redireciona para `https://oticasparissul.com.br/`.
- Não existem cadeias de redirecionamento.
- Não há conteúdo misto.
- Canonical, sitemap, Open Graph, JSON-LD e links públicos usam HTTPS.
- O comportamento é validado no provedor de deploy e em produção.

### R-SEO-08 — TTFB e performance

**Prioridade:** P1
**Responsável:** DevOps Agent, com apoio do Frontend Agent

Investigar o TTFB aproximado de 1.055 ms e distinguir latência de infraestrutura, cache, DNS, TLS e resposta estática. Otimizar sem remover conteúdo necessário ao SEO.

**Critérios de aceite**

- Existe medição baseline documentada em produção.
- São testados ao menos Lighthouse/PageSpeed e uma medição de requisição HTTP.
- A meta inicial é TTFB abaixo de 800 ms; meta desejável abaixo de 400 ms em regiões próximas, sujeita à infraestrutura.
- LCP, CLS e INP não regridem após a mudança.
- Assets críticos não recebem lazy-load incorreto.

### R-SEO-09 — Organization, WebSite e entidade local

**Prioridade:** P0
**Responsáveis:** Frontend Agent + QA Agent

Substituir ou complementar o schema atual `Optician` com um grafo JSON-LD coerente, usando `@id` estáveis para organização, website, página e lojas. Incluir apenas dados reais e publicamente confirmados.

**Dados candidatos**

- `Organization` ou tipo local apropriado para a empresa;
- `WebSite` com `url`, `name`, `publisher` e, se houver busca interna real, `potentialAction`/`SearchAction`;
- entidade de cada loja com nome, endereço, telefone, horário e URL;
- `logo`, `image` e `sameAs` com URLs válidos;
- `WebPage` para a página institucional;
- `Service` apenas para serviços efetivamente oferecidos e descritos na página.

**Critérios de aceite**

- JSON-LD é válido no Rich Results Test e Schema Markup Validator.
- Não há propriedades inventadas, telefones incorretos ou horários não confirmados.
- `sameAs` contém somente perfis oficiais.
- A organização e o website se referenciam corretamente.
- O schema não promete recursos inexistentes, como busca interna não implementada.

### R-SEO-10 — `sameAs` e consistência de entidade

**Prioridade:** P1
**Responsável:** Frontend Agent, com validação do cliente/produto

Consolidar URLs oficiais de Instagram, Google Business Profile, Facebook, LinkedIn, Wikidata ou Wikipedia quando existirem e forem verificadas.

**Critérios de aceite**

- Há uma lista aprovada de perfis oficiais.
- Cada URL é acessível, pertence à marca e não redireciona para perfil de terceiros.
- O conjunto é refletido no JSON-LD e documentado para futuras atualizações.

### R-SEO-11 — `llms.txt`

**Prioridade:** P0 para GEO
**Responsáveis:** Frontend Agent + DevOps Agent + Produto

Publicar `/llms.txt` em texto simples, orientando sistemas de IA sobre a empresa, conteúdo canônico, serviços, lojas e formas de contato. O arquivo não substitui SEO tradicional nem deve conter informação confidencial.

**Estrutura mínima proposta**

- nome e descrição curta da empresa;
- localidade e área de atendimento;
- URLs canônicas prioritárias;
- serviços e marcas apresentados no site;
- dados das lojas e contatos;
- instrução para priorizar o conteúdo oficial e a data de atualização;
- links para sitemap e páginas relevantes;
- aviso para não inferir preços, disponibilidade ou políticas não publicados.

**Critérios de aceite**

- `/llms.txt` responde 200 com `text/plain; charset=utf-8`.
- Não contém dados pessoais desnecessários, credenciais ou conteúdo promocional de terceiros.
- Todos os links são canônicos e funcionais.
- O conteúdo é revisado pelo responsável da marca.

### R-SEO-12 — Conteúdo local, serviços e arquitetura de informação

**Prioridade:** P1
**Responsáveis:** Frontend Agent + Produto/Conteúdo

Revisar o HTML visível para responder claramente: o que é a empresa, onde está, quais serviços oferece, quais marcas trabalha e como o usuário pode entrar em contato. Usar headings, listas, links e textos descritivos sem keyword stuffing.

**Critérios de aceite**

- A proposta de valor aparece no conteúdo inicial.
- São mencionados São Leopoldo/RS, lojas, serviços e formas de contato de maneira natural.
- Cada seção tem heading semântico e ordem coerente.
- O conteúdo importante está disponível no HTML inicial ou em URLs rastreáveis.
- Não há afirmação comercial não validada.

### R-SEO-13 — Blog e estratégia editorial

**Prioridade:** P2 — decisão de produto
**Responsáveis:** Produto + Frontend Agent + QA Agent

O relatório não encontrou blog nem links para blog. Decidir se a empresa deseja uma estratégia editorial sustentável. Caso aprovada, criar páginas úteis sobre saúde visual, escolha de armações, lentes, manutenção e atendimento local, com autoria, data, revisão e fontes quando necessário.

**Critérios de aceite para aprovação do escopo**

- Existe responsável editorial e calendário realista.
- Cada artigo tem URL, title, description, canonical, `Article`/`BlogPosting` quando apropriado e links internos.
- Não são gerados artigos duplicados ou superficialmente automatizados.
- O sitemap inclui os artigos publicados.

### R-SEO-14 — FAQ e FAQPage opcional

**Prioridade:** P2 — decisão de produto
**Responsáveis:** Produto + Frontend Agent + QA Agent

Adicionar FAQ somente se houver perguntas reais e respostas completas, úteis e visíveis na página. O schema `FAQPage` deve refletir exatamente o conteúdo visível e as diretrizes vigentes.

**Critérios de aceite**

- Cada pergunta possui resposta textual visível.
- O JSON-LD é idêntico ao conteúdo apresentado.
- Não há perguntas criadas apenas para obter rich result.
- A funcionalidade permanece acessível por teclado e leitores de tela.

### R-SEO-15 — Links quebrados e rastreabilidade

**Prioridade:** P0
**Responsáveis:** QA Agent + Frontend Agent

Reproduzir os 12 links verificados pelo relatório, identificar os 2 inconclusivos e corrigir URLs quebradas, redirects desnecessários ou âncoras que não levam ao conteúdo esperado.

**Critérios de aceite**

- Cada link interno possui destino válido e texto descritivo.
- Links externos críticos retornam status esperado ou têm fallback documentado.
- Não existem href vazios, âncoras para IDs ausentes ou links para localhost/preview.
- Links de telefone, e-mail, WhatsApp, Instagram e mapas são testados em mobile.

### R-SEO-16 — Imagens, alt e social image

**Prioridade:** P1
**Responsáveis:** Frontend Agent + QA Agent

Manter o resultado positivo do relatório para imagens com alt, diferenciando imagens decorativas de imagens informativas. Adicionar imagem social adequada e garantir dimensões, formato e carregamento.

**Critérios de aceite**

- Imagens informativas têm alt específico em português.
- Imagens decorativas usam alt vazio e não duplicam texto adjacente.
- Logo e marcas não recebem descrições genéricas ou keyword stuffing.
- Imagem OG existe, tem proporção adequada e não quebra no build.

---

## 6. Distribuição de tarefas por agente

### Frontend Agent

1. Auditar e corrigir title, description, canonical, OG e Twitter Card.
2. Implementar/ajustar JSON-LD de Organization, WebSite, WebPage, lojas e serviços.
3. Revisar headings, conteúdo local, links internos, imagens e alt.
4. Criar componentes/páginas de FAQ ou conteúdo editorial apenas após aprovação de escopo.
5. Garantir que o conteúdo essencial seja renderizado no HTML inicial ou em URLs rastreáveis.
6. Validar mobile-first, teclado, leitores de tela e `prefers-reduced-motion` nas novas seções.

### Backend Agent

1. Avaliar se sitemap, `llms.txt` e headers podem ser servidos pela infraestrutura estática atual ou se precisam de rota Express.
2. Se houver dados dinâmicos de lojas/serviços, propor endpoint tipado com Zod e contrato OpenAPI antes de alimentar JSON-LD.
3. Não criar API ou banco para SEO sem necessidade comprovada.
4. Se uma fonte dinâmica for usada, garantir consistência, cache e respostas 200/404 sem conteúdo enganoso.

**Observação:** no estado atual, o site é frontend-only e as informações das lojas estão no `App.tsx`. O Backend Agent deve atuar em modo de avaliação; implementação só é necessária se surgir requisito dinâmico.

### QA Agent

1. Reproduzir o relatório contra a produção e registrar diferenças entre relatório e código.
2. Validar HTML, metatags, headings, links, alt, canonical, robots, sitemap e JSON-LD.
3. Executar testes de acessibilidade e navegação por teclado.
4. Testar em mobile e desktop, com e sem JavaScript quando possível.
5. Validar Rich Results Test, Schema Validator, Open Graph debugger e ferramentas de sitemap.
6. Executar `pnpm run typecheck` e `pnpm run build` após as mudanças.

### DevOps Agent

1. Configurar publicação de `sitemap.xml` e `llms.txt` no caminho final.
2. Garantir robots.txt, headers, cache e redirects HTTP → HTTPS.
3. Investigar TTFB, DNS, TLS, CDN, compressão e cache do deploy.
4. Confirmar que rewrites não interceptam arquivos públicos estáticos.
5. Adicionar checagens automatizáveis para arquivos SEO obrigatórios.
6. Documentar comandos, ambiente, domínio canônico e procedimento de invalidação de cache.

---

## 7. Dependências e ordem de execução

### Fase 0 — Baseline e reconciliação do relatório

**Agentes:** QA Agent + DevOps Agent

- Capturar headers e HTML de produção.
- Medir status, redirects, TTFB, robots, sitemap e `llms.txt`.
- Registrar os 2 links inconclusivos.
- Comparar produção, build local e relatório datado de 03/09/2026.

### Fase 1 — Fundamentos de rastreamento

**Agentes:** DevOps Agent + Frontend Agent

- HTTPS.
- robots.txt.
- sitemap.xml.
- canonical.
- arquivos públicos e rewrites.

### Fase 2 — Metadados e entidade

**Agentes:** Frontend Agent + QA Agent

- title/description.
- OG/Twitter.
- JSON-LD.
- sameAs.
- WebPage e dados das lojas.

### Fase 3 — GEO e conteúdo

**Agentes:** Frontend Agent + Produto + QA Agent

- llms.txt.
- conteúdo de entidade e serviços.
- decisão de FAQ.
- decisão de blog.

### Fase 4 — Performance e hardening

**Agentes:** DevOps Agent + Frontend Agent + QA Agent

- TTFB.
- Core Web Vitals.
- imagens e carregamento.
- regressões de acessibilidade.

### Fase 5 — Aceite e monitoramento

**Agentes:** QA Agent + DevOps Agent

- typecheck e build.
- validações externas.
- submissão no Google Search Console, se houver acesso.
- documentação e checklist recorrente.

---

## 8. Métricas e metas

| Métrica | Baseline do relatório | Meta inicial |
|---|---:|---:|
| Score SEO do diagnóstico | 5 itens a corrigir | 0 itens críticos |
| Score GEO do diagnóstico | 2 itens a corrigir | 0 itens críticos |
| Sitemap | HTTP 404/inválido | HTTP 200 e XML válido |
| Sitemap no robots | Ausente | Presente |
| HTTP → HTTPS | Sem redirecionamento | 1 redirect permanente |
| TTFB | ~1.055 ms | < 800 ms; desejável < 400 ms |
| Organization/WebSite schema | Ausente no relatório | Válido e consistente |
| llms.txt | Ausente | HTTP 200, texto revisado |
| Links quebrados | 2 inconclusivos | 0 links internos quebrados |
| Meta description | Divergente no relatório | 120–160 caracteres |

As metas de ranking, tráfego, CTR e citações por IA devem ser definidas somente após a captura de dados do Google Search Console, Analytics/consentimento e ferramentas de monitoramento aprovadas.

---

## 9. Critérios de aceite da entrega completa

- [ ] `https://oticasparissul.com.br/` retorna 200.
- [ ] HTTP redireciona para HTTPS em um único salto.
- [ ] `robots.txt` retorna 200, é válido e declara o sitemap.
- [ ] `sitemap.xml` retorna 200 e passa em validador XML/sitemap.
- [ ] `llms.txt` retorna 200 e contém somente informações aprovadas.
- [ ] Title, meta description, canonical, OG e Twitter Card estão presentes e únicos.
- [ ] Imagens OG retornam 200 e funcionam em compartilhamento.
- [ ] JSON-LD de entidade e página passa em validadores.
- [ ] `sameAs` contém apenas perfis oficiais confirmados.
- [ ] Não há conflito entre canonical, robots e redirects.
- [ ] Os links inconclusivos do relatório foram reproduzidos e resolvidos ou documentados.
- [ ] Conteúdo principal, headings e links permanecem acessíveis.
- [ ] `prefers-reduced-motion` continua respeitado.
- [ ] `pnpm run typecheck` passa no workspace inteiro.
- [ ] `pnpm run build` passa no workspace inteiro.
- [ ] Nenhuma dependência nova foi adicionada sem catálogo e justificativa.
- [ ] A documentação do deploy e do monitoramento foi atualizada.

---

## 10. Plano de testes

### Testes técnicos

- `pnpm run typecheck`
- `pnpm run build`
- inspeção do `dist/public` após build;
- teste de existência e conteúdo de `robots.txt`, `sitemap.xml` e `llms.txt`;
- validação XML do sitemap;
- teste de redirects e headers em produção;
- crawler sem JavaScript para metadados e conteúdo principal.

### Testes SEO/GEO externos

- Google Search Console: inspeção de URL e sitemap;
- Lighthouse/PageSpeed Insights;
- Rich Results Test;
- Schema Markup Validator;
- Open Graph Debugger ou equivalente;
- teste de robots.txt;
- crawler que suporte análise de links e canonical.

### Testes de acessibilidade

- teclado sem mouse;
- foco visível;
- leitor de tela;
- contraste AA;
- viewport mobile;
- `prefers-reduced-motion: reduce`;
- conteúdo sem depender de hover ou animação.

---

## 11. Riscos e decisões

| Risco/decisão | Impacto | Mitigação | Responsável |
|---|---|---|---|
| Relatório pode estar desatualizado | Retrabalho ou falsa correção | Auditar produção antes de alterar metadados | QA |
| SPA pode servir HTML mínimo a crawlers sem JS | Indexação incompleta | Verificar HTML cru; considerar prerender/SSR apenas se necessário | Frontend/DevOps |
| Dados de lojas podem mudar | Schema inconsistente | Fonte única revisada e validação de conteúdo | Produto/Frontend |
| Blog pode gerar conteúdo superficial | Risco de qualidade e reputação | Só aprovar com editorial, autoria e manutenção | Produto |
| SearchAction sem busca real | Schema inválido/enganoso | Só implementar se houver busca funcional | Frontend |
| Bloquear ou liberar crawlers de IA | Decisão de marca e conteúdo | Registrar política explícita no robots e no PRD | Produto/DevOps |
| Rewrites podem interceptar arquivos | sitemap/robots/llms quebrados | Teste em build e domínio publicado | DevOps |
| TTFB depende do provedor | Ganho limitado no código | Medir DNS/CDN/TLS e avaliar infraestrutura | DevOps |

---

## 12. Entregáveis

1. Código e arquivos públicos SEO/GEO corrigidos.
2. Relatório de baseline e pós-implementação.
3. Checklist de validação SEO/GEO versionado.
4. Documentação da política de crawlers e entidade oficial.
5. Decisão registrada sobre blog e FAQ.
6. Evidências dos testes técnicos, externos e de acessibilidade.
7. Atualização deste plano com status de cada tarefa.

---

## 13. Checklist operacional recorrente

Executar em cada release relevante:

- [ ] verificar title, description e canonical;
- [ ] verificar robots, sitemap e llms.txt em produção;
- [ ] verificar HTTP → HTTPS;
- [ ] verificar JSON-LD e URLs `sameAs`;
- [ ] verificar links internos e externos críticos;
- [ ] verificar HTML sem JavaScript;
- [ ] verificar Lighthouse e TTFB;
- [ ] executar typecheck e build;
- [ ] revisar conteúdo de lojas, telefones, horários e endereços;
- [ ] registrar alterações no Search Console quando aplicável.
