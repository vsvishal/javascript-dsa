function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([1, 3, 4, 5, 7, 9], 4));
console.log(linearSearch([1, 3, 4, 5, 7, 9], 19));
