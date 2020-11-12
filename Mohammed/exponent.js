
const exponent = (base, exp = 2) =>
{
    let power = 1;
    
    for (let i=0; i<exp; i++)
    {
        power *= base;
    } 

    return power;
}

console.log(exponent(3, 3));
console.log(exponent(3));