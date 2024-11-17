'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const N=3
let target=document.getElementById("target")
for (let i=0; i<N; i++) {
  let objOption=document.createElement("option")
  objOption.value=students[i]["id"]
  objOption.innerText=students[i]["name"]
  target.appendChild(objOption)

}