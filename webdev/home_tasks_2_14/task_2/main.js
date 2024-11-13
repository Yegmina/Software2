'use strict';

let N=Number(prompt("Give me the number of participants"))

let name=[]

for (let i=0; i<N; i++) {
  name[i]=prompt("Give me the name of "+ (i+1) + " participant")
}
name.sort()
for (let i=0; i<N; i++) {
  document.getElementById("target").innerHTML+=`<ol> ${i+1} participant is ${name[i]} </ol>`
}