/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
*/

function twoSum(nums: number[], target: number): number[] {
  const length: number = nums.length;

  if (nums.length <= 1) return [];

  for (let i: number = 0; i < length; i++) {
    for (let j: number = i + 1; j < length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

console.log('twoSum() ->', twoSum([3, 2, 4], 6));

/*
    [2,15,11,7], target = 9
    1: i = 0; 
        1.1: j = 1; nums[i] = 2; nums[j] = 15; 2 + 15 = 17; => != 9;
        1.2: j = 2; nums[i] = 2; nums[j] = 11; 2 + 11 = 13; => != 9;
        1.3: j = 3; nums[i] = 2; nums[j] = 7; 2 + 7 = 9; => == 9; return
    
 */
