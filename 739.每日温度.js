/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const length = T.length;
  const res = new Array(length).fill(0);
  const stack = [];
  
  for (let index = 0; index < length; index++) {
    const t = T[index];

    while(T[stack[stack.length - 1]] < t) {
      const top = stack.pop()
      res[top] = index - top
    }
    
    stack.push(index)
  }

  return res;
};
// @lc code=end
