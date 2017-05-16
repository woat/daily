const button = document.getElementById('button'),
      weather = document.getElementById('weather');
      input = document.getElementById('input');

button.addEventListener('click', function() {
  let zip = input.value;
  callWeatherData(zip);
})

function writeWeather(name, id, condition, kelv) {
  weather.innerHTML = ""
  writeCityName(name)
  writeWeatherIcon(id)
  writeWeatherMain(condition)
  writeWeatherTemp(kelv)
}

function callWeatherData(zip) {
  let request = new XMLHttpRequest(),
    url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=55adfc59dc70cc96fa95a28ad5ef0526`;

  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      console.log(data)
      writeWeather(data.name, data.weather[0].icon, data.weather[0].main, data.main.temp)
    } else {
      console.log("Error")
    }
  };
  request.onerror = function(err) {
    console.log(err);
  };
  request.send();
}

function writeCityName(cityName) {
  weather.innerHTML += `<h1>Today's weather in ${cityName}</h1>`; 
}

function writeWeatherIcon(id) {
  weather.innerHTML += `<img src="http://openweathermap.org/img/w/${id}.png"></img>`;
}

function writeWeatherMain(condition) {
  weather.innerHTML += `<h2>${condition}</h2>`;
}

function writeWeatherTemp(kelv) {
  kelv = 1.8 * (kelv - 273) + 32;
  weather.innerHTML += `<h2>${Math.round(kelv)} &deg;F</h2>`;
}
