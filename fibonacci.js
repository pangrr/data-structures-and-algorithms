// get nth fibonacci number

function fibSlow(n) {
  if (n < 3) {
    return 1;
  } else {
    return fibSlow(n - 1) + fibSlow(n - 2);
  }
}


function fibFast(n) {
  let fibs = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    fibs.push(fibs[i - 2] + fibs[i - 1]);
  }
  
  return fibs[n];
}

console.log(fibSlow(12));