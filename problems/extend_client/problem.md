After having extended the type of messages supported by our services we now need to invoke it.

So, if we want to call our newly extended hello services we should do something like this:

```javascript
var seneca = require('seneca')()

var plugin = function( options ) { ... } // as above

seneca.use( plugin, {} )
seneca.act( 'role:greetings,cmd:hello,name:michele', console.log )
seneca.act( 'role:greetings,cmd:hello,lang:it,name:michele', console.log )

```

This code should produce 

```javascript
Hello Michele
Ciao Michele

```

The goal of the exercise is to extend the client of the sum plugin so that it call the two plugins that we previously developed.
Keep in mind that numbers will be passed as parameters (use `process.argv`) and that you might want to transform them into float numbers.

When you have completed your program, you can run it in the test environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!