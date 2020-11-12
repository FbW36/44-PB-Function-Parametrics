//1.Complete the function in twofer.js so that it returns "Two for me and one for you" when no arguments are passed
const twofer = (name) => {
  if (name) {
    return `Two for me and one for ${name}`;
  } else {
    return `Two for me and one for you`;
  }
};
console.log(twofer("Fran"));
console.log(twofer());

//2. Complete the function in exponent.js so that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
const exponent = (base, exponent) => {
  if (exponent) {
    return Math.pow(base, exponent);
  } else {
    return Math.pow(base, 2);
  }
};
console.log(exponent(3, 3));
console.log(exponent(3));

//3.Create a function in howManyArgs.js which returns the total amount of arguments passed to it.
const howManyArgs = (...items) => items.length;

console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));

//4.Create a function in sum.js which accepts any amount of numbers and return the sum of their addition
const sum = (...num) => {
  return num.reduce((acc, curr) => acc + curr);
};

console.log(sum(1));
console.log(sum(1, 15));
console.log(sum(25, 25, 20));

//5.Bonus: Create a function in average.js which accepts any amount of numbers and returns their mean average
const average = (...num) => {
  return num.reduce((acc, curr) => acc + curr) / num.length;
};
console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));
