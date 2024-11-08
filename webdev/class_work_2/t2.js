'use strict';

const name = prompt("Enter ur name");

const target=document.querySelector('#target');

const greeting = `Hello, ${name}`;

target.innerHTML=greeting;