var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
var comparestdout = require('workshopper-exercise/comparestdout')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

/**
 * Uses seneca-executor.js and pass the module to be required as param.
 * The executoor will require the module and then execute it using seneca.
 * (note that this is quite different from the "normal" workshopper-exercise).
 * The seneca log is set to "quiet" to have a clean comparation of stdouts.
 */
exercise.addSetup(function (mode, callback) {
  this.solutionArgs = [this.solution, '--seneca.log.quiet']
  this.submissionArgs = [process.cwd() + '/' + this.submission, '--seneca.log.quiet'] // TODO: verify portability

  this.solution = __dirname + '/seneca-roles-executor.js'
  this.submission = __dirname + '/seneca-roles-executor.js'
  callback(null)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // Do nothing
})

module.exports = exercise
