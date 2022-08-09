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


function createCalculator(initialValue) {
    let initialArgument = initialValue;
    return {
        sum: function(internalValue) {
            return initialArgument += internalValue;
        },
        mult: function(internalValue) {
            return initialArgument *= internalValue;
        },
        sub: function(internalValue) {
            return initialArgument -= internalValue;
        },
        div: function(internalValue) {
            return initialArgument /= internalValue;
        },
    };  
};
const calc = createCalculator(10);

console.log(calc.sum(5)); 
console.log(calc.mult(10)); 
console.log(calc.sub(40)); 
console.log(calc.div(10)); 