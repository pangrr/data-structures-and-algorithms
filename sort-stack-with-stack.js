// sort a stack with only another stack
function sort(stack) {
  let tmp = [];
  while (stack.length > 0) {
    // insert the top of stack into a proper place in tmp
    let value = stack.pop();
    if (tmp.length === 0) {
      tmp.push(value);
    } else {
      let i = 0;
      while (tmp.length > 0 && tmp[tmp.length - 1] > value) {
        stack.push(tmp.pop());
        i++;
      }
      tmp.push(value);
      
      for (let k = 0; k < i; k++) {
        tmp.push(stack.pop());
      }
    }
  }
  while (tmp.length > 0) {
    stack.push(tmp.pop());
  }
}

let stack = [];
stack.push(1);
stack.push(7);
stack.push(2);
stack.push(5);
stack.push(0);
stack.push(3);

console.log(stack);
sort(stack);
console.log(stack);