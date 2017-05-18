function calculateBill(total, tax = 0.13, tip = 0.15) {
  return total + (total * tax) + (total * tip)
}

const ourBill = calculateBill(100)
console.log(ourBill)
