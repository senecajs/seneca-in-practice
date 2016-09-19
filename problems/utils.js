'use strict'

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
