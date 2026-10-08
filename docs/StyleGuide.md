GUIA DE ESTILO — HOLOTYPE
Direção visual: pixel art cinematográfica, científica e sóbria, com estética de interface de catálogo/exploração paleontológica.
1. Paleta de cores
Cor	Função	HEX aprox.
Preto fóssil	Fundo, cards, overlays	#0A1010
Verde petróleo profundo	Fundo secundário, UI	#0E1D21
Verde ardósia	Superfícies e elementos secundários	#1B2A2D
Cinza fóssil	Texto secundário / ícones	#7A9593
Marfim fóssil	Títulos e texto principal	#D0D1C3
Verde mineral	Botões / elementos ativos	#304B42
Turquesa desaturado	Links, foco, destaques	#5E9995
Ocre fóssil	Detalhes ambientais / iluminação	#A2704C
Âmbar	Luz quente / destaque visual	#CE8B53
Terracota	Elementos quentes secundários	#7A3D28
Vermelho fóssil	Erros / alertas	#9A4A3F


Regra: cores sempre desaturadas e naturais. O contraste vem principalmente de luminosidade, não de cores extremamente vibrantes.
2. Tipografia
- Título / marca: monoespaçada, geométrica, condensada, em caixa alta, com espaçamento entre letras.
- Corpo: sans-serif limpa, discreta e altamente legível.
- Labels / metadados: monoespaçada ou sans-serif condensada, frequentemente em CAIXA ALTA.
- Aparência geral: terminal científico + museu de história natural + interface de exploração.
Google Fonts sugeridas:
- Títulos: Share Tech Mono, Space Mono ou IBM Plex Mono
- Corpo: Inter ou IBM Plex Sans
- Metadados: Roboto Mono ou JetBrains Mono
Evitar fontes excessivamente futuristas, gamer ou cartunescas.
3. Estilo de pixel art
- Pixel aparente: aproximadamente 4–6 px em elementos grandes; detalhes podem utilizar pixels menores.
- Pixel art de alta densidade e alto nível de detalhe, não estética 8-bit simplificada.
- Contornos definidos por agrupamentos de pixels, sem anti-aliasing aparente.
- Sombreamento feito por blocos de tons sucessivos, nunca por blur.
- Dithering pontual e discreto para atmosfera, céu, água, névoa e transições naturais.
- Iluminação cinematográfica, com luz quente de entardecer contrastando com sombras verde-azuladas.
- Profundidade criada por camadas de silhuetas, contraste atmosférico e perspectiva, não por efeitos digitais suaves.
- Vegetação, fósseis e criaturas devem possuir textura orgânica detalhada.
4. Componentes de UI
Cards
- Fundo quase preto/translúcido.
- Cantos predominantemente retos, com pequenos recortes/chanfros pixelados.
- Bordas finas: 1–2 px.
- Bordas em verde/cinza dessaturado.
- Sem sombras suaves.
Inputs
- Fundo: #0A1010 / #0E1D21
- Borda: #304344
- Altura generosa, aproximadamente 48–52 px.
- Ícones lineares discretos.
- Texto alinhado à esquerda.
- Foco: borda #5E9995 + pequeno aumento de contraste.
Botão primário
- Fundo: #304B42
- Texto: #D0D1C3
- Forma retangular.
- Hover: aproximadamente #3D5C51
- Active: mais escuro.
- Disabled: #1B2A2D, texto #667573.
Links
- #5E9995
- Sublinhado ou indicador visual discreto.
- Hover: #8AAEAA
- Nunca usar azul saturado padrão.
Estados
- Normal → baixo contraste.
- Hover → aumento sutil de luminosidade.
- Focus → borda turquesa claramente visível.
- Disabled → baixo contraste e menor luminosidade.
- Error → vermelho fóssil #9A4A3F, sem vermelho neon.
5. Tom e atmosfera
Científico, contemplativo e misterioso.
A interface deve transmitir a sensação de acessar um arquivo paleontológico antigo, mas através de uma tecnologia moderna e funcional.
A estética deve parecer pertencente a um museu de história natural digital, não a um jogo infantil de dinossauros.
6. NUNCA fazer
- ❌ Gradientes digitais lisos.
- ❌ Sombras suaves / box-shadow exagerado.
- ❌ Glow neon.
- ❌ Cores extremamente saturadas.
- ❌ Elementos com aparência cartoon ou infantil.
- ❌ Ícones 3D ou glossy.
- ❌ Elementos UI anti-aliased destoando do pixel art.
- ❌ Bordas arredondadas excessivamente modernas.
- ❌ Glassmorphism evidente.
- ❌ Fontes gamer/futuristas exageradas.
- ❌ Padrões genéricos de “site de dinossauros”.
- ❌ Misturar pixel art de baixa resolução com ilustrações digitais lisas.
- ❌ Alterar arbitrariamente a paleta ou iluminação da cena de fundo.
Regra principal: toda nova tela deve parecer que pertence ao mesmo sistema e ao mesmo universo visual da tela de login, mesmo quando o conteúdo e o layout forem diferentes.
