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
let hitedUser = document.querySelector(".hitedUser");
let hitedPc = document.querySelector(".hitedPc");
const clickedAudio = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2997/2997-preview.mp3"
);
const victoryAuido = new Audio(
  "https://audio-previews.elements.envatousercontent.com/files/96176748/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22DRKGYPE-victory.mp3%22"
);
const defeatAuido = new Audio(
  "https://audio-previews.elements.envatousercontent.com/files/320962561/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22FTSL8HK-defeated.mp3%22"
);

const userHitedAuido = new Audio(
  "https://audio-previews.elements.envatousercontent.com/files/48611838/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22N348HVM-female-oh.mp3%22"
);
const pcHitedAuido = new Audio(
  "https://audio-previews.elements.envatousercontent.com/files/127935926/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22PZBVY4R-robot-swoosh.mp3%22"
);

const savedNickname = localStorage.getItem("nickname");
userNick.innerHTML = savedNickname;
let finished = false;
let userHealth = 100;
let pcHealth = 100;
userPoint.innerHTML = `${userHealth}%`;
pcPoint.innerHTML = `${pcHealth}%`;

theCharacters.forEach((character) => {
  character.addEventListener("click", () => {
    clickedAudio.play();
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
  clickedAudio.play();
  if (finished) {
    return;
  } else {
    pcPunch();
    if (Math.floor(Math.random() * 2) == 1) {
      hitPc();
      pcHealth = pcHealth - 10;
      if (pcHealth < 0) {
        pcHealth = 0;
      }
      pcPoint.innerHTML = `${pcHealth}%`;
      handleHealthColor(pcHealth, pcPoint);
    }
    checkWinner(userHealth, pcHealth);
  }
});

normalPunch.addEventListener("click", function () {
  clickedAudio.play();
  if (finished) {
    return;
  } else {
    pcPunch();
    if (Math.floor(Math.random() * 3) == 1) {
      hitPc();
      pcHealth = pcHealth - 20;
      if (pcHealth < 0) {
        pcHealth = 0;
      }
      pcPoint.innerHTML = `${pcHealth}%`;
      handleHealthColor(pcHealth, pcPoint);
    }
    checkWinner(userHealth, pcHealth);
  }
});

highPunch.addEventListener("click", function () {
  clickedAudio.play();
  if (finished) {
    return;
  } else {
    pcPunch();
    if (Math.floor(Math.random() * 5) == 1) {
      hitPc();
      pcHealth = pcHealth - 30;
      if (pcHealth < 0) {
        pcHealth = 0;
      }
      pcPoint.innerHTML = `${pcHealth}%`;
      handleHealthColor(pcHealth, pcPoint);
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
        hitUser();
        userHealth = userHealth - 10;
        if (userHealth < 0) {
          userHealth = 0;
        }
        userPoint.innerHTML = `${userHealth}%`;
        handleHealthColor(userHealth, userPoint);
      }

      break;
    case "normalPunch":
      if (Math.floor(Math.random() * 3) == 1) {
        hitUser();
        userHealth = userHealth - 20;
        if (userHealth < 0) {
          userHealth = 0;
        }
        userPoint.innerHTML = `${userHealth}%`;
        handleHealthColor(userHealth, userPoint);
      }
      break;
    case "highPunch":
      if (Math.floor(Math.random() * 5) == 1) {
        hitUser();
        userHealth = userHealth - 30;
        if (userHealth < 0) {
          userHealth = 0;
        }
        userPoint.innerHTML = `${userHealth}%`;
        handleHealthColor(userHealth, userPoint);
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
    defeatAuido.play();
  } else if (pcHealth <= 0) {
    victoryAuido.play();
    winMessage.style.opacity = "1";
    finished = true;
  }
}

playAgain.forEach((e) => {
  e.addEventListener("click", function () {
    location.reload();
    console.log("clicked");
  });
});

function hitPc() {
  pcHitedAuido.play();
  hitedPc.style.animation = "hitedAnimation 900ms 1";
  setTimeout(() => {
    hitedPc.style.animation = "characterAnimation 1000ms infinite";
  }, 1100);
}

function hitUser() {
  userHitedAuido.play();
  hitedUser.style.animation = "hitedAnimation 900ms 1";
  setTimeout(() => {
    hitedUser.style.animation = "characterAnimation 1000ms infinite";
  }, 1100);
}
function handleHealthColor(health, point) {
  if (health > 30 && health <= 60) {
    point.style.backgroundColor = "yellow";
  } else if (health <= 30) {
    point.style.backgroundColor = "red";
  }
}
