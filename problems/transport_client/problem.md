The same **Transport independence** concept of Seneca applies also for client.

As we just see, with Seneca, you create microservices by calling `seneca.listen`.
To talk with the services we use `seneca.client`.

Both `seneca.client` and `seneca.listen` accept the following parameters:
* `port`: optional integer; port number.
* `host`: optional string; host IP address.
* `spec`: optional object; full specification object.

For instance, we can have this microservice:
```
require('seneca')()
  .use( 'myplugin' )
  .listen( { type:'tcp'} )
```
...and a client:

```
require('seneca')()
  .client(6666, { type:'tcp'})
  .act({role:'greetings', cmd:'hello',name:'Marco'},console.log)
```

The goal of the exercise is to write a client for the previous `math` plugin using
the `sum` command exposed on TCP on the default port that prints on `console.log`
the microservice answer.

To solve the exercise create the solution which sums the two integers passed
using the first two arguments (use `process.argv`).

If you want to test it you can also change (or make a copy) of the solution of the previous exercise and make it expose the microservice through TCP, launch it with node and launch your solution directly (`node mysolution`)
