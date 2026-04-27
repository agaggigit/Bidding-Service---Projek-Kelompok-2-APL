const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Halo ini layanan bidding')
})

module.exports = app