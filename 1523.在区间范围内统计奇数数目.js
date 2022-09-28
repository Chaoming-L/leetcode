/*
 * @lc app=leetcode.cn id=1523 lang=javascript
 *
 * [1523] 在区间范围内统计奇数数目
 */

// @lc code=start
/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  let c = 0
  for(let i = low; i <= high; i++) {
    if(i % 2 !== 0) {
      c++
    }
  }
  return c
};
// @lc code=end

