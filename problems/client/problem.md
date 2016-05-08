We know how to create a Seneca Microservice.
The next step is to write code to use this Microservice as client.

The method to be used for this purpose is `seneca.act`, which is used to submit
a message to act on. It has two parameters:
* `msg`: the message object.
* `response_callback`: a function that receives the message response, if any.

The response callback is a function you provide with the standard error,
result signature. If there is a problem (say, the message matches no patterns),
then the first argument is an Error object.
If everything goes according to plan, the second argument is the result object.

```
seneca.act({role: 'greetings', cmd: 'hello', name: 'Marco'},
    function (err, result) {
        if (err) return console.error (err)
        console.log(result)
    })
```
The goal of the exercise is to build a simple {italic}sum{/italic} service
client for the pattern defined in the previous exercise.
The client must add the number passed as parameters (use `process.argv`) and
print out the result using `console.log`. Keep in mind that process.argv are
passed as string so you might want to transform them into numbers.

Remember also to require math module using:

``` javascript
var seneca = require('./math')

(...)
```

When you have completed your program, you can run it in the test environment
with:

    {bold}seneca-in-practice run program.js{/bold}

And once you are happy that it is correct then run:

    {bold}seneca-in-practice verify program.js{/bold}

Once your solution is correct solution, run `{bold}seneca-in-practice{/bold}`
again and select the next exercise!
