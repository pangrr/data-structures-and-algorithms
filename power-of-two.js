// find all power of 2 within [1, n]  in a recursive way
// time O(logn)
function powerOfTwo(n) {
  if (n === 1) {
    console.log(1);
    return 1;
  } else {
    let pre = powerOfTwo(Math.floor(n / 2));
    let cur = pre * 2;
    console.log(cur);
    return cur;
  }
}

powerOfTwo(24);