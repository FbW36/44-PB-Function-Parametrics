//1
const twoFor = (arg = "you") => `Two for me and one for ${arg}`;
// console.log(twoFor());

//2
const exponent = (base, exponent = 2) => Math.pow(base, exponent);
// console.log(exponent(3));

//3
const howManyArgs = (...args) => args.length;
// console.log(howManyArgs(1, false, "hello"));

//4
function sum(...arg) {
  // return Array.from(arguments).reduce((acc, curr) => acc + curr);
  return arg.reduce((acc, curr) => acc + curr);
}
// console.log(sum(25, 25, 20));

//5
const average = (...arg) => arg.reduce((acc, curr) => acc + curr) / arg.length;
// console.log(average(1, 3, 6, 10));
