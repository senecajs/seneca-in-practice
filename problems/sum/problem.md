

---

## Introduction
Seneca lets you build a microservice system without worrying about how the
parts fit together.

Every microservice in seneca has to consume JSON messages. Unlike other
systems, in seneca the producer of such a JSON message does not specify
 which service should process the message. In seneca, each microservice
 specifies **patterns** to match messages against and Seneca makes sure
 that each message is processed by the best matching service.

The pattern definition is just a list of key-value pairs that the top level
 properties of the JSON message document must match.

This is an example service for a simple `hello` _command_ with the
_role_ `greetings`:

```javascript
var seneca = require('seneca')()
seneca.add( 'role:greetings,cmd:hello', function( msg, respond ) {
    var hello = "Hello " + msg.name;
    respond( null, { answer: hello });
});
```

Note that you can specify patterns alternatively as `Object`:

```javascript
seneca.add({role: 'greetings', cmd: 'hello'}, ...);
```

The challenge for this step is to build a simple seneca service
for the role `math` and command `sum`.
The service has to calculate the sum of the `left` and `right` property of
the message.
For the purpose of this exercise, at the end of the solution you have to
export seneca. Note that **this is usually not necessary** since we can
organize Microservices in plugins (see the next exercise about that).
Also, to require seneca, it must be installed in the local folder
 e.g. running `npm i seneca`

``` javascript
var seneca = require('seneca')()

seneca.add( // TODO
)

module.exports = seneca
```

When you have completed your program, you can run it in the test environment with:

    {bold}seneca-in-practice run program.js{/bold}

And once you are happy that it is correct then run:

    {bold}seneca-in-practice verify program.js{/bold}

And your submission will be verified. Once your solution is correct solution, run `{bold}seneca-in-practice{/bold}` again and
select the next exercise!
