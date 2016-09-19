require('seneca')().use('./math').listen({
  port: process.argv[2],
  host: '127.0.0.1'
})
