// Create a function that takes an array, an index, and a value as parameters. Inside the function, use the splice method to insert the value at the specified index in the array. Return the modified array
function insertvalueAtindex<T>(arr:T[],index:number,value:T):T[]{ 
arr.splice(index,4,value);

return arr;


}

let orignalArray:number[]=[1,2,3,4,5];
let modifiedArray:number[]=insertvalueAtindex(orignalArray,2,10);
console.log(modifiedArray);