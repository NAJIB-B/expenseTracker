const dname = document.querySelector(".name");
const date = document.querySelector(".date");
const amount = document.querySelector(".amount");
const addExpenseBtn = document.querySelector(".addExpense");
const table = document.querySelector("tbody");
const addItem = function (nameValue, dateValue, amountValue) {
  const html = `
    <tr>
    <td>${nameValue} </td>
    <td> ${dateValue}</td>
    <td>$${amountValue}</td>
    <td><button class="deleteBtn">X</button></td>
    </tr>
    `;
  table.insertAdjacentHTML("beforeend", html);
  dname.value = date.value = amount.value = "";
};

addExpenseBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let nameValue = dname.value;
  let dateValue = date.value;
  let amountValue = amount.value;

  if (nameValue && dateValue && amountValue) {
    if (document.querySelector(".defaultMessage")) {
      table.lastElementChild.remove();
      addItem(nameValue, dateValue, amountValue);
    } else {
      addItem(nameValue, dateValue, amountValue);
    }
  } else {
    alert(`please fill out all the input`);
  }
});
table.addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest("tr").remove();
  }
  if (table.children.length === 1) {
    const html = `
      <tr>
      <td class="defaultMessage">No expenses added yet</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>`;
    table.insertAdjacentHTML("beforeend", html);
  }
});
