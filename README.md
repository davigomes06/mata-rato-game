# Mata Rato Game 🐭🔨

> Jogo de agilidade e reflexos desenvolvido para testar a velocidade de reação e manipulação dinâmica de eventos.

O **Mata Rato Game** é um projeto de lógica interativa que foca no gerenciamento de estados de interface em tempo real. O desafio central foi criar um sistema de spawn aleatório e detecção de cliques que fosse preciso e responsivo, proporcionando uma experiência de jogo fluida e competitiva.

---

## 🔗 Links e Deploy
- **🚀 Visualizar Projeto:** https://falasembloqueio-create.github.io/mata-rato-game/
- **📂 Repositório Atual:** `https://github.com/davigomes06/mata-rato-game`

---

## 🛠️ Stack Tecnológica

- **HTML5:** Estrutura semântica para os elementos do jogo.
- **CSS3:** Animações e transições para feedback visual ao usuário.
- **JavaScript (Vanilla):** Motor lógico do jogo, manipulação do DOM e timers.

---

## 🚀 Engenharia e Funcionalidades

- **Lógica de Spawn Aleatório:** Algoritmo para gerar alvos em posições randômicas sem sobreposição.
- **Controle de Tempo (setInterval/setTimeout):** Gerenciamento preciso do ciclo de vida dos alvos na tela.
- **Sistema de Pontuação:** Contador dinâmico que atualiza o score instantaneamente após cada acerto bem-sucedido.
- **Dificuldade Progressiva:** Ajuste automático de velocidade conforme o jogador avança, aumentando o desafio técnico.

---

## 🧠 Desafios Técnicos e Soluções

O maior desafio técnico foi o **Gerenciamento de Event Listeners**. Como o jogo cria e remove elementos constantemente, foi necessário implementar uma lógica eficiente de delegação de eventos ou limpeza de memória para evitar vazamentos (*memory leaks*) que pudessem causar lentidão após longos períodos de jogo.

Além disso, foquei no **Feedback de Interface (UX)**, garantindo que o tempo de resposta entre o clique do usuário e a atualização do estado visual fosse o menor possível, demonstrando domínio sobre o ciclo de eventos do JavaScript.

---

### 👤 Autor
**davigomes06** - Desenvolvedor Full Stack com foco em lógica interativa e interfaces dinâmicas.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/davi-gomes-b326b139b/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/davigomes06)
