function sequentialSearch(arr: number[], k: number): number {
  if (arr.length <= 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return i;
    }
  }

  return -1;
}

console.log('sequentialSearch([1,2,3,4,5,6,7], 5) ->', sequentialSearch([1, 2, 3, 4, 5, 6, 7], 5));
