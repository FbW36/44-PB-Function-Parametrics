// Complete the function in exponent.js so that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2
function exponent(num,exp) {
    let result;
    if(exp) {
        result = Math.pow(num,exp);
    }
    else {
        result = Math.pow(num,2);
    }
    return result
}
console.log(exponent(3))
