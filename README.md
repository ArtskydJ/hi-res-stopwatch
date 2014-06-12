hi-res-stopwatch
================

##Install
	npm install hi-res-stopwatch
	
##Require
	var Stopwatch = require('hi-res-stopwatch')

##Use
###Create a new stopwatch
	var stopwatch1 = new Stopwatch()

###Start the stopwatch; **set()**
	stopwatch1.set() //Does not return anything

###Get the elapsed time; **get()**
	var elapsed = stopwatch1.get() //Returns a number
