function MaxHeap() {
  this.heap = [];
}

MaxHeap.prototype.push = function(value) {
  this.heap.push(value);
  let i = this.heap.length - 1;
  let pi = Math.floor(i / 2);
    
  while (i > 0 && this.heap[pi] < this.heap[i]) {
    let tmp = this.heap[i];
    this.heap[i] = this.heap[pi];
    this.heap[pi] = tmp;
    i = pi;
    pi = Math.floor(i / 2);
  }
}

MaxHeap.prototype.pop = function() {
  if (this.heap.length === 0) {
    return undefined;
  }
  
  let ret = this.heap[0];
  
  this.heap[0] = this.heap[this.heap.length - 1];
  this.heap = this.heap.slice(0, this.heap.length - 1);
  
  let i = 0;
  let li = i * 2 + 1;
  let ri = i * 2 + 2;
  
  while (ri < this.heap.length && (this.heap[li] > this.heap[i] || this.heap[ri] > this.heap[i])) {
    if (this.heap[li] > this.heap[i]) {
      let tmp = this.heap[i];
      this.heap[i] = this.heap[li];
      this.heap[li] = tmp;
      i = li;
    } else if (this.heap[ri] > this.heap[i]) {
      let tmp = this.heap[i];
      this.heap[i] = this.heap[ri];
      this.heap[ri] = tmp;
      i = ri;
    }
    li = i * 2 + 1;
    ri = i * 2 + 2;
  }
  
  return ret;
}

MaxHeap.prototype.get = function() {
  return this.heap[0];
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