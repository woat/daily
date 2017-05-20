(function fizzBuzz() {
  for (let i = 0; i <= 100; i++) {
    console.log(
    !(i%15) ? 'fizzbuzz' :
    !(i%3) ? 'fizz' : 
    !(i%5) ? 'buzz' : i
    )
  }
})()
