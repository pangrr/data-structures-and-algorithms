/**
 * Entry
 */
function Entry(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next;
}

Entry.prototype.getKey = function() {
  return this.key;
}

Entry.prototype.getNext = function() {
  return this.next;
}

Entry.prototype.getValue = function() {
  return this.value;
}

Entry.prototype.setValue = function(value) {
  this.value = value;
}

Entry.prototype.setNext = function(next) {
  this.next = next;
}


/**
 * HashTable
 */
function HashTable() {
  this.table = [];
  for (let i = 0; i < 10; i++) {
    this.table.push(undefined);
  }
}

HashTable.prototype.set = function(key, value) {
  let i = key % 10;
  let entry = this.table[i];
  
  while (entry !== undefined) {
    if (entry.getKey() === key) {
      entry.setValue(value);
      break;
    } else {
      entry = entry.getNext();
    }
  }
  
  if (entry === undefined) {
    this.table[i] = new Entry(key, value, this.table[i]);
  }
}

HashTable.prototype.get = function(key) {
  let i = key % 10;
  let entry = this.table[i];
  
  while (entry !== undefined) {
    if (entry.getKey() === key) {
      return entry.getValue();
    } else {
      entry = entry.getNext();
    }
  }
  
  return undefined;
}


HashTable.prototype.delete = function(key) {
  let i = key % 10;
  
  if (this.table[i] === undefined) {
    return;
  } else if (this.table[i].getKey() === key) {
    this.table[i] = this.table[i].getNext();
  } else {
    let preEntry = this.table[i];
    let entry = preEntry.getNext();
    while (entry !== undefined) {
      if (entry.getKey() === key) {
        preEntry.setNext(undefined);
        break;
      } else {
        preEntry = entry;
        entry = entry.getNext();
      }
    }
  }
}


HashTable.prototype.print = function() {
  for (let i = 0; i < 10; i++) {
    let entry = this.table[i];
    while (entry !== undefined) {
      console.log(entry.getKey() + ' : ' + entry.getValue());
      entry = entry.getNext();
    }
  }
}

/**
 * test
 */
let hashTable = new HashTable();

hashTable.set(0, 'a');
hashTable.set(10, 'b');
hashTable.print();
hashTable.delete(10);
hashTable.print();
