/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const xLen = grid[0].length
  const yLen = grid.length

  for (let i = 1; i < xLen; i++) {
    grid[0][i] += grid[0][i - 1]
  }

  for (let i = 1; i < yLen; i++) {
    grid[i][0] += grid[i - 1][0]
  }

  for (let i = 1; i < xLen; i++) {
    for( let j = 1; j < yLen; j++)
    grid[j][i] += Math.min(grid[j - 1][i], grid[j][i - 1])
  }
  
  return grid[yLen - 1][xLen - 1]
};
// @lc code=end

