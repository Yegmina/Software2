'use strict';

let numbers=[]
let temp


function Numbering(arr) {
  for (let i=0; i<arr.length; i++)
  {
    arr[i]=Number(arr[i])
  }
  return arr
}

function ConsolePrintArray(arr) {
  for (let i=0; i<arr.length; i++)
  {
    console.log((i+1)+' element is '+ arr[i])
  }
}
for (let i=0; true; i++){
 temp=prompt("Give the number "+(i+1))
 if (temp in numbers)
 {
   alert("The number "+temp+" has already been given")
   break;
 }
 else {
   numbers[i]=temp;
 }
}

numbers=Numbering(numbers)

numbers.sort(function(a, b){
  return a - b
});

ConsolePrintArray(numbers)




