let dict = {
  i: 1,
  v: 5,
  x: 10,
  l: 50,
  c: 100,
  d: 500,
  m: 1000
};


// convert roman number to decimal number
function romanToDecimal(roman) {
  if (typeof roman !== 'string' || roman.length === 0) {
    return -1;
  }
  
  let decimal = 0;
  
  for (let i = 0; i < roman.length; i++) {
    let curRoman = roman.charAt(i);
    let curDecimal;
    let nextRoman = roman.charAt(i + 1);
    let nextDecimal;
    
    if (dict.hasOwnProperty(curRoman)) {
      curDecimal = dict[curRoman];
    } else {
      return -1;
    }
    
    if (i + 1 < roman.length) {
      if (dict.hasOwnProperty(nextRoman)) {
        nextDecimal = dict[nextRoman];
      } else {
        return -1;
      }
            
      if (curDecimal >= nextDecimal) {
        decimal += curDecimal;
      } else {
        decimal = decimal + nextDecimal - curDecimal;
        i++;
      }
    } else {
      decimal += curDecimal;
    }  
  }
  return decimal
}

console.log(romanToDecimal('xlviii'));
