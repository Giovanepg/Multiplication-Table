# 🧮 Gerador de Tabuada

Aplicação web simples feita em **HTML**, **CSS** e **JavaScript** que gera tabuadas de multiplicação, divisão, soma e subtração de um número escolhido pelo usuário. É possível selecionar uma operação específica ou gerar todas de uma vez.

---

## ⚙️ Como funciona
O usuário informa um número e escolhe a operação no menu.  
Ao clicar em **Calcular**, o script JavaScript percorre os valores de 1 a 10 e exibe os resultados na tela.

---

## 🗂️ Estrutura dos arquivos

### 📄 `index.html`
Responsável pela estrutura e conteúdo da página.  
Contém:
- Um campo de entrada (`input`) para o número base da tabuada;  
- Um menu suspenso (`select`) para escolher a operação desejada (multiplicação, divisão, soma, subtração ou todas);  
- Um botão **“Calcular”** que executa a função principal;  
- Áreas (`div`) para exibição dos resultados de cada operação.  

O arquivo também faz a ligação com os scripts **`main.js`** e as folhas de estilo **`header.css`** e **`main.css`**.

---

### 🎨 `header.css`
Define o **estilo do cabeçalho** e dos elementos de entrada.  
Principais características:
- Zera margens e espaçamentos com o seletor universal `*`;  
- Define uma fonte padrão e aplica cor de fundo (`aquamarine`) ao corpo da página;  
- Configura o cabeçalho (`header`) com **layout em flexbox**, espaçamento interno e leve sombra;  
- Estiliza a imagem, campo de entrada e botões com **bordas arredondadas** e margens;  
- Garante uma aparência organizada e amigável.

---

### 🎨 `main.css`
Responsável pelo **estilo da área principal (main)** e do **container de resultados**.  
Principais regras:
- Centraliza o conteúdo com **flexbox**, alinhando e justificando os elementos;  
- Define espaçamento interno (`padding: 100px`) para o `main`;  
- Estabelece largura total (`width: 100%`) e organização dos blocos de resultado;  
- Adiciona espaçamento entre os elementos dentro do container para manter uma exibição limpa das tabuadas.

---

### 💻 `main.js`
Contém toda a **lógica de cálculo e interação** da aplicação.  
- Captura os elementos do DOM (`input`, `select`, `divs` e `button`);  
- Define a função `calc()` que:
  - Lê o valor digitado e a operação selecionada;  
  - Limpa os resultados anteriores;  
  - Usa um laço `for` (1 a 10) para gerar a tabuada da operação escolhida;  
  - Exibe o resultado dinamicamente na tela usando **template strings**;  
- Adiciona um **event listener** ao botão, acionando o cálculo ao clique.

---

### 📦 Estrutura de Pastas

<img src="/static/img/capCaptura de tela 2025-10-30 181807.png" alt="">

---

### 🖼️ Tela de Funcionamento da Calculadora

Abaixo você pode visualizar a interface e o funcionamento do **Gerador de Tabuada** em execução 👇

## 🧩 Demonstração das Telas

### 🟢 **Tela Inicial**

<img src="/static/img/Gerador de Tabuada - 1° Tela.png" alt="">

Tela inicial do **Gerador de Tabuada**, onde o usuário encontra o campo para inserir o valor, o seletor de operação e o botão **Calcular**.  
No centro da tela, há espaços vazios prontos para exibir os resultados. O visual limpo e o gradiente suave de fundo tornam a interface intuitiva e agradável.

---

### ✖️ **Tabuada de Multiplicação**

<img src="/static/img/Gerador de Tabuada - 2° Tela.png" alt="">

Após inserir o número e escolher **Multiplicação**, a aplicação gera automaticamente a tabuada de 1 a 10, exibindo os resultados na tela.  
Cada linha segue o formato clássico: `1 x 2 = 2`, `2 x 2 = 4`, etc.

---

### ➗ **Tabuada de Divisão**

<img src="/static/img/Gerador de Tabuada - 3° Tela.png" alt="">

Quando a operação **Divisão** é selecionada, a aplicação calcula e exibe os resultados com **duas casas decimais**.  
Por exemplo: `1 / 2 = 0.50`, `3 / 2 = 1.50`, e assim por diante.  
Ideal para treinar divisões com precisão.

---

### ➕ **Tabuada de Soma**

<img src="/static/img/Gerador de Tabuada - 4° Tela.png" alt="">

Na opção **Soma**, são exibidos os resultados de cada adição — simples e direta.  
Exemplo: `1 + 2 = 3`, `2 + 2 = 4`, etc.  
Essa opção é perfeita para quem está começando a aprender operações básicas.

---

### ➖ **Tabuada de Subtração**
<img src="/static/img/Gerador de Tabuada - 5° Tela.png" alt="">

Selecionando **Subtração**, a ferramenta mostra o resultado de cada operação subtraindo o número informado.  
Os resultados podem ser **negativos**, o que ajuda o usuário a compreender melhor a relação entre números positivos e negativos.

---

### 🧮 **Todas as Operações**
<img src="/static/img/Gerador de Tabuada - 6° Tela.png" alt="">

Ao escolher **“Todas as operações”**, o gerador exibe **quatro colunas lado a lado**, mostrando as tabuadas de multiplicação, divisão, soma e subtração simultaneamente.  
É uma ótima forma de comparar os resultados e visualizar o comportamento de cada operação.
