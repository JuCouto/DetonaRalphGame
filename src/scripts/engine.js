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
  state.values.hitPosition = randomSquare.id;
}

//mover o inimigo
function moveEnemy() {
    //vai guardar dentro de uma variavel temporária(timerId), chamo a função randomsquare, a cada x tempo ele vai chamar a função, passo o tempo que eu defini no gameVelocity.
  state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}
//adicionar um evento de click do mouse dentro das caixinhas.
function addListenerHitBox() {
  //   //em state.view vai pegar as squares e definir uma função.
  state.view.squares.forEach(
    (square) => {}
    //     square.addEventListener("mousedown", () => {
    //       //verificar se o id do elemento square é igual á posição do elemento selecionado.
    //       if (square.id === state.values.hitPosition) {
    //         state.values.result++;
    //         state.view.score.textContent = state.values.result;
    //         state.values.hitPosition = null;
    //         playSound("hit");
    //       }
    //     });
    //   }
  );
}

//função de início ou função main (init,initialize... oq importa é o conceito), função principal para chamar funções iniciais.
function initialize() {
  moveEnemy();
}

//executar oq está no escopo da função
initialize();
