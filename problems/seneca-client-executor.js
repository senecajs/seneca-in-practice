'use strict'

// Temporary, see: https://github.com/senecajs/seneca/issues/566
process.removeAllListeners('warning')

/**
* Executes the submitted and the solution, to compare the stdout.
* The module to be require as the first param.
*/
var client = process.argv[2]
process.argv = ['', '', process.argv[3], process.argv[4]]
require(client)
