// example.js
'use strict';

const weatherForm=document.getElementById("weather-form")
const placeField=document.querySelector('input[name=place]')

const place="Espoo"
const APIkey = '7bfbeb2ebaec8cdb59103f744a3e8c1f'; //I know that APi key is in github


let map = L.map('map').setView([60.2, 24.9], 9); //map object, map function, 'map' id

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);




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

  const marker=L.marker([result.coord.lat, result.coord.lon]).addTo(map)
  map.setView([result.coord.lat, result.coord.lon])



})