'use strict';

let number = prompt("Enter a number to check whether it is prime or not");
//7727 is prime number, can be checked in testing, it work quite fast so
function PrimeChecker(number) {

  if (isNaN(number) || number === null || number === "") {
    alert("Please enter a valid number");
    return null; //input checker
  }

  number = Number(number);


  if (number < 0) {
    alert("Number cannot be negative");
    return false;
  }
  if (number !== Math.floor(number)) {
    alert("Number should be an integer");
    return false;
  }


  if ((number % 2 === 0 && number !== 2) || number < 2) {
    return false;
  }
  if (number === 2) return true;

  let limit = Math.floor(Math.sqrt(number)) + 1; //+1 will not very slow it but I just add it to avoid some logic mistakes that can be (probably it is not needed but let it be)
  for (let i = 3; i <= limit; i = i + 2) {
    if (number % i === 0) {
      return false; //probably the fast enough algorithm :)

    }
  }
  return true;
}

let result = PrimeChecker(number);

if (result === true) {
  document.getElementById("target").innerHTML = (number + " is a prime number");
} else if (result === false) {
  document.getElementById("target").innerHTML = (number + " is NOT a prime number");
} else {
  document.getElementById("target").innerHTML = "Invalid input. Please enter a positive integer.";
  console.log("possible mistake in code function or incorrect input")
}
