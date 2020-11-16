// Create a function in sum.js which accepts any amount of numbers and return the sum of their addition
function sum() {
    let result = 0
    for(let i of arguments) {
        result += i;
    }
    return result
}
console.log(sum(25, 25, 20))