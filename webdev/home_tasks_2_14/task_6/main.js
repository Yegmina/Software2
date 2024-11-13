'use strict';


function getRandomInt(max) {
  max=Number(max)
  return Math.floor(Math.random() * max)+1;
}

function getRandomDiceRoll1_6(){
  return getRandomInt(6)
}

let result=NaN
let i=1
while (result!==6){
  result=getRandomDiceRoll1_6()
  document.getElementById("target").innerHTML+=`<li>${i}. The result is ${result}</li>`
  i++
}
