'use strict'

/**
 * Executes the solution
 */
var seneca = require('seneca')()
seneca.use(process.argv[2])

seneca.act({role: 'math', cmd: 'sum', integer: true, left: process.argv[3], right: process.argv[4]}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})
