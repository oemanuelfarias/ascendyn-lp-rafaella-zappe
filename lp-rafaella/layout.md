# Especificação de Layout - Clínica Dra. Rafaella Zappe

> [!IMPORTANT]
> Este documento é a LEI para o desenvolvimento. Siga pixel por pixel, valor por valor. Não improvise.

---

## Diretrizes Globais

### Cores (Visual Identity)
- **Primary:** `#0B7156` (Verde Profundo - Elegância, Saúde)
- **Primary Dark:** `#386158` (Verde Fechado - Contraste, Textos)
- **Accent/Light:** `#E2F7EC` (Menta Suave - Fundos, Detalhes)
- **Neutral:** `#F9FAF9` (Off-white - Fundo Geral)
- **Text:** `#333333` (Cinza Carvão - Leitura)
- **Text Muted:** `#666666` (Cinza Médio - Apoio)
- **White:** `#FFFFFF`
- **Glass Stroke:** `rgba(255, 255, 255, 0.4)`

### Tipografia (Font Pairing Aprovado)
- **Heading:** `Playfair Display` (Serif)
  - Pesos: 400 (titles), 700 (emphasis), 400 Italic (details)
- **Body:** `Source Sans Pro` (Sans)
  - Pesos: 300 (light), 400 (regular), 600 (semibold)

### Espaçamento Global
- `clamp(4rem, 8vw, 8rem)` entre seções.

---

## 1. Hero Section (Primeira Impressão)

### Arquetipo e Constraints
- **Arquetipo:** Hero Dominante (Foco Centralizado em Card)
- **Constraints:**
  1. **Video Background Loop** (Ambiental, silencioso)
  2. **Glassmorphism** (Card translúcido central)
  3. **Scroll Parallax** (Solicitado: Efeito de profundidade ao descer)
- **Justificativa:** O vídeo traz humanização imediata. O vidro (glass) traz modernidade e limpeza clínica. O parallax adiciona sofisticação premium.

### Conteúdo
- **Headline:** Clínica Odontológica Completa em Ijuí com Atendimento Humanizado
- **Subheadline:** Se você procura dentista em Ijuí – RS, a Clínica da Dra. Rafaella Zappe oferece atendimento odontológico completo, planejamento individualizado e foco em resultados naturais e seguros. Unimos saúde, estética e responsabilidade em um só lugar.
- **CTA:** Agende sua avaliação
- **Vídeo (Foreground):** Vídeo de apresentação ativa (com som opcional).

### Layout & Estrutura
- **Container:** Full viewport height (`min-height: 100vh`).
- **Layers (Z-Index):**
  1. Background Video (Fixed/Absolute) `z-0`
  2. Overlay Gradient `z-1`
  3. Main Content Card `z-10`
- **Card Central:**
  - Largura: `clamp(300px, 90%, 1000px)`
  - Padding: `clamp(2rem, 5vw, 4rem)`
  - Border-radius: `30px`
  - Background: `rgba(255, 255, 255, 0.4)` + `backdrop-filter: blur(12px)`
  - Border: `1px solid rgba(255, 255, 255, 0.6)`
  - Shadow: `0 25px 50px -12px rgba(0, 0, 0, 0.1)`

### Comportamento Parallax (Spec Crítica)
- Ao dar scroll (`window.scrollY`):
  - **Background Video:** Permanece `fixed` ou move-se a `speed: 0.2` (muito lento).
  - **Glass Card:** Move-se a `speed: 1.0` (normal) ou `speed: 0.8` (leve resistência).
  - **Resultado:** O conteúdo desliza "por cima" do vídeo de fundo, criando profundidade 3D real.

### Tipografia
- **Headline:** `Playfair Display`, 700, `clamp(2rem, 4vw, 3.5rem)`, color `#386158`.
  - Destaque "Atendimento Humanizado" com background sutil: `linear-gradient(120deg, transparent 0%, rgba(255, 255, 255, 0.5) 100%)`.
- **Subheadline:** `Source Sans Pro`, 400, `clamp(1rem, 1.2vw, 1.25rem)`, color `#333`. `max-width: 700px`.

### Elementos Visuais
- **Video Player (Foreground):**
  - Largura: **Exatamente 30%** da largura do card em Desktop (`width: 30%`).
  - Mobile: `width: 90%`.
  - Aspect Ratio: `16/9`.
  - Borda: `4px solid rgba(255,255,255, 0.8)` + `border-radius: 12px`.
  - Shadow: `0 10px 30px rgba(11, 113, 86, 0.2)`.

### Animações (Entrada)
- **NÃO ANIMAR ENTRADA DO HERO** (Regra do Usuário: Hero instantâneo).
- **CTA Pulse:** Animação suave de pulso no botão após 3s de inatividade.

### Interatividade
- **CTA Button:**
  - Normal: BG `#0B7156`, Text `#FFF`.
  - Hover: BG `transparent`, Text `#0B7156`, Border `2px solid #0B7156`, `transform: translateY(-2px)`.
- **Scroll Indicator:** Mouse icon na base, desaparece após `scroll > 50px`.

---

## 2. Sobre (A Dra. e a Clínica)

### Arquetipo e Constraints
- **Arquetipo:** Split Assimetrico (Imagem Esquerda / Texto Direita)
- **Constraints:**
  1. **Dark Mode Suave** (Contraste com a leveza do Hero)
  2. **Overlap Elements** (Imagem vazando limites)
  3. **Checklist Decorado**
- **Justificativa:** Inverte a paleta para prender a atenção (Pattern Interrupt). Fundo escuro transmite seriedade e elegância premium.

### Conteúdo
- **Tag:** Sobre a Clínica
- **Título:** Odontologia com Planejamento Individualizado e Segurança
- **Texto:** Na Clínica Dra. Rafaella Zappe, cada paciente é único. Nosso compromisso é oferecer odontologia em Ijuí com segurança, ética e acompanhamento próximo durante todo o tratamento.
- **Lista:**
  - Avaliação detalhada da sua saúde bucal
  - Planejamento personalizado para suas necessidades
  - Explicações claras sobre cada etapa do tratamento
  - Uso de técnicas modernas e materiais de alta qualidade
- **Destaque:** Ideal para quem busca segurança e naturalidade, valoriza o atendimento humanizado e deseja melhorar a autoestima e a imagem pessoal.

### Layout
- **Background:** Gradiente Linear Vertical: `#386158` (Top) -> `#1a3c36` (Bottom).
- **Grid:** 1fr (Imagem) - 1.2fr (Texto). Gap: `4rem`.
- **Imagem da Dra.:**
  - Deve ter uma moldura/box decorativa atrás (`position: absolute`, `border: 2px solid rgba(255,255,255,0.1)`, deslocada `-20px`).
  - A imagem em si deve ter `box-shadow: 0 30px 60px rgba(0,0,0,0.4)`.

### Tipografia (Dark Mode)
- **Título:** `Playfair Display`, `clamp(2rem, 3vw, 3rem)`, Cor: `#FFFFFF`.
- **Texto:** `Source Sans Pro`, `1.1rem`, Cor: `rgba(255,255,255, 0.9)`.
- **Checklist:** Ícones em `#E2F7EC` (Menta), Texto em White.

### Animações (Scroll)
- **Imagem:** `fade-right`, duration `1000ms`.
- **Texto:** `fade-left`, duration `1000ms`, delay `200ms`.
- **Itens da Lista:** `fade-up`, interval `100ms` (Staggered).

---

## 3. Nossos Tratamentos (Serviços)

### Arquetipo e Constraints
- **Arquetipo:** Bento Box Grid (Grid Modular)
- **Constraints:**
  1. **Hover Card Reveal** (Interação rica)
  2. **Glassmorphism Light** (Sobre fundo claro)
  3. **Iconography Driven**
- **Justificativa:** Organizar muita informação (8 serviços) sem parecer uma lista de compras. O Grid Bento dá peso igual a itens importantes e cria ritmo visual.

### Conteúdo
- **Título:** Soluções Completas para o Seu Sorriso em Ijuí – RS
- **Serviços:**
  1. Limpeza Dentária (Profilaxia)
  2. Tratamentos Restauradores
  3. Próteses Dentárias
  4. Implantes Dentários
  5. Tratamento de Canal (Endodontia)
  6. Ortodontia (Aparelhos)
  7. Odontologia Estética
  8. Harmonização Facial

### Layout
- **Background:** `#F9FAF9` com padrão sutil (noise ou grid muito leve).
- **Grid:** Auto-fit minmax(`280px`, `1fr`). Gap `1.5rem`.
- **Cards:**
  - Background: `#FFFFFF`.
  - Border: `1px solid #E5E5E5`.
  - Padding: `2rem`.
  - Aspect Ratio: Próximo de quadrado ou retângulo suave.
  - Sombra: `0 4px 6px rgba(0,0,0,0.05)`.

### Interatividade & Surpresa (Wow Factor)
- **Estado Normal:** Ícone minimalista (linha fina, cor `#0B7156`) + Título.
- **Estado Hover:**
  - Card eleva (`translateY(-5px)`).
  - Sombra cresce (`0 20px 40px rgba(11, 113, 86, 0.15)`).
  - Borda inferior fica verde (`border-bottom: 3px solid #0B7156`).
  - Ícone preenche ou ganha cor vibrante.

### Tipografia
- **Título da Seção:** Centralizado, `Playfair Display`, `#386158`.
- **Card Título:** `Source Sans Pro`, `600`, `1.2rem`, `#333`.

---

## 4. Diferenciais (Por Que Escolher)

### Arquetipo e Constraints
- **Arquetipo:** Sticky Scroll Process (Lateral ou Vertical Preso)
- **Constraints:**
  1. **Sticky Element** (Título/Imagem fixa enquanto texto rola)
  2. **Progressive Reveal**
  3. **Big Numbers/Typography**
- **Justificativa:** Esta seção vende a *experiência*. O usuário deve ler um por um, não apenas escanear. O scroll preso força essa atenção sequencial suave.

### Conteúdo
- **Título:** Diferenciais
- **Itens:**
  - Atendimento Humanizado (Acolhimento e cuidado...)
  - Olhar Técnico e Estético (Foco em resultados...)
  - Ambiente confortável e seguro
  - Localização Privilegiada (Fácil acesso...)
  - Confiança (Referência para quem busca...)

### Layout (Desktop)
- **Layout:** 2 Colunas (Sticky Left, Scrolling Right).
- **Esquerda (Sticky):** Título "Por Que Escolher?" + Imagem conceitual abstrata que muda suavemente (fade) conforme o item da direita entra em foco. `top: 20vh`, `height: fit-content`.
- **Direita (Scrollable):** Lista dos diferenciais com bastante respiro (margin-bottom: `20vh` entre eles para dar tempo de leitura).
- **Mobile:** Empilhado padrão (Título -> Lista).

### Estilo dos Itens
- **Número:** Grande, fonte Serif Italic (`Playfair Display`), cor `#E2F7EC` (muito claro, quase marca d'água), `font-size: 6rem`, `opacity: 0.5`.
- **Título do Diferencial:** `#0B7156`, `1.5rem`, Bold.
- **Descrição:** `#555`, `1.1rem`.

### Animacoes
- Conforme o item cruza o centro da tela (`IntersectionObserver`), ele ganha opacidade total e escala `1.0` (antes `0.5` opacity, `0.9` scale).

---

## 5. FAQ (Perguntas Frequentes)

### Arquetipo e Constraints
- **Arquetipo:** Accordion Minimalista Centralizado
- **Constraints:**
  1. **Clean Interface** (Sem ruído visual)
  2. **Smooth Expansion** (Animação de altura fluida)
- **Justificativa:** Reduzir ansiedade. Deve ser direto e fácil de usar.

### Conteúdo
- (As 4 perguntas e respostas da copy)

### Layout
- **Container:** Estreito (`max-width: 800px`).
- **Accordion Item:**
  - Border-bottom: `1px solid #E5E5E5`.
  - Padding: `1.5rem 0`.
  - Cursor: `pointer`.
- **Pergunta:** `Source Sans Pro`, `600`, `#333`. Ícone `+` na direita que vira `x` ou gira.
- **Resposta:** `Playfair Display` (para dar um tom de "voz" da doutora), `1.1rem`, `#555`. Hidden por padrão.

### Interatividade
- Click: Abre suavemente (`max-height` transition). Background levemente cinza (`#F9FAF9`).

---

## 6. Rodapé + CTA

### Arquetipo e Constraints
- **Arquetipo:** Footer Clássico Limpo
- **Constraints:**
  1. **Solid Color Block**
  2. **Textura Sutil** (Pattern de linhas ou logo marca d'água)

### Layout
- **Background:** `#0B7156` (Primary).
- **Texto:** Branco.
- **Conteúdo:**
  - Coluna 1: Logo/Nome + Endereço.
  - Coluna 2: Contato rápido/WhatsApp.
  - Coluna 3: CTA Final (Botão Branco com texto Verde).

### Micro-interação
- **Botão Whatsapp Flutuante:** Canto inferior direito, `fixed`, `z-index: 100`. Aparece após a primeira dobra (Hero sair da tela). Pulse effect suave.

---

## Resumo Técnico para Implementação

1.  **Parallax:** Implementar via JS simples ouvindo `scroll`.
    ```javascript
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const glassCard = document.querySelector('.hero-centered-content');
      // O conteudo sobe normal, mas podemos atrasar um pouco se quisermos
      // OU movemos o background (video)
      const videoBg = document.querySelector('.video-background');
      if(videoBg) videoBg.style.transform = `translateY(${scrolled * 0.5}px)`; // Move o video para baixo na metade da velocidade
    });
    ```

2.  **Responsividade:**
    - Mobile: Hero parallax desativado ou simplificado. Layouts split viram pilha (stack).
    - Tablet: Ajuste de paddings.

3.  **Performance:**
    - Vídeo: `loading="eager"`, poster image obrigatório.
    - Imagens: `loading="lazy"` (exceto Hero).
