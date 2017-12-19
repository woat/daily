const yargs = require('yargs')
const axios = require('axios')

const KEY = '6c913c5c0714d6bdd120e5988cc83321'

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

const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`

axios.get(geocodeUrl)
  .then((response) => {
    const { lat, lng } = response.data.results[0].geometry.location
    const weatherUrl = `https://api.darksky.net/forecast/${KEY}/${lat},${lng}`
    return axios.get(weatherUrl)
  })
  .then((response) => {
    console.log(response)
  })
  .catch((e) => {
    console.log(e)
  })
