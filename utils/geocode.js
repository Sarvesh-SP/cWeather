const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2FydmVzaHNwIiwiYSI6ImNrcGF2ZDFnNDBydHIyb2xsNW5qZjdiOHMifQ.eN1BZy-iSIqsiqlVSCQ9Pg&limit=1';

  request({url: url, json: true}, (error, res) => {
    if (error) {
      callback('Unable to connect to location services.', undefined);
    } else if (res.body.message) {
      callback("Invalid location")
    } else if (res.body.features.length === 0) {
      callback("Unable to find location. Try another search.")
    }else {
      const lat = res.body.features[0].center[1];
      const lon = res.body.features[0].center[0];
      callback(undefined, {
        latitude: lat,
        longitude: lon,
        location: res.body.features[0].place_name
      })
    }
  })
}




module.exports = geocode