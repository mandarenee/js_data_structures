class Stack
  constructor: (@head) ->

  push: (val) ->
    node =
      val: val
      nxt: null

    if @head?
      node =
        val:val
        nxt: @head
      @head = node
    else
      @head = node

  pop: ->
    throw new Error "no stack exists" unless @head?
    temp = @head.val
    @head = @head.nxt
    temp

module.exports = Stack
