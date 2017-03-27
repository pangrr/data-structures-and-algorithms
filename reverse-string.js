// reverse a string

function reverseSlow(s) {
  let result = '';
  for (let i = s.length - 1; i >= 0; i--) {
    result += s.charAt(i);
  }
  
  return result;
}

function reverseFast(s) {
  let result = [];
  for (let i = s.length - 1; i >= 0; i--) {
    result.push(s.charAt(i));
  }
  return result.join('');
}

function reverseBuildIn(s) {
  return s.split('').reverse().join('');
}

String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

console.log('abcd'.reverse());