'use strict'

var seneca = require('seneca')

const left = Number(process.argv[2])
const right = Number(process.argv[3])

seneca.use('./math')
  .act({role: 'math', cmd: 'sum', left, right}, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
  }).act({
    role: 'math',
    cmd: 'sum',
    integer: true,
    left: process.argv[2],
    right: process.argv[3]
  }, (err, result) => {
    if (err) return console.error(err)
    console.log(result)
  }
)
