module.exports = function math (options) {
  this.add('role:math, cmd:sum', function (msg, respond) {
    var sum = msg.left + msg.right
    respond(null, {answer: sum})
  })

  this.add('role:math, cmd:sum, integer: true', function (msg, respond) {
    var sum = Math.floor(msg.left) + Math.floor(msg.right)
    respond(null, {answer: sum})
  })
}
