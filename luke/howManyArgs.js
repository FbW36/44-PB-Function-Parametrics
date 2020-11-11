// 1. Create a function in [`howManyArgs.js`](./howManyArgs.js) which returns the total amount of arguments passed to it.\

function howManyArgs() {
  return arguments.length;
}

console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));
