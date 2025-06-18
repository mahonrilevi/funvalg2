const gameBoard = document.getElementById("gameBoard");
const turnIndicator = document.getElementById("turnIndicator");
const resultMessage = document.getElementById("resultMessage");
const restartBtn = document.getElementById("restartBtn");

const winModal = document.getElementById("winModal");
const winnerText = document.getElementById("winnerText");
const quitBtn = document.getElementById("quitBtn");
const nextRoundBtn = document.getElementById("nextRoundBtn");

const startScreen = document.getElementById("startScreen");
const chooseX = document.getElementById("chooseX");
const chooseO = document.getElementById("chooseO");
const startVsCpu = document.getElementById("startVsCpu");
const startVsPlayer = document.getElementById("startVsPlayer");

let board = Array(9).fill("");
let currentPlayer = "X";
let gameActive = true;
let playerMark = "X";
let opponentIsCpu = false;

function createBoard() {
  gameBoard.innerHTML = "";
  board.forEach((cell, index) => {
    const button = document.createElement("button");
    button.className =
      "w-full aspect-square text-4xl font-bold bg-gray-800 hover:bg-gray-700 rounded-md";
    button.textContent = cell;
    button.addEventListener("click", () => makeMove(index));
    gameBoard.appendChild(button);
  });
}

function makeMove(index) {
  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  createBoard();

  if (checkWinner()) {
    winnerText.textContent = currentPlayer;
    winModal.classList.remove("hidden");
    gameActive = false;
    return;
  }

  if (board.every(cell => cell !== "")) {
    resultMessage.textContent = "¡Empate!";
    resultMessage.classList.remove("hidden");
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  turnIndicator.textContent = `Turno: ${currentPlayer}`;
}

function checkWinner() {
  const winCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  return winCombos.some(([a, b, c]) => {
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}
restartBtn.addEventListener("click", () => {
  resetGame();
});

nextRoundBtn.addEventListener("click", () => {
  resetGame();
});

quitBtn.addEventListener("click", () => {
  location.reload();
});

function resetGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;
  turnIndicator.textContent = `Turno: ${currentPlayer}`;
  resultMessage.classList.add("hidden");
  winModal.classList.add("hidden");
  createBoard();
}

chooseX.addEventListener("click", () => {
  playerMark = "X";
  chooseX.classList.add("bg-blue-600");
  chooseO.classList.remove("bg-blue-600");
});

chooseO.addEventListener("click", () => {
  playerMark = "O";
  chooseO.classList.add("bg-blue-600");
  chooseX.classList.remove("bg-blue-600");
});

startVsCpu.addEventListener("click", () => {
  opponentIsCpu = true;
  startGame();
});

startVsPlayer.addEventListener("click", () => {
  opponentIsCpu = false;
  startGame();
});

function startGame() {
  board = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;
  turnIndicator.textContent = `Turno: ${currentPlayer}`;
  resultMessage.classList.add("hidden");
  winModal.classList.add("hidden");
  startScreen.classList.add("hidden");
  createBoard();
}

function animate({duration, draw, timing}) {
  let start = performance.now();

  requestAnimationFrame(function animateFrame(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animateFrame);
    }
  });
}

function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; true; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}

window.addEventListener("DOMContentLoaded", () => {
  const ball = document.getElementById("ball");
  const field = document.body;

  let height = field.clientHeight - ball.clientHeight;
  let width = 100;
  animate({
    duration: 2000,
    timing: makeEaseOut(bounce),
    draw: function(progress) {
      ball.style.top = height * progress + 'px';
    }
  });
  animate({
    duration: 2000,
    timing: makeEaseOut(quad),
    draw: function(progress) {
      ball.style.left = width * progress + "px";
    }
  });

  setTimeout(() => {
    ball.style.display = "none";
  }, 2000);
});