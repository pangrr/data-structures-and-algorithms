// find max height of a binary tree
function maxHeight(node) {
  if (typeof node === 'undefined') {
    return 0;
  }
  return Math.max(maxHeight(node.left), maxHeight(node.right)) + 1;
}

let h = {};
let g = {};
let f = {};

let e = {
  left: h
};

let d = {};

let c = {
  left: f,
  right: g
};

let b = {
  left: d,
  right: e
};

let a = {
  left: b,
  right: c
};

console.log(maxHeight(a));



