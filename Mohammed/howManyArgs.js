

function howManyArgs()
{
    return arguments.length;
}

console.log(`howManyArgs()) ---> ${howManyArgs()}`);
console.log(`howManyArgs(1, false, 'hello')) ---> ${howManyArgs(1, false, 'hello')}`);
console.log(`howManyArgs('better')) --> ${howManyArgs('better')}`);