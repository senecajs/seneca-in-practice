var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
const comparestdout = require('../comparestdout-filterlogs')
const path = require('path')

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
  const submissionFilePath = path.join(process.cwd(), this.submission)

  this.solutionArgs = [this.solution]
  this.submissionArgs = [submissionFilePath]
  this.solution = path.join(__dirname, '/seneca-memstore-executor.js')
  this.submission = path.join(__dirname, '/seneca-memstore-executor.js')
  callback()
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // Do nothing
})

module.exports = exercise
