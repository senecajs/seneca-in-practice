'use strict'

var seneca = require('seneca')

seneca.use('./math')
  .act({role: 'math', cmd: 'sum', left: process.argv[2], right: process.argv[3]}, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
  }).act({
    role: 'math',
    cmd: 'sum',
    integer: true,
    left: process.argv[2],
    right: process.argv[3]
  }, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
  }
)

module.exports = seneca
