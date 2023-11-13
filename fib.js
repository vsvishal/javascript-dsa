function generateFibonacciSeries(n) {
  var series = [];
  if (n === 0) {
    return series;
  }

  series.push(0);

  if (n === 1) {
    return series;
  }

  series.push(1);

  for (var i = 2; i < n; i++) {
    var nextNumber = series[i - 1] + series[i - 2];
    series.push(nextNumber);
  }

  return series;
}

// Change the value of `n` to determine how many terms of the Fibonacci series you want to generate.
var n = 2;
var fibonacciSeries = generateFibonacciSeries(n);
console.log(fibonacciSeries);
