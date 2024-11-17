'use strict';

let target = document.getElementById("target");
let N = 3;

let content = ["zero item", "first item", "second item", "third item"];

for (let i = 1; i <= N; i++) {
  let strli = document.createElement('li');
  strli.id = `li${i}`;
  strli.innerHTML = content[i];

  target.appendChild(strli);
}
let secondli=document.getElementById("li2")
secondli.className = "my-item";
