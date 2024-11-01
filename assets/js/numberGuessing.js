let checkBtn = document.querySelector(".checkBtn");
let numberInput = document.querySelector(".numberInput");
let myNumStatus = document.querySelector(".myNumStatus");
let pcMainNumber = document.querySelector(".pcMainNumber");
let myScorePoint = document.querySelector(".myScorePoint");
let myHighScorePoint = document.querySelector(".myHighScorePoint");
let playAgain = document.querySelector(".playAgain");
let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);

let finded = false;
let score = 100;
let maxScore = localStorage.getItem("highScore");
if (maxScore) {
  myHighScorePoint.innerHTML = maxScore;
}
myScorePoint.innerHTML = score;

function handleScore() {
  score--;
  myScorePoint.innerHTML = score;
}
function handleMaxScore() {
  localStorage.setItem("highScore", score);
  myHighScorePoint.innerHTML = score;
}
checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (finded) {
    return;
  } else {
    if (numberInput.value < randomNum) {
      myNumStatus.innerHTML = "TOO LOW!";
      handleScore();
    } else if (numberInput.value > randomNum) {
      myNumStatus.innerHTML = "TOO HIGH!";
      handleScore();
    } else {
      myNumStatus.innerHTML = "CORRECT!";
      pcMainNumber.innerHTML = randomNum;
      handleScore();
      maxScore = localStorage.getItem("highScore") ?? handleMaxScore();

      if (maxScore < score) {
        handleMaxScore();
      }
    }
  }
});
playAgain.addEventListener("click", function () {
  location.reload();
});
