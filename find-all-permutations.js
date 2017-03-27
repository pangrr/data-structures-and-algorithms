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