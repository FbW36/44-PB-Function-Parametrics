//* A function which returns the total amount of arguments passed to it.

const howManyArgs = (...args) => {
	return [...args].length;
}

console.log(howManyArgs()); // ---> 0
console.log(howManyArgs(1, false, "hello")); // ---> 3
console.log(howManyArgs("better")); // ---> 1