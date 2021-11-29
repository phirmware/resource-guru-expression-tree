const assert = require('assert')
const {
  Const,
  Plus,
  Multiply,
  Divide,
  Subtract
} = require('./app')

assert.strictEqual('2', Const(2).toString())
assert.strictEqual(2, Const(2).result())

assert.strictEqual('(2 + 4)', Plus(Const(2), Const(4)).toString())
assert.strictEqual(6, Plus(Const(2), Const(4)).result())

assert.strictEqual('(2 x 4)', Multiply(Const(2), Const(4)).toString())
assert.strictEqual(8, Multiply(Const(2), Const(4)).result())

assert.deepEqual(2, Divide(Const(4), Const(2)).result())
assert.deepEqual('(4 ÷ 2)', Divide(Const(4), Const(2)).toString())

assert.deepEqual(2, Subtract(Const(4), Const(2)).result())
assert.deepEqual('(4 - 2)', Subtract(Const(4), Const(2)).toString())
