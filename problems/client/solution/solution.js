'use strict'

const seneca = require('./math')
const left = parseInt(process.argv[2], 10)
const right = parseInt(process.argv[3], 10)

seneca.act({role: 'math', cmd: 'sum', left, right}, (err, result) => {
  if (err) return console.error(err)
  console.log(result)
})
