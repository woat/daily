// 1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

function downToZeroWh(num) {
  while (num > 0) {
    console.log(num -= 1);
  }
}

console.log('downToZeroWh');
downToZeroWh(5);

// 2. Next, try looping just like above except using recursion

function downToZeroRe(num) {
  console.log(num);
  if (num === 0) return 0;
  return downToZeroRe(num - 1);
}

console.log('downToZeroRe');
downToZeroRe(5);

// 3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

function exponent(base, expo) {
  let total = base;
  while (expo > 0) {
    console.log(total);
    expo -= 1;
    total *= base;
  }
  return total;
}

console.log('exponent');
exponent(5, 5);
// 4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

function recursiveExponent(base, expo) {
  if (expo <= 1) {
    return base;
  }
  return base * recursiveExponent(base, expo -= 1);
}

console.log('recursiveExponent');
console.log(recursiveExponent(5, 5)) // hmm, how do I console.log within the function...

// 5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

function recursiveMultiplier(arr, num) {
  let multiplyArr = [];
  function addItems(numbersArr) {
    if (numbersArr.length > 0) {
      multiplyArr.push(numbersArr.shift() * num)
      addItems(numbersArr)
    }
    return
  }
  addItems(arr);
  console.log(multiplyArr);
  return multiplyArr;
}

console.log('recursiveMultiplier');
recursiveMultiplier([5, 4, 3], 5)

// 6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(arr) {
  let reverseArr = []
  function addItems(orderedArr) {
    if (orderedArr.length > 0) {
      reverseArr.push(orderedArr.pop());
      addItems(orderedArr)
    }
    return;
  }
  addItems(arr);
  console.log(reverseArr)
  return reverseArr;
}

console.log('recursiveReverse');
recursiveReverse([0, 1, 2, 3, 4, 5]);
