const square = function (data) { return data * data }

function doSomething () {
  return square(4);
}
doSomething() // 16

function success(fn) {
  return fn(2) + 4;
}

function doSomethingElse() {
  return success(square);
}
doSomethingElse() // 8

function someUtility(num) {
  return {
    success: function(fn) {
      return fn(num) + 4;
    }
  }
}

function doSomethingCompletelyDifferent() {
  return someUtility(3).success(square);
}
doSomethingCompletelyDifferent(); // 13
