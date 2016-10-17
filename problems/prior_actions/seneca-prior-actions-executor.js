// Temporary, see: https://github.com/senecajs/seneca/issues/566
process.removeAllListeners('warning')

var seneca = require('seneca')()
seneca.use(process.argv[2])

seneca.act({role: 'math', cmd: 'sum', left: 4, right: 2}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})
seneca.act({role: 'math', cmd: 'sum', integer: true, left: 14.8, right: 19.5}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})
