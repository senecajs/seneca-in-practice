module.exports = function math (options) {
  this.add('role:math,cmd:sum', function (msg, respond) {
    console.log('infinite')
    var sum = msg.left + msg.right
    respond(null, {answer: sum})
  })

  // override role:math,cmd:sum with additional functionality
  this.add(
    'role:math,cmd:sum',
    function (msg, respond) {
      // bail out early if there's a problem
      if (!Number.isFinite(msg.left) || !Number.isFinite(msg.right)) {
        return respond(new Error('Expected left and right to be numbers.'))
      }

      // call previous action function for role:math,cmd:sum
      this.prior({
        role: 'math',
        cmd: 'sum',
        left: msg.left,
        right: msg.right

      }, function (err, result) {
        if (err) return respond(err)

        result.info = msg.left + '+' + msg.right
        respond(null, result)
      })
    })

  this.add('role:math,cmd:sum,integer:true', function (msg, respond) {
    var sum = Math.floor(msg.left) + Math.floor(msg.right)
    respond(null, {answer: sum})
  })
}
