'use strict';
function number(value) {
    return Number(value); //I was too lazy to replace number by Number in code hah
}

let first=prompt("Write first variable")-0
let second=prompt("Write second var")-0
let third=prompt("Write third var")-0

let sum=number(first+second+third)
let product=number(first*second*third)
let average=number(sum/3)
alert("sum="+ sum)
alert("product="+ product)
alert("average="+ average)