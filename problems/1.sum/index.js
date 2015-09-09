var pwd = process.cwd();

// Problem def, quick tip use ES6 template strings.
exports.problem = 'Write a seneca "hello world" service. ' +
  '	[TODO: Add a little explaination from tutorial] ' +
  '* Create a file `hello.js` which returns `hello ` + the name' +
  '* Don\'t forget to export you function. module.exports = function() {}`);\n\n' +
  'Finally to verify do a `seneca-adventure verify hello.js`\n\n';

// Verifier
exports.verify = function(args,cb) {

  // Propose solution
  var proposedSolution = require(pwd + '/' + args[0]);

  // TODO: Check if the solution is correct.

  if ( proposed(3,4) == 7 ) {
    console.log("You have solved it!");
    return cb(true);
  } else {
    console.log("Sorry, your solution is wrong :(");
  }
};
