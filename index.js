﻿var LeadingChars = require('leading-chars')
var leadingZeroes = LeadingChars({
	len: 9,
	character: '0',
	leading: true
})
var diffToTime = function(diff) {
	return parseFloat('' + diff[0] + '.' + leadingZeroes(diff[1]))
}

module.exports = function Stopwatch() {
	var startTime = []
	function set() { startTime = process.hrtime() }
	function get() { return diffToTime( process.hrtime(startTime) ) }
	set()
	return {
		set: set,
		get: get
	}
}
