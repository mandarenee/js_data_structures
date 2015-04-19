var expect = require('chai').expect;
var LinkedList = require('../lib/linkedList.js');

describe('LinkedList', function() {
  it('should have a value after being created', function() {
    list = new LinkedList();
    list.insert(22);
    expect(list).to.have.property("head").that.has.property("val").that.equals(22);
  });

  it('should have a multiple values after being created', function() {
    list = new LinkedList();
    list.insert(22);
    list.insert(33)
    expect(list).to.have.property("head").that.has.property("val").that.equals(33);
  });

  it('should remove a given element from Linked List', function() {
    list = new LinkedList();
    list.insert(22);
    list.insert(23);
    list.insert(42);
    list.insert(14);
    expect(list.remove(23)).to.eql(23);
  });

  it('should remove a given element from the head of a  Linked List', function() {
    list = new LinkedList();
    list.insert(22);
    list.insert(23);
    list.insert(42);
    list.insert(14);
    list.remove(14);
    expect(list).to.have.property("head").that.has.property("val").that.equals(42);
    expect(list.toString()).to.eql('42, 23, 22');
  });

  it('should find a given value in Linked List', function() {
    list = new LinkedList();
    list.insert(22);
    list.insert(23);
    list.insert(42);
    list.insert(14);
    expect(list.search(23)).to.eql(23);
  });

  it('should throw an error if no stack exists', function() {
    list = new LinkedList();
    expect(list.remove.bind(4)).to.throw(Error);
  });
});
