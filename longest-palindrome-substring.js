// return the longest palindrome substring of a given string
function longestPalindrome(s) {
  if (typeof s !== 'string' || s.length === 0) {
    return '';
  }
  
  if (s.length === 1) {
    return s;
  }
  
  let result = '';
  
  for (let i = 0; i < s.length; i++) {
    let palindrome = longestPalindromeHelper(s, i);
    if (result.length < palindrome.length) {
      result = palindrome;
    }
  }
  return result;
}

function longestPalindromeHelper(s, i) {
  let p = palindromeEven(s, i);
  let q = palindromeOdd(s, i);
  return p.length > q.length ? p : q;
}

function palindromeEven(s, i) {
  if (i >= s.length - 1 || s.charAt(i) !== s.charAt(i + 1)) {
    return '';
  }
  
  let left = i - 1;
  let right = i + 2;
  let result = s.charAt(i) + s.charAt(i + 1);
  
  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    result = s.charAt(left) + result + s.charAt(right);
    left--;
    right++;
  }
  
  return result;
}

function palindromeOdd(s, i) {
  let left = i - 1;
  let right = i + 1;
  let result = s.charAt(i);
  
  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    result = s.charAt(left) + result + s.charAt(right);
    left--;
    right++;
  }
  
  return result;
}

console.log(longestPalindrome('defabcbayt'));