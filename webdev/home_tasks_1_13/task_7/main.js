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
let number=Number(prompt("How many dices should be rolled?"))
//assume that input is correct
if (number>10000)
    alert("do not try to crash ur browser")
else
  document.getElementById("target").innerHTML="sum="+roll_many_dices(max, number)
