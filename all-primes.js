// generate all prime numbers which are less or equal to the given number
function allPrimes(max) {
  let numbers = [];
  
  for (let i = 0; i <= max; i++) {
    if (i < 2) {
      numbers.push(0);
    } else {
      numbers.push(1);
    }
  }
  
  let i = 2;
  while (i !== -1) {
    i = crossAllMultiple(numbers, i);
  }
  
  return remain(numbers);
}

function crossAllMultiple(numbers, n) {
  for (let i = n * 2; i < numbers.length; i += n) {
    numbers[i] = 0;
  }
  
  for (let i = n + 1; i < numbers.length; i++) {
    if (numbers[i] === 1) {
      return i;
    }
  }
  return -1;
}

function remain(numbers) {
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1) {
      array.push(i);
    }
  }
  return array;
}

console.log(allPrimes(100));