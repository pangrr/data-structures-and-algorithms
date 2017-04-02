// find missing number from 1 to n
function findMissingNumberBySum(numbers, n) {
  let e = (1 + n) * n / 2;
  let a = 0;
  for (let i of numbers) {
    a += i;
  }
  return e - a;
}

function findMissingNumberByXor(numbers, n) {
  let e;
  for (let i = 1; i <= n; i++) {
    if (typeof e === 'undefined') {
      e = i;
    } else {
      e ^= i;
    }
  }
  
  let a;
  for (let i of numbers) {
    if (typeof a === 'undefined') {
      a = i;
    } else {
      a ^= i;
    }
  }
  
  return e ^ a;
}


console.log(findMissingNumberByXor([1, 2, 4, 5, 6, 7], 7));