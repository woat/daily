const request = require('request')

const geocodeAddress = (address, callback) => {
  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
    json: true
  }, (error, response, body) => {
    if (error) callback('Unabled to connect to Google servers.')
    if (body.status === 'ZERO_RESULTS') callback('Unable to find that address')
    if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      })
    }
  })
}

const KEY = '6c913c5c0714d6bdd120e5988cc83321'

const geocodeWeather = (lat, lng) => {
  request({
    url: `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
    console.log(JSON.stringify(body.currently, undefined, 2))
    } else {
      console.log('There was an error processing the request.')
    }
  })
}

module.exports = {
  geocodeAddress,
  geocodeWeather
}
