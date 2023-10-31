import promptSync from "prompt-sync";
const prompt = promptSync();

let num = Number(prompt("enter number"));

function MULTI(num) {
  let multi = 1;
  while (num > 1) {
    multi *= num % 10;
    num = Math.floor(num / 10);
  }
  console.log(multi);
}
MULTI(num);
