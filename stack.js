function Node(value) {
  this.value = value;
  this.next = undefined;
}

function Stack() {
  this.head = new Node(undefined);
}

Stack.prototype.push = function(value) {
  let newNode = new Node(value);
  newNode.next = this.head.next;
  this.head.next = newNode;
}

Stack.prototype.pop = function() {
  if (this.head.next !== undefined) {
    let value = this.head.next.value;
    this.head.next = this.head.next.next;
    return value;
  } else {
    return undefined;
  }
}

Stack.prototype.peek = function() {
  if (this.head.next === undefined) {
    return undefined;
  } else {
    return this.head.next.value;
  }
}

Stack.prototype.print = function() {
  let array = [];
  let node = this.head.next;
  while (node !== undefined) {
    array.push(node.value);
    node = node.next;
  }
  console.log(array);
}

// test
let stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.print();
console.log(stack.peek());
console.log(stack.pop());
stack.print();