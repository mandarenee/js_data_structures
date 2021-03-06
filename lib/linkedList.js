// Generated by CoffeeScript 1.9.2
var LinkedList;

LinkedList = (function() {
  function LinkedList(head) {
    this.head = head;
  }

  LinkedList.prototype.insert = function(val) {
    var node;
    if (this.head != null) {
      node = {
        prev: this,
        val: val,
        nxt: this.head
      };
      return this.head = node;
    } else {
      node = {
        prev: this,
        val: val,
        nxt: null
      };
      return this.head = node;
    }
  };

  LinkedList.prototype.search = function(val) {
    var current;
    current = this.head;
    while (current.val !== val) {
      current = current.nxt;
    }
    return current.val;
  };

  LinkedList.prototype.toString = function() {
    var current, string;
    current = this.head;
    string = this.head.val.toString();
    while (current.nxt != null) {
      string += ", " + current.nxt.val;
      current = current.nxt;
    }
    return string;
  };

  LinkedList.prototype.remove = function(val) {
    var current, temp;
    if (this.head == null) {
      throw new Error("no stack exists");
    }
    current = this.head;
    if (current.val === val) {
      this.head = current.nxt;
      return this.head;
    } else {
      while (!(current === null || current.val === val)) {
        current = current.nxt;
      }
      if (current == null) {
        throw new Error("this value is not in the list");
      }
      temp = current.val;
      current.prev = current.nxt;
      current.prev = current.nxt;
      return temp;
    }
  };

  return LinkedList;

})();

module.exports = LinkedList;
