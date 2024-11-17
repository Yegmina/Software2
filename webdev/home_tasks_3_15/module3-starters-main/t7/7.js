'use strict';

let objPTrigger=document.getElementById("trigger")

let objImg=document.getElementById("target")

objPTrigger.addEventListener("mouseover", eventMouseOver)
objPTrigger.addEventListener("mouseout", eventMouseOut)

function eventMouseOver(){
  objImg.src="img/picB.jpg"
}
function eventMouseOut() {
  objImg.src="img/picA.jpg"
}