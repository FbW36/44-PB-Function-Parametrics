//1
const withoutArgument = (argu = "you") => `Two for me and one for ${argu}`;
console.log(withoutArgument());

//2
const withoutExponent = (base, exponent = 2) => Math.pow(base, exponent);
console.log(withoutExponent(5));

//3
const howManyArgs = (...args) => args.length;
console.log(howManyArgs(1, false, "hello"));

//4
function sum(...arg) {
  return arg.reduce((box, value) => box + value);
}
console.log("sum=", sum(25, 25, 20));

//5
const average = (...arg) =>
  arg.reduce((box, value) => box + value) / arg.length;
console.log("average=", average(1, 3, 6, 10));
