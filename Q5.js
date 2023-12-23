"use strict";
// - Create a function that takes a positive integer as parameter and uses a for loop to calculate and return the factorial of that number.
function factorial(n) {
    let result = 1;
    for (let i = n; i > 0; i--) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
