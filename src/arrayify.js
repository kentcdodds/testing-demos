module.exports = arrayify

function arrayify(input = []) {
  return Array.isArray(input) ? input : [input]
}
