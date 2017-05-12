const button = document.getElementById('button'),
      city = document.getElementById('city'),
      icon = document.getElementById('icon'),
      main = document.getElementById('main'),
      input = document.getElementById('input');

function callWeatherData(zip) {
  let request = new XMLHttpRequest(),
      url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=55adfc59dc70cc96fa95a28ad5ef0526`;

  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      console.log(data)
      writeCityName(data.name)
      writeWeatherIcon(data.weather[0].icon)
      writeWeatherMain(data.weather[0].main)
      console.log(data.wind);
    } else {
      console.log("Error")
    }
  };
  request.onerror = function(err) {
    console.log(err);
  };
  request.send();
}

button.addEventListener('click', function() {
  let zip = input.value;
  callWeatherData(zip);
})

function writeCityName(cityName) {
   city.innerHTML = `Today's weather in ${cityName}`; 
}

function writeWeatherIcon(id) {
  icon.setAttribute("src", `http://openweathermap.org/img/w/${id}.png` );
}

function writeWeatherMain(condition) {
  main.innerHTML = condition;
}
