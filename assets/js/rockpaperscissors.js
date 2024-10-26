let rockBtn = document.querySelector(".rockBtn");
let paperBtn = document.querySelector(".paperBtn");
let scissorsBtn = document.querySelector(".scissorsBtn");
let yourPoint = document.querySelector(".yourPoint");
let compPoint = document.querySelector(".compPoint");
let yourChoice = document.querySelector(".yourChoice");
let compChoice = document.querySelector(".compChoice");
let result = document.querySelector(".result");
let choices = document.querySelector(".choices");
let clickText = document.querySelector(".click_text");
let userNick = document.querySelectorAll(".user_nick");
let yourPointValue = 0;
let compPointValue = 0;
const savedNickname = localStorage.getItem("nickname");
userNick.forEach((e) => (e.innerHTML = `${savedNickname}`));

function handlePoints() {
  yourPoint.innerHTML = `${yourPointValue}`;
  compPoint.innerHTML = `${compPointValue}`;
}

function compChooses() {
  let choices = ["ROCK", "PAPER", "SCISSORS"];
  let compChoiceValue = choices[Math.floor(Math.random() * 3)];
  compChoice.innerHTML = `${compChoiceValue}`;
  return compChoiceValue;
}

function itIsTie() {
  result.innerHTML = "NO ONE WIN";
  result.style.color = "blue";
  result.style.backgroundColor = "lightblue";
  result.style.display = "block";
  choices.style.display = "block";
  clickText.style.display = "none";
  handlePoints();
}
function youWin() {
  result.innerHTML = "YOU WIN";
  result.style.color = "green";
  result.style.backgroundColor = "lightgreen";
  result.style.display = "block";
  choices.style.display = "block";
  clickText.style.display = "none";
  yourPointValue++;
  handlePoints();
}
function youLose() {
  result.innerHTML = "YOU LOSE";
  result.style.color = "red";
  result.style.backgroundColor = "lightsalmon";
  result.style.display = "block";
  choices.style.display = "block";
  clickText.style.display = "none";
  compPointValue++;
  handlePoints();
}
rockBtn.addEventListener("click", function () {
  yourChoice.innerHTML = "ROCK";
  compChooses();
  let compChoiceValue = compChooses();
  switch (compChoiceValue) {
    case "PAPER":
      youLose();
      break;
    case "SCISSORS":
      youWin();
      break;
    case "ROCK":
      itIsTie();
      break;
    default:
      break;
  }
});

paperBtn.addEventListener("click", function () {
  yourChoice.innerHTML = "PAPER";
  compChooses();
  let compChoiceValue = compChooses();
  switch (compChoiceValue) {
    case "PAPER":
      itIsTie();
      break;
    case "SCISSORS":
      youLose();
      break;
    case "ROCK":
      youWin();
      break;
    default:
      break;
  }
});

scissorsBtn.addEventListener("click", function () {
  yourChoice.innerHTML = "SCISSORS";
  compChooses();
  let compChoiceValue = compChooses();
  switch (compChoiceValue) {
    case "PAPER":
      youWin();
      break;
    case "SCISSORS":
      itIsTie();
      break;
    case "ROCK":
      youLose();
      break;
    default:
      break;
  }
});
