We know how to create a Seneca Microservice and how to organize it in a Seneca
plugin. The next step is to write code to use this Micorservices as client.

The method to be used for this purpose is `seneca.act`, which is used to submit
a message to act on. It has two parameters:
* `msg`: the message object.
* `response_callback`: a function that receives the message response, if any.

The response callback is a function you provide with the standard error, result signature. If there is a problem (say, the message matches no patterns), then the first argument is an Error object. If everything goes according to plan, the second argument is the result object.

```
seneca.act({role: 'greetings', cmd: 'hello', name: 'Marco'}, function (err, result) {
  if (err) return console.error (err)
  console.log(result)
}
```
The goal of the exercise is to build a simple {italic}sum{/italic} service client.
The pattern to be matched is `role:math, cmd:sum` with two parameters: the numbers
to be added (yes, it's the service defined in the first exercise). The rusult must be
printed to `console.log`.

Remember to require seneca using:

``` javascript
var seneca = require('seneca')()
```

When done, expose this solution as a module using:

``` javascript
module.exports = function (left, right) {
    seneca.act( // TODO (...)
    );
}
```
