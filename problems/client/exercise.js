var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')
var wrappedexec = require('workshopper-wrappedexec')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

exercise = wrappedexec(exercise)

// modules we want run just prior to the submission in the
// child process
// exercise.wrapModule(require.resolve('./math-plugin.js'))

/**
 * Uses seneca-executor.js and pass the module to be required as param.
 * The executoor will require the module and then execute it using seneca.
 * (note that this is quite different from the "normal" workshopper-exercise).
 * The seneca log is set to "quiet" to have a clean comparation of stdouts.
 */
exercise.addSetup(function (mode, callback) {
  this.solutionArgs = process.argv.slice(-2)   // The last two arguments should be the params.
  this.submissionArgs = process.argv.slice(-2)
  callback(null)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {/* Do nothing */})

module.exports = exercise
