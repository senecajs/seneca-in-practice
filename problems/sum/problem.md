Seneca lets you build a microservice system without worrying about how things will fit together in production.
Every service consumes messages, which are JSON documents, with any internal structure you like.
The producer of the message do not know which service is interested in receiving
the message. Indeed, the service writer specify the property {italic}patterns{/italic} that you care about,
and Seneca (with a little configuration help) makes sure that you get any messages matching those patterns, sent by other services.
The patterns are very simple, just a list of key-value pairs that the top level properties of the JSON message document must match.

Let's see as example a simple "hello" service, defined in a "greetings" module.
"this" will be bound to the seneca instance, for the moment do not care about how to do that,
just focus on the pattern/function structure.  

```javascript
module.exports = function greeting ( options ) {

    // Here we add a pattern and the related function.
    this.add( 'role:greetings,cmd:hello', function( msg, respond ) {
        var hello = "Hello " + msg.name;
        respond( null, { answer: hello });
    });
};

```

The goal of the exercise is to build a simple {italic}sum{/italic} service.
The service should be an "sum" service, defined in a "math" module, and add two numbers, `left` and `right`.
For the purpose of this exercise, do not require seneca directly, just create a
module that export a function the defines the patterns, using `this.add` like in the
above example.

``` javascript
module.exports = function math( options ) {
    
    this.add( // TODO (...)
    );
}
```

When you have completed your program, you can run it in the test
environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!
