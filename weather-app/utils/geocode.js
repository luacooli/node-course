const request = require('postman-request')
const axios = require('axios')

const geocode = async (address, callback) => {
  const limit = 1
  const token =
    'pk.eyJ1IjoibHVhY29vbGkiLCJhIjoiY2x0aXJudDU0MGlyYjJxcDlhYnpucTg2eCJ9.YAVPM7wcG_fic_8Dwx6Iww'
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${token}&limit=${limit}`

  // using postman request
  // request({ url, json: true }, (err, { body }) => {
  //   if (err) {
  //     callback('Unable to connect to geolocation service!', undefined)
  //   } else if (body.features.length === 0) {
  //     callback('Unable to find location. Try another search.', undefined)
  //   } else {
  //     callback(undefined, {
  //       location: body.features[0].place_name,
  //       latitude: body.features[0].center[1],
  //       longitude: body.features[0].center[0],
  //     })
  //   }
  // })

  // using axios with trycatch
  try {
    const { data } = await axios.get(url)

    if (data.features.length === 0) {
      callback('Unable to find location. Try another search.', undefined)
    } else {
      callback(undefined, {
        location: data.features[0].place_name,
        latitude: data.features[0].center[1],
        longitude: data.features[0].center[0],
      })
    }
  } catch (error) {
    callback('Unable to connect to geolocation service!', undefined)
  }
}

module.exports = geocode
