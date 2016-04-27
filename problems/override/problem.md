The action patterns that we define are unique. They can trigger only one function. The patterns resolve using the following rules:

* More properties win.
* If the patterns have the same number of properties, they are matched in alphabetical order.

These rules are designed to be simple so that you can run them in your head. 
It’s very easy to understand which pattern will trigger which action function.

It is sometimes useful to have a way of enhancing the behavior of an action without rewriting it fully. 
For example, we might want to perform custom validation of the message properties, capture message statistics, 
add additional information to action results, or throttle message flow rates.

So for instance, thinking about hello example, we could override the service to save statistics about the names.


```javascript
var seneca = require('seneca')()
var names={}

seneca.add( 'role:greetings, cmd:hello', function( msg, respond ) {
    var hello = "Hello " + msg.name;
    respond( null, { answer: hello });
});

seneca.add( 'role:greetings, cmd:hello', function( msg, respond ) {
   
   // saving names statistics in names array
   names[msg.name]=  names[msg.name]?  names[msg.name]+1:0
   
   // call previous action function for role:greetings,cmd:hello
   this.prior({
     role:  'greetings',
     cmd:   'hello',
     name:  msg.name
   }, function( err, result ) {
     if( err ) return respond( err )

     respond( null, { answer: result.answer });
   })
});

```

The Seneca instance provided to an action function via the the *this* context variable has a special *prior* method that calls the previous action definition for the current action pattern.

The prior function has parameters:

* msg: the msg object, which you may have modified.
* response_callback: a callback function where you can modify the result.

The goal of the exercise is to override the sum plugin with the addition action expecting the left and right properties to be finite numbers. 
If one of the number is not a finite number the plugin should throw a *new Error('Expected left and right to be numbers.')*.
You could use *Number.isFinite* function to do validate numbers.

When you have completed your program, you can run it in the test environment with:

  {bold}{appname} run program.js{/bold}

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness. After you have
a correct solution, run `{bold}{appname}{/bold}` again and select the next problem!
