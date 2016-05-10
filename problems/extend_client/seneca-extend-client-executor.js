'use strict'

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */
var client = process.argv[2]
process.argv = ['', '', process.argv[3], process.argv[4], '--seneca.log.quiet']
require(client)
