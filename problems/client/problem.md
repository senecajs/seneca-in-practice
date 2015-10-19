We know how to create a Seneca Microservice and how to organize it in a Seneca
plugin. The next step is to write code to use this Micorservices as client.

The method to be used for this purpose is `seneca.act`, which is used to submit
a message to act on. It has two parameters:
* `msg`: the message object.
* `response_callback`: a function that receives the message response, if any.

The response callback is a function you provide with the standard error, result signature.
If there is a problem (say, the message matches no patterns), then the first argument is an Error object.
If everything goes according to plan, the second argument is the result object.

```
seneca.act({role: 'greetings', cmd: 'hello', name: 'Marco'}, function (err, result) {
  if (err) return console.error (err)
  console.log(result)
}
```
The goal of the exercise is to build a simple {italic}sum{/italic} service client
for the plugin defined in the previous exercise. To use it, add `seneca.use` with
the name of the js.

```
seneca.use('math')
```
The client must add the number passed as parameters (use `process.argv`) and
print out the result using `console.log`. 

Remember also to require seneca using:

``` javascript
var seneca = require('seneca')()
seneca.use('math')

(...)
```

Test it using `seneca-in-practice verify mysolution`
