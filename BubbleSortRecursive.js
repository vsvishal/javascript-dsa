function recursiveBubbleSort(arr, swapped = false) {
  swapped = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      swapped = true;
    }
  }

  if (!swapped) {
    return arr;
  } else {
    return recursiveBubbleSort(arr, swapped);
  }
}

const arr = [8, 20, -2, 4, -6];
console.log(recursiveBubbleSort(arr));
