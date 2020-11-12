//* A function which accepts any amount of numbers and returns their mean average.

const average = (...args) => {
	let sum = [...args].reduce((acc, curr) => acc + curr, 0);
	let average = sum / [...args].length;
	return average;
}

console.log(average(0)); // ---> 0
console.log(average(1, 2)); // ---> 1.5
console.log(average(1, 3, 6, 10)); // ---> 5
console.log(average(12, 14, 16)); // ---> 14