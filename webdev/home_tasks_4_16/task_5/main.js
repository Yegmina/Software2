'use strict';

async function getRandomJoke() {
  try {
    let response = await fetch("https://api.chucknorris.io/jokes/random");
    let response_json = await response.json();
    let joke_text = response_json.value;
    return joke_text;
  } catch (e) {
    console.error(e);
    return "Failed to fetch a joke!";
  }
}

getRandomJoke().then((joke) => console.log(joke));