// implement a trie
function Trie() {
  this.root = new Node();
}

function Node(char) {
  this.char = char || ''; 
  this.children = {}; // char: node
  this.word = 0;
  this.prefix = 0;
}

Trie.prototype.add = function(word) {
  addWordToNode(word, this.root);
}

Trie.prototype.countWord = function(word) {
  return countWordOnNode(word, this.root);
}

Trie.prototype.countPrefix = function(prefix) {
  return countPrefixOnNode(prefix, this.root);
}

// add the word to the children of the node
function addWordToNode(word, node) {
  if (word.length === 0) {
    node.word++;
  } else {
    node.prefix++;
    
    let char = word.charAt(0);
    if (!(char in node.children)) {
      node.children[char] = new Node(char);
    }
    addWordToNode(word.slice(1), node.children[char]);
  }
}

// count the word starting from children of the node
function countWordOnNode(word, node) {
  if (word.length === 0) {
    return node.word;
  } else {
    let char = word.charAt(0);
    if (char in node.children) {
      return countWordOnNode(word.slice(1), node.children[char]);
    } else {
      return 0;
    }
  }
}

// count the prefix starting from children of the node
function countPrefixOnNode(prefix, node) {
  if (prefix.length === 0) {
    return node.prefix;
  } else {
    let char = prefix.charAt(0);
    if (char in node.children) {
      return countPrefixOnNode(prefix.slice(1), node.children[char]);
    } else {
      return 0;
    }
  }
}

let trie = new Trie();
trie.add('abc');
trie.add('ab');
trie.add('abb');
trie.add('ac');
trie.add('abc');

console.log(trie.countWord('abc'));
console.log(trie.countPrefix('a'));