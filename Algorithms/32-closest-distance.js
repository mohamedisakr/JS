// a) a brute force algorithm that finds the distance between every pair of these numbers.
function getClosestDistanceWithBruteForce(a) {
  const n = a.length - 1;
  let min = 1000000;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      let val = Math.abs(a[i] - a[j]);
      if (val < min) {
        min = val;
      }
    }
  }
  return min;
}

// b) sorting the numbers and computing the least number of distances needed to solve the problem.
function getClosestDistanceWithSort(a) {
  let sorted = a.sort((a, b) => a - b);
  const n = sorted.length - 1;
  let min = 1000000;

  for (let i = 1; i < n; i++) {
    let val = Math.abs(a[i] - a[i - 1]);
    if (min > val) {
      min = val;
    }
  }
  return min;
}
