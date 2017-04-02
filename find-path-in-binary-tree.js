// find a path in a binary tree
let target = -1;

function findPath(root) {
  let path = [];
  if (!helper(root, path)) {
    path.pop();
  }
  return path; 
}

function helper(node, path) {
  if (typeof node === 'undefined') {
    return false;
  }
   
  path.push(node);

  if (node.v === target) {
    return true;
  }
  
  if (!helper(node.left, path) && !helper(node.right, path)) {
    path.pop();
    return false;
  } else {
    return true;
  }
}

let a = {
  v: -1
};
let b = {
  v: 5
}
let c = {
  v: 3
};
let d = {
  v: 2,
  right: a
}
let e = {
  v: 1,
  left: c,
  right: b
};
let f = {
  v: 0,
  left: e,
  right: d
}

let path = findPath(f);
for (let n of path) {
  console.log(n.v);
}