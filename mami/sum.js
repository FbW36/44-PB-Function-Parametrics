// 1. Create a function in [`sum.js`](./sum.js) which accepts any amount of numbers and return the sum of their addition\
//    e.g\
//    `console.log(sum(1)) ---> 1`\
//     `console.log(sum(1, 15)) ---> 16`\
//    `console.log(sum(25, 25, 20)) ---> 70`

const sum = (...num) => {
  return num.reduce((acc, cur) => acc + cur);
};
console.log(sum(1));
console.log(sum(1, 15));
