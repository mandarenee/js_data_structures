class BinarySearchTree
  constructor: (@root, nullNode) ->

  nullNode =
    depth: 0

  insert: (val) ->
    node =
        val: val,
        left: nullNode,
        right: nullNode
    if @root
      current = @root
      until current.left == node || current.right == node
        if val == current.val
          break
        else if val < current.val
          if current.left == nullNode
            current.left = node
          else
            current = current.left
        else
          if current.right == nullNode
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
        traverse current.left, val unless current.left == nullNode
        traverse current.right, val unless current.right == nullNode
        contain
    traverse(node, val)


  size: ->
    return 0 unless @root?
    node = @root
    count = 0
    traverse = (node) ->
      current = node
      count += 1
      traverse current.left unless current.left == nullNode
      traverse current.right unless current.right == nullNode
      count
    traverse(node)

  depth: ->
    traverse = (node) ->
      return 0 if node == nullNode
      leftDepth = traverse(node.left)
      rightDepth = traverse(node.right)
      if leftDepth > rightDepth
        return leftDepth + 1
      else
        return rightDepth + 1
    traverse(@root)

  balanced: ->
    return 0 unless @root?
    traverse = (node) ->
      current = node
      count += 1
      traverse current.left unless current.left == nullNode
      traverse current.right unless current.right == nullNode
      count
    count = 0
    leftSide = traverse(@root.left)
    count = 0
    rightSide = traverse(@root.right)
    leftSide - rightSide

module.exports = BinarySearchTree
