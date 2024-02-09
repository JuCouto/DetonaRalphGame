
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
3. Utilizando o mouse você deve clicar no quadrado onde o Ralph aparece, quanto mais vezes acertar , maior a sua pontuação.


6. ### Créditos

Este jogo foi desenvolvido como parte de um projeto educacional da Digital Innovation One.
Alguns detalhes em CSS e imagens foram alteradas e divergem do projeto original fornecido durante a aula.

6. ### Comentários no código
##### arquivo engine

* state - objeto de gerenciamento de estados globais.
* no view configuro a manipulação das classes dos meus componentes do HTML.
- 1 manipular a classname , querySelectorAll pq pode ter mais de um, e passo o valor que todas precisam ter(nesse caso "square")
- 2 queryselector, pq só tenho um inimigo por vez .
- 3 passo com # pq é um id.
- 4 mesma configuração do timer em moveenemy, só estou guaradando diretamente na variável. assim que carrega o código ele lê a variável e inicia. o  timer está dentro de uma função porque eu chamo ela no initializer e quero ter mais controle sobre ele. 
- 5 primeiro vai definir que vai limpar a classe caso ela exista, limpando a classe enemy de todos.
- 6  pega um número aleatório de 1 a 9,pega a parte inteira dele(floor, arredonda o valor),multiplica  de 1 a 9,sorteia um número aleatório(para sortear uma caixinha), 
- 7 pega um quadrado aleatório, dentro do número aleatório que recebi no randomNumber
- 8 no quadrado adiciona a classe inimigo.
- 9 toda vez q eu sortear um quadrado aleátório,voi guardar o id do quadrado aleatório que eu sorteei..
- 10 vai guardar dentro de uma variavel temporária(timerId), chamo a função randomsquare, a cada x tempo ele vai chamar a função, passo o tempo que eu defini no gameVelocity.
- 11 em state.view vai pegar as squares e definir uma função.
- 12 addEventListener função do javascript que fica escutando todo valor que é atibuido e chama uma função.
- 13 verificar se o id do elemento square(quadrado que o usuário clicou) é igual á posição do quadrado aleatório que foi soteado..
- 14 se acertou o quadrado que o inimigo está, adiciono 1 a resultado.
- 15 alterar o visual do score.
- 16 para o usuario não clicar no mesmo lugar seto para nulo.
- 17 toda vez que chamar vai reduzir o tempo(subtrair do 60 inicial.)
- 18 vai atualizar o tempo de maneira visual.
- 19 verifica se o tempo acabou,

7. ### Estrutura

1- src com pastas audios, images, scripts, styles.

2- arquivo engine equivale ao main.

3- as variáveis ficam centralizadas na engine (referente a motor).

4- Dois tipos de variáveis :
   - views: manipula algo visual.
   - values: manipula algo não visual
