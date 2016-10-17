'use strict'

var async = require('async')

// Temporary, see: https://github.com/senecajs/seneca/issues/566
process.removeAllListeners('warning')

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */
var seneca = require('seneca')()

seneca.use('basic')
seneca.use('entity')
seneca.use(process.argv[2])

async.waterfall([
  function (callback) {
    seneca.act({role: 'math', cmd: 'sum', left: '3', right: '5'}, function (err, result) {
      if (err) return console.error(err)
      callback()
    })
  },
  function (callback) {
    seneca.act({role: 'math', cmd: 'sum', left: '13', right: '55'}, function (err, result) {
      if (err) return console.error(err)
      callback()
    })
  },
  function (callback) {
    seneca.act({role: 'math', cmd: 'product', left: '13', right: '55'}, function (err, result) {
      if (err) return console.error(err)
      callback()
    })
  }
]
, function () {
  seneca.act({role: 'math', cmd: 'operation-history'}, function (err, result) {
    if (err) return console.error(err)
    result.answer.forEach(function (en) {
      console.log(`Operation executed: ${en.cmd} on (${en.left}, ${en.right})`)
    })
  })
})
