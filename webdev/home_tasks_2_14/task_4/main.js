'use strict';

/*
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const leftArr = [];
  const rightArr = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  const sortedLeft = quickSort(leftArr);
  const sortedRight = quickSort(rightArr);

  return sortedLeft.concat([pivot], sortedRight);
}
*/


let numbers=[]

let temp="sth"
for (let i=0;true;i++){
  temp=prompt("Give number (or 0 to break) ")
  if (temp==="0")
    break;
  else
    numbers.push(+temp)



}
//numbers.sort()
numbers.sort(function(a, b){
  return a - b
});
//numbers=quickSort(numbers)
numbers.reverse()

for (let i=0; i<numbers.length; i++)
  console.log(numbers[i]+ " ")
