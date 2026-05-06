# FlashMEDs

FlashMEDs e um app web simples para estudar medicina com flashcards curtos, revisao espacada e um painel de administracao para criar, editar e publicar cartas.

O projeto foi criado com React, TypeScript e Vite, com dados persistidos localmente no navegador via `localStorage`.

## Funcionalidades

- Estudo direto por flashcards, com pergunta e resposta em tela cheia.
- Avaliacao da resposta com quatro niveis: `Errei`, `Dificil`, `Bom` e `Facil`.
- Revisao espacada baseada no desempenho de cada carta.
- Fila de estudo randomizada dentro dos grupos de prioridade.
- Filtros por area, tema, dificuldade e tipo de carta.
- Painel de administracao para editar, publicar, arquivar e excluir flashcards.
- Banco inicial com cartas de medicina em temas como antibioticos, farmacologia, pre-natal, pediatria, anatomia e conceitos clinicos.

## Como Rodar Localmente

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador:

```text
http://127.0.0.1:5173/
```

## Scripts Disponiveis

```bash
npm run dev
```

Roda o app em modo desenvolvimento com Vite.

```bash
npm run build
```

Compila TypeScript e gera a versao de producao em `dist/`.

```bash
npm run preview
```

Serve localmente a versao gerada pelo build.

## Deploy no GitHub Pages

O projeto esta preparado para publicar pelo GitHub Actions.

Depois de enviar os arquivos para o GitHub:

1. Acesse `Settings` > `Pages` no repositorio.
2. Em `Build and deployment`, selecione `GitHub Actions`.
3. Faca um push na branch `main`.
4. Aguarde a action `Deploy to GitHub Pages` finalizar.

O site sera publicado no endereco indicado pelo proprio GitHub Pages, geralmente:

```text
https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/
```

## Estrutura Principal

```text
src/
  components/          Componentes reutilizaveis da interface
  data/                Banco inicial de flashcards
  pages/               Telas principais do app
  services/            Persistencia em localStorage
  spacedRepetition/    Logica de revisao espacada
  types/               Tipos TypeScript
  utils/               Funcoes auxiliares
```

## Como as Cartas Sao Escolhidas

O app usa apenas cartas com status `publicado`. Depois aplica os filtros ativos e monta a fila de estudo considerando:

- Cartas nunca estudadas entram na fila.
- Cartas ja estudadas entram quando `nextReviewAt` estiver vencido.
- A opcao de revisar todos ignora o vencimento.
- Cartas marcadas como `Errei` e `Dificil` recebem prioridade maior.
- Dentro de cada grupo de prioridade, a ordem e embaralhada.

## Banco de Flashcards

O banco inicial fica em:

```text
src/data/seedFlashcards.ts
```

Ao abrir o app, as cartas sao copiadas para o `localStorage`. Se novas cartas forem adicionadas ao seed depois, o app mescla automaticamente as cartas novas sem apagar edicoes locais existentes.

## Observacao Medica

Este app e uma ferramenta de estudo. Posologias, indicacoes, contraindicacoes e condutas devem ser revisadas com fontes clinicas atualizadas, protocolos locais e orientacao profissional antes de qualquer uso assistencial.

## Tecnologias

- React
- TypeScript
- Vite
- CSS puro
- localStorage
