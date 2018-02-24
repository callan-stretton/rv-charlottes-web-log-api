const path = require('path')
const config = require(path.join(__dirname, '/../../knexfile')).development
const knex = require('knex')(config)

function getPosts () {
  return knex('posts')
  // .then(convertArrayToCamelCase)
}

module.exports = {
  getPosts: getPosts
}