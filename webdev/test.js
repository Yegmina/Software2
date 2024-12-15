'use strict';

function doing_something(local_num1, local_num2){
  const local_sum=local_num1+local_num2
  // If local_num1 and local_num2 are numbers, it will sum them as numbers "1+2"
  // But, if local_num1 and local_num2 are strings, it will sum them as strings, "value1value2"
  return local_sum
}
let num1=1
let num2=2
console.log(doing_something(num1, num2))

num1="num1"
num2="num2"
console.log(doing_something(num1, num2))

console.log(doing_something("num1","num2"))