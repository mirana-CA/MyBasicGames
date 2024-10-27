let chooseYourCharacter = document.getElementById("chooseYourCharacter");
let battleSection = document.getElementById("battleSection");
let theCharacters = document.querySelectorAll(".theCharacter");
let battleUserCharacter = document.querySelector(".battleUserCharacter");
let pcCharacter = document.querySelector(".pcCharacter");
let loseMessage = document.querySelector(".loseMessage");
let winMessage = document.querySelector(".winMessage");
let lowPunch = document.querySelector(".lowPunch");
let normalPunch = document.querySelector(".normalPunch");
let highPunch = document.querySelector(".highPunch");
let userNick = document.querySelector(".userNick");
let userPoint = document.querySelector(".userPoint");
let pcPoint = document.querySelector(".pcPoint");
let playAgain = document.querySelectorAll(".playAgain");
const savedNickname = localStorage.getItem("nickname");
userNick.innerHTML = savedNickname;

let finished = false;
let userHealth = 100;
let pcHealth = 100;
userPoint.innerHTML = `${userHealth}%`;
pcPoint.innerHTML = `${pcHealth}%`;
theCharacters.forEach((character) => {
  character.addEventListener("click", () => {
    let userCharacter = character.getAttribute("src");
    chooseYourCharacter.style.display = "none";
    battleSection.style.display = "block";
    console.log(userCharacter);
    battleUserCharacter.src = userCharacter;
    alert(`yungul zerbede 10 can itir ehtimali 50%dir
orta zerbede 20 can itir ehtimali 33%dir
agir zerbede 30 can itir ehtimali 20%dir`);
  });
});

lowPunch.addEventListener("click", function () {
  if (finished) {
    return;
  } else {
    pcPunch();
    if (Math.floor(Math.random() * 2) == 1) {
      pcHealth = pcHealth - 10;
      makeZero(pcHealth);
      pcPoint.innerHTML = `${pcHealth}%`;
    }
    checkWinner(userHealth, pcHealth);
  }
});

normalPunch.addEventListener("click", function () {
  if (finished) {
    return;
  } else {
    pcPunch();
    if (Math.floor(Math.random() * 3) == 1) {
      pcHealth = pcHealth - 20;
      makeZero(pcHealth);
      pcPoint.innerHTML = `${pcHealth}%`;
    }
    checkWinner(userHealth, pcHealth);
  }
});

highPunch.addEventListener("click", function () {
  if (finished) {
    return;
  } else {
    pcPunch();
    if (Math.floor(Math.random() * 5) == 1) {
      pcHealth = pcHealth - 30;
      makeZero(pcHealth);
      pcPoint.innerHTML = `${pcHealth}%`;
    }
    checkWinner(userHealth, pcHealth);
  }
});

function pcPunch() {
  arr = ["lowPunch", "normalPunch", "highPunch"];
  let index = Math.floor(Math.random() * 3);
  console.log(index);

  console.log(arr[index]);

  switch (arr[index]) {
    case "lowPunch":
      if (Math.floor(Math.random() * 2) == 1) {
        userHealth = userHealth - 10;
        makeZero(userHealth);
        userPoint.innerHTML = `${userHealth}%`;
      }

      break;
    case "normalPunch":
      if (Math.floor(Math.random() * 3) == 1) {
        userHealth = userHealth - 20;
        makeZero(userHealth);
        userPoint.innerHTML = `${userHealth}%`;
      }
      break;
    case "highPunch":
      if (Math.floor(Math.random() * 5) == 1) {
        userHealth = userHealth - 30;
        makeZero(userHealth);
        userPoint.innerHTML = `${userHealth}%`;
      }
      break;
    default:
      break;
  }
}

function checkWinner(userHealth, pcHealth) {
  if (userHealth <= 0) {
    loseMessage.style.opacity = "1";
    finished = true;
  } else if (pcHealth <= 0) {
    winMessage.style.opacity = "1";
    finished = true;
  }
}

function makeZero(health) {
  if (health < 0) {
    health = 0;
  }
}
playAgain.forEach((e) => {
  e.addEventListener("click", function () {
    location.reload();
    console.log("clicked");
  });
});
