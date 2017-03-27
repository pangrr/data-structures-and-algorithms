// count number of digit '0' occurs in all integers less or equal to given number
function countZeros(max) {
  let count = 0;
  while (max > 0) {
    count += Math.floor(max / 10);
    max /= 10;
  }
  return count;
}

console.log(countZeros(100));