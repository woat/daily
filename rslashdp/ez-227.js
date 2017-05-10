function gcd(a, b) {
  if (!b) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function simplify(a, b) {
  let divisor = gcd(a, b);
  return [a / divisor, b / divisor];
}

console.log(simplify(4, 8));
console.log(simplify(1536, 78360));
console.log(simplify(51478, 5536));
console.log(simplify(46410, 119340));
console.log(simplify(7673, 4729));
console.log(simplify(4096, 1024));
