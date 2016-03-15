'use strict'

var seneca = require('./math')

seneca.act({role: 'math', cmd: 'sum', left: process.argv[3], right: process.argv[4]}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})

module.exports = seneca
