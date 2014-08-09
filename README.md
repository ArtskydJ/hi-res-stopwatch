ns-elapsed
==========

[![Build Status](https://travis-ci.org/ArtskydJ/ns-elapsed.svg?branch=master)](https://travis-ci.org/ArtskydJ/ns-elapsed)
[![Github Repository](http://img.shields.io/badge/Repository-Github-brightgreen.svg)](https://github.com/ArtskydJ/ns-elapsed)

- [Install](#install)
- [Require](#require)
- [Methods](#methods)
	- [set()](#set)
	- [get()](#get)
- [Examples](#examples)
- [License](#license)

##Install

Install with [NPM](http://nodejs.org)

	npm install ns-elapsed
	
##Require
To require the constructor do:

```js
var Elapsed = require('ns-elapsed')
var elapsed = new Elapsed()
var elapsed2 = new Elapsed()
```

If you only want one timer, you might as well construct it right away.

	var elapsed = require('ns-elapsed')() //constructed

##Methods
###set()
Does not return anything

```js
elapsed1.set()
```

###get()
Returns the number of seconds elapsed. E.g. 13.947172826, (almost 14 seconds.)

```js
console.log( elapsed1.get() ) //should log something like '13.947172826'
```

##Examples
Time how long it takes for a callback to be called:

```js
var Elapsed() = require('ns-elapsed')
var elapsed = new Elapsed()
elapsed.set()
setTimeout(function() {
	console.log( elapsed.get() )
}, 1000)
```

Time how long it takes for a synchronous function to execute:

```js
var elapsed = require('ns-elapsed')()
//synchronous code here
console.log( elapsed.get() )
```

##License

[MIT](http://opensource.org/licenses/MIT)
