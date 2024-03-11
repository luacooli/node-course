const request = require('postman-request')
const axios = require('axios')

const forecast = async (lat, lon, callback) => {
  const token = '183c0396f871453389c182753240603'
  const url = `https://api.weatherapi.com/v1/current.json?key=${token}&q=${lat},${lon}`

  // using postman request
  request({ url, json: true }, (err, res) => {
    if (err) {
      callback('Unable to connect to weather service!', undefined)
    } else if (res.body.error) {
      callback('Unable to find location', undefined)
    } else {
      const condition = res.body.current.condition.text.toLowerCase()
      const temperature = res.body.current.temp_c
      const feelslike = res.body.current.feelslike_c

      callback(
        undefined,
        `Today the weather is ${condition} with a temperature of ${temperature} degrees out and it feels like ${feelslike} degrees.`
      )
    }
  })

  // using axios
  try {
    const { data } = await axios.get(url)

    if (data.error) {
      callback('Unable to find location', undefined)
    } else {
      const condition = data.current.condition.text.toLowerCase()
      const temperature = data.current.temp_c
      const feelslike = data.current.feelslike_c

      callback(
        undefined,
        `Today the weather is ${condition} with a temperature of ${temperature} degrees out and it feels like ${feelslike} degrees.`
      )
    }
  } catch (error) {
    callback('Unable to connect to weather service!', undefined)
  }
}

module.exports = forecast
