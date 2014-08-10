var test = require('tap').test
var Elapsed = require('../index.js')
var elapsed1 = new Elapsed()
var elapsed2 = new Elapsed()

var between = function(x, y, z) {
	return (x<y && y<z)
}

test('test for approximation', function(t) {
	t.plan(4)
	elapsed1.set()
	setTimeout(function() {
		elapsed2.set()
		t.ok( between(0.88, elapsed1.get(), 1), "stopwatch 1 is between 0.88 and 1")
		t.ok( between(0.0, elapsed2.get(), 0.1), "stopwatch 2 is between 0.00 and 0.1")
		setTimeout(function() {
			t.ok( between(1.28, elapsed1.get(), 1.40), "stopwatch 1 is between 1.28 and 1.40")
			t.ok( between(0.38, elapsed2.get(), 0.50), "stopwatch 2 is between 0.38 and 0.50")
			t.end()
		}, 400)
	}, 900)
})