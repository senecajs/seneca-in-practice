'use strict'

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */
var solution = require(process.argv[2])
solution.act({role: 'math', cmd: 'sum', integer:true, left: 1.5, right: 2.5}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})
