require('seneca')()
  .client(6666, {type: 'tcp'})
  .act({role: 'math', cmd: 'sum', left: process.argv[2], right: process.argv[3]}, function (err, result) {
    if (err) return console.error(err)
    console.log(result)
  })
