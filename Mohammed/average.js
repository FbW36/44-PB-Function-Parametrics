
const average = function()
{
    let su=0;
    
    for (let i=0; i<arguments.length; i++)
    {
        su += arguments[i];
    }
    return su/arguments.length;
}

console.log(`average(0) ---> ${average(0)}`);
console.log(`average(1, 2) ---> ${average(1, 2)}`);
console.log(`average(1, 3, 6, 10) ---> ${average(1, 3, 6, 10)}`);
console.log(`average(12, 14, 16) ---> ${average(12, 14, 16)}`);