// example.js
'use strict';

const lat = 60;
const lon = 21;
const APIkey = '7bfbeb2ebaec8cdb59103f744a3e8c1f'; //I know that APi key is in github

const request = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

async function fetchWeather() {
  try {
    const response = await fetch(request);
    if (!response.ok) {
      throw new Error('Resource not found');
    }
    const weather = await response.json();
    const name = weather.name;
    const temp = weather.main.temp;
    console.log(`Name: ${name}`);
    console.log(`Temperature: ${temp} Celsius`);
  } catch (error) {
    console.log(error.message);
  }
}

fetchWeather();