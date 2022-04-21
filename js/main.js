const inputItem = document.querySelector(".inputItem");
const addBtn = document.querySelector(".addBtn");
const ulEement = document.querySelector("ul");

let value = inputItem.value;

inputItem.addEventListener("change", (e) => {
  value = e.target.value;
});

addBtn.addEventListener("click", () => {
  const itemContainer = document.createElement("div");
  console.log(value);
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const li = document.createElement("li");
  li.innerText = value;
  const editBtn = document.createElement("button");
  editBtn.innerText = "edit";
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "delete";
  ulEement.appendChild(itemContainer);
  itemContainer.appendChild(checkBox);
  itemContainer.appendChild(li);
  itemContainer.appendChild(editBtn);
  itemContainer.appendChild(deleteBtn);
});
