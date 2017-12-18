const request = require('request')
const yargs = require('yargs')

const geocode = require('./geocode/geocode')

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

const address = geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage)
  } else {
    console.log(JSON.stringify(results, undefined, 2))
    return JSON.stringify(results, undefined, 2)
  }
})

const weather = geocode.geocodeWeather('39.9444071', '-75.1631718')
console.log(weather)
