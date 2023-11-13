function isPrime(n) {
  if (n < 2) return false;

  if (n === 2) return true;

  if (n % 2 === 0) {
    return false;
  }

  return true;
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
