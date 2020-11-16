// Create a function in average.js which accepts any amount of numbers and returns their mean average
function average() {
    let result = 0
    for(i of arguments) {
        result += i;
    }
    return result / arguments.length
}
console.log(average(0)) 
console.log(average(1, 2)) 
console.log(average(1, 3, 6, 10)) 
console.log(average(12, 14, 16)) 