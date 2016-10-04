/*Linked List Cycle
Given a linked list, determine if it has a cycle in it.
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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head===null||head.next===null) return false;
    var p1=head,
    p2=head;
    while(p2!==null&&p2.next!==null){
        p1=p1.next;
        p2=p2.next.next;
        if(p1===p2){
            return true;
        }
    }
    return false;
};
