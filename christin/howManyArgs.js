/**Create a function in howManyArgs.js which returns the total amount of arguments passed to it.
e.g
console.log(howManyArgs()) ---> 0
console.log(howManyArgs(1, false, "hello")) ---> 3
console.log(howManyArgs("better")) ---> 1 */

const howManyArgs = (...args) => {
  return args.length;
};

console.log(howManyArgs("test", 6, "test2", false)); //4
