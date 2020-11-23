/**Bonus: Create a function in average.js which accepts any amount of numbers and returns their mean average.
e.g
console.log(average(0)) ---> 0
console.log(average(1, 2)) ---> 1.5
console.log(average(1, 3, 6, 10)) ---> 5
console.log(average(12, 14, 16)) ---> 14

Note: Feel free to add more console.log()s to each file to test your function further. but please do not delete the exisiting console.logs or rename the function. */

const average = (...args) =>
  args.reduce((acc, curr) => acc + curr) / args.length;

console.log(average(0)); // 0
console.log(average(1, 2)); // 1.5
console.log(average(1, 3, 6, 10)); // 5
console.log(average(12, 14, 16)); // 14
