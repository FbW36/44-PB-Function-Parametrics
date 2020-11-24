/** Complete the function in twofer.js so that it returns "Two for me and one for you" when no arguments are passed
e.g
console.log(twofer("Fran")) ---> "Two for me and one for Fran"
console.log(twofer()) ---> "Two for me and one for you" */

function twofer(data) {
  if (data) {
    return `Two for me and one for ${data}`;
  } else {
    return `Two for me and one for you`;
  }
}

console.log(twofer("laura"));
console.log(twofer());

// -------------------------------------------

const twofer2 = (name) => {
  return name === undefined
    ? `Two for me and one for you`
    : `Two for me and one for ${name}`;
};

console.log(twofer2("maria"));
console.log(twofer2());
