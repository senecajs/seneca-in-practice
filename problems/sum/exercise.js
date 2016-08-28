'use strict'

const filecheck = require('workshopper-exercise/filecheck')
const fs = require('fs')
const path = require('path')
const async = require('async')
const _ = require('lodash')
let exercise = require('workshopper-exercise')()

// cleanup for both run and verify
exercise.addCleanup((mode, passed, callback) => { /* Do nothing */ })

// checks that the submission file actually exists
exercise = filecheck(exercise)

// Test params
let a, b
/**
 * If mode === run, get the params from args
 */
exercise.addSetup(function (mode, cb) {
  a = getRandomInt(0, 100)
  b = getRandomInt(0, 100)
  this.solutionModule = require(getSolutionPath() + 'solution.js')
  this.submissionModule = require([process.cwd(), this.args[0]].join('/'))
  cb()
})

/**
 * Processor
 */
exercise.addProcessor(function (mode, callback) {
  let solutionResult, submissionResult
  const that = this
  let pass = true
  async.series([
    cb => {
      that.submissionModule.act({role: 'math', cmd: 'sum', left: a, right: b}, cb)
    },
    cb => {
      if (mode === 'verify') {
        return that.solutionModule.act({role: 'math', cmd: 'sum', left: a, right: b}, cb)
      }
      cb()
    }
  ], (err, results) => {
    submissionResult = results[0]
    if (mode === 'run') {
      console.log(`Execution with left: ${a}, right: ${b} returned: ${JSON.stringify(submissionResult)}`)
    } else {
      solutionResult = results[1]
      if (!_.isEqual(solutionResult, submissionResult)) {
        exercise.emit('fail', `Expected result: ${JSON.stringify(solutionResult)}` +
                              `, Actual result: ${JSON.stringify(submissionResult)}`)
        pass = false
      } else {
        exercise.emit('success', `Expected result: ${JSON.stringify(solutionResult)} ` +
                              `Actual result: ${JSON.stringify(submissionResult)}`)
        pass = true
      }
      return callback(err, pass)
    }
  })
})

// Print out the suggested solution when the student passes. This is copied from
// workshopper-exercise/execute because the rest of execute is not relevant to
// the way this is tested.
exercise.getSolutionFiles = function (callback) {
  var solutionDir = getSolutionPath()
  fs.readdir(solutionDir, function (err, list) {
    if (err) {
      return callback(err)
    }
    list = list
        .filter(function (f) { return (/\.js$/).test(f) })
        .map(function (f) { return path.join(solutionDir, f) })
    callback(null, list)
  })
}

function getSolutionPath () {
  return path.join(exercise.dir, './solution/')
}

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

module.exports = exercise
