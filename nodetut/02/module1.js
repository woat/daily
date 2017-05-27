function myFunction() {
  console.log('Function was called');
}

const myString = 'String!';

// bind the function to the module object
// you do not pass () because we aren't executing it
// just want to pass a reference
module.exports.myFunction = myFunction;
// bind the variable to the module object
module.exports.myString = myString;
