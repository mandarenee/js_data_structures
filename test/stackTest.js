var expect = require('chai').expect;
var Stack = require('../lib/stack.js');

describe('Stack', function() {
  it('should have a value after being created', function() {
    list = new Stack();
    list.push(22);
    expect(list).to.have.property("head").that.has.property("val").that.equals(22);
  });

  it('should remove last element added from stack', function() {
    list = new Stack();
    list.push(22);
    list.push(23);
    list.push(42);
    list.pop();
    list.push(14);
    list.pop();
    expect(list).to.have.property("head").that.has.property("val").that.equals(23);
  });

  it('should throw an error if no stack exists', function() {
    list = new Stack();
    expect(list.pop).to.throw(Error);
  });
});
