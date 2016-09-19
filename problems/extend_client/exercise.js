let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('../comparestdout-filterlogs')
const {getRandomFloat} = require('../utils')
const path = require('path')

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) { /* Do nothing */ })

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

exercise.addSetup(function (mode, callback) {
  let a, b
  const submissionFilePath = path.join(process.cwd(), this.submission)

   // Test arguments to be summed
  if (mode === 'run') {
    // run
    if (process.argv.length < 6) {
      a = getRandomFloat()
      b = getRandomFloat()
      console.log(`Two arguments must be provided, generating random: ${a}, ${b}`)
    } else {
      a = process.argv[4]
      b = process.argv[5]
    }
    this.submissionArgs = [submissionFilePath, a, b]
  } else {
    // verify
    a = getRandomFloat()
    b = getRandomFloat()
    console.log('this.solution', this.solution)
    console.log('this.submissionFilePath', submissionFilePath)

    this.solutionArgs = [this.solution, a, b]
    this.submissionArgs = [submissionFilePath, a, b]
  }
  this.solution = path.join(exercise.dir, '../seneca-client-executor.js')
  this.submission = path.join(exercise.dir, '../seneca-client-executor.js')
  callback()
})

// compare stdout of solution and submission
exercise = comparestdout(exercise)

module.exports = exercise
