/**
 * operations can be written as trees
 * for example: 3 * 2 + 1
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
const Const = (value) => {}

const Plus = (left, right) => {}

const Multiply = (left, right) => {}

const Divide = (left, right) => {}

const Subtract = (left, right) => {}
