module.exports = function math (options) {
  this.add('role:math, cmd:sum', function (msg, respond) {
    var sum = parseFloat(msg.left) + parseFloat(msg.right)
    respond(null, {answer: sum})
  })

  this.add('role:math, cmd:sum, integer:true', function (msg, respond) {
    var sum = Math.floor(parseFloat(msg.left)) + Math.floor(parseFloat(msg.right))
    respond(null, {answer: sum})
  })
}
