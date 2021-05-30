const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const argv = process.argv.slice(2)


if (argv[0]) {
  geocode(`${argv[0]}`, (error, data) => {

    if (error) {
      return console.log(error);
    }
  
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location)
      console.log(forecastData)
    })
  })
} else {
  console.log('Please enter the location')
}

