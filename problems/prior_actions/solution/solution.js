module.exports = function math (options) {

  this.add('role:math, cmd:sum', function (msg, respond) {
    if (err) return respond(err)
    var sum = msg.left + msg.right
    respond(null, {answer: sum})
  })

  this.add('role:math,cmd:sum', function( msg, respond ) {
    this.prior( msg, function( err, out ) {
      if ( err ) return respond(err)

      if (parseInt(msg.left||parseInt(msg.right))) {
        var sum = Math.floor(msg.left) + Math.floor(msg.right)
      }

      respond( null, {answer: sum})
    })
  })
}
