'use strict'

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */

 // Temporary, see: https://github.com/senecajs/seneca/issues/566
 process.removeAllListeners('warning')

var mod = require(process.argv[2])

var seneca = require('seneca')()

const left = process.argv[3]
const right = process.argv[4]

seneca.use(mod).ready(function (err) {
  seneca.act(`role:math, cmd:sum, left: ${left}, right:${right}`, (err, res) => {
    if (err) {
      return console.log(err)
    }

    console.log(`PLUGIN NAME CORRECT: ${seneca.hasplugin('operations')}`)
    console.log(res)
  })
})
