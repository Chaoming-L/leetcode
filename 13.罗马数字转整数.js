/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let result = 0;
  const _map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i++) {
    const cur = _map[s[i]];
    const next = _map[s[i + 1]];
    if (cur >= next || next === undefined) {
      result += cur;
    } else {
      result -= cur;
    }
  }
  return result;
};
// @lc code=end
