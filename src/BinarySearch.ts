function binarySearch(numbers: number[], k: number): number {
  let l: number = 0;
  let r: number = numbers.length - 1;
  let i = 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (numbers[mid] === k) return mid;

    if (numbers[mid] > k) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
    i++;
  }

  return -1;
}
