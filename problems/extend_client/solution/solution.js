var seneca = require('seneca')()
seneca.use('math')

seneca.act({role: 'math', cmd: 'sum', left: parseFloat(process.argv[2]), right:  parseFloat(process.argv[3])}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})
seneca.act({role: 'math', cmd: 'sum', integer: true, left:  parseFloat(process.argv[2]), right:  parseFloat(process.argv[3])}, function (err, result) {
  if (err) return console.error(err)
  console.log(result)
})
