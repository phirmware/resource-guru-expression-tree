const assert = require('assert')

/**
 * operations can be written as trees
 * for example: 3 x 2 + 1
 * this could be expressed as
 *           +
 *       /       \
 *      *        1
 *    /   \
 *   3     2
 *  Each node can be an operation or constant value
 *  Since good code has to be readable, we are going to
 *  try and make this more intuitive by defining functions 
 *  named after each type of node
 */

// represents numbers. e.g. 1,5,2
const Const = (value) => {
  const toString = () => `${value}`
  const result = () => value

  return { toString, result }
}

const Plus = (left, right) => {
  const toString = () => `(${left.toString()} + ${right.toString()})`
  const result = () => left.result() + right.result()

  return { toString, result }
}

const Multiply = (left, right) => {
  const toString = () => `(${left.toString()} x ${right.toString()})`
  const result = () => left.result() * right.result()

  return { toString, result }
}

const Divide = (left, right) => {
  const toString = () => `(${left.toString()} ÷ ${right.toString()})`
  const result = () => left.result() / right.result()

  return { toString, result }
}

const Subtract = (left, right) => {
  const toString = () => `(${left.toString()} - ${right.toString()})`
  const result = () => left.result() - right.result()

  return { toString, result }
}

/**
 * The expression ((7 + ((3 - 2) x 5)) ÷ 6) can be expressed as a tree 
 * in a more readable way: e.g
 * 
 */
const tree = Divide(Plus(Const(7), Multiply(Subtract(Const(3), Const(2)), Const(5))), Const(6))

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString())
assert.strictEqual(2, tree.result())
