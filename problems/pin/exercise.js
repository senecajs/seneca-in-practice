let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const path = require('path')
const {getRandomInt} = require('../utils')
const comparestdout = require('../comparestdout-filterlogs')

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
  let cmd, a, b
  if (mode === 'run') {
    // run
    if (process.argv.length < 6) {
      a = getRandomInt()
      b = getRandomInt()
      cmd = 'sum'
      console.log(`Tree arguments must be provided, using sum with generating random: ${a}, ${b}`)
    } else {
      cmd = process.argv[4]
      a = process.argv[5]
      b = process.argv[6]
    }

    this.submissionArgs = [submissionFilePath, cmd, a, b]
    this.solution = path.join(__dirname, '/seneca-pin-executor-run.js')
    this.submission = path.join(__dirname, '/seneca-pin-executor-run.js')
  } else {
    this.solutionArgs = [this.solution]
    this.submissionArgs = [submissionFilePath]
    this.solution = path.join(__dirname, '/seneca-pin-executor.js')
    this.submission = path.join(__dirname, '/seneca-pin-executor.js')
  }
  callback(null)
})

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) { /* Do nothing */ })

module.exports = exercise
