var convert = require('./app.js');
var assert = require('assert');
describe('testing cToF', function(){
	it("testing 0 to 32F conversion", function(){
		assert.equal(32, convert.cToF(0))
	})
})