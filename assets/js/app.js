let submitBtn = document.querySelector(".submitBtn");
let nickInput = document.querySelector(".nickInput");
let meetUser = document.getElementById("meet_user");
let games = document.getElementById("games");
let user_nickname = document.querySelector(".user_nickname");
let game_box = document.querySelectorAll(".game_box");
let exit = document.querySelector(".exit");
const clickedAudio = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2997/2997-preview.mp3"
);
const savedNickname = localStorage.getItem("nickname");
if (savedNickname) {
  meetUser.style.display = "none";
  games.style.display = "block";
  user_nickname.innerHTML = `${savedNickname}!`;
}

submitBtn.addEventListener("click", function () {
  clickedAudio.play();
  addNickname();
});

nickInput.addEventListener("keypress", function (e) {
  clickedAudio.play();
  if (e.key === "Enter") {
    addNickname();
  }
});

function addNickname() {
  const nickname = nickInput.value.trim();
  if (nickname) {
    localStorage.setItem("nickname", nickname);
    nickInput.value = "";
    meetUser.style.display = "none";
    games.style.display = "block";
    user_nickname.innerHTML = `${nickname}!`;
  }
}
exit.addEventListener("click", function () {
  clickedAudio.play();
  localStorage.clear();
});
game_box.forEach((btn) => {
  btn.addEventListener("click", function () {
    clickedAudio.play();
  });
});
