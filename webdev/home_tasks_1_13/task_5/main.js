'use strict';

let year=prompt("Enter year ")

  if(year%4===0 && year%100!==0 || year%400===0) {
   alert("This year is a leap year")

  }
else
  alert ("This year is a NOT leap year")