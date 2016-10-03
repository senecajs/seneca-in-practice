Let's consider a situation in which we want to execute a set of operations
for each invocation. On the Microservice side, this can be done using `wrap`,
that is a method which matches a set of patterns and overrides all of them with
the same action extension function. This is the same as calling `seneca.add`
manually for each one. It takes the following two parameters:

* `pin`: a pin is a pattern-matching pattern.
* action: action extension function.

Here an example of the "greetings" plugin which transform every name passed
in uppercase:

```javascript
module.exports = function greetings(options) {

  this.add({role:'greetings', cmd:'hello'}, function(args, done) {
    var hey = "Hello " + msg.name;
    respond(null, { answer: hey });
  })

  this.add({role:'greetings', cmd:'hey'}, function(args, done) {
    var hey = "Hey " + msg.name;
    respond(null, { answer: hey });
  })

  this.wrap({role:'greetings'}, function (msg, respond) {
    msg.name  = msg.name.toUpperCase();
    this.prior(msg, respond)
  })

}
```

In this case, the pin `role:greetings` matches the patterns `role:greetings,cmd:hello`
and `role:greetings,cmd:hey` that are registered with Seneca.

Note the `prior` call.  Each time you override an action pattern, you get a prior.
This prior may have its own prior from a previous definition of the action pattern.
So this is the way of calling the overriden function. In this sense the `wrap`
actually acts as a wrapper for a set of patterns/actions.

Also `pin` can be used to specify the set of patterns that is associated with a client.
```
require('seneca')().use('greetings' ).listen({type:'tcp', pin:'role:greetings'})
```

The goal of the exercise is to extend the math plugin using `wrap` with a `pin`
to convert the passed parameters to Number, so that the plugin works also if
the numbers to be added / multiplied are strings.
Use `process.argv` params, so that the first param is `sum` or `product` strings
and the other two are the numbers on which the operation must be applied.

When you have completed your program, you can run it with:

    {bold}seneca-in-practice run program.js{/bold}

And once you are happy that it is correct then run:

    {bold}seneca-in-practice verify program.js{/bold}

And your submission will be verified for correctness.
After you have a correct solution, run `{bold}{appname}{/bold}` again and
select the next problem!
