// 1. **Bonus:** Create a function in [`average.js`](./average.js) which accepts any amount of numbers and returns their mean average.\
//    e.g\
//    `console.log(average(0)) ---> 0`\
//    `console.log(average(1, 2)) ---> 1.5`\
//    `console.log(average(1, 3, 6, 10)) ---> 5`\
//    `console.log(average(12, 14, 16)) ---> 14`
const average = (...num) => num.reduce((arr, cur) => arr + cur) / num.length;
console.log(average(1, 3, 6, 10));
