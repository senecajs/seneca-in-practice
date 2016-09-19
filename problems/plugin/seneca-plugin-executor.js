'use strict'

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */

var mod = require(process.argv[2])

var seneca = require('seneca')()

const left = process.argv[3]
const right = process.argv[4]

seneca.use(mod).act(`role:math, cmd:sum, left: ${left}, right:${right}`, (err, res) => {
  if (err) {
    return console.log(err)
  }
  console.log(res)
})
