// let scores = [10, 20, 30, 40, 50];
// function findAverag(arrayList: number[]): number {
//   let sum = 0;
//   for (let i = 0; i < arrayList.length; i++) {
//     sum = sum + arrayList[i];
//   }
//   return sum / arrayList.length;
// }
// console.log(findAverag(scores));

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function sumMatrix(arr: number[][]): number {
  let total = 0;
  for (const row of arr) {
    for (const num of row) {
      total += num;
    }
  }
  return total;
}
console.log(sumMatrix(matrix));
