---

Patterns make it easy for you to extend your functionality. Instead of adding if
statements and complex logic, you simply add more patterns.

So for instance, thinking about hello example, we could extend the service to
support the italian language. To do this, we can add a new property, `lang:it`,
to the message object. Then we provide a new action for messages that have
this property:

```javascript
var seneca = require('seneca')()

seneca.add({role:'greetings', cmd:'hello'}, function( msg, respond ) {
    var hello = "Hello " + msg.name;
    respond( null, { answer: hello });
});

seneca.add({role:'greetings', cmd:'hello', lang:'it'}, function( msg, respond ) {
    var hello = "Ciao " + msg.name;
    respond( null, { answer: hello });
});

```

Now, this message:

```javascript
{role: 'greetings', cmd: 'hello', name: 'Michele', lang: 'it'}

```

will produce:

```javascript
{answer: 'Ciao Michele'}

```

The goal of the exercise is to extend the sum plugin so that it supports the
ability to force integer-only arithmetic.
To do this, you add a new property, `integer:true`, to the message object and
then apply Math.floor to both numbers.

When you have completed your program, you can run it using with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness.
After you have a correct solution, run `{bold}{appname}{/bold}` again and
select the next problem!
