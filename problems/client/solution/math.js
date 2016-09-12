'use strict'

var seneca = require('seneca')({
  log: 'silent'
})

seneca.add({ role: 'math', cmd: 'sum' }, function (msg, respond) {
  var sum = parseInt(msg.left, 10) + parseInt(msg.right, 10)
  respond(null, {answer: sum})
})

module.exports = seneca
