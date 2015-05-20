ns-elapsed
==========

[![Build Status](https://travis-ci.org/ArtskydJ/ns-elapsed.svg?branch=master)](https://travis-ci.org/ArtskydJ/ns-elapsed)
[![Dependency Status](https://david-dm.org/artskydj/ns-elapsed.svg)](https://david-dm.org/artskydj/ns-elapsed)
[![devDependency Status](https://david-dm.org/artskydj/ns-elapsed/dev-status.svg)](https://david-dm.org/artskydj/ns-elapsed#info=devDependencies)

# api

```js
var Elapsed = require('ns-elapsed')
```

## `var e = new Elapsed()`

- `e.set()`
- `e.get()`


### `e.set()`

Does not return anything.

Automatically called when constructed.

```js
e.set()
```

### `e.get()`

Returns the number of seconds elapsed. E.g. 13.947172826, (almost 14 seconds.)

```js
console.log( e.get() ) //should log something like '13.947172826'
```

# examples

Asynchronous example

```js
var Elapsed() = require('ns-elapsed')
var e = new Elapsed()
e.set() //This is superfluous because 'set()' is automatically called when 'e' was constructed.
setTimeout(function() { //Asynchronous code here
	console.log( e.get() )
}, 1000)
```

Synchronous example:

```js
var elapsed = require('ns-elapsed')()
//Synchronous code here
console.log( e.get() )
```

# install

Install with [NPM](http://nodejs.org)

	npm install ns-elapsed

# license

[MIT](http://opensource.org/licenses/MIT)
