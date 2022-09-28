/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (map[element]) {
      stack.push(element);
    } else if (element === "}" || element === "]" || element === ")") {
      if (map[stack.pop()] !== element) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
// @lc code=end
