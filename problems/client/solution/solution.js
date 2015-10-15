var seneca = require('seneca')()

module.exports = function (left, right) {
  seneca.act({role: 'math', cmd: 'sum', left: left, right: right}, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
  })
}
