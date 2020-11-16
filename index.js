// Your code here
let dodger = document.getElementById("dodger");
let game = document.getElementById("game");
const dodgerWidth = dodger.offsetWidth;
const gameWidth = game.offsetWidth;

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  let right = parseInt(leftNumbers, 10) + dodgerWidth;
  if (right < gameWidth) {
    dodger.style.left = `${left + 1}px`;
  }
}

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowLeft": {
      moveDodgerLeft();
      break;
    }
    case "ArrowRight": {
      moveDodgerRight();
      break;
    }
  }
});
