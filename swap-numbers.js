// swap two numbers without using extra space
function swap(a, b) {
  a = b - a;
  b = b - a;
  a = a + b;
  return [a, b];
}

console.log(swap(11, 2));