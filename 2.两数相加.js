/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  const list = new ListNode(0);
  let head = list;

  while (l1 || l2) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    const num = sum % 10;
    carry = Math.floor(sum / 10);

    head.next = new ListNode(num);;
    head = head.next

    // 结束
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if (carry > 0) {
    head.next = new ListNode(carry);;
    head = head.next

    carry = 0
  }

  return list.next;
};
// @lc code=end
