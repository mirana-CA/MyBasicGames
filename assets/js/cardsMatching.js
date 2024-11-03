let cardsElem = [
  {
    id: 1,
    src: "",
  },
  {
    id: 2,
    src: "",
  },
  {
    id: 3,
    src: "",
  },
  {
    id: 4,
    src: "",
  },
  {
    id: 5,
    src: "",
  },
  {
    id: 6,
    src: "",
  },
  {
    id: 7,
    src: "",
  },
  {
    id: 8,
    src: "",
  },
];
const clickedAudio = new Audio(
  "https://assets.mixkit.co/active_storage/sfx/2997/2997-preview.mp3"
);
const victoryAuido = new Audio(
  "https://audio-previews.elements.envatousercontent.com/files/96176748/preview.mp3?response-content-disposition=attachment%3B+filename%3D%22DRKGYPE-victory.mp3%22"
);
let watermelon =
  "https://png.pngtree.com/png-vector/20220912/ourmid/pngtree-watermelon-cartoon-fruit-png-image_6172609.png";
let strawberry =
  "https://i.pinimg.com/736x/8f/bc/75/8fbc75fff818757c5e50aeb319db5d90.jpg";
let grape =
  "https://static.vecteezy.com/system/resources/previews/027/205/109/non_2x/kids-drawing-cartoon-illustration-grapes-fruit-icon-isolated-on-white-background-vector.jpg";
let cherry =
  "https://img.freepik.com/premium-vector/cherry-vector-illustration-fresh-cherry-fruit-cherry-cartoon-isolated_648083-221.jpg";
let fruits = [
  watermelon,
  strawberry,
  grape,
  cherry,
  watermelon,
  strawberry,
  grape,
  cherry,
];
let cards = document.querySelector(".cards");
let openedCardsCount = 0;
fruits.forEach((fruit) => {
  let index = Math.floor(Math.random() * 8);

  while (cardsElem[index].src) {
    index = Math.floor(Math.random() * 8);
  }
  if (!cardsElem[index].src) {
    cardsElem[index].src = fruit;
  }
});
let firstCard = null;
let matchedCards = 0;
let clickedCount = document.querySelector(".clickedCount");
let clickedCountValue = 0;
clickedCount.innerHTML = clickedCountValue;
let winMessage = document.querySelector(".winMessage");
cardsElem.forEach((card) => {
  cards.innerHTML += `
    <div class="card">
      <img class="mainCard" src="${card.src}" alt="card" />
      <img
        class="cardCover"
        src="https://img.freepik.com/premium-vector/question-mark-sign-with-round-button-pink-ask-help_300191-1567.jpg"
        alt="cover"
      />
    </div>
  `;
});

let myCard = document.querySelectorAll(".card");
myCard.forEach((c) => {
  c.addEventListener("click", () => {
    clickedAudio.play();
    if (c.classList.contains("matched")) {
      return;
    }
    let mainCard = c.querySelector(".mainCard");
    let cardCover = c.querySelector(".cardCover");
    clickedCountValue++;
    clickedCount.innerHTML = clickedCountValue;
    if (!firstCard) {
      firstCard = c;
      openedCardsCount++;

      cardCover.style.transform = "rotateY(180deg)";
      mainCard.style.transform = "rotateY(0deg)";
    } else if (firstCard !== c) {
      cardCover.style.transform = "rotateY(180deg)";
      mainCard.style.transform = "rotateY(0deg)";

      setTimeout(() => {
        if (firstCard.querySelector(".mainCard").src === mainCard.src) {
          c.style.boxShadow = "0px 5px 15px yellowgreen";
          firstCard.style.boxShadow = "0px 5px 15px yellowgreen";
          firstCard.classList.add("matched");
          c.classList.add("matched");
          matchedCards += 2;
          if (matchedCards == 8) {
            winMessage.style.opacity = "1";
            victoryAuido.play();
          }
        } else {
          firstCard.querySelector(".cardCover").style.transform =
            "rotateY(0deg)";
          firstCard.querySelector(".mainCard").style.transform =
            "rotateY(180deg)";
          cardCover.style.transform = "rotateY(0deg)";
          mainCard.style.transform = "rotateY(180deg)";
        }
        firstCard = null;
      }, 500);
    }
  });
});
