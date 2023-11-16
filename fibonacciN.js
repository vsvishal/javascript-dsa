function nthFibonacci(num) {
  let x = 1;
  let y = 0;
  let temp;

  if (num < 2) {
    return 1;
  }

  while (num >= 2) {
    temp = x;
    x = x + y;
    y = temp;
    num--;
  }

  return y;
}

console.log(nthFibonacci(5));

// not good solution
// Big(O) = 2^n

// function fibN(n) {
//   let fib = 0;
//   if (n < 2) {
//     return n;
//   }

// return fibN(n - 1) + fibN(n - 2);
//   return fib;
// }

// console.log(fibN(5));
