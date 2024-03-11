const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('São Paulo Santo Amaro', (error, data) => {
  if (error) {
    return console.log(error);
  }
  console.log('ERROR: ', error)
  console.log('Data: ', data)

  forecast(data.latitude, data.longitude, (error, data) => {
    if (error) {
      return console.log(error);
    }
    
    console.log('Error', error)
    console.log('Data', data)
  })
})
