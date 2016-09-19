'use strict'

var async = require('async')
/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */
var seneca = require('seneca')({
  default_plugins: {
    'mem-store': true
  }
})

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
      console.log(en.cmd, en.left, en.right)
    })
  })
})
