At some time we'll need to persist data. Also for Data Storage
Seneca follows the pattern matching approach.

Seneca provides a simple data abstraction layer (“ORM”), based on the following operations:

* load: load an entity by identifier
* save: create or update (if you provide an identifier) an entity
* list: list entities matching a simple query
* remove: delete an entity by identifier

The patterns are:

* load: `role:entity,cmd:load,name:<entity-name>`
* save: `role:entity,cmd:save,name:<entity-name>`
* list: `role:entity,cmd:list,name:<entity-name>`
* remove: `role:entity,cmd:remove,name:<entity-name>`

So, 'it's very easy: a store is a plugin that provides implementations of these patterns.

Seneca comes with a built-in data persistence plugin: `mem-store`.
This plugin just stores the data in-memory. It can be used  for rapid testing
or prototiping. Since all data operations go via the same set of messages,
you can very easily swap databases, at any time an use other stores
if needed.

Using the data persistence patterns
directly can become tedious, so Seneca also provides a more familiar ActiveRecord-style interface.
To create a record object, you call the `seneca.make` method.
The record object has methods `load$`, `save$`, `list$` and `remove$`
 (the trailing $ avoids clashes with data fields).
The data fields are just the object properties.
See
http://senecajs.org/tutorials/understanding-data-entities.html for full documentation.  

Here an example on how to use the store:
```
var seneca = require('seneca')()

var product = seneca.make('product')
product.name = 'Apple'
product.price = 1.99

// sends role:entity,cmd:save,name:product messsage
product.save$( console.log )
```
The goal of the exercise is to extend the math plugin from the last
exercise to "store" the operations done my the plugin using these objects:

`{cmd: 'sum', left: 4. right: 5}`

Then add to the plugin a `operation-history` command that returns the list of executed
operations so far. For this, please look that `list$` first parameter is a
"query" object, that for this exercise can be left empty (`{}`).
