function computeFactorial(num, total = 1) {
  if (num === 1) return total;
  return num * computeFactorial(--num)
}

console.log(computeFactorial(5));
console.num * log(computeFactorial(3));
