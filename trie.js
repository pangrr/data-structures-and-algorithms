/**
 * Node
 */
function Node(value) {
  this.value = value;
  this.nPrefix = 0;
  this.nWord = 0;
  this.children = [];
  for (let i = 0; i < 26; i++) {
    this.children.push(undefined);
  }
}

Node.prototype.increaseNPrefix = function() {
  this.nPrefix++;
}

Node.prototype.increaseNWord = function() {
  this.nWord++;
}

Node.prototype.addChild = function(node) {
  this.children.push(node);
}

Node.prototype.getValue = function() {
  return this.value;
}

Node.prototype.getNPrefix = function() {
  return this.nPrefix;
}

Node.prototype.getNWord = function() {
  return this.nWord;
}

Node.prototype.getChildren = function() {
  return this.children;
}

Node.prototype.addWord = function(word) {
  this.increaseNPrefix();
  
  if (word.length === 0) {
    this.increaseNWord();
  } else {
    let c = word.charAt(0);
    let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
    let children = this.getChildren();
    let child = children[i];
    let nextWord = word.substring(1, word.length);
    
    if (child !== undefined) {
      child.addWord(nextWord);
    } else {
      let newNode = new Node(c);
      children[i] = newNode;
      newNode.addWord(nextWord);
    }
  }
}

Node.prototype.countWord = function(word) {
  if (word.length === 0) {
    return this.getNWord();
  } else {
    let c = word.charAt(0);
    let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
    let child = this.getChildren()[i];

    if (child === undefined) {
      return 0;
    } else {
      return child.countWord(word.substring(1, word.length));
    }
  }
}

Node.prototype.countPrefix = function(prefix) {
  if (prefix.length === 0) {
    return this.getNPrefix();
  } else {
    let c = prefix.charAt(0);
    let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
    let child = this.getChildren()[i];

    if (child === undefined) {
      return 0;
    } else {
      return child.countPrefix(prefix.substring(1, prefix.length));
    }
  }
}

/**
 * Trie
 */
function Trie() {
  this.root = new Node('');
}

Trie.prototype.addWord = function(word) {
  this.root.addWord(word);
}

Trie.prototype.countWord = function(word) {
  return this.root.countWord(word);
}

Trie.prototype.countPrefix = function(prefix) {
  return this.root.countPrefix(prefix);
}

/**
 * test
 */
let trie = new Trie();

trie.addWord('a');
trie.addWord('a');
trie.addWord('aa');
trie.addWord('aab');
trie.addWord('ab');
console.log(trie.countWord('ac'));
console.log(trie.countWord('a'));
console.log(trie.countPrefix('b'));