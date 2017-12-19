const request = require('request')
const yargs = require('yargs')

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const { argv } = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  // .argv

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage)
//   } else {
//     weather.getWeather(results.latitude, results.longitude, (err, weatherResults) => {
//       if (err) throw console.error('You have an error')
//       console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`)
//     })
//   }
// })

geocode.geocodeAddress(argv.address)
  .then(res => weather.getWeather(res.latitude, res.longitude))
  .then(res => console.log(res))
  .catch(err => console.log(err))
