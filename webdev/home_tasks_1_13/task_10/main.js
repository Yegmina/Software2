'use strict';

function getRandomInt(max) {
  max=Number(max)
  return Math.floor(Math.random() * max)+1;
}

function roll_many_dices(max, number){
  let sum=0
  for (let i=1; i<=Number(number); i++){
    sum=sum+getRandomInt(max)
   // console.log(i+"dice rolled, new sum="+sum)
  }
  return sum
}

function probability_calculator(max, number, required_sum){
  let counter=0;
  let limit=Number(prompt("enter how many times should loop work (for example 1000"))

  for (let i=1; i<=limit; i++){
    if (roll_many_dices(max, number)===required_sum) counter++
  }
  let probability=counter/limit
  probability=probability*100
  return probability
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

let required_sum=Number(prompt("Required sum?"))


  document.getElementById("target").innerHTML="sum="+probability_calculator(max, number, required_sum)+"%"
