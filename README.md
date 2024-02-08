
 <h1 align="center">Detona Ralph</h1>

 Jogo com tema Detona Ralph, criado a partir do desafio do Bootcamp de jogos da DIO (Digital Innovation One)


<h3 align="left">Tecnologias utilizadas</h3>

<div> 
 <img align="Center" alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
 <img align="Center" alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
 <img align="Center" alt="JavaScript" src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
</div>
</br>

- HTML5 e CSS3 para a estrutura e aparência do jogo.
- JavaScript para a lógica de programação e interatividade.
- Sprites e imagens e fontes customizadas para criar a estética do universo de Detona Ralph.

- ### Funcionalidades do Jogo

- **Sistema de Pontuação**: Acompanhe sua pontuação à medida que progride no jogo e desafie seus amigos a superá-la, clique no quadrado que o Ralph se encontra para impedi-lo de detonar o prédio.

### Como Jogar

1. Clone este repositório para sua máquina local.
2. Abra o arquivo `index.html` em seu navegador web.
3. Use as setas direcionais para mover o personagem e a barra de espaço para interagir.
4. Divirta-se explorando e coletando moedas, mas fique atento aos inimigos!

5. ### Créditos

Este jogo foi desenvolvido como parte de um projeto educacional da Digital Innovation One.
Alguns detalhes em CSS e imagens foram alteradas e divergem do projeto original fornecido durante a aula.

5. ### Comentários no código
##### arquivo engine
- 1-manipular a classname , querySelectorAll pq pode ter mais de um, e passo o valor que todas precisam ter(nesse caso "square")
- 2-queryselector, pq só tenho um inimigo por vez .
- 3-passocom # pq é um id.
- 4-ter um quadrado aleatóriopara sortear o inimigo
- 5- primeiro vai definir que vai limpar a classe caso ela exista, limpando a classe enemy de todos.
- 6-sorteia um número aleatório, pega a parte inteira dele(floor), de 1 a 9
- 7-pega um quadrado aleatório, dentro do número aleatório que recebi no randomNumber
- 8-no quadrado adiciona a classe inimigo
