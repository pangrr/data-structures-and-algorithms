function StringBuilder(initialLength) {
  let length = initialLength;
  if (typeof length !== 'number' || !Number.isInteger(length) || length <= 0) {
    length = 10;
  }
  this.array = [];
  for (let i = 0; i < length; i++) {
    this.array.push(undefined);
  }
  this.length = 0;
}

StringBuilder.prototype.append = function(string) {
  if (this.length + string.length < this.array.length) {
    for (let i = 0; i < string.length; i++) {
      this.array[this.length++] = string.charAt(i);
    }
  } else {
    let newArray = [];
    for (let i = 0; i < this.array.length; i++) {
      newArray.push(this.array[i]);
    }
    for (let i = this.array.length; i < 2 * this.array.length; i++) {
      newArray.push(undefined);
    }
    this.array = newArray;
    this.append(string);
  }
}

StringBuilder.prototype.toString = function() {
  return this.array.join('');
}

// test
let stringBuilder = new StringBuilder(3);
stringBuilder.append('hello');
console.log(stringBuilder.toString());
stringBuilder.append(' world!');
console.log(stringBuilder.toString());

