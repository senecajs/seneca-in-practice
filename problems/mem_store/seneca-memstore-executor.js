'use strict'

var async = require('async')
/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */
var mod = require(process.argv[2])
var seneca = require('seneca')().use(mod)
seneca.use('entity')

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
  }],
  function () {
    seneca.act({role: 'math', cmd: 'operation-history'}, function (err, result) {
      if (err) return console.error(err)
      result.answer.forEach(function (en) {
        console.log(en.cmd, en.left, en.right)
      })
    })
  }
)
