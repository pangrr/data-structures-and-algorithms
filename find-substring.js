// simulate String.prototype.indexOf
function findSubstring(a, b) {
  // handle special cases
  
  for (let i = 0; i <= a.length - b.length; i++) {
    if (isSubstring(a, b, i)) {
      return i;
    }
  }
  
  return -1;
}

function isSubstring(a, b, i) {
  let ai = i;
  let bi = 0;
  
  while (bi < b.length) {
    if (a.charAt(ai) !== b.charAt(bi)) {
      return false;
    }
    ai++;
    bi++;
  }
  
  return true;
}

console.log(findSubstring('abbcdabbbbbck', 'bbbck'));