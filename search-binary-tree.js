// binary tree search
function search(root, target) {
  if (typeof root === 'undefined') {
    return undefined;
  } else if (root.v === target) {
    return root;
  } else {
    let searchLeft = search(root.left, target);
    let searchRight = search(root.right, target);
    return searchLeft || searchRight;
  }
}


let a = {
  v: 5
};
let b = {
  v: 4
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

console.log(search(f, 10));