// find all paths in a 2d grid from top-left corner to bottom-right corner
function findAllPaths(grid) {
  let cache = [];
  for (let i = 0; i < grid.length; i++) {
    let row = [];
    for (let j = 0; j < grid[0].length; j++) {
      row.push([]);
    }
    cache.push(row);
  }
  
  cache[0][0] = ['00'];
  
  return findAllPathsTo(grid, grid.length - 1, grid[0].length - 1, cache);
}

function findAllPathsTo(grid, i, j, cache) {
  if (cache[i][j].length === 0) {
    if (i > 0 && grid[i - 1][j] === 1) {
      cache[i][j] = cache[i][j].concat(findAllPathsFromTo(grid, i - 1, j, i, j, cache));
    }
    if (j > 0 && grid[i][j - 1] === 1) {
      cache[i][j] = cache[i][j].concat(findAllPathsFromTo(grid, i, j - 1, i, j, cache));
    }
  }
  return cache[i][j];
}

function findAllPathsFromTo(grid, iFrom, jFrom, iTo, jTo, cache) {
  let fromPaths = findAllPathsTo(grid, iFrom, jFrom, cache);
  let paths = [];
  for (let p of fromPaths) {
    let path = p.substring();
    path += `,${iTo}${jTo}`;
    paths.push(path);
  }
  return paths;
}

let grid = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];

console.log(findAllPaths(grid));