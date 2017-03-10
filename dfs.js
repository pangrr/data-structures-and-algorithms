function Node(value) {
  this.value = value;
  this.neighbors = [];
  this.visited = false;
}

Node.prototype.markVisited = function() {
  console.log(this.value);
  this.visited = true;
}

function dfs(node) {
  node.markVisited();
  for (let neighbor of node.neighbors) {
    if (neighbor.visited === false) {
      dfs(neighbor);
    }
  }
}

// test
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);
let node8 = new Node(8);

node1.neighbors.push(node2);
node1.neighbors.push(node5);
node2.neighbors.push(node3);
node3.neighbors.push(node4);
node5.neighbors.push(node6);
node6.neighbors.push(node7);
node6.neighbors.push(node8);

dfs(node1);