# Tree

[Examples](http://meteor-templ.herokuapp.com/tree) [GitHub](https://github.com/meteor-templ/tree) [Atmosphere.js](atmospherejs.com/templ/tree)

Realy fully customizable, and reactive trees for trees of directories, trees of comments, trees of any custom data.

## Install

```
meteor add templ:tree
```

## Documentation

### Template['Tree.Cursor']

#### Arguments

##### cursor
> cursor: Mongo.Cursor

Required. Defines the mongodb cursor with documents to display in one level of tree.

##### state
> state?: Document

Optional. Defines a document of this tree node closed state in schema of `Templ.Tree.States`.

##### contentBlock
> contentBlock: Blaze.Template|String

Required. Can be sended as native `Blaze` `contentBlock` or as argument.

```html
{{> Tree.Cursor contentBlock='myCustomContentTemplate'}}
{{# Tree.Cursor}}
    {{> myCustomContentTemplate}}
{{/ Tree.Cursor}}
```

##### theme
> theme?: Blaze.Template|String = 'Tree.Theme'

Optional. It allows you to set the cursor layout template. Can be sended as native `Blaze` `elseBlock` or as argument `theme`.

```html
{{> Tree.Cursor theme='myCustomTheme'}}
{{# Tree.Cursor}}
{{else}}
    {{> myCustomTheme}}
{{/ Tree.Cursor}}
```

### Template['Tree.Open']
> {{# Tree.Open state=Document}}{{/ Tree.Open}}

It allows you to easily create a button of state change.

```html
{{# Tree.Open state=(States.findState this)}}
    <button>open</button>
{{/ Tree.Open}}
```

### Template['Tree.Close']
> {{# Tree.Close state=Document}}{{/ Tree.Close}}

It allows you to easily create a button of state change.

```html
{{# Tree.Close state=(States.findState this)}}
    <button>close</button>
{{/ Tree.Close}}
```

### Template['Tree.Toggle']
> {{# Tree.Toggle state=Document}}{{else}}{{/ Tree.Open}}

It allows you to easily create a button of state change.

```html
{{# Tree.Close state=(States.findState this)}}
    <button>close</button>
{{else}}
    <button>open</button>
{{/ Tree.Close}}
```

### Template['Tree.State']
> {{> Tree.State document=Document States=Mongo.Collection closed?=Boolean}}

It initializes the state for the displayed document.

You can set the initial `closed` state for this document.

### Templ.Tree.States
> Mongo.Collection

Collection by default for storing closing state.

### collection.attachTemplTreeStatesGraph
> anyCollection.attachTemplTreeStatesGraph(options?: Options)

Make a custom collection of ready to use as storage states.

Ways to do the same thing:
```js
collection.attachTemplTreeStatesGraph();
// or
collection.attachGraph({ schema: false });
collection.attachSchema(collection.attachTemplTreeStatesGraph.Schema);
collection.helpers(collection.attachTemplTreeStatesGraph.Helpers);
collection.findState = collection.attachTemplTreeStatesGraph.findState;
collection.isClosed = collection.attachTemplTreeStatesGraph.isClosed;
collection.insertState = collection.attachTemplTreeStatesGraph.insertState;
// or
collection.attachTemplTreeStatesGraph({
    schema: true,
    helpers: true,
    methods: false
});
collection.findState = collection.attachTemplTreeStatesGraph.findState;
collection.isClosed = collection.attachTemplTreeStatesGraph.isClosed;
collection.insertState = collection.attachTemplTreeStatesGraph.insertState;
// You can create any custom collection, because this package needs methods and helpers with same names.
```

## Versions

### 0.0.3
* Support for initial state (#1)