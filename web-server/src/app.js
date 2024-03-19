const express = require('express')

const app = express()

app.get('', (req, res) => {
  res.send('Hello express!')
})

app.get('/help', (res, req) => {
  res.send('Help page')
})

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
  res.send({ forcast: 'It is raining', location: 'São Paulo' })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})
