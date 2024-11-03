let checkBtn = document.querySelector(".checkBtn");
let numberInput = document.querySelector(".numberInput");
let myNumStatus = document.querySelector(".myNumStatus");
let pcMainNumber = document.querySelector(".pcMainNumber");
let myScorePoint = document.querySelector(".myScorePoint");
let myHighScorePoint = document.querySelector(".myHighScorePoint");
let playAgain = document.querySelector(".playAgain");
const clickedAudio = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2997/2997-preview.mp3"
);
const victoryAuido = new Audio(
  "https://audio-previews.elements.envatousercontent.com/files/96176748/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22DRKGYPE-victory.mp3%22"
);
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
    clickedAudio.play();
    if (numberInput.value < randomNum) {
      myNumStatus.innerHTML = "TOO LOW!";
      handleScore();
    } else if (numberInput.value > randomNum) {
      myNumStatus.innerHTML = "TOO HIGH!";
      handleScore();
    } else {
      myNumStatus.innerHTML = "CORRECT!";
      victoryAuido.play();
      pcMainNumber.innerHTML = randomNum;
      myScorePoint.innerHTML = score;
      maxScore = localStorage.getItem("highScore") ?? handleMaxScore();

      if (maxScore < score) {
        handleMaxScore();
      }
    }
  }
});
playAgain.addEventListener("click", function () {
  clickedAudio.play();
  location.reload();
});
