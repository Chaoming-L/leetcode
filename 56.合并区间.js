/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * 时间复杂度O(n log n)
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length === 0) return intervals;
  // 先排序
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let res = [intervals[0]]

  for(let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]
    const resCur = res[res.length - 1]
    // 相交
    if(cur[0] <= resCur[1]) {
      resCur[1] = Math.max(resCur[1], cur[1])
    } else {
      res.push(cur)
    }
  }
  return res
};
// @lc code=end
