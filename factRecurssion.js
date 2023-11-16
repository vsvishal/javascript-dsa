function factRecursion(n) {
  if (n === 0) {
    return 1;
  }

  return n * factRecursion(n - 1);
}

console.log(factRecursion(5));
