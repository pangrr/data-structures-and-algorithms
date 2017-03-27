// find all prime factors of given number
function primeFactors(n) {
  let d = 2;
  let factors = [];
  
  while (n > 1) {
    if (n % d === 0) {
      factors.push(d);
      n /= d;
    } else {
      d++;
    }
  }
  return factors;
}

console.log(primeFactors(1024));