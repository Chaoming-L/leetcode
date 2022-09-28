/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let preHead = new ListNode(-1)
  preHead.next = head

  let len = 0
  let first = head
  while(first) {
    len++
    first = first.next
  }

  len -= n
  first = preHead
  while(len != 0) {
    len--
    first = first.next
  }

  first.next = first.next.next
  return preHead.next
};
// @lc code=end

