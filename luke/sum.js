// 1. Create a function in [`sum.js`](./sum.js) which accepts any amount of numbers and return the sum of their addition
function sum() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }
  return res;
}

console.log(sum(1));
console.log(sum(1, 15));
console.log(sum(25, 25, 20));
