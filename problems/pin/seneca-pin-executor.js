'use strict'

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */
var mod = require(process.argv[2])
var seneca = require('seneca')()

// Temporary, see: https://github.com/senecajs/seneca/issues/566
process.removeAllListeners('warning')

seneca.use(mod).act({role: 'math', cmd: 'sum', left: '3', right: '5'}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
  seneca.use(mod).act({role: 'math', cmd: 'product', left: '2', right: '15'}, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
  })
})
