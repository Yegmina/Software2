'use strict';

function concat(arr){
  let s=""
  for (let i=0; i<arr.length; i++) {
    s+=arr[i]
  }
  return s
}
let s
let arr=[]
for (let i=0; i<5; i++) {
  arr[i]=prompt("write some str, empty string to break")
  if (arr[i]==="") {
    break;
  }
}
s=concat(arr)
document.getElementById("target").innerHTML=s;

