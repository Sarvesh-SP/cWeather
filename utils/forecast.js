const request = require('request')



const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=f2d4ea7c1d1089c0454aaefffbd16908&query=${lat}, ${lon}`
  request({url: url, json: true} , (error, res) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if(res.body.error) {
      callback('Unable to find location', undefined)
    } else {
      const current = res.body.current;
      const temperature = current.temperature;
      const feelsLike = current.feelslike;
      const wD = current.weather_descriptions[0]
      const time = current.observation_time
      let data = {
        temp: temperature,
        feels: feelsLike,
        des: wD,
        time: time
      }
      callback(undefined, data)
    }
  })
}


module.exports = forecast



module.exports = forecast