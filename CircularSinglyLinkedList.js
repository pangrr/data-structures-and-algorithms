function Node(value) {
  this.value = value;
  this.next = undefined;
}

function CircularLinkedList() {
  this.head = new Node();
  this.tail = undefined;
}

CircularLinkedList.prototype.isEmpty = function() {
  return this.tail === undefined;
}

CircularLinkedList.prototype.isSingleNode = function() {
  return !this.isEmpty() && this.tail === this.head.next;
}

CircularLinkedList.prototype.insert = function(value) {
  let newNode = new Node(value);
  
  if (this.isEmpty() === true) {
    this.head.next = newNode;
    this.tail = newNode;
    newNode.next = newNode;
  } else {
    newNode.next = this.head.next;
    this.tail.next = newNode;
    this.head.next = newNode;
  }
}

CircularLinkedList.prototype.delete = function() {
  if (this.isSingleNode()) {
    this.head.next = undefined;
  } else if (!this.isEmpty()) {
    let nodeToDelete = this.head.next;
    this.head.next = this.head.next.next;
    this.tail.next = this.head.next;
    nodeToDelete.next = undefined;
  }
}

CircularLinkedList.prototype.print = function() {
  if (this.isEmpty()) {
    console.log([]);
  } else if (this.isSingleNode()) {
    console.log([this.head.next.value]);
  } else {
    let array = [];
    let node = this.head.next;
    while (node !== this.tail) {
      array.push(node.value);
      node = node.next;
    }
    array.push(this.tail.value);
    console.log(array);
  }
}


// test
let list = new CircularLinkedList();
list.insert(0);
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.print();
