const axios = require('axios')
const request = require('postman-request')

const url =
  'https://api.weatherapi.com/v1/current.json?key=183c0396f871453389c182753240603&q=-23.6979,-46.6967'

request({ url, json: true }, (err, res) => {
  if (err) {
    throw err
  }

  console.log(
    `Today the weather is ${res.body.current.condition.text.toLowerCase()} with a temperature of ${
      res.body.current.temp_c
    } degrees out and it feels like ${res.body.current.feelslike_c} degrees.`
  )
})

axios.get(url).then(({ data }) => {
  console.log(
    `Today the weather is ${data.current.condition.text.toLowerCase()} with a temperature of ${
      data.current.temp_c
    } degrees out and it feels like ${data.current.feelslike_c} degrees.`
  )
})
