// function recursiveBS(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }

function search(arr, target, leftIndex = 0, rightIndex = arr.length - 1) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  //   if (target < arr[middleIndex]) {
  //     return search(arr, target, leftIndex, middleIndex - 1);
  //   } else {
  //     return search(arr, target, middleIndex + 1, rightIndex);
  //   }

  return target < arr[middleIndex]
    ? search(arr, target, leftIndex, middleIndex - 1)
    : search(arr, target, middleIndex + 1, rightIndex);
}

console.log(search([-5, 2, 4, 6, 10], 6));
console.log(search([-5, 2, 4, 6, 10], 16));
console.log(search([-5, 2, 4, 6, 10], 2));
