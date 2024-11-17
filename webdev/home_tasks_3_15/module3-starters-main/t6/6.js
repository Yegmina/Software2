'use strict';

let elements = document.getElementsByTagName("button");

for (let element of elements) {
  element.addEventListener("click", clicked);
}

function clicked() {
  alert("Button clicked");
}
