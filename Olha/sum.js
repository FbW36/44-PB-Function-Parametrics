//* A function which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
	return [...args].reduce((acc, curr) => acc + curr);
}

console.log(sum(1)); // ---> 1
console.log(sum(1, 15)); // ---> 16
console.log(sum(25, 25, 20)); // ---> 70