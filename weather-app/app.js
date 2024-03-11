const axios = require('axios')
const request = require('postman-request')
const geocode = require('./utils/geocode')

// const url =
//   'https://api.weatherapi.com/v1/current.json?key=183c0396f871453389c182753240603&q=-23.6979,-46.6967'

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

geocode('Minas Gerais Ribeiro', (error, data) => {
  console.log('ERROR: ', error)
  console.log('Data: ', data)
})
