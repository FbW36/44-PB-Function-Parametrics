// 1. Complete the function in [`twofer.js`](./twofer.js) so that it returns "Two for me and one for you" when no arguments are passed\
function twofer(str) {
  if (str) {
    return `Two for me and one for ${str}`;
  } else {
    return `Two for me and one for you`;
  }
}

console.log(twofer("Fran"));
console.log(twofer());
