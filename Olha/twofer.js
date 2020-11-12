//* A function which returns "Two for me and one for you" when no arguments are passed

const twofer = strArg => {
	return (strArg === undefined ? 'Two for me and one for you' : `Two for me and one for ${strArg}`);
}

console.log(twofer("Fran")); // ---> "Two for me and one for Fran"
console.log(twofer()); // ---> "Two for me and one for you"