/**Create a function in sum.js which accepts any amount of numbers and return the sum of their addition
e.g
console.log(sum(1)) ---> 1
console.log(sum(1, 15)) ---> 16
console.log(sum(25, 25, 20)) ---> 7 */

let sum = (...numbers) => numbers.reduce((acc, current) => acc + current);

console.log(sum(1, 15)); // 16
console.log(sum(1)); // 1
console.log(sum(25, 25, 20)); // 70
