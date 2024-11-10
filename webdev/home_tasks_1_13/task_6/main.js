'use strict';

let answer=confirm("Should I calculate square root?")

if (answer===true){
  let number=Number(prompt("The number? "))
  if (number>=0) {
    let result=Math.sqrt(number)
    document.getElementById("target").innerHTML="square root="+result
  }
  else if (number<0) {
    document.getElementById("target").innerHTML="The square root of a negative number is not defined"
  }
  else {
    document.getElementById("target").innerHTML="Error: provided answer is not number"
  }

} else {
  document.getElementById("target").innerHTML="The square root is not calculated"
}