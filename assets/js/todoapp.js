let input = document.querySelector(".itemInput");
let searchInput = document.querySelector(".searchInput");
let addBtn = document.querySelector(".addBtn");
let sortBtn = document.querySelector(".sortBtn");
let ul = document.querySelector("ul");
let listArr = [];
let id = 1;
addBtn.addEventListener("click", function (e) {
  if (input.value) {
    createElem();
    addLine();
    deleteItem();
    editItem();
  }
});
sortBtn.addEventListener("click", function () {
  sorting();
  addLine();
  deleteItem();
});

searchInput.addEventListener("input", function (e) {
  searching();
  sorting();
  addLine();
  deleteItem();
});
function createElem() {
  //   listArr.push(input.value.trim());

  ul.innerHTML += `      
         <li>
            
            <p>
            <span class="listId">${id}</span>
             <span class="listText">${input.value.trim()}</span>
             </p>

              <div class="buttons">
            <button class="deleteBtn">
              <i class="fa-solid fa-trash"></i>
            </button>
            <button class="editBtn">
                <i class="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
          </li>`;
  id++;
  input.value = "";
  console.log(listArr);
}
function addLine() {
  let li = document.querySelectorAll("li");
  li.forEach((liElem) => {
    let listText = liElem.querySelector(".listText");
    liElem.addEventListener("click", function () {
      listText.classList.toggle("activeLine");
    });
  });
}
function deleteItem() {
  let deleteBtn = document.querySelectorAll(".deleteBtn");
  deleteBtn.forEach((deleteBtnElem) => {
    deleteBtnElem.addEventListener("click", function () {
      deleteBtnElem.parentElement.parentElement.remove();
    });
  });
}
function editItem() {
  let editBtn = document.querySelectorAll(".editBtn");
  editBtn.forEach((editBtnElem) => {
    editBtnElem.addEventListener("click", function () {
      let li = document.querySelectorAll("li");
      li.forEach((liElem) => {
        let listText = liElem.querySelector(".listText");
        input.value = listText.textContent;
      });

      editBtnElem.parentElement.parentElement.remove();
    });
  });
}

function sorting() {
  let listText = Array.from(document.querySelectorAll(".listText"));

  let sortedlistText = listText.sort((a, b) =>
    a.textContent.localeCompare(b.textContent)
  );
  ul.innerHTML = ``;
  sortedlistText.forEach((elem, index) => {
    ul.innerHTML += `      
        <li>
           
           <p>
           <span class="listId">${index + 1}</span>
            <span class="listText">${elem.textContent}</span>
            </p>

             <div class="buttons">
           <button class="deleteBtn">
             <i class="fa-solid fa-trash"></i>
           </button>
           <button class="editBtn">
               <i class="fa-regular fa-pen-to-square"></i>
           </button>
         </div>
         </li>`;
  });
}
function searching() {
  let listText = Array.from(document.querySelectorAll(".listText"));
  console.log(e.target.value);
  ul.innerHTML = ``;
  listText.forEach((listTextElem, index) => {
    console.log(listTextElem);

    if (listTextElem.textContent.includes(e.target.value)) {
      ul.innerHTML += `      
                  <li>
                     
                     <p>
                     <span class="listId">${index + 1}</span>
                      <span class="listText">${listTextElem.textContent}</span>
                      </p>
          
                       <div class="buttons">
                     <button class="deleteBtn">
                       <i class="fa-solid fa-trash"></i>
                     </button>
                     <button class="editBtn">
                         <i class="fa-regular fa-pen-to-square"></i>
                     </button>
                   </div>
                   </li>`;
    }
  });
}
