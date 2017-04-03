// implement a stack that can return the min element in constant time
function Stack() {
  this.mainStack = [];
  this.minStack = [];
}

Stack.prototype.push = function(value) {
  this.mainStack.push(value);
  
  if (typeof this.min() === 'undefined' || this.min() > value) {
    this.minStack.push(value);
  }
}

Stack.prototype.peek = function() {
  return this.mainStack[this.mainStack.length - 1];
}

Stack.prototype.pop = function() {
  if (typeof this.peek() !== 'undefined') {
    let value = this.mainStack.pop();
    if (value === this.min()) {
      this.minStack.pop();
    }
    return value;
  } else {
    return undefined;
  }
}

Stack.prototype.min = function() {
  return this.minStack[this.minStack.length - 1];
}

let stack = new Stack();
stack.push(0);
stack.push(2);
stack.push(4);
stack.push(7);
stack.push(1);
stack.push(-1);
stack.push(9);
console.log(stack.peek());
console.log(stack.min());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.min());