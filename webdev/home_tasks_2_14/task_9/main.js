'use strict';

function even(arr) {

  const evenNumbers=[]
  for (const number of arr) {
    if (number%2===0){
      evenNumbers.push(number);
    }

  }
  return evenNumbers;


}


const numbers=[2,3234,2343,2323,232,232,123,54,4654,2344,1234,4632,132,324,132,234,432,312,321]

console.log(numbers);
console.log(even(numbers))