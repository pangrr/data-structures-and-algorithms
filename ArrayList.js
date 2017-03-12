function ArrayList(initialLength) {
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

ArrayList.prototype.add = function(value) {
  if (this.length < this.array.length) {
    this.array[this.length] = value;
    this.length++;
  } else {
    let newArray = [];
    for (let i = 0; i < this.array.length; i++) {
      newArray.push(this.array[i]);
    }
    for (let i = this.array.length; i < 2 * this.array.length; i++) {
      newArray.push(undefined);
    }
    this.array = newArray;
    this.add(value);
  }
}

ArrayList.prototype.get = function(i) {
  if (typeof i !== 'number' || !Number.isInteger(i) || i <= 0 || i >= this.length) {
    return undefined
  }
  return this.array[i];
}

ArrayList.prototype.getStatus = function() {
  console.log(`allocated length: ${this.array.length}`);
  console.log(`used length: ${this.length}`);
  let array = [];
  for (let i = 0; i < this.length; i++) {
    array.push(this.array[i]);
  }
  console.log(array);
}

// test
let arrayList = new ArrayList(3);
arrayList.add(0);
arrayList.add(1);
arrayList.add(2);
arrayList.add(3);
arrayList.add(4);
arrayList.getStatus();
console.log(arrayList.get(3));
