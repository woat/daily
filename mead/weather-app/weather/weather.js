const request = require('request')

const KEY = '6c913c5c0714d6bdd120e5988cc83321'

const getWeather = (lat, lng) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`,
      json: true
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve({
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        })
      } else {
        reject('There was an error processing the request.')
      }
    })
  })
}

module.exports = {
  getWeather
}
