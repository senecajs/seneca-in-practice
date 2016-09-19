module.exports = function math (options) {
  this.add({role: 'math', cmd: 'sum'}, (msg, respond) => {
    var sum = msg.left + msg.right
    respond(null, {answer: sum})
  })

  this.add({role: 'math', cmd: 'product'}, (msg, respond) => {
    var product = msg.left * msg.right
    respond(null, {answer: product})
  })

  this.add({role: 'math', cmd: 'sum', integer: 'true'}, (msg, respond) => {
    var sum = Math.floor(msg.left) + Math.floor(msg.right)
    respond(null, {answer: sum})
  })
}
