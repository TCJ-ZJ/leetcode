/*Linked List Cycle II
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
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
var detectCycle = function(head) {
    if(head===null||head.next===null) return null;
    var p1=head,
    p2=head,
    p3=head,
    flag=false;
    while(p2!==null&&p2.next!==null){
        p1=p1.next;
        p2=p2.next.next;
        if(p1===p2) break;
    }
    
    while(p1!==null){
        if(p1===p3) return p1;
        p1=p1.next;
        p3=p3.next;
    }
    return null;
};
