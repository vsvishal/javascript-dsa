function fibN(n) {
  if (n < 2) return n;

  return fibN(n - 1) + fibN(n - 2);
}

fibN(5);
