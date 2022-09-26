const gameContainer = document.querySelector(".game-container");
const gameDivs = document.querySelectorAll(".game-div");
const startBtn = document.querySelector(".start-game-btn");
const guesses = document.querySelector(".guesses");
let firstGame = true;
let count = 0;
let red = 0;

gameDivs.forEach((div) => {
  div.addEventListener("click", () => {
    if (firstGame === true) {
      alert("You must click the button to start the game");
    }
  });
});

startBtn.addEventListener("click", () => {
  firstGame = false;
  count = 0;
  gameDivs.forEach((div) => {
    randomizeColor();
    div.addEventListener("click", () => {
      if (div.classList.contains("blue")) {
        setTimeout(() => {
          div.classList.add("black");
        }, 1000);
      }
      div.classList.remove("black");
      count = count + 1;
      guesses.innerText = count;
      if (div.classList.contains("red")) {
        red = red + 1;
      }

      if (red === 2) {
        red = 0;
        setTimeout(() => {
          alert(`You have completed the game with ${count} guesses`);
          resetGame();
        }, 200);
      }
    });
  });
  startBtn.style.display = "none";
});

function randomizeColor() {
  gameDivs.forEach((div) => {
    const randomNumber = Math.floor(Math.random() * 6);
    div.style.order = randomNumber;
  });
}

function resetGame() {
  gameDivs.forEach((div) => {
    if (div.classList.contains("red")) {
      div.classList.add("black");
    }
  });
  guesses.innerHTML = 0;
  count = 0;
  red = 0;
  randomizeColor();
}
