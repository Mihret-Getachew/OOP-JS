export function double(num: number): number {
  return 2 * num;
}

export function times100(num: number): number {
  let x = num * 100;
  return x;
}

export function myMap(arr: any[any], func: Function): any[any] {
  let newArr = [];

  for (let elem of arr) {
    newArr.push(func(elem));
  }

  return newArr;
}

// let anoyFunc = (num: number) => {
//   let x = num * num;

//   return x;
// };

// let anoyFunc2 = function (num: number) {
// }

// console.log(anoyFunc(100));
