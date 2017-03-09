function quickSort(array) {
  quickSortHelper(array, 0, array.length);
}

function quickSortHelper(array, start, end) {
  if (end - start > 1) {
    let p = array[end - 1];
    let left = [];
    let right = [];
    
    for (let i = start; i < end - 1; i++) {
      if (array[i] < p) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    
    let i = start;
    for (let v of left) {
      array[i++] = v;
    }
    let mid = i;
    array[i++] = p;
    for (let v of right) {
      array[i++] = v;
    }
    
    quickSortHelper(array, start, mid);
    quickSortHelper(array, mid + 1, end);
  }
}



// test
let array = [3, 2, 4, 1, 5, 9, 7, 6, 8];
quickSort(array);
console.log(array);
  
  
  