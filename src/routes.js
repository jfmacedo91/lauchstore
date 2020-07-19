const express = require('express')
const rountes = express.Router()

rountes.get('/', (req, res) => {
  return res.send('ok')
})

module.exports = routes