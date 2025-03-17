# Amigo Secreto

Este projeto é uma aplicação web desenvolvida com HTML, CSS e JavaScript que permite aos usuários inserir nomes de amigos e realizar um sorteio aleatório para definir quem será o "amigo secreto". A ideia é praticar lógica de programação e manipulação do DOM de forma simples e intuitiva.

---

## Sobre o Projeto

A aplicação possibilita que você:
- **Adicione Nomes:** Insira nomes de amigos através de um campo de texto e clique em "Adicionar". Se o campo estiver vazio, um alerta solicitará que um nome válido seja informado.
- **Visualize a Lista:** Todos os nomes inseridos são automaticamente exibidos em uma lista na página.
- **Realize o Sorteio:** Clique no botão "Sortear Amigo" para que o sistema selecione aleatoriamente um dos nomes e exiba o resultado na tela.

---

## Funcionalidades

- **Entrada e Validação:** Captura o nome inserido, valida se o campo não está vazio e exibe um alerta se necessário.
- **Atualização Dinâmica da Lista:** A cada novo nome adicionado, a lista é atualizada automaticamente para refletir os nomes inseridos.
- **Sorteio Aleatório:** Utiliza funções JavaScript para selecionar um índice aleatório do array de nomes e exibe o resultado.

---

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos, dispostos de forma sequencial:

1. **index.html**  
   Contém a estrutura da página, links para os arquivos CSS e JavaScript, além dos elementos HTML para entrada de nomes, exibição da lista e botão de sorteio.
 
2. **style.css**  
   Responsável pela estilização da aplicação. Define o layout, cores, fontes e responsividade para proporcionar uma interface agradável e funcional.

3. **app.js**  
   Implementa a lógica do aplicativo. Nele, são declaradas funções para adicionar nomes à lista, validar entradas, atualizar a visualização e realizar o sorteio aleatório.

---
