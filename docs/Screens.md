# Telas do Holotype

Este documento descreve **o que cada tela contém e como se comporta**. O visual vem do `StyleGuide.md` e das imagens aprovadas em `docs/screens/`. Os requisitos (FR, BR) estão em `Requirements.md`.

Os itens marcados com **(sugestão)** foram propostos e podem ser trocados.

## Ordem de implementação

1. Login
2. Cadastro
3. Layout base (cabeçalho e rodapé)
4. Catálogo
5. Detalhe da espécie
6. Favoritos
7. Notícias
8. Painel do curador
9. Formulário de espécie
10. Gerenciar usuários
11. Página não encontrada / erro

## Acesso por papel

| Tela | Visitante | USER | CURATOR |
|---|---|---|---|
| Login, Cadastro | sim | redireciona para `/` | redireciona para `/` |
| Catálogo, Detalhe, Notícias | sim | sim | sim |
| Favoritos | não (vai para `/login`) | sim | sim |
| Painel, Formulário, Usuários | não | não (403) | sim |

## Regras que valem para todas as telas

- **Carregando:** indicador discreto no estilo da interface, sem animação suave de spinner moderno.
- **Erro de rede:** mensagem curta na cor de erro (`#9A4A3F`) com botão "Tentar novamente".
- **Sessão expirada:** o front tenta renovar a sessão sozinho. Se falhar, vai para `/login` e volta à tela anterior depois do login.
- **Textos da interface:** português (pt-BR).

---

## 1. Login (`/login`)

- **Objetivo:** entrar na conta.
- **Quem acessa:** visitante.
- **Conteúdo:** logo, "Bem-vindo(a)", subtítulo, campo **E-mail**, campo **Senha**, caixa "Manter conectado", botão "Entrar →", link "Criar conta".
- **Mudanças em relação à versão atual:** o campo "Usuário" vira "E-mail" e entra a caixa "Manter conectado". "Esqueci a senha" fica fora do MVP.
- **Ações:** enviar o formulário chama `POST /auth/login`. Sucesso leva a `/` (ou à tela anterior). "Criar conta" leva a `/cadastro`.
- **Estados:** campos vazios ("Preencha e-mail e senha."), credenciais erradas ("E-mail ou senha inválidos."), servidor fora do ar, botão desabilitado com "Entrando...".

## 2. Cadastro (`/cadastro`)

- **Objetivo:** criar conta de usuário comum.
- **Quem acessa:** visitante.
- **Conteúdo:** o mesmo cartão do login, com campos **Nome de usuário**, **E-mail**, **Senha**, **Confirmar senha**, botão "Criar conta" e link "Já tenho conta".
- **Ações:** enviar chama `POST /auth/register`. Sucesso já deixa o usuário logado e leva a `/`.
- **Estados:** e-mail ou usuário já em uso, senha curta (mínimo de 8 caracteres) **(sugestão)**, senhas diferentes, erro de servidor. Os erros aparecem junto ao campo.

## 3. Layout base (cabeçalho e rodapé)

- **Objetivo:** navegação comum a todas as telas, exceto login e cadastro, que mantêm o cabeçalho atual.
- **Cabeçalho:** logo e "HOLOTYPE" (leva a `/`), links "Catálogo" e "Notícias". Visitante vê o botão "Entrar". USER vê "Favoritos" e o menu da conta com "Sair". CURATOR vê também "Painel".
- **Rodapé:** versão e a frase "CIÊNCIA / EVOLUÇÃO / CONHECIMENTO", como no login.
- **Mobile:** o menu vira uma lista recolhível.

## 4. Catálogo (`/`)

- **Objetivo:** explorar as espécies (FR01, FR02).
- **Quem acessa:** todos.
- **Conteúdo:** barra de busca por nome; filtros por **período** (Triássico, Jurássico, Cretáceo), **clado**, **dieta** (carnívoro, herbívoro, onívoro) e **tamanho** (faixas **(sugestão)**: pequeno até 2 m, médio 2 a 8 m, grande 8 a 15 m, gigante acima de 15 m); grade de cards.
- **Card da espécie:** ilustração em pixel art, nome popular, nome científico, selos de período e dieta, coração de favoritar.
- **Ações:** clicar no card abre `/especies/:id`. O coração favorita (visitante é levado ao login). Filtros combináveis e botão "Limpar filtros".
- **Paginação:** 12 por página **(sugestão)**.
- **Estados:** vazio ("Nenhuma espécie encontrada."), carregando, erro.

## 5. Detalhe da espécie (`/especies/:id`)

- **Objetivo:** ler os dados completos de uma espécie (FR03).
- **Quem acessa:** todos.
- **Conteúdo:** ilustração grande, nome popular e científico, período, clado, dieta, tamanho estimado em metros, descrição e o coração de favoritar.
- **Para curador:** botões "Editar" e "Excluir" (com confirmação).
- **Ações:** voltar ao catálogo preservando os filtros.
- **Estados:** espécie inexistente leva à página 404.

## 6. Favoritos (`/favoritos`)

- **Objetivo:** ver as espécies favoritas (FR08).
- **Quem acessa:** USER e CURATOR.
- **Conteúdo:** a mesma grade de cards do catálogo, só com as favoritas.
- **Ações:** o coração remove dos favoritos e o card some da lista.
- **Estados:** vazio ("Você ainda não favoritou nenhuma espécie." com link para o catálogo).

## 7. Notícias (`/noticias`)

- **Objetivo:** feed de descobertas paleontológicas (FR12).
- **Quem acessa:** todos.
- **Conteúdo:** lista de cards com título, fonte, data, resumo curto e link "Ler na fonte".
- **Ações:** o link abre a fonte original em outra aba (BR08).
- **Estados:** carregando, fonte indisponível ("Não foi possível carregar as notícias agora."), vazio.

## 8. Painel do curador (`/curador`)

- **Objetivo:** gerenciar o catálogo (FR09, FR10).
- **Quem acessa:** CURATOR.
- **Conteúdo:** título, botão "Nova espécie", abas "Espécies" e "Usuários", tabela com nome, período, clado, dieta e as ações "Editar" e "Excluir".
- **Ações:** "Nova espécie" abre o formulário; "Excluir" pede confirmação.
- **Estados:** tabela vazia, carregando, erro, sucesso ao salvar ou excluir (mensagem curta).

## 9. Formulário de espécie (`/curador/especies/nova` e `/curador/especies/:id/editar`)

- **Objetivo:** criar ou editar uma espécie (FR10).
- **Quem acessa:** CURATOR.
- **Campos:** nome popular, nome científico, período (lista com as três opções, BR03), clado, dieta, tamanho estimado em metros, descrição e imagem (URL no MVP). Os campos exatos do modelo **(sugestão)** podem mudar quando o banco for desenhado.
- **Ações:** "Salvar" e "Cancelar". Na edição, os campos vêm preenchidos.
- **Estados:** erros por campo (obrigatório, valor fora das opções), erro de servidor, botão desabilitado ao salvar.

## 10. Gerenciar usuários (`/curador/usuarios`)

- **Objetivo:** promover usuários a curador (FR11).
- **Quem acessa:** CURATOR.
- **Conteúdo:** busca por nome ou e-mail e tabela com usuário, e-mail, papel e a ação "Promover a curador" (só aparece para USER).
- **Ações:** promover pede confirmação. A BR07 impede remover o último curador.
- **Estados:** vazio, carregando, erro.

## 11. Página não encontrada / erro

- **Objetivo:** rota inexistente, erro inesperado ou acesso negado (403).
- **Conteúdo:** mensagem curta no tom do projeto (por exemplo, "Fóssil não encontrado.") e botão "Voltar ao catálogo".
- **Para o 403:** a mesma estrutura, com o texto "Você não tem acesso a esta área."
