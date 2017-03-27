// check if a number is a prime number
function isPrime(n) {
  if (typeof n !== 'number' || n < 2) {
    return false;
  }
  
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  
  return true;
}

console.log(isPrime(15485863));