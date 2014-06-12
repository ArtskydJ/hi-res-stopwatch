hi-res-stopwatch
================

##Install
	npm install hi-res-stopwatch
	
##Require
	var Stopwatch = require('hi-res-stopwatch')

##Use
###Create a new stopwatch
	var stopwatch1 = new Stopwatch()

###Start the stopwatch
	stopwatch1.start()

###Stop the stopwatch
	var elapsed = stopwatch1.stop()
	//or
	stopwatch1.stop()
	var elapsed = stopwatch1.get() //use get at any time
