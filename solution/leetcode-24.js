/*Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
   if(head===null||head.next===null) return head;
   var n1 = head.next,
   n2 = head.next.next;
   n1.next = head;
   head.next=swapPairs(n2);
   return n1;
};
