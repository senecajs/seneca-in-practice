Decorations are a good way to mix in commonly used functionality with your Seneca
instance, using: `decorate(name, handler)`

Where:
- `name`: The name you wish to call the decorated function or object.
- `handler`: The handler the decorate seneca with. This can be a function or an object.

For instance here we add a `stamp` function:

```
var seneca = require('seneca')

seneca.decorate('stamp', (pattern) => {
  console.log(Date.now(), pattern)
})

seneca.stamp('role:echo')
```

Also Plugins are a good place where to add decorations. See below:

```
function plugin (opts) {
  var seneca = this

  seneca.decorate('stamp', (pattern) => {
    console.log(Date.now(), pattern)
  })

  // (...)
}
```

The goal of the exercise is to make the math plugin obtained so far to decorate
Seneca with a `availableOperations` function, that must return the list of the
available operations (i.e. `['sum', 'product', 'operation-history']`)

When you have completed your program, you can run it with:

    {bold}seneca-in-practice run program.js{/bold}

And once you are happy that it is correct then run:

    {bold}seneca-in-practice verify program.js{/bold}

And your submission will be verified for correctness.
After you have a correct solution, run `{bold}{appname}{/bold}` again and
select the next problem!
