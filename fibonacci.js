// Input need a Number
// algo:

function fibonacci(num) {
  let fib = [0, 1];

  if (num === 0) {
    return [];
  }

  if (num === 1) {
    return [0];
  }

  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// let n = prompt("Please enter a number");
console.log(fibonacci(2));
