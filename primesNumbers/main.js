function getPrimes() {
  const primesArray = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233,
    239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 948973 
  ];
  const primes = new Set();
  primesArray.forEach((item) => primes.add(item));
  console.log(primes);
  return primes;
}

function findKValuesRecursively(number, factors, iterator = 0, kValues = []) {
  const module = number % factors[iterator];
  const quotient = number / factors[iterator];
  if (quotient === 1) {
    !kValues[iterator] ? kValues.push(1) : (kValues[iterator] += 1);
    return kValues;
  }
  if (module === 0) {
    !kValues[iterator] ? kValues.push(1) : (kValues[iterator] += 1);
    return findKValuesRecursively(quotient, factors, iterator, kValues);
  }
  if (module !== 0) {
    return findKValuesRecursively(number, factors, iterator + 1, kValues);
  }
}

function findKValuesWithLoop(number, factors) {
  let i = 0;
  const kValues = [];
  while (number > 1 && i < factors.length) {
    const module = number % factors[i];
    const quotient = number / factors[i];
    if (module == 0) {
      !kValues[i] ? kValues.push(1) : (kValues[i] += 1);
      number = quotient;
    } else {
      i++;
    }
  }
  return kValues;
}

function primeFactorization(number, primes) {
  let factors = [];
  // factors contain the primes factors of number
  primes.forEach((prime) => {
    if (number % prime === 0) {
      factors.push(prime);
    }
  });
  if (!factors.length) {
    // the number is prime or is one
    return {
      factors: number,
      kValues: 1,
    };
  }
  return {
    factors,
    kValues: findKValuesWithLoop(number, factors),
  };
}

function findPrimeDerivate(factors, kValues) {
  debugger;
  return factors.reduce(
    (accumulator, current, iterator) =>
      (accumulator *=
        kValues[iterator] * Math.pow(current, kValues[iterator] - 1)),
    1,
  );
}

function main() {
  const number = 24500;
  const primes = getPrimes();
  const { factors, kValues } = primeFactorization(number, primes);
  console.log(factors, kValues);
  if (kValues === 1) {
    return 1;
  }
  const primeDerivate = findPrimeDerivate(factors, kValues);
  return primeDerivate;
}

console.log(main());
