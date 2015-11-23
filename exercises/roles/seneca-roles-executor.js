'use strict'

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */

var mod = require(process.argv[2])
var seneca = require('seneca')()
seneca.use(mod).act('role:math,cmd:product,left:3,right:5', console.log)
