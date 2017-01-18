---

## Introduction
Seneca lets you build a Microservice system without worrying about how the
parts fit together.

Every Microservice in Seneca has to consume JSON messages. Unlike other
systems, in Seneca the producer of such a JSON message does not specify
which service should process the message. In Seneca, each Microservice
specifies **patterns** to match messages against and Seneca makes sure
that each message is processed by the best matching service.

The pattern definition is just a list of key-value pairs that the top level
properties of the JSON message document must match.

This is an example service for a simple `hello` _command_ (cmd) with the
_role_ `greetings` (so configuring the Microservice to answer to a
 `role:greetings,cmd:hello` pattern)

```javascript
var seneca = require('seneca')()
seneca.add( {role: 'greetings', cmd: 'hello'}, function( msg, respond ) {
    var hello = "Hello " + msg.name;
    respond( null, { answer: hello });
});
```
In the above example the pattern has been expressed as `Object` but
you can also specify patterns as `String` like this:

```javascript
seneca.add( {role:'greetings', cmd:'hello'}, ...);
```

The challenge for this step is to build a simple Seneca service
for the role `math` and command `sum`.
The service has to calculate the sum of the `left` and `right` property of
the message and return it in the form `{answer: sum}`
For the purpose of this exercise, at the end of the solution you have to
export Seneca. Note that **this is usually not necessary** since we can
organize Microservices in plugins (see the plugin exercise about that).
Also, to require Seneca, it must be installed in the local folder
 e.g. running `npm i seneca`

``` javascript
var seneca = require('seneca')()

seneca.add( // TODO
)

module.exports = seneca
```

When you have completed your program, you can run it with:

    {bold}seneca-in-practice run program.js{/bold}

And once you are happy that it is correct then run:

    {bold}seneca-in-practice verify program.js{/bold}

And your submission will be verified for correctness.
After you have a correct solution, run `{bold}{appname}{/bold}` again and
select the next problem!
