// use a hashmap to keep a record of current values of all items
// use a max heap to order of all items
let map = {};
let heap = [{}]; // start from index 1

// update an item's value or add an item in both map and heap
// keep heap sorted
function update(id, value) {
  if (!map.hasOwnProperty(id)) {
    map.id = {
      id: id,
      index: heap.length,
      value: value
    }
    heap.push(map.id);
    bubble(heap, map.id.index);
  } else {
    if (value > map.id.value) {
      map.id.value = value;
      bubble(heap, map.id.index);
    } else {
      map.id.value = value;
      sink(heap, map.id.index);
    }
  }
}

// get the top k items in heap
// don't change the original heap
function getTop(k) {
  let heapCopy = heap.slice();
  let result = [];
  for (let i = 0; i < k; i++) {
    let top = pop(heapCopy);
    if (top) {
      result.push(top);
    } else {
      break;
    }
  }
  return result;
}

// pop max and resort heap
function pop(heap) {
  let top = heap.splice(1, 1);
  if (heap.length > 2) {
    heap.splice(1, 0, heap.pop());
    heap[1].index = 1;
    sink(heap, 1);
  }
  return top;
}

// bubble up given item in heap
function bubble(heap, i) {
  while (i > 1) {
    let p = Math.floor(i / 2); // parent index
    if (heap[p].value < heap[i].value) {
      swap(heap, p, i);
      i = p;
    } else {
      break;
    }
  }
}

// sink down given item in heap
function sink(heap, i) {  
  while (i * 2 < heap.length) {
    let li = i * 2; // left child index
    let ri = i * 2 + 1; // right child index
    
    if (li < heap.length && ri < heap.length) {
      if (heap[li].value > heap[ri].value && heap[li].value > heap[i].value) {
        swap(heap, i, li);
        i = li;
        continue;
      } else if (heap[ri].value > heap[li].value && heap[ri].value > heap[i].value) {
        swap(heap, i, ri);
        i = ri;
        continue;
      }
    } else if (li < heap.length) {
      if (heap[li].value > heap[i].value) {
        swap(heap, i, li);
        i = li;
        continue;
      }
    } else if (ri < heap.length) {
      if (heap[ri].value > heap[i].value) {
        swap(heap, i, ri);
        i = ri;
        continue;
      }
    }
    break;
  }
}

// swap two items in heap
// also change their index
function swap(heap, i, j) {
  let tmp = heap[i];
  let tmpIndex = heap[j].index;
  heap[i] = heap[j];
  heap[i].index = tmp.index;
  heap[j] = tmp;
  heap[j].index = tmpIndex;
}


// test
let input = [0, 2, 4, 6, 3, 7, 9, 1, 5, 8];

for (let i of input) {
  update(i, i);
}

console.log(getTop(8));

 