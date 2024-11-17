'use strict';

function getCalculationInput() {
  return document.getElementById("calculation").value.trim();
}

function parseCalculation(input) {
  const operators = ["+", "-", "*", "/"];
  let operator;


  for (let op of operators) {
    if (input.includes(op)) {
      operator = op;
      break;
    }
  }

  if (!operator) {
    alert("Please enter a valid calculation (e.g., 5 + 3)");
    return null;
  }


  let parts = input.split(operator);
  if (parts.length !== 2) {
    alert("Please enter a valid calculation (e.g., 5 + 3)");
    return null;
  }

  let numbers = parts.map(Number);
  if (numbers.some(isNaN)) {
    alert("Please enter only valid integers");
    return null;
  }

  return { numbers, operator };
}

function calculate() {
  let target = document.getElementById("result");
  let input = getCalculationInput();
  let parsed = parseCalculation(input);

  if (!parsed) {
    target.innerText = "";
    return;
  }

  let { numbers, operator } = parsed;
  let resultNum = 0;

  switch (operator) {
    case "+":
      resultNum = numbers[0] + numbers[1];
      break;
    case "-":
      resultNum = numbers[0] - numbers[1];
      break;
    case "*":
      resultNum = numbers[0] * numbers[1];
      break;
    case "/":
      if (numbers[1] === 0) {
        alert("Error: Division by zero");
        target.innerText = "";
        return;
      }
      resultNum = Math.floor(numbers[0] / numbers[1]);
      break;
    default:
      alert("Unexpected error");
      return;
  }

  target.innerText = resultNum;
}

let objButtonCalculate = document.getElementById("start");
objButtonCalculate.addEventListener("click", calculate);
