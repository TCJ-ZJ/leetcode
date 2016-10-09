/*Rotate List
Given a list, rotate the list to the right by k places, where k is non-negative.
For example:
Given 1->2->3->4->5->NULL and k = 2,
return 4->5->1->2->3->NULL.
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head===null||head.next===null) return head;
    var fast = head,
    slow=head,
    count=1;
    while(fast.next!==null){
        fast=fast.next;
        count++;
    }
    for(var i=count-k%count;i>1;i--){
        slow=slow.next;
    }
    fast.next=head;
    head=slow.next;
    slow.next=null;
    return head;
}
