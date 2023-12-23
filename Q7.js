"use strict";
// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array
function insertvalueAtindex(arr, index, value) {
    arr.splice(index, 4, value);
    return arr;
}
let orignalArray = [1, 2, 3, 4, 5];
let modifiedArray = insertvalueAtindex(orignalArray, 2, 10);
console.log(modifiedArray);
