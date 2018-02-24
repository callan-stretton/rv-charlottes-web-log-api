const express = require('express')
const router = express.Router()

const db = require('../db/db')
const bodyParser = require('body-parser')

router.use(bodyParser.json())

router.get('/', (req, res) => {
  db.getPosts()
    .then(data => {
      res.json(data)
    })
})

module.exports = router