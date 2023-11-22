let billInput = document.querySelector(".bill-input").value;
let tipAmountBtn = document.querySelector(".tip-amount-select");
let customAmount = document.querySelector("#custom").value;
let peopleInput = document.querySelector(".people-input").value;
let tipPerPersonTotal = document.querySelector(".tip-total-pp");
let totalPerPerson = document.querySelector(".total-pp");
let reset = document.querySelector(".reset");

console.log(billInput);

//reset calculator
reset.addEventListener("click", () => {
  window.location.reload();
});
