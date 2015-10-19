Seneca lets you build a microservice system without worrying about how things will fit together in production.


Every service consumes messages, which are JSON documents, with any internal structure you like.


The producer of the message do not know which service is interested in receiving
the message. Indeed, the service writer specify the property **patterns** that you care about,
and Seneca (with a little configuration help) makes sure that you get any messages matching those patterns, sent by other services.


The patterns are very simple, just a list of key-value pairs that the top level properties of the JSON message document must match.

Let's see as example a simple "hello" service:

```javascript
var seneca = require('seneca')()
seneca.add( 'role:greetings,cmd:hello', function( msg, respond ) {
    var hello = "Hello " + msg.name;
    respond( null, { answer: hello });
});

```

The goal of the exercise is to build a simple *sum* service that
 adds two numbers, `left` and `right`. Add to the service the  pattern with `role` 'math' and `cmd` 'sum' (note that patterns
 can be both expressed as string or as Object).

For the purpose of this exercise, at the end of the solution you have to export seneca. Note that **this is usually
not necessary** since we can organize Microservices in plugins (see the next exercise about that).

``` javascript
var seneca = require('seneca')()

seneca.add( // TODO
)

module.exports = seneca
```

When you have completed your program, you can run it in the test
environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!
