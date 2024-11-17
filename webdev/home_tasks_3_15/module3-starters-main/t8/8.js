'use strict';

//tried to make is universal
function getActionOption(){
  let action=document.getElementById("operation").value;
  return action//warning ignored at purpose
}
function getNumbers(){
  const N=2
  let numbers=[]
  for (let i=0; i<N; i++) {
    numbers[i]=document.getElementById("num"+(i+1)).value;
  }
  return numbers
}
function calculate() {
  let target = document.getElementById("result");
  let resultNum = 0;
  let action = getActionOption();
  let numbers = getNumbers().map(Number);

  switch (action) { // Use the returned value of the action
    case "add":
      for (let i = 0; i < numbers.length; i++) {
        resultNum += numbers[i];
      }
      break;
    case "sub":
      resultNum = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        resultNum -= numbers[i];
      }
      break;
    case "multi":
      resultNum = 1;
      for (let i = 0; i < numbers.length; i++) {
        resultNum *= numbers[i];
      }
      break;
    case "div":
      resultNum = numbers[0];
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] === 0) {
          target.innerText = "Error: Division by zero";
          return;
        }
        resultNum /= numbers[i];
      }
      break;
    default:
      console.log("Unexpected condition in operations");
      return;
  }
  if (isNaN(resultNum)) alert("please, enter only numbers")
  target.innerText = resultNum;
}


let objButtonCalculate=document.getElementById("start")
objButtonCalculate.addEventListener("click", calculate)
