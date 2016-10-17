'use strict'

/**
 * Executes the solution
 */

 // Temporary, see: https://github.com/senecajs/seneca/issues/566
 process.removeAllListeners('warning')
 
var seneca = require('seneca')()
seneca.use(process.argv[2])

seneca.act({role: 'math', cmd: 'sum', left: process.argv[3], right: process.argv[4]}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})
