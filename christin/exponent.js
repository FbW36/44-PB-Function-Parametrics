/**Complete the function in exponent.js so that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
e.g
console.log(exponent(3, 3)) ---> 27
console.log(exponent(3)) ---> 9 */

function getExponent(number, exponent) {
  let result;
  if (exponent) {
    result = Math.pow(number, exponent);
  } else {
    result = Math.pow(number, 2);
  }
  return result;
}

console.log(getExponent(3, 3)); // 27
console.log(getExponent(3)); // 9

// ---------------------------------------

const exponent2 = (num, exp = 2) => {
  return Math.pow(num, exp);
};

console.log(exponent2(3, 3)); //  27
console.log(exponent2(3)); //  9
