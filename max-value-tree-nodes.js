// select nodes from a tree to get max sum values
// direct parent and child nodes cannot be selected together
function maxValue(node, selectable) {
  if (!node) {
    return 0;
  }
  
  if (selectable) {
    let valueOnSelect = node.value;
    for (let child of node.children) {
      valueOnSelect += maxValue(child, false);
    }
    
    let valueOnNotSelect = 0;
    for (let child of node.children) {
      valueOnNotSelect += maxValue(child, true);
    }
    return Math.max(valueOnSelect, valueOnNotSelect);
  } else {
    let value = 0;
    for (let child of node.children) {
      value += maxValue(child, true);
    }
    return value;
  }
}


let f = {
  value: 4,
  children: []
};
let e = {
  value: -2,
  children: []
};
let d = {
  value: 5,
  children: []
};
let c = {
  value: 3,
  children: [f]
};
let b = {
  value: -1,
  children: [d, e]
};
let a = {
  value: 1,
  children: [b, c]
};


console.log(maxValue(a, true));