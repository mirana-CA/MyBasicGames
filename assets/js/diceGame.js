let diceImg = document.querySelector(".diceImg");
let player1Div = document.querySelector(".diceGame-ls");
let player2Div = document.querySelector(".diceGame-rs");
let victoryMessagePlayer1 = document.querySelector(".victoryMessagePlayer1");
let victoryMessagePlayer2 = document.querySelector(".victoryMessagePlayer2");
let player1TotalPoint = document.querySelector(".player1Point");
let player2TotalPoint = document.querySelector(".player2Point");
let player1CurrentPoint = document.querySelector(".player1CurrentPoint");
let player2CurrentPoint = document.querySelector(".player2CurrentPoint");
let rollDiceBtn = document.querySelector(".rollDiceBtn");
let holdBtn = document.querySelector(".holdBtn");
let playAgainBtn = document.querySelector(".playAgainBtn");
let player1CurrentPointValue = 0;
let player2CurrentPointValue = 0;
let player1TotalPointValue = 0;
let player2TotalPointValue = 0;

let one = "./assets/imgs/dice-one.png";
let two = "./assets/imgs/dice-two.png";
let three = "./assets/imgs/dice-three.png";
let four = "./assets/imgs/dice-four.png";
let five = "./assets/imgs/dice-five.png";
let six = "./assets/imgs/dice-six.png";
let diceArr = [
  {
    src: one,
    value: 1,
  },
  {
    src: two,
    value: 2,
  },
  {
    src: three,
    value: 3,
  },
  {
    src: four,
    value: 4,
  },
  {
    src: five,
    value: 5,
  },
  {
    src: six,
    value: 6,
  },
];
let index = null;
let src = null;
let player1 = true;
let finished = false;

const clickedAudio = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2997/2997-preview.mp3"
);
const victoryAuido = new Audio(
  "https://audio-previews.elements.envatousercontent.com/files/96176748/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22DRKGYPE-victory.mp3%22"
);
rollDiceBtn.addEventListener("click", function () {
  if (finished) {
    return;
  } else {
    clickedAudio.play();
    if (player1) {
      index = Math.floor(Math.random() * 6);
      diceImg.src = diceArr[index].src;
      if (diceArr[index].value != 1) {
        player1CurrentPointValue += diceArr[index].value;
        player1CurrentPoint.innerHTML = player1CurrentPointValue;
        holdBtn.addEventListener("click", function () {
          if (finished) {
            return;
          } else {
            clickedAudio.play();
            player1TotalPointValue += player1CurrentPointValue;
            player1TotalPoint.innerHTML = player1TotalPointValue;
            player1CurrentPointValue = 0;
            player1CurrentPoint.innerHTML = player1CurrentPointValue;
            if (player1TotalPointValue >= 100) {
              finished = true;
              victoryMessagePlayer1.style.opacity = "1";
              victoryAuido.play();
            } else {
              turnPlayer2();
            }
          }
        });
      } else {
        turnPlayer2();
      }
    } else {
      index = Math.floor(Math.random() * 6);
      diceImg.src = diceArr[index].src;

      if (diceArr[index].value != 1) {
        player2CurrentPointValue += diceArr[index].value;
        player2CurrentPoint.innerHTML = player2CurrentPointValue;
        holdBtn.addEventListener("click", function () {
          if (finished) {
            return;
          } else {
            clickedAudio.play();
            player2TotalPointValue += player2CurrentPointValue;
            player2TotalPoint.innerHTML = player2TotalPointValue;
            player2CurrentPointValue = 0;
            player2CurrentPoint.innerHTML = player2CurrentPointValue;
            if (player2TotalPointValue >= 100) {
              victoryMessagePlayer2.style.opacity = "1";
              victoryAuido.play();
              finished = true;
            } else {
              turnPlayer1();
            }
          }
        });
      } else {
        turnPlayer1();
      }
    }
  }
});
function turnPlayer2() {
  player1CurrentPointValue = 0;
  player1CurrentPoint.innerHTML = player1CurrentPointValue;
  player1 = false;
  player1Div.style.backgroundColor = "rgb(253, 158, 173)";
  player2Div.style.backgroundColor = "lightpink";
}
function turnPlayer1() {
  player2CurrentPointValue = 0;
  player2CurrentPoint.innerHTML = player2CurrentPointValue;
  player1 = true;
  player1Div.style.backgroundColor = "lightpink";
  player2Div.style.backgroundColor = "rgb(253, 158, 173)";
}
playAgainBtn.addEventListener("click", function () {
  clickedAudio.play();
  location.reload();
});
