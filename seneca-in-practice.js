var senecaInPractice = require('workshopper-adventure')({
  title: 'SENECA IN PRACTICE!',
  subtitle: 'Learn how to make Microservices with Seneca',
  appDir: __dirname,
  menu: {
    bg: 'red'
  },
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer')
})
senecaInPractice.onComplete = require('workshopper-hooray')
senecaInPractice.addAll([
  'Sum',
  'Client',
  'Plugin',
  'Roles',
  'Extend',
  'Extend Client',
  'Override',
  'Pin',
  'Transport',
  'Transport Client',
  'Mem Store'
])

module.exports = senecaInPractice
