/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);

  const result = [];
  const len = nums.length;

  for (let first = 0; first < len; first++) {
    if (nums[first] === nums[first - 1]) {
      continue;
    }
    
    let third = len - 1
    let target = 0 - nums[first]

    for(let second = first + 1; second < len; second++) {
      if (second > first + 1 && nums[second] === nums[second - 1]) {
        continue
      }

      while(second < third && nums[second] + nums[third] > target) {
        third--
      }

      if (second === third) break

      if (nums[second] + nums[third] === target) {
        result.push([nums[first], nums[second], nums[third]])
      }
    }
  }

  return result;
};
// @lc code=end
