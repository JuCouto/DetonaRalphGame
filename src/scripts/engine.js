//gerenciamento de estados globais
const state = {
  view: {
    squares: document.querySelectorAll(".square"), //1
    enemy: document.querySelector(".enemy"), //2
    timeLeft: document.querySelector("#time-left"), //3
    score: document.querySelector("#score"),
  },
  values: {
    //values guardam valores e também coisas que estão acontecendo por baixo dos panos.
    timerId: null,
    gameVelocity: 1000,
    hitPosition: 0, //posição inicial
    result: 0, //score inicia em 0
    currentTime: 60,
  },
  actions: {
    //chamadas de funções, que executam ações.
    countDownTimerId: setInterval(countDown, 1000), // 4
  },
};

//função para ter um quadrado aleatório para sortear o inimigo.
function randomSquare() {
  //5
  state.view.squares.forEach((square) => {
    square.classList.remove("enemy");
  });
  let randomNumber = Math.floor(Math.random() * 9); //6
  let randomSquare = state.view.squares[randomNumber]; //7
  randomSquare.classList.add("enemy"); //8
  state.values.hitPosition = randomSquare.id; //9
}

//função para mover o inimigo
function moveEnemy() {
  state.values.timerId = setInterval(randomSquare, state.values.gameVelocity); //10
}

//adicionar um evento de click do mouse dentro das caixinhas.
function addListenerHitBox() {
  state.view.squares.forEach(
    //11
    (square) => {
      square.addEventListener("mousedown", () => {//12
        
        if (square.id === state.values.hitPosition) {//13
          state.values.result++; //14
          state.view.score.textContent = state.values.result; //15
          state.values.hitPosition = null; //16
          playSound("hit");
        } else {
          playSound("wrong");
        }
      });
    }
  );
}

//
function countDown() {
 
  state.values.currentTime--; //17
  state.view.timeLeft.textContent = state.values.currentTime; //18
  
  if (state.values.currentTime <= 0) {//19
    clearInterval(state.actions.countDownTimerId);
    clearInterval(state.actions.timerId);
    alert("Game Over! O seu resultado foi: " + state.values.result);
  }
  if (state.values.currentTime == 1) {
    playSound("gameover");
  }
}

function playSound(audioName) {
  let audio = new Audio(`./src/audios/${audioName}.m4a`);
  audio.volume = 0.1;
  audio.play();
}

//função de início ou função main (init,initialize... oq importa é o conceito), função principal para chamar funções iniciais.
//inicia o jogo movendo o inimigo e escutando os clicks.
function initialize() {
  moveEnemy();
  addListenerHitBox();
}

//executar oq está no escopo da função
initialize();
