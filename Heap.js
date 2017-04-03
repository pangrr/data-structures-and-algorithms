// implement max heap with an array
// heap uses array starting with index 1
// i's parent is Math.floor(i / 2)
// i's left child is i * 2
// i's right child is i * 2 + 1
function MaxHeap() {
  this.heap = [undefined];
}

MaxHeap.prototype.push = function(value) {
  this.heap.push(value);

  // prepare to buble up
  let i = this.heap.length - 1;
  let pi = Math.floor(i / 2);
  
  // bulble up
  while (i > 1 && this.heap[pi] < this.heap[i]) {
    let tmp = this.heap[i];
    this.heap[i] = this.heap[pi];
    this.heap[pi] = tmp;
    i = pi;
    pi = Math.floor(i / 2);
  }
}

MaxHeap.prototype.pop = function() {
  if (this.heap.length === 1) {
    return undefined;
  }

  // return the root
  let ret = this.heap[1];
  // replace root with last element
  this.heap[1] = this.heap.pop();
  
  // prepare to sink
  let i = 1;
  let li = i * 2;
  let ri = i * 2 + 1;
  
  // sink
  while (li < this.heap.length && (this.heap[li] > this.heap[i] || this.heap[ri] > this.heap[i])) {
    if (this.heap[li] > this.heap[ri] && this.heap[li] > this.heap[i]) {
      let tmp = this.heap[i];
      this.heap[i] = this.heap[li];
      this.heap[li] = tmp;
      i = li;
    } else if (this.heap[ri] > this.heap[li] && this.heap[ri] > this.heap[i]) {
      let tmp = this.heap[i];
      this.heap[i] = this.heap[ri];
      this.heap[ri] = tmp;
      i = ri;
    }
    li = i * 2;
    ri = i * 2 + 1;
  }
  
  return ret;
}

MaxHeap.prototype.get = function() {
  return this.heap[1];
}

// test
let maxHeap = new MaxHeap();
let input = [3, 8, 4, 1, 2, 9, 7, 6, 5];
for (let i of input) {
  maxHeap.push(i);
}
for (let i in input) { 
  console.log(maxHeap.pop());
}
