// example.js
'use strict';

const weatherForm=document.getElementById("weather-form")
const placeField=document.querySelector('input[name=place]')

const place="Espoo"
const APIkey = '7bfbeb2ebaec8cdb59103f744a3e8c1f'; //I know that APi key is in github
//it is free key, in educational purpose using only


let map = L.map('map').setView([60.2, 24.9], 9); //map object, map function, 'map' id

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markers=L.featureGroup().addTo(map)




async function fetchWeather(place) {
  const request = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${APIkey}&units=metric`;

    const response = await fetch(request);
    if (!response.ok) {
      throw new Error('Resource not found');
    }
    const weather = await response.json();
    return weather;

}

//fetchWeather();

weatherForm.addEventListener("submit", async function(evt){
  evt.preventDefault()
  const place=placeField.value
  const result=await fetchWeather(place)
  console.log(result)
  //remove exiting marker, create marker
  const marker=L.marker([result.coord.lat, result.coord.lon]).addTo(map)
  markers.clearLayers()
  markers.addLayer(marker)
  map.setView([result.coord.lat, result.coord.lon])

  //HTML for the popup

  const placeName=document.createElement("h3")
  placeName.innerText=result.name

  const img=document.createElement("img")
  img.src=`https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
  img.alt=result.weather.description
  const temperature=document.createElement("p")
  temperature.innerText=`Temperature=${result.main.temp} C`
  const wind=document.createElement("p")
  wind.innerText=`Wind speed: ${result.wind.speed} m/s`

  const article=document.createElement("article")
  article.appendChild(placeName)
  article.appendChild(temperature)
  article.appendChild(wind)
  article.appendChild(img)
  marker.bindPopup(article)

  marker.openPopup()




})