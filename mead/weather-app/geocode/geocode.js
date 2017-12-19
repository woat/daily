const request = require('request')

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    request({
      url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
      json: true
    }, (error, response, body) => {
      if (error) reject('Unabled to connect to Google servers.')
      if (body.status === 'ZERO_RESULTS') reject('Unable to find that address')
      if (body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        })
      }
    })
  })
}

module.exports = {
  geocodeAddress
}
