/*
 * @lc app=leetcode.cn id=1288 lang=javascript
 *
 * [1288] 删除被覆盖区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0] || b[1] - a[1])
  let delCount = 0

  for(let pre = 0, cur = pre + 1; cur < intervals.length; cur++) {
    const [pre0, pre1] = intervals[pre]
    const [cur0, cur1] = intervals[cur]

    if (pre0 <= cur0 && pre1 >= cur1) {
      delCount++
    } else {
      pre = cur
    }
  }
  return intervals.length - delCount
};
// @lc code=end

