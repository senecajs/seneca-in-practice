module.exports = function math( options ) {
    this.add('role:math, cmd:sum', function( msg, respond ) {
        var sum = msg.left + msg.right;
        respond(null, {answer: sum});
    });
};
