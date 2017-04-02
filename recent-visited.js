// update most recently visited urls
let visited = {}; // url: node
let recent = {
  pre: undefined,
  next: undefined
};


function visit(url) {
  if (!(url in visited)) {
    addUrl(url);
  } else {
    removeUrl(url);
    addUrl(url);
  }
}

function addUrl(url) {
  let node = {
    url: url,
    pre: recent,
    next: recent.next
  };
  if (recent.next) {
    recent.next.pre = node;
  }
  recent.next = node;
  visited[url] = node;
}


function removeUrl(url) {
  let node = visited[url];
  node.pre.next = node.next;
  if (node.next) {
    node.next.pre = node.pre;
  }
}

function getRecent() {
  let node = recent.next;
  while (node) {
    console.log(node.url);
    node = node.next;
  }
}


let urls = [
  'google',
  'amazon',
  'apple',
  'google',
  'paypal',
  'apple',
  'baidu',
  'google',
  'baidu'
];

for (let url of urls) {
  visit(url);
}

getRecent();