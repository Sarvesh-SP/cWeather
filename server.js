const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



geocode('Boston', (error, data) => {

  if (error) {
    return console.log(error);
  }
  console.log('Data', data)
  forecast(data.latitude, data.longitude, (error, data) => {
    if (error) {
      return console.log(error);
    }
    console.log('Data', data)
  })
})

