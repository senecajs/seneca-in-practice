'use strict'

/**
 * Executes the solution
 */

 // Temporary, see: https://github.com/senecajs/seneca/issues/566
 process.removeAllListeners('warning')
 
var seneca = require('seneca')()
seneca.use(process.argv[2])

seneca.act({role: 'math', cmd: 'sum', left: parseInt(process.argv[3]), right: parseInt(process.argv[4])}, function (err, result) {
  if (err) return console.log(err)
  console.log(result)
})
