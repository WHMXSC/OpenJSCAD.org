const create = require('./create')

/**
 * Divides the coordinates of two vectors (A/B).
 *
 * @param {vec3} [out] - the receiving vector
 * @param {vec3} a - the dividend vector
 * @param {vec3} b - the divisor vector
 * @returns {vec3} a new vector
 * @alias module:modeling/maths/vec3.divide
 */
const divide = (...params) => {
  let out
  let a
  let b
  if (params.length === 2) {
    out = create()
    a = params[0]
    b = params[1]
  } else {
    out = params[0]
    a = params[1]
    b = params[2]
  }
  out[0] = a[0] / b[0]
  out[1] = a[1] / b[1]
  out[2] = a[2] / b[2]
  return out
}

module.exports = divide