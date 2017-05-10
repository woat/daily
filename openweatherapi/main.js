const button = document.getElementById('button'),
      input = document.getElementById('input');

function callWeatherData(zip) {
  let request = new XMLHttpRequest(),
      url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=55adfc59dc70cc96fa95a28ad5ef0526`;
  request.open('GET', url, true);
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      console.log(data)
      console.log(data.name);
      console.log(data.weather[0]);
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

