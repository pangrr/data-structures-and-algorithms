function binarySearch(target, array) {
  return binarySearchHelper(target, array, 0, array.length);
}

function binarySearchHelper(target, array, start, end) {
  if (end - start < 1) {
    return -1;
  } else {
    let mid = Math.floor((start + end) / 2);
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      return binarySearchHelper(target, array, start, mid);
    } else {
      return binarySearchHelper(target, array, mid + 1, end);
    }
  }
}

// test
console.log(binarySearch(3, [1, 2, 3, 4]));