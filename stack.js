function Node(value) {
  this.value = value;
  this.pre = undefined;
  this.next = undefined;
}

function Stack() {
  this.bottom = new Node(undefined);
  this.top = this.bottom;
}

Stack.prototype.push = function(value) {
  let newNode = new Node(value);
  newNode.pre = this.top;
  this.top.next = newNode;
  this.top = newNode;
}

Stack.prototype.pop = function() {
  if (this.top.pre !== undefined) {
    let value = this.top.value;
    this.top = this.top.pre;
    this.top.next.pre = undefined;
    this.top.next = undefined;
    return value;
  } else {
    return undefined;
  }
}

Stack.prototype.peek = function() {
  return this.top.value;
}

Stack.prototype.print = function() {
  let array = [];
  let node = this.bottom.next;
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