//* A function that still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.

const exponent = (num, exp = 2) => {
	return num ** exp;
}

console.log(exponent(3, 3)); // ---> 27
console.log(exponent(3)); // ---> 9