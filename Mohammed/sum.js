function sum()
{   
    s=0;
    for (let i=0; i<arguments.length; i++)
    {
        s +=arguments[i];
    }
    
    return s;
}

console.log(`sum(1) --->  ${sum(1)}`);
console.log(`sum(1, 15) ---> ${sum(1, 15)}`);
console.log(`sum(25, 25, 20) ---> ${sum(25, 25, 20)}`);