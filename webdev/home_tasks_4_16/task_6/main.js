'use strict';

const form = document.getElementById("form")

form.addEventListener("submit", form_submitted)

async function form_submitted(evt){
  evt.preventDefault();
  const query=document.getElementById("query").value
  const responce=await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
  const responce_js=await responce.json()
  const total=responce_js.total-0
  const objTarget=document.getElementById("target")

  for (let i=0; i<total; i++) {
    const joke_value = responce_js.result[i].value;
    const objP=document.createElement("p")
    objP.innerHTML=joke_value
    const objArticle=document.createElement("article")
    objArticle.appendChild(objP)
    objTarget.append(objArticle)
    //objTarget.appendChild(document.createElement("br"))
  }



}