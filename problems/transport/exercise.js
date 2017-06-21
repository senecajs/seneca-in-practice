const through2 = require('through2')
const hyperquest = require('hyperquest')
let exercise = require('workshopper-exercise')()
const filecheck = require('workshopper-exercise/filecheck')
const execute = require('workshopper-exercise/execute')
const comparestdout = require('../comparestdout-filterlogs')
const eos = require('end-of-stream')
const {getRandomInt} = require('../utils')

// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

function rndport () {
  return 1024 + Math.floor(Math.random() * 64511)
}

let a, b, cmd

/**
 * We use a random port to avoid collision with possible hanged process on
 * ports.
 */
exercise.addSetup(function (mode, callback) {
  this.submissionPort = rndport()
  this.solutionPort = this.submissionPort + 1
  this.submissionArgs = [this.submissionPort]
  a = getRandomInt()
  b = getRandomInt()
  cmd = 'sum'
  if (mode === 'verify') {
    this.solutionArgs = [this.solutionPort]
  }
  process.nextTick(callback)
})

// add a processor for both run and verify calls, added *before*
// the comparestdout processor so we can mess with the stdouts
exercise.addProcessor(function (mode, callback) {
  this.submissionStdout.pipe(process.stdout)
  // replace stdout with our own streams
  this.submissionStdout = through2()

  if (mode === 'verify') {
    this.solutionStdout = through2()
  }

  // After 5 secs, try to query. We have to wait so much for Win...
  setTimeout(query.bind(this, mode, callback), 5000)
  console.log(`Invoking ${cmd} with random generated: ${a}, ${b}`)

  process.nextTick(function () {
    callback(null, true)
  })
})

// compare stdout of solution and submission
exercise = comparestdout(exercise)

// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) { /* Do nothing */ })

// delayed for 500ms to wait for servers to start so we can start
// playing with them
function query (mode, callback) {
    // Should we pass the port?
  function connect (port, stream) {
    var input = through2()

    var url = `http://127.0.0.1:${port}/act?role=math&cmd=${cmd}&left=${a}&right=${b}`
    eos(input, function () {
      // Sena CTRL-C after 500 millis
      setTimeout(function () {
        console.log('\n')
        process.kill(process.pid, 'SIGINT')
      }, 500)
    })

    input.pipe(hyperquest.post(url)).pipe(stream)
    input.end()
  }

  connect(this.submissionPort, this.submissionStdout)
  if (mode === 'verify') {
    connect(this.solutionPort, this.solutionStdout)
  }
}

module.exports = exercise
