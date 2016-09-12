let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('workshopper-exercise/comparestdout')
const path = require('path')

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) { /* Do nothing */ })

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

exercise.addSetup(function (mode, callback) {
   // Test arguments to be summed
  if (mode === 'run') {
    // run
    // TODO: If params are not passed, print a warning and generates them randomly
    this.submissionArgs = [process.cwd() + '/' + this.submission, process.argv[4], process.argv[5]]
  } else {
    // verify
    // TODO: Generate random params
    this.solutionArgs = [this.solution, 2, 7]
    this.submissionArgs = [process.cwd() + '/' + this.submission, 2, 7]
  }
  this.solution = path.join(exercise.dir, '/seneca-client-executor.js')
  this.submission = path.join(exercise.dir, '/seneca-client-executor.js')
  callback()
})

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise
