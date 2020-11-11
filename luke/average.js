// 1. ** Bonus:** Create a function in [`average.js`](./average.js) which accepts any amount of numbers and returns their mean average.\
function average() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  res = res / arguments.length;
  return res;
}

console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));
