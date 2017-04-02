// check if two strings are one edit (remove/insert/replace a character) away from each other
function check(a, b) {
  if (Math.abs(a.length - b.length) > 1) {
    return false;
  }
  
  if (a.length !== b.length) {
    let s, l;
    if (a.length < b.length) {
      s = a;
      l = b;
    } else {
      s = b;
      l = a;
    }
    let i = 0;
    let j = 0;
    while (i < s.length && j < l.length) {
      if (s.charAt(i) !== l.charAt(j)) {
        if (i === j) {
          i++;
        } else {
          return false;
        }
      } else {
        i++;
        j++;
      }
    }
  
    return true;
  } else {
    let i = 0;
    let j = 0;
    let marked = false;
    while (i < a.length && j < b.length) {
      if (a.charAt(i) !== b.charAt(j)) {
        if (!marked) {
          marked = true;
          i++;
          j++;
        } else {
          return false;
        }
      } else {
        i++;
        j++;
      }
    }
  
    return true;
  }
}

console.log(check('pale', 'ple'))