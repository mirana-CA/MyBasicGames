let submitBtn = document.querySelector(".submitBtn");
let nickInput = document.querySelector(".nickInput");
let meetUser = document.getElementById("meet_user");
let games = document.getElementById("games");
let user_nickname = document.querySelector(".user_nickname");
let exit = document.querySelector(".exit");

const savedNickname = localStorage.getItem("nickname");
if (savedNickname) {
  meetUser.style.display = "none";
  games.style.display = "block";
  user_nickname.innerHTML = `${savedNickname}!`;
}

submitBtn.addEventListener("click", function () {
  addNickname();
});

nickInput.addEventListener("keypress", function (e) {
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
  localStorage.clear();
});
