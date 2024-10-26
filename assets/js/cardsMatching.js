let cardsElem = [
  {
    id: 1,
    src: "",
    opened: false,
  },
  {
    id: 2,
    src: "",
    opened: false,
  },
  {
    id: 3,
    src: "",
    opened: false,
  },
  {
    id: 4,
    src: "",
    opened: false,
  },
  {
    id: 5,
    src: "",
    opened: false,
  },
  {
    id: 6,
    src: "",
    opened: false,
  },
  {
    id: 7,
    src: "",
    opened: false,
  },
  {
    id: 8,
    src: "",
    opened: false,
  },
];
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
  let myCard = document.querySelectorAll(".card");
  myCard.forEach((c, index) => {
    c.addEventListener("click", () => {
      let mainCard = c.querySelector(".mainCard");
      let cardCover = c.querySelector(".cardCover");
      cardCover.style.transform = " rotateY(180deg)";
      mainCard.style.transform = " rotateY(0deg)";
      card.opened = true;
      openedCardsCount++;
    });
  });
});
