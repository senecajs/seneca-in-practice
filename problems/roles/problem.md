---

There are no hard and fast rules for naming your action pattern,
however, there are some conventions that help to organize them.

Indeed, a plugin:
- Provides a functionality to the system
- This functionality fulfills a role in the system

So it makes sense to use `role:plugin-name` as part of your action pattern.
This creates a pattern namespace to avoid clashes with other plugin patterns.
The use of the word “role” also indicates that other plugins may override some
aspects of this role (that is, aspects of this functionality) by providing
extensions to some of the action patterns (we'll see how to extend microservices
in the next exercise).

Another common convention is to use the property “cmd” for the main public
commands exposed by the plugin. So, you might have, for example:

```javascript
var plugin = function (options) {
  this.add( {role:'greetings', cmd:'hey'}, function( args, done ) {
    var hey = "Hey " + msg.name;
    respond( null, { answer: hey });
  })
}
```

The goal of the exercise is to add to the `math` module from the previous
exercise a new command `product` with the same role `math`. This command will
multiply two numbers.

When you have completed your program, you can run it using with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness.
After you have a correct solution, run `{bold}{appname}{/bold}` again and
select the next problem!
