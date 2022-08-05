"use strict";

function sumTwoSmallestNumbers(...args) {
    if (args.length < 2) {
        return console.error("Error");
    } else {
        return args.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0);
    };

};
console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); 
console.log(sumTwoSmallestNumbers(1, 3, 2));
console.log(sumTwoSmallestNumbers(1));