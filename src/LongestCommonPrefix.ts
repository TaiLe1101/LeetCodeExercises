/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

*/

function longestCommonPrefix(strs: string[]): string {
  if (strs.length <= 0) {
    return '';
  }

  let prefixString: string = strs[0];

  for (let i: number = 1; i < strs.length; i++) {
    const currentString: string = strs[i];

    let j: number = 0;
    while (j < prefixString.length && j < currentString.length && prefixString[j] === currentString[j]) {
      j++;
    }

    prefixString = currentString.substring(0, j);
    if (prefixString.length <= 0) {
      return '';
    }
  }

  return prefixString;
}

const strs = ['flower', 'flow', 'flight'];
const longestPrefix = longestCommonPrefix(strs);
console.log(longestPrefix);
