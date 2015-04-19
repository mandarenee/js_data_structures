var expect = require('chai').expect;
var BinarySearchTree = require('../lib/binarySearchTree.js');

describe('BinarySearchTree', function() {
  it('should have a value after being created', function() {
    tree = new BinarySearchTree();
    tree.insert(22);
    expect(tree).to.have.property("root").that.has.property("val").that.equals(22);
  });

  it('should have a multiple values after being created', function() {
    tree = new BinarySearchTree();
    tree.insert(50);
    tree.insert(30);
    tree.insert(60);
    tree.insert(64);
    expect(tree).to.have.property("root").that.has.property("val").that.equals(50);
  });

  it('should ignore multiple values', function() {
    tree = new BinarySearchTree();
    tree.insert(50);
    tree.insert(30);
    tree.insert(30);
    expect(tree).to.have.property("root").that.has.property("val").that.equals(50);
  });

  it('should return true if value found BST', function() {
    tree = new BinarySearchTree();
    tree.insert(50);
    tree.insert(30);
    tree.insert(60);
    tree.insert(64);
    console.log(tree.contains(30));
    expect(tree.contains(30)).to.be.a('boolean');
    expect(tree.contains(30)).to.equal(true);
  });

  it('should return false when value not found BST', function() {
    tree = new BinarySearchTree();
    tree.insert(50);
    tree.insert(30);
    tree.insert(60);
    tree.insert(64);
    expect(tree.contains(22)).to.be.a('boolean');
    expect(tree.contains(22)).to.equal(false);
  });

  // it('should return the depth of the BST', function() {
  //   tree = new BinarySearchTree();
  //   tree.insert(50);
  //   tree.insert(30);
  //   tree.insert(60);
  //   tree.insert(34);
  //   tree.insert(52);
  //   tree.insert(62);
  //   tree.insert(31);
  //   tree.insert(54);
  //   expect(tree.depth()).to.eql(4);
  // });

  // it('should return the balance of the BST', function() {
  //   tree = new BinarySearchTree();
  //   tree.insert(50);
  //   tree.insert(30);
  //   tree.insert(60);
  //   tree.insert(34);
  //   tree.insert(52);
  //   tree.insert(62);
  //   tree.insert(31);
  //   tree.insert(54);
  //   expect(tree.balanced()).to.eql(-3);
  // });

  //   it('should return the size of the BST', function() {
  //   tree = new BinarySearchTree();
  //   tree.insert(50);
  //   tree.insert(30);
  //   tree.insert(60);
  //   tree.insert(34);
  //   tree.insert(52);
  //   tree.insert(62);
  //   tree.insert(31);
  //   tree.insert(54);
  //   expect(tree.size()).to.eql(8);
  // });

  // it('should return 0 if the tree is empty', function() {
  //   tree = new BinarySearchTree();
  //   expect(tree.size()).to.eql(0);
  // });
});
