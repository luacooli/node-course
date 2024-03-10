const axios = require('axios')
const request = require('postman-request')

const url =
  'https://api.weatherapi.com/v1/current.json?key=183c0396f871453389c182753240603&q=-23.6979,-46.6967'

// using postman-resquest
// request({ url, json: true }, (err, res) => {
//   if (err) {
//     console.log('Unable to connect to weather service!')
//   } else if (res.body.error) {
//     console.log('Unable to find location')
//   } else {
//     console.log(
//       `Today the weather is ${res.body.current.condition.text.toLowerCase()} with a temperature of ${
//         res.body.current.temp_c
//       } degrees out and it feels like ${res.body.current.feelslike_c} degrees.`
//     )
//   }
// })

// // using axios
// axios
//   .get(url)
//   .then(({ data }) => {
//     if (data.error) {
//       console.log('Unable to find location')
//     } else {
//       console.log(
//         `Today the weather is ${data.current.condition.text.toLowerCase()} with a temperature of ${
//           data.current.temp_c
//         } degrees out and it feels like ${data.current.feelslike_c} degrees.`
//       )
//     }
//   })
//   .catch((err) => console.error('Unable to connecto to weather service'))

// Geocoding

// using postman-resquest
const limit = 1
const city = 'Los%20Angeles'
const token =
  'pk.eyJ1IjoibHVhY29vbGkiLCJhIjoiY2x0aXJudDU0MGlyYjJxcDlhYnpucTg2eCJ9.YAVPM7wcG_fic_8Dwx6Iww'

const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${token}&limit=${limit}`

request({ url: geoCodeURL, json: true }, (err, res) => {
  if (err) {
    console.log('Unable to connect to geolocation service!')
  } else if (res.body.features.length === 0) {
    console.log('Unable to find location')
  } else {
    const latitude = res.body.features[0].center[1]
    const longitude = res.body.features[0].center[0]

    console.log(`Lat: ${latitude}, Lon: ${longitude}`)
  }
})

// using axios
axios
  .get(geoCodeURL)
  .then(({ data }) => {
    if (data.features.length === 0) {
      console.log('Unable to find location')
    } else {
      const latitude = data.features[0].center[1]
      const longitude = data.features[0].center[0]

      console.log(`Lat: ${latitude}, Lon: ${longitude}`)
    }
  })
  .catch((err) => console.error('Unable to connect to geolocation service!'))
