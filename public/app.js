let billInput = document.querySelector(".bill-input");
let tipAmountBtn = document.querySelectorAll(".tip-amount-select");
let customAmount = document.querySelector("#custom");
let peopleInput = document.querySelector(".people-input");
let tipPerPersonTotal = document.querySelector(".tip-total-pp");
let totalPerPerson = document.querySelector(".total-pp");
let reset = document.querySelector(".reset");

tipPerPersonTotal.innerHTML = "$0.00";
totalPerPerson.innerHTML = "$0.00";

function calculate(event) {
  let bill = billInput.value;
  let people = peopleInput.value;

  const dataValue = parseFloat(event.target.getAttribute("data-value"));

  let totalTip = (bill * dataValue) / people;
  let totalBill = bill / people + totalTip / people;
  console.log(totalTip);
  console.log(totalBill);

  tipPerPersonTotal.innerHTML = `$${totalTip.toFixed(2)}`;
  totalPerPerson.innerHTML = `$${totalBill.toFixed(2)}`;
}

tipAmountBtn.forEach((button) => {
  button.addEventListener("click", calculate);
});

reset.addEventListener("click", () => {
  window.location.reload();
});

//TO-DO
//input validation
//custom button value
