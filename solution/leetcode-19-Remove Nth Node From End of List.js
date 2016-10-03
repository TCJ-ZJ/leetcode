/*Remove Nth Node From End of List
Given a linked list, remove the nth node from the end of list and return its head.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
   if(head.next===null) return null;
   var relNode = new ListNode(0),
   preNode=relNode,
   nxtNode=relNode;
   relNode.next = head;
   for(var i=0;i<n;i++){
       preNode = preNode.next;
   }
   while(preNode.next!==null){
       nxtNode=nxtNode.next;
       preNode=preNode.next;
   }
   nxtNode.next = nxtNode.next.next;
   return relNode.next;
};
