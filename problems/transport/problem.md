Up to now, we had everything running in the same process. In Seneca we have
**Transport independence**. This means that you can send messages between services in
many ways, all hidden from your business logic. It's possible to change that
using the `listen` method:

```
require('seneca')().use('myplugin').listen()
```
Running this code starts a Microservice process that listens on port 10101
(the default) for HTTP requests. This is not a web server.
In this case, HTTP is being used as the transport mechanism for messages.

Note that if no host is specified, the client will try to connect to host at 0.0.0.0,
which do not work on Windows. To avoid that, just pass options to listen, e.g.:

```
seneca.listen(8080, '192.168.0.2')
```

The HTTP transport provides an easy way to integrate with Seneca Microservices,
but it does have all the overhead of HTTP.
Another transport that you can use is direct TCP connections. Seneca provides
both HTTP and TCP options via the built-in transport. Let’s move to TCP:

```
seneca.listen({type:'tcp'})
```

The goal of the exercise is to expose the `math` plugin already implemented using
HTTP Transport on a port specified as parameter (read using `process.argv`).
To solve this exercise you can simply require the plugin and expose it.

Also, you can test this Microservice using the browser or curl doing a GET, for
instance you can run directly the solution using:`node solution 8888` (note that
if you use `seneca-in-practice run mysolution.js`, it uses a random port, invokes
the microservice automatically and then ends, so you cannot test it directly).

Following this example you can use the URL directly in your browser:

`http://localhost:8888/act?role=math&cmd=sum&left=1&right=2`

And once you are happy that it is correct then run:

  {bold}{appname} verify program.js{/bold}

And your submission will be verified for correctness.
After you have a correct solution, run `{bold}{appname}{/bold}` again and
select the next problem!
