'use strict'

var seneca = require('./math')

seneca.act({role: 'math', cmd: 'sum', left: 15, right: 28}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})

module.exports = seneca
