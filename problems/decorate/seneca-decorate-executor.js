'use strict'

/**
 * Executes the submitted and the solution, to compare the stdout.
 * The module to be require as the first param.
 */

 // Temporary, see: https://github.com/senecajs/seneca/issues/566
 process.removeAllListeners('warning')

var seneca = require('seneca')()
const mode = process.argv[2]
seneca.use('basic').use('entity').use(process.argv[2]).ready(() => {
  const res = seneca.availableOperations()
  if (mode === 'run') {
    console.log(`Invocation of availableOperations returned: ${JSON.stringify(res)}`)
  } else {
    console.log(JSON.stringify(res))
  }
})
