// Complete the following tasks:

// Create the files twofer.js exponent.js howManyArgs.js sum.js average.js



// Complete the function in twofer.js so that it returns "Two for me and one for you" when no arguments are passed
// e.g
// console.log(twofer("Fran")) ---> "Two for me and one for Fran"
// console.log(twofer()) ---> "Two for me and one for you"
function twofer (a) {
 if (typeof a === "string") {
     return `Two for me and on for ${a}`
 } else if (typeof a === "undefined") {
     return `Two for me and one for you`
 } else {
     return `Give me a name!`
 }
}
console.log(twofer());
console.log(twofer("Olha"));
console.log(twofer(17));


// Complete the function in exponent.js so that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
// e.g
// console.log(exponent(3, 3)) ---> 27
// console.log(exponent(3)) ---> 9
function expontent (a, b) {
    if (b === undefined){
        b = 2
    }
    return a ** b;
}
console.log(expontent(3));
console.log(expontent(2, 3))

function exponentFunWay (a, b = 2) {
return a ** b;
}
console.log(exponentFunWay(3));
console.log(exponentFunWay(2, 3));


// Create a function in howManyArgs.js which returns the total amount of arguments passed to it.
// e.g
function howManyArgs (...arr) {
    // console.log(...arr);  //1 2 3 dog
    // console.log([...arr]); //[ 1, 2, 3, 'dog' ]
    return [...arr].length;
}
console.log(howManyArgs(1, 2, 3, "dog")); //undefined
// console.log(howManyArgs()) ---> 0
// console.log(howManyArgs(1, false, "hello")) ---> 3
// console.log(howManyArgs("better")) ---> 1

// Create a function in sum.js which accepts any amount of numbers and return the sum of their addition
// e.g

function sum (...a) {
    let endres = 0;
    [...a].map((num) => endres += num);
    return endres;
};
console.log(sum(1, 2, 10)); //13

// console.log(sum(1)) ---> 1
// console.log(sum(1, 15)) ---> 16
// console.log(sum(25, 25, 20)) ---> 70
function average (...a) {
    let endres = 0;
	[...a].map((num) => (endres += num));
	endres /= [...a].length
    return endres;
};
console.log(average(8, 2, 10)); //13
// Bonus: Create a function in average.js which accepts any amount of numbers and returns their mean average.
// e.g
// console.log(average(0)) ---> 0
// console.log(average(1, 2)) ---> 1.5
// console.log(average(1, 3, 6, 10)) ---> 5
// console.log(average(12, 14, 16)) ---> 14

// Note: Feel free to add more console.log()s to each file to test your function further. but please do not delete the exisiting console.logs or rename the function.
