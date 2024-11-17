'use strict';
let names = ['','John', 'Paul', 'Jones'];

let target=document.getElementById("target")
let N = 3;

for (let i = 1; i <= N; i++) {
  let strli = document.createElement('li');
  strli.id = `li${i}`;
  strli.innerHTML = names[i];

  target.appendChild(strli);
}