module.exports = function math (options) {
  this.add({role: 'math', cmd: 'sum'}, function (msg, respond) {
    var operation = this.make$('operation')
    operation.cmd = 'sum'
    operation.left = msg.left
    operation.right = msg.right
    operation.save$(function (err, operation) {
      if (err) {
        return respond(err)
      }
      return respond(null, {answer: msg.left + msg.right})
    })
  })

  this.add({role: 'math', cmd: 'product'}, function (msg, respond) {
    var operation = this.make$('operation')
    operation.cmd = 'product'
    operation.left = msg.left
    operation.right = msg.right
    operation.save$((err, operation) => {
      if (err) {
        return respond(err)
      }
      return respond(null, {answer: msg.left * msg.right})
    })
  })

  this.add({role: 'math', cmd: 'sum', integer: 'true'}, function (msg, respond) {
    var sum = Math.floor(msg.left) + Math.floor(msg.right)
    respond(null, {answer: sum})
  })

  // override role:math,cmd:sum with additional functionality
  this.add({role: 'math', cmd: 'sum'}, function (msg, respond) {
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

  this.wrap({role: 'math'}, function (msg, respond) {
    msg.left = Number(msg.left).valueOf()
    msg.right = Number(msg.right).valueOf()
    this.prior(msg, respond)
  })

  this.add({role: 'math', cmd: 'operation-history'}, function product (msg, respond) {
    var operation = this.make$('operation')
    operation.list$({}, function (err, list) {
      if (err) {
        return respond(err)
      }
      return respond(null, {answer: list})
    })
  })

  this.decorate('availableOperations', () => {
    return ['sum', 'product', 'operation-history']
  })
}
