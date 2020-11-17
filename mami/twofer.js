// # 44-PB-Function-Parametrics

// # Parametrics

// Complete the following tasks:
// ### Create the files twofer.js exponent.js howManyArgs.js sum.js average.js

// 1. Complete the function in [`twofer.js`](./twofer.js) so that it returns "Two for me and one for you" when no arguments are passed\
//    e.g\
//    `console.log(twofer("Fran")) ---> "Two for me and one for Fran" ` \
//    `console.log(twofer()) ---> "Two for me and one for you" `

const twofer = (name) => {
  if (name) return `Two for me and one for ${name}`;
  else return `Two for me and one for you`;
};

console.log(twofer("Fran"));

console.log(twofer());
