'use strict';

const startYear=prompt("Enter starting year");
const endYear=prompt("Enter ending year");

for (let i=startYear; i<=endYear; i++){
  //if(i%4 && !(i%100) || i%400)
  if(i%4===0 && i%100!==0 || i%400===0)
    document.getElementById('target').innerHTML+=`<li>${i}</li>`;
}
