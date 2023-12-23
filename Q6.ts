//- Write a program having an array of numbers if the number is negative it should remove the negative number from the array.
let Numbers=[7,9,-8,16,-17,5,10,-11,2,33];
let removenegativeNumber=(array:any)=>{ 
for(let i=0;i<array.length;i++){ 
    if(array[i]<0)array.splice(i,1);
}
return array;
};
console.log('result',removenegativeNumber(Numbers));