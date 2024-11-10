'use strict';
function number(value) {
    return Number(value); //I was too lazy to replace number by Number in code hah
}

function getRandomInt(max) {
  max=number(max)
  return Math.floor(Math.random() * max)+1;
}

const name=prompt("What is your full name?")

const hat_answer=Number(getRandomInt(4))
let hogwart_class
switch (hat_answer) {
  case 1:
    hogwart_class="Gryffindor";
    break;
  case 2:
    hogwart_class="Slytherin";
    break;

  case 3:
    hogwart_class="Hufflepuff";
    break;

  case 4:
    hogwart_class="Ravenclaw";
    break;
  default:
    hogwart_class="Unexpected condition error in switch(hat_answer)"+hat_answer
}

if (name==="")
  hogwart_class="Ghost";

else if (name.includes("Malfoy") || name.includes("Severus"))
  hogwart_class="Slytherin"

else if (name.includes("Potter"))
  hogwart_class="Gryffindor"


let string=`${name}, you are ${hogwart_class}`
document.querySelector('#target').innerHTML=string;



