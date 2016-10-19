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

  // override role:math,cmd:sum with additional functionality
  this.add({role: 'math', cmd: 'sum'}, function (msg, respond) {  // THIS CANNOT BE A FAT ARROW
    // bail out early if there's a problem
    if (!isFinite(msg.left) || !isFinite(msg.right)) {
      return respond(new Error('Expected left and right to be numbers.'))
    }

    // call previous action function for role:math,cmd:sum
    this.prior(msg, (err, result) => {
      if (err) return respond(err)
      result.info = `${msg.left} + ${msg.right}`
      respond(null, result)
    })
  })
}
