/*Reverse Linked List
Reverse a singly linked list.
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
var reverseList = function(head) {
    if(head===null||head.next===null) return head;
    var p1,p2,p3;
    p1=null;
    p2=head;
    while(p2!==null){
       p3 = p2.next;
       p2.next = p1;
       p1 = p2;
       p2 = p3;
    }
    return p1;
};



