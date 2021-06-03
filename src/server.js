const geocode = require('../utils/geocode')
const forecast = require('../utils/forecast')

const argv = process.argv.slice(2)


if (argv[0]) {
  geocode(`${argv[0]}`, (error, {lat, lon, loc} = {undefined, undefined, undefined}) => {

    if (error) {
      return console.log(error);
    }
    
    forecast(lat, lon, (error, {temp, feels, des, time}) => {
      if (error) {
        return console.log(error);
      }
      console.log(loc)
      console.log(temp, feels, des, time)
    })
  })
} else {
  console.log('Please enter the location')
}

