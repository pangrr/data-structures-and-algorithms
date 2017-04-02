// merge an array of intervals
function mergeIntervals(intervals) {
  sort(intervals);
  let result = [intervals.shift()];
  
  for (let i of intervals) {
    let merged = merge(result.pop(), i);
    result = result.concat(merged);
  }
  return result;
}

function sort(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
}

function merge(a, b) {
  if (b[0] <= a[1]) {
    if (b[1] < a[1]) {
      return [a];
    } else {
      return [[a[0], b[1]]];
    }
  } else {
    return [a, b];
  }
}

console.log(mergeIntervals([[0, 1], [2, 3], [1, 9], [10, 11]]));