function Node(value) {
  this.value = value;
  this.next = undefined;
}

function Queue() {
  this.head = new Node(undefined);
  this.tail = this.head;
}

Queue.prototype.push = function(value) {
  let newNode = new Node(value);
  this.tail.next = newNode;
  this.tail = newNode;
}

Queue.prototype.pop = function() {
  if (this.head.next !== undefined) {
    let value = this.head.next.value;
    this.head.next = this.head.next.next;
    return value;
  } else {
    return undefined;
  }
}

Queue.prototype.print = function() {
  let array = [];
  let node = this.head.next;
  while (node !== undefined) {
    array.push(node.value);
    node = node.next;
  }
  console.log(array);
}

// test
let q = new Queue();
q.push(0);
q.push(1);
q.push(2);
q.print();
console.log(q.pop());
q.print();
q.push(3);
q.print();