/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

*/

function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) {
    return '';
  }

  return findLongestCommonPrefix(strings, 0, strings.length - 1);
}

function findLongestCommonPrefix(strings: string[], start: number, end: number): string {
  if (start === end) {
    return strings[start];
  }

  const mid = Math.floor((start + end) / 2);
  const leftPrefix = findLongestCommonPrefix(strings, start, mid);
  const rightPrefix = findLongestCommonPrefix(strings, mid + 1, end);

  return commonPrefix(leftPrefix, rightPrefix);
}

function commonPrefix(str1: string, str2: string): string {
  const minLength = Math.min(str1.length, str2.length);

  let prefix = '';
  for (let i = 0; i < minLength; i++) {
    if (str1[i] !== str2[i]) {
      break;
    }
    prefix += str1[i];
  }

  return prefix;
}

const strs = ['flower', 'flow', 'flight'];
const longestPrefix = longestCommonPrefix(strs);
console.log(longestPrefix);
