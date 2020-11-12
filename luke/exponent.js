// 1. Complete the function in [`exponent.js`](./exponent.js) so that it still calculates the power of a
// number even if the`exp` argument is not passed to it.The default `exp` should be set to 2.\
function exponent(num1, num2) {
  if (num2) {
    return num1 ** num2;
  } else {
    return num1 ** 2;
  }
}

console.log(exponent(3, 3));
console.log(exponent(3));
