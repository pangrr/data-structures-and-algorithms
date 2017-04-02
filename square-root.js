// find square root of an integer
// return -1 if no integer square root
function sqrt(n) {
  if (n < 0) {
    return -1;
  } else {
    let min = 0;
    let max = n;
    while (min <= max) {
      let guess = Math.floor((min + max) / 2);
      let sqr = guess * guess;
      if (sqr === n) {
        return guess;
      } else if (sqr < n) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
    return -1;
  }
}


for (let i = 14; i < 20; i++) {
  console.log(sqrt(i));
}
