/*
 * @lc app=leetcode.cn id=1137 lang=javascript
 *
 * [1137] 第 N 个泰波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const cache = [0, 1, 1];
  let result;
  const f = (n) => {
    if (cache[n] !== undefined) {
      result = cache[n]
    } else {
      result = f(n - 3) + f(n - 2) + f(n - 1)
      cache[n] = result
    }
    return result
  }

  return f(n)
};
// @lc code=end

