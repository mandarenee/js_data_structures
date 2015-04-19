class LinkedList
  constructor: (@head) ->

  insert: (val) ->
    if @head?
      node =
        prev: this
        val:val
        nxt: @head
      @head = node
    else
      node =
        prev: this
        val: val
        nxt: null
      @head = node

  search: (val) ->
    current = @head
    until current.val == val
      current = current.nxt
    current.val

  toString: ->
    current = @head
    string = @head.val.toString()
    while current.nxt?
      string += ", " + current.nxt.val
      current = current.nxt
    string

  remove: (val) ->
    throw new Error "no stack exists" unless @head?
    current = @head
    if current.val == val
      @head = current.nxt
      @head
    else
      until current == null || current.val == val
        current = current.nxt
      throw new Error "this value is not in the list" unless current?
      temp = current.val
      current.prev = current.nxt
      current.prev = current.nxt
      temp

module.exports = LinkedList

