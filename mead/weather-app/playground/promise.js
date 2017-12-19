const somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Hey, it workd!')
    reject('Unable to fufill promise')
  }, 2500)
})

somePromise.then((message) => {
  console.log(message)
}, (errorMessage) => {
  console.log(errorMessage)
})
