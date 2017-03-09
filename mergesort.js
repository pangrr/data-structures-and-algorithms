function mergeSort(array) {
  let mid = Math.floor(array.length / 2);
  
  mergeSortHelper(array, 0, mid);
  mergeSortHelper(array, mid, array.length);
  
  merge(array, 0, mid, array.length);
}

function mergeSortHelper(array, start, end) {
  if (end - start > 1) {
    let mid = Math.floor((start + end) / 2);
    
    mergeSortHelper(array, start, mid);
    mergeSortHelper(array, mid, end);
    
    merge(array, start, mid, end);
  }
}

function merge(array, start, mid, end) {
  let merged = [];
  let p1 = start;
  let p2 = mid;
  
  while (p1 < mid && p2 < end) {
    if (array[p1] < array[p2]) {
      merged.push(array[p1++]);
    } else {
      merged.push(array[p2++]);
    }
  }
  
  while (p1 < mid) {
    merged.push(array[p1++]);
  }
  
  while (p2 < end) {
    merged.push(array[p2++]);
  }
    
  for (let i = 0; i < merged.length; i++) {
    array[i + start] = merged[i];
  }
}

// test
let array = [3, 2, 4, 1, 5, 9, 7, 6, 8];
mergeSort(array);
console.log(array);
  
  
  