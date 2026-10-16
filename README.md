# Tamura Odontologia — site demonstrativo

Landing page Next.js + TypeScript + CSS Modules para ser finalizada no Codex e apresentada à clínica.

## Como executar

1. Tenha Node.js 20+ instalado.
2. Rode `npm install`.
3. Copie `.env.example` para `.env.local`.
4. Configure `NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999` **somente após confirmar com a clínica o WhatsApp correto**.
5. Rode `npm run dev` e acesse `http://localhost:3000`.
6. Para validar produção: `npm run build`.

## Arquivos principais

- `app/page.tsx`: seções da landing page.
- `app/globals.css`: identidade visual e responsividade.
- `data/business.ts`: dados da empresa, serviços, endereço, horários e WhatsApp.
- `components/ContactForm.tsx`: formulário que prepara mensagem e abre WhatsApp, sem backend.
- `public/images/`: **ilustrações SVG demonstrativas**, não fotos da clínica.

## Importante antes de vender/publicar

- É uma **demonstração não oficial**. Obtenha aprovação do proprietário para usar marca, fotografias e conteúdo.
- A página de Maps identificada é Tamura Odontologia (Bragança Paulista). Endereço e telefone foram conferidos em fontes públicas. Horários devem ser reconfirmados.
- O telefone (11) 4033-2004 é público, mas **não foi confirmado como WhatsApp**; deliberadamente não é usado como destino de mensagens.
- O serviço de cirurgia bucomaxilofacial aparece associado a profissional do consultório em diretório público; confirme se permanece disponível. Os outros cards são descritivos de contato, não promessa de serviços específicos.
- Imagens locais são **ilustrações criadas para a demo**. Substitua por fotos reais com autorização, inclusive em `hero-concept.svg`, `space-concept.svg`, `detail-concept.svg`, `care-concept.svg` ou ajuste URLs de background no CSS.
- Para publicar: configure `NEXT_PUBLIC_SITE_URL` com o domínio definitivo e revise todas as informações. A indexação é habilitada automaticamente no build de produção com domínio configurado, exceto em previews da Vercel ou quando `SITE_NOINDEX=true`.
- A URL do iframe do mapa usa a consulta pública com `output=embed`; confirme o carregamento final ou substitua por link de incorporação oficial obtido no Google Maps.
- O formulário não transmite nem armazena dados em servidor: compõe a URL `wa.me`, e o visitante deve clicar em enviar no próprio WhatsApp.
- Recomenda-se adicionar política de privacidade adequada antes de publicação e evitar coletar informações de saúde no formulário.

## Fontes para conferência

- Mapa original: https://maps.app.goo.gl/H5xaEYUPTqKPoevP8
- Dados de localização/telefone: https://br.todosnegocios.com/pt/tamura-odontologia-estudio-hara-tamura-11-4033-2004
- Cadastro: https://www.econodata.com.br/consulta-empresa/50149643000170-tamura-e-hara-clinica-odontologica-ltda
- Especialidade profissional: https://www.doctoralia.com.br/rogerio-tamura/cirurgiao-buco-maxilo-facial/braganca-paulista

## Prompt inicial no Codex

> Abra este projeto, instale as dependências, rode o build, corrija eventuais problemas e substitua as imagens ilustrativas por fotografias autorizadas que eu fornecer. Depois refine acessibilidade, SEO e responsividade sem alterar os dados reais centralizados em `data/business.ts`. Não invente informações, avaliações ou procedimentos. Não publique sem aprovação do estabelecimento.


## Logotipo e cores (personalização)

- **Logo original:** `public/images/logo-tamura.png` (substitua a imagem mantendo o mesmo nome).
- **Uso do logo no header e footer:** `app/page.tsx` — procure por `className="brandLogo"`.
- **Cores da marca:** no final de `app/globals.css`, bloco `:root` com as variáveis `--ink`, `--deep`, `--mid`, `--accent`, `--cream`, `--pale`, `--sand` e `--line`.
- **Tamanho do logo:** classe `.brandLogo` em `app/globals.css`.
- **Dados do negócio:** `data/business.ts`.
- **Número do WhatsApp:** `.env.local` com `NEXT_PUBLIC_WHATSAPP_NUMBER=5511XXXXXXXXX`.

A imagem original do logotipo foi fornecida pelo usuário.

## SEO e publicação

- Configure `NEXT_PUBLIC_SITE_URL=https://SEU-DOMINIO` no ambiente de hospedagem **antes do build**. Use a mesma versão do domínio em todos os cadastros; redirecione as alternativas (www/sem www e HTTP) para ela na hospedagem.
- Sem domínio configurado, desenvolvimento local e previews da Vercel recebem `noindex`. Para outras hospedagens, defina `SITE_NOINDEX=true` nas prévias. Robots permite rastreamento para que o Google consiga ler essa diretiva.
- O projeto gera canonical, `/robots.txt`, `/sitemap.xml`, imagem de compartilhamento e JSON-LD do tipo Dentist com nome, endereço e telefone. Horários e especialidades não entram no JSON-LD até serem confirmados.
- Cadastre o domínio no Google Search Console. Se usar verificação por tag HTML, configure `GOOGLE_SITE_VERIFICATION` com o token e faça novo build. Envie `/sitemap.xml` e solicite indexação da página inicial na inspeção de URL.
- No Perfil da Empresa no Google, mantenha nome, endereço, telefone e link do site consistentes com os dados da clínica. Confirme horários, categorias e serviços com o responsável.
- Substitua as ilustrações por fotos autorizadas e revise os textos demonstrativos antes de publicar. Acrescente informações verificadas sobre equipe, registro profissional e tratamentos quando fornecidas pela clínica; não invente avaliações nem especialidades.
- Após publicar, confira HTTPS, resposta 200, canonical, ausência de `noindex`, sitemap e eventuais cabeçalhos `X-Robots-Tag` da hospedagem. Valide os dados estruturados no Rich Results Test e acompanhe Search Console e PageSpeed Insights.
- SEO não garante a primeira posição nem indexação imediata. Acompanhe as consultas de marca e a evolução de impressões e cliques no Search Console.

Referências: [SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [dados de negócio local](https://developers.google.com/search/docs/appearance/structured-data/local-business).
