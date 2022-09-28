/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []
  const len = nums.length
  const cur = new Set()

  function dfs (tem) {
    if (tem.size === len) {
      res.push([...tem])
      return 
    }
    for(let i = 0; i < len; i++) {
      if (!cur.has(nums[i])) {
        cur.add(nums[i])

        dfs(cur)
  
        cur.delete(nums[i])
      }
    }
  }
  dfs(nums)
  return res
};
// @lc code=end

