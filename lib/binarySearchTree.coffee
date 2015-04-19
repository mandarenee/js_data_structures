class BinarySearchTree
  constructor: (@root) ->

  insert: (val) ->
    node =
        val: val,
        left: null,
        right: null
    if @root
      current = @root
      until current.left == node || current.right == node
        if val == current.val
          break
        else if val < current.val
          if current.left == null
            current.left = node
          else
            current = current.left
        else
          if current.right == null
            current.right = node
          else
            current = current.right
    else
      @root = node

  contains: (val) ->
    node = @root
    contain = false
    traverse = (node, val) ->
      current = node
      if current.val == val
        contain = true
      else
        traverse current.left, val unless current.left == null
        traverse current.right, val unless current.right == null
        contain
    traverse(node, val)


  size: ->
  depth: ->
  balance: ->

module.exports = BinarySearchTree
