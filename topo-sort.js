// implement topology sort
const STATES = {
  CLEAN: 0,
  DIRTY: 1,
  COMPLETE: 2
};


function sort(nodes) {
  let stack = [];
  for (let node of nodes) {
    if (node.state === STATES.CLEAN) {
      if (!dfs(node, stack)) {
        return null;
      }
    }
  }
  return stack;
}


function dfs(node, stack) {
  if (node.state === STATES.DIRTY) {
    return false;
  }
  
  node.state = STATES.DIRTY;
  
  for (let child of node.children) {
    if (child.state === STATES.CLEAN) {
      if (!dfs(child, stack)) {
        return false;
      }
    }
  }
  
  node.state = STATES.COMPLETE;
  stack.push(node);
  return true;
}


// test
let nodes = [];
let a = { label: 'a', children: [] };
let b = { label: 'b', children: [a] };
let c = { label: 'c', children: [] };
let d = { label: 'd', children: [] };
let e = { label: 'e', children: [c] };
let f = { label: 'f', children: [e, c, d] };
let g = { label: 'g', children: [e] };
let h = { label: 'h', children: [g, e, f] };

nodes.push(a);
nodes.push(b);
nodes.push(c);
nodes.push(d);
nodes.push(e);
nodes.push(f);
nodes.push(g);
nodes.push(h);

for (let node of nodes) {
  node.state = STATES.CLEAN;
}

let stack = sort(nodes);
while (stack.length > 0) {
  console.log(stack.pop().label);
}
