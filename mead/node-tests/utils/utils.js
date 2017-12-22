module.exports.add = (a, b) => a + b

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(function () {
    callback(a + b)
  }, 1000)
}

module.exports.square = (x) => x * x

module.exports.setName = (obj, name) => {
  [obj.firstName, obj.lastName] = [...name.split(' ')]
  return obj
}
