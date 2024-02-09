//gerenciamento de estados globais
const state = {
  view: {
    squares: document.querySelectorAll(".square"), //1
    enemy: document.querySelector(".enemy"), //2
    timeLeft: document.querySelector("#time-left"), //3
    score: document.querySelector("#score"),
  },
  values: {
    timerId: null,
    gameVelocity:1000,
    hitPosition: 0,//posição inicial
    result:0,//
  },
};

//4
function randomSquare() {
  //5
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });
  let randomNumber = Math.floor(Math.random() * 9); //6
  let randomSquare = state.view.squares[randomNumber]; //7
  randomSquare.classList.add("enemy"); //8
  state.values.hitPosition = randomSquare.id;// toda vez q eu sortear um quadrado aleátório,voi guardar o id do quadrado aleatório que eu sorteei.
}

//função para mover o inimigo
function moveEnemy() {
    //vai guardar dentro de uma variavel temporária(timerId), chamo a função randomsquare, a cada x tempo ele vai chamar a função, passo o tempo que eu defini no gameVelocity.
  state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}
//adicionar um evento de click do mouse dentro das caixinhas.
function addListenerHitBox() {
  //   //em state.view vai pegar as squares e definir uma função.
  state.view.squares.forEach(
    (square) => {
    //addEventListener função do javascript que fica escutando todo valor que é atibuido e chama uma função.
        square.addEventListener("mousedown", () => {
    //       //verificar se o id do elemento square(quadrado que o usuário clicou) é igual á posição do quadrado aleatório que foi soteado..
          if (square.id === state.values.hitPosition) {
            //se acertou o quadrado que o inimigo está, adiciono 1 a resultado.
            state.values.result++;
            //alterar o visual do score.
            state.view.score.textContent = state.values.result;
    //para o usuario não clicar no mesmo lugar seto para nulo.
            state.values.hitPosition = null;
    //         playSound("hit");
          }
        });
      }
  );
}

//função de início ou função main (init,initialize... oq importa é o conceito), função principal para chamar funções iniciais.
//inicia o jogo movendo o inimigo e escutando os clicks.
function initialize() {
  moveEnemy();
  addListenerHitBox()
}

//executar oq está no escopo da função
initialize();
