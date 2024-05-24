// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (n == 0) return head;
    let slow = head;
    let fast = head;
    while (n-- > 0) {
        fast = fast.next;
    }
    let prev = null
    while (fast) {
        prev = slow
        slow = slow.next
        fast = fast.next
    }
    if (!prev) return head.next
    prev.next = slow.next
    slow.next = null
    return head
};

// If prev is null, return head.next