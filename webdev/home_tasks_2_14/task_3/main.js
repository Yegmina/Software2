'use strict';

const dogs=[]
for (let i=0; i<6; i++) {
  //dogs.push(prompt("Give name for for "+ (i+1)));
  dogs[i]=prompt("Give name for "+(i+1));
}
dogs.sort().reverse()
for (let dog of dogs) {
 // alert(dog)
  document.getElementById("target").innerHTML+=`<li> ${dog}</li>`
}
console.log(dogs)