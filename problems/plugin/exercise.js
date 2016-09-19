let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('../comparestdout-filterlogs')
const path = require('path')
const {getRandomInt} = require('../utils')

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
  const left = getRandomInt(0, 100)
  const right = getRandomInt(0, 100)
  const submissionFilePath = path.join(process.cwd(), this.submission)

  if (mode === 'run') {
    // run
    console.log(`Calling plugin with left: ${left}, right: ${right}`)
  }
  this.solutionArgs = [this.solution, left, right]
  this.submissionArgs = [submissionFilePath, left, right]

  // this.solutionArgs = [this.solution, '--seneca.log.quiet']
  // this.submissionArgs = [process.cwd() + '/' + this.submission, '--seneca.log.quiet']
  this.solution = path.join(exercise.dir, '/seneca-plugin-executor.js')
  this.submission = path.join(exercise.dir, '/seneca-plugin-executor.js')
  callback()
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
  // Do nothing
})

module.exports = exercise
