const twofer = parameter => 
{
    if (parameter)
        return `Two for me and one for ${parameter}`; 
    else
        return `Two for me and one for you`;
}

console.log(twofer('Fran'));
console.log(twofer());
