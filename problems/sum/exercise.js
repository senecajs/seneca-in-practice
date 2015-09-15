var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')


// checks that the submission file actually exists
exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise)

console.log("SETUP", exercise._setups );


// compare stdout of solution and submission
exercise = comparestdout(exercise)

/**
 * Uses executor.js and pass the module to be required as pasamr.
 */
exercise.addSetup(function (mode, callback) {

    this.solutionArgs = this.solution;
    this.submissionArgs = process.cwd() + "/" + this.submission; // TODO: verify portability

    this.solution = 'problems/sum/seneca-executor.js';
    this.submission = 'problems/sum/seneca-executor.js';

    callback(null)
});


// cleanup for both run and verify
exercise.addCleanup(function (mode, passed, callback) {
    // Do nothing
})

module.exports = exercise
