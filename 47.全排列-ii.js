/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let n = nums.length;
  nums = nums.sort((a,b) => {return a - b});
  let res = [];
  let tmpPath = [];
  let hash = {};
  let backtrack = (tmpPath) => {
      if(tmpPath.length == n){
          res.push(tmpPath);
          return;
      }
      for(let i = 0;i < n;i++){
          if(hash[i] || (i > 0 && !hash[i-1] && nums[i-1] == nums[i])) continue;
          hash[i] = true;
          tmpPath.push(nums[i]);
          backtrack(tmpPath.slice());
          hash[i] = false;
          tmpPath.pop();
      }
  }
  backtrack(tmpPath);
  return res;
};
// @lc code=end
