// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

function validateInput(a, b) {
  // validation of data input, must be number and integer
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Input must be two integers");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Numbers must be integers");
  }
}

// Sort numbers, so always will be b greater than a
function sortNumbers(a, b) {
  if (a > b) {
    return [b, a];
  }
  return [a, b];
}

// function to sum the first n natural numbers, by Gauss
function sumOfFirstNNumbers(a) {
  return (a * (a + 1)) / 2;
}

function getSumPositiveNumbers(a, b) {
  // if both a and b are positive
  if (a > 0 && b > 0) {
    return [true, sumOfFirstNNumbers(b) - sumOfFirstNNumbers(a - 1)];
  }
  // if only b is positive
  if (a <= 0 && b > 0) {
    return [false, sumOfFirstNNumbers(b)];
  }
  // if b is lower than zero
  return [false, 0];
}

function getSumNegativeNumbers(a, b) {
  let negativePart;
  if (b <= 0) {
    [, negativePart] = getSumPositiveNumbers(-b, -a);
    return negativePart;
  }
  [, negativePart] = getSumPositiveNumbers(0, -a);
  return negativePart;
}

function sumWithGauss(a, b) {
  const [onlyPositive, sum] = getSumPositiveNumbers(a, b);
  if (onlyPositive) {
    return sum;
  }
  const negativePart = getSumNegativeNumbers(a, b);
  return sum - negativePart;
}

function getSum(a, b, cb) {
  try {
    validateInput(a, b);
    if (a == b) {
      return a;
    }
    const [aSort, bSort] = sortNumbers(a, b);
    const sum = cb(aSort, bSort);
    return sum;
  } catch (e) {
    return e.message;
  }
}

function sumWithLoop(a, b) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    count += i;
  }
  return count;
}

// This is the most efficient and elegant way
function sumWithGaussModified(a, b) {
  return (b - a + 1) * (a + b) * (1 / 2);
}

function main() {
  let a = 10;
  let b = 100;
  // this method is more efficient, with complex of O(1);
  const outputGauss = getSum(a, b, sumWithGauss);
  // this method is easier to read but less efficient O(n)
  const outputLoop = getSum(a, b, sumWithLoop);
  // this method is gauss formula for integers numbers
  const outputGaussModified = getSum(a, b, sumWithGaussModified);
  console.log("With Gauss Method: " + outputGauss.toString());
  console.log("With Loop Method: " + outputLoop.toString());
  console.log("With Gauss Method Modified: " + outputGaussModified.toString());
}

main();
