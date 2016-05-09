'use strict'

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */
var mod = require(process.argv[2])
var seneca = require('seneca')()
seneca.use(mod).act({role: 'math', cmd: process.argv[3], left: process.argv[4], right: process.argv[5]}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})
