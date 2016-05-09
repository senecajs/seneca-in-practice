---

After having extended the type of messages supported by our services we now
need to invoke it.

So, if we want to call our newly extended hello services we should do
something like this:

```javascript
var seneca = require('seneca')()

var plugin = function( options ) { ... } // as above

seneca.use( plugin, {} )
seneca.act( 'role:greetings,cmd:hello,name:michele', console.log )
seneca.act( 'role:greetings,cmd:hello,lang:it,name:michele', console.log )

```

This code should produce:

```javascript
Hello Michele
Ciao Michele

```

The goal of the exercise is to extend the client that we developed,
so that it calls the two patterns that we created at previous step.
Keep in mind that numbers will be passed as parameters (use `process.argv`)
and that you might want to transform them into float numbers.

When you have completed your program, you can run it using with:

    {bold}seneca-in-practice run program.js{/bold}

And once you are happy that it is correct then run:

    {bold}seneca-in-practice verify program.js{/bold}

And your submission will be verified for correctness.
After you have a correct solution, run `{bold}{appname}{/bold}` again and
select the next problem!
