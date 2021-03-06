// 1. Create a function in [`howManyArgs.js`](./howManyArgs.js) which returns the total amount of arguments passed to it.\
//    e.g\
//    `console.log(howManyArgs()) ---> 0 `\
//    `console.log(howManyArgs(1, false, "hello")) ---> 3` \
//    `console.log(howManyArgs("better")) ---> 1`
const howManyArgs = (...arg) => arg.length;

console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));
