// find all permutations of a given string
function allPerms(s) {
  if (s.length === 1) {
    return [s];
  }
  
  let c = s.charAt(0);
  let pres = allPerms(s.substring(1));
  let result = [];
  
  for (let pre of pres) {
    result = result.concat(insertCharToStr(c, pre));
  }
  return result;
}

function insertCharToStr(c, s) {
  let result = [];
  for (let i = 0; i <= s.length; i++) {
    result.push(s.substring(0, i) + c + s.substring(i, s.length));
  }
  return result;
}

console.log(allPerms('1234'));

// Another way to find all permutations of a string in O(n^2 * n!)
function findAllPermutations(s) {
  helper('', s);
}

function helper(pre, rem) {
  if (rem.length === 0) {
    console.log(pre);
  } else {
    for (let i = 0; i < rem.length; i++) {
      helper(pre + rem.charAt(i), rem.substring(0, i) + rem.substring(i + 1));
    }
  }
}

findAllPermutations('0123');