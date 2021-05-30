const request = require('request');


const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FydmVzaHNwIiwiYSI6ImNrcGF2ZDFnNDBydHIyb2xsNW5qZjdiOHMifQ.eN1BZy-iSIqsiqlVSCQ9Pg&limit=1';



// const url = `http://api.weatherstack.com/current?access_key=f2d4ea7c1d1089c0454aaefffbd16908&query=New%20York`;

// request({ url: url, json: true }, (error, res) => {
//   if (error) {
//     console.log(error) 
//   } else if (res.body.error){
//     console.log('unable to find location')

//   } else {
//     const current = res.body.current;
//     const temperature = current.temperature;
//     const feelsLike = current.feelslike;
//     const wD = current.weather_descriptions[0]
//     const time = current.observation_time
//     console.log(`Time: ${time}`);
//     console.log(`${wD}. It is currently ${temperature} degree out, It feels like ${feelsLike} degree out.`)
//   }
// })


request({url: url1, json: true}, (error, res) => {

  if (error) {
    console.log(error);
  } else if (res.body.message) {
    console.log("Invalid location");
  } else if (res.body.features.length == 0) {
    console.log('messed up')
  }else {
    
    const lat = res.body.features[0].center[1];
    const lon = res.body.features[0].center[0];
  }
})