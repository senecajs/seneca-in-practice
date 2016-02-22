#!/usr/bin/env node

var workshopper = require('workshopper')
var path = require('path')
var credits = require('./credits')
var hooray = require('workshopper-hooray')
var more = require('workshopper-more')

var fpath = function (f) {
  return path.join(__dirname, f)
}

workshopper({
  name: 'seneca-in-practice',
  title: 'SENECA IN PRACTICE!',
  subtitle: 'Learn how to make Microservices with Seneca',
  exerciseDir: fpath('/problems/'),
  appDir: __dirname,
  menu: {
    bg: 'red'
  },
  helpFile: path.join(__dirname, 'help.txt'),
  commands: [{
    name: 'credits',
    handler: credits
  }, {
    name: 'more',
    menu: false,
    short: 'm',
    handler: more
  }],
  onComplete: hooray
})
