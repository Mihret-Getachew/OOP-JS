// question 3

let amount = Number(prompt("enter amount"));
let rate = Number(prompt("enter rate")) / 100;
let year = Number(prompt("enter year"));
function calcuateInterest(amount, rate, year) {
  for (let x = 1; x < year; x++) {
    let ineterst = rate * amount;
    amount = amount + ineterst;
  }
  console.log(amount);
}
calcuateInterest(amount, rate, year);
