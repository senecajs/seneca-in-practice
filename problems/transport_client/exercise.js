var exercise = require('workshopper-exercise')()
var filecheck = require('workshopper-exercise/filecheck')
var execute = require('workshopper-exercise/execute')
const {getRandomInt} = require('../utils')
const comparestdout = require('../comparestdout-filterlogs')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

// compare stdout of solution and submission
exercise = comparestdout(exercise)

let a, b

/**
 * The seneca log is set to "quiet" to have a clean comparation of stdouts.
 */
exercise.addSetup(function (mode, callback) {
  if (mode === 'run') {
    if (process.argv.length < 6) {
      a = getRandomInt()
      b = getRandomInt()
      console.log(`Two arguments must be provided, generating random: ${a}, ${b}`)
    } else {
      a = process.argv[4]
      b = process.argv[5]
    }
  } else {
    // verify
    a = getRandomInt()
    b = getRandomInt()
  }

  this.seneca = require('seneca')()
  // Start the Seneca Microservice
  this.seneca.use('solution/plugin/math.js').listen({type: 'tcp'})

  var testArgs = [a, b]
  this.submissionArgs = this.submissionArgs.concat(testArgs)
  this.solutionArgs = this.solutionArgs.concat(testArgs)

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
