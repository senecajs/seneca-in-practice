'use strict'

const _ = require('lodash')

exports.getRandomInt = (min = 0, max = 100) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

exports.getRandomFloat = (min = 0, max = 100) => {
  min = Math.ceil(min)
  max = Math.floor(max * 10)
  const num = Math.floor(Math.random() * (max - min)) + min
  return Math.round(num * 10) / 100
}

exports.pickStaticProps = (result) => {
  const staticProps = [
    'pattern', 'action', 'tag', 'seneca', 'version', 'timeout', 'custon', 'plugin', 'parents',
    'remote', 'sync', 'trace', 'sub', 'data', 'err', 'err_trace', 'error', 'empty'
  ]

  return [result[0], _.pick(result[1], staticProps)]
}

