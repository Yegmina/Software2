'use strict';

let N=5
let a=[]
for (let i=1; i<=N; i++){
  a[i]=Number(prompt("Write a "+i+" number"))
}

for (let i=N; i>=1; i--) {
  console.log(i+" number is "+a[i])
}
