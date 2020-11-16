// Create a function in howManyArgs.js which returns the total amount of arguments passed to it
function howManyArgs() {
    let numOfParams;
    for(i = 0; i < arguments.length; i++);
    return i
}
console.log(howManyArgs(1, false, "hello"))
