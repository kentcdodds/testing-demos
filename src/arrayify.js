module.exports = arrayify

function arrayify(thing = []) {
  return Array.isArray(thing) ? thing : [thing]
}
