function Stack(capacity) {
  // no array
  // { 0: data, 1: data, 2: data, etc }
  this.storage = {};
  // set a limit on the capacity
  this.capacity = capacity || Infinity;
  // we will use this to access our data via storage[count]
  this.count = 0;
}

Stack.prototype.push = function(value) {
  // check overflow
  if (this.count > this.capacity) console.log('max cap');
  // use obj literal to create key + value pair
  // increment count 1 higher than max after set
  this.storage[this.count++] = value;
  return this.count;
}

Stack.prototype.pop = function() {
  // count will be 1 higher than the max, so dec first
  delete this.storage[--this.count];
  // if we are at the first item, reset the count
  if (this.count < 0) {
    this.count = 0
  }
  return this.count;
}

Stack.prototype.peek = function() {
  // look at the last item
  // count is 1 higher than max
  return this.storage[this.count - 1]
}

Stack.prototype.amount = function() {
  return this.count
}

var s = new Stack();
s.push('gas');
s.push('dicks');
s.push('ratata');
console.log(s.storage);
s.pop();
console.log(s.storage);
console.log(s.peek());
console.log(s.amount());

function balancedParens(string) {
  let leftParen = 0;
  let rightParen = 0;
  [...string].map(l => {
    if (l === '(') leftParen += 1;
    if (l === ')') rightParen += 1;
  })
  console.log(leftParen === rightParen)
}

balancedParens('sqrt(5*(3+8)/(4-2))') // true
balancedParens('Math.min(5,(6-3))(') // false
