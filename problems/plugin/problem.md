When you use the Seneca framework. You write plugins all the time. They are an
easy way to organize your action patterns, like the exercise that you've just
done.

A Seneca plugin is just a function that gets passed an {italic}options{/italic}
object, and has a Seneca instance as its {italic}this{/italic} variable.
You then {italic}add{/italic} some action patterns in the body of the function,
and you’re done. There is no callback.

So an example of seneca plugin could be something like this:

```javascript
var plugin = function( options ) {

   this.add( 'role:greetings,cmd:hello', function( msg, respond ) {
         var hello = "Hello " + msg.name;
         respond( null, { answer: hello });
     });  

}

```

and it could be consumed in this way:

```javascript
var seneca = require('seneca')()

var plugin = function( options ) { ... } // as above

seneca.use( plugin, {} )
seneca.act( 'role:greetings,cmd:hello,name:michele', console.log )

```

The goal of the exercise is to write a plugin that sum of two numbers, as we
did for the first step. For the purpose of this exercise, do not require seneca
directly, just create a module that export a function the defines the patterns,
using `this.add` instead of `seneca.add` like we did in the previous step.

When you have completed your program, you can run it with:

  {bold}{appname} run program.js{/bold}

And once you are happy with it, you can run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness.
After you have a correct solution, run `{bold}{appname}{/bold}` again and
select the next problem!
