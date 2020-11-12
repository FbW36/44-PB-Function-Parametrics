//twofer
const twofer = (name) => `Two for me and one for ${name}`;
console.log("1==>",twofer("you"));

//exponent
function exponent (base, exp){
    if(exp){
        return Math.pow(base, exp)
    }
    else{
        return Math.pow(base,2)
    }

}
console.log("2==>",exponent(3));

//howManyArgs
function howManyArgs (){
    return arguments.length;
}

console.log("3==>",howManyArgs(1, false, "hello"));


//sum
function sum (){
    const argumentsArray = Object.values(arguments);
    return sum = argumentsArray.reduce((acc, curr)=> acc + curr); 
}
console.log("4==>",sum(25,25,20));

//average
function average(){
    const argumentsArray = Object.values(arguments);
    let sum = argumentsArray.reduce((acc, curr)=> (acc+curr))
    return sum / argumentsArray.length;
}
console.log("5==>",average(12,14,16));