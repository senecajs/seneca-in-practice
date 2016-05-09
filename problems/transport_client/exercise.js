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
 * The seneca log is set to "quiet" to have a clean comparation of stdouts.
 */
exercise.addSetup(function (mode, callback) {
  this.seneca = require('seneca')()
  // Start the Seneca Microservice
  this.seneca.use('solution/plugin/math.js').listen({type: 'tcp'})

  var testArgs = [13, 65] // Test arguments to be summed
  if (mode === 'run') {
    this.submissionArgs = this.submissionArgs.concat([process.argv[4], process.argv[5]])
  } else {
    this.submissionArgs = this.submissionArgs.concat(testArgs)
  }

  this.solutionArgs = this.solutionArgs.concat(testArgs)
  this.submissionArgs = this.submissionArgs.concat(testArgs)
  this.solutionArgs.push('--seneca.log.quiet')
  this.submissionArgs.push('--seneca.log.quiet')

  setTimeout(function () {
    callback()
  }, 2000)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // Closes seneca
  this.seneca.close(callback)
})

module.exports = exercise
