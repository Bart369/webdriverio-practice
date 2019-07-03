var assert = require('chai').assert; //this Node's standard assert functionality
var expect = require('chai').expect;
var should = require('chai').should();

var actual = 1;
var expected = 2;

// Below are the 3 differect formats we can use to make chai assertions
assert.equal(actual, expected);
expect(actual).to.equal(expected);
actual.should.equal(expected);

// Run the following to only test these tests "npm test -- --spec=tests/chai.js"