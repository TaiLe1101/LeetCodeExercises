/*
    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.
*/

function twoSum(nums: number[], target: number): number[] {
  const numMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
}

/*
    [3,2,4], target = 6, numMap = {}
    1: i = 0; complement = target - nums[i] -> complement = 6 - 3 -> complement = 3; false; numMap[nums[i]] = i -> numMap[3] = 0;

    numMap = {
        3:0
    }
    2: i = 1; complement = target - nums[i] -> complement = 6 - 2 -> complement = 4; false; numMap[nums[i]] = i -> numMap[2] = 1;
    
    numMap = {
        3:0,
        2:1,
    }
    3: i = 2; complement = target - nums[i] -> complement = 6 - 4 -> complement = 2; true;
        return [numMap[complement],i] -> return [numMap[2],2] -> return [1,2];
    
 */
