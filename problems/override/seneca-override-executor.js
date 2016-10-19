'use strict'

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */

 // Temporary, see: https://github.com/senecajs/seneca/issues/566
 process.removeAllListeners('warning')
 
var seneca = require('seneca')()
seneca.use(process.argv[2])

seneca.act({role: 'math', cmd: 'sum', left: 'michele', right: 2.5}, function (err, result) {
  if (err && err.toString().indexOf('Expected left and right to be numbers.') > 0) {
    return console.log('Expected left and right to be numbers.')
  }
  return console.log('false')
})

seneca.act({role: 'math', cmd: 'sum', left: parseInt(process.argv[3]), right: parseInt(process.argv[4])}, function (err, result) {
  if (err) return console.log(err)
  console.log(result)
})
