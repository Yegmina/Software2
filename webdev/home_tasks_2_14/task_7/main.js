'use strict';



function getRandomInt(max) {
  max=Number(max)
  return Math.floor(Math.random() * max)+1;
}

function roll_many_dices(max, number){
  let sum=0
  for (let i=1; i<=Number(number); i++){
    sum=sum+getRandomInt(max)
    console.log(i+"dice rolled, new sum="+sum)
  }
  return sum
}
let max = prompt("What is the maximum number that a dice can have? Default is 6.");
if (max === "" || isNaN(Number(max))) {
  max = 6;
} else {
  max = Number(max);
}
let result=NaN
for (let i=1;true; i++) {

  result=getRandomInt(max)
  document.getElementById("target").innerHTML+=`<li>${i}. The result is ${result}</li>`
  if (result===max)
    break;
}