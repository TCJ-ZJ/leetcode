/*Intersection of Two Linked Lists
Write a program to find the node at which the intersection of two singly linked lists begins.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA===null||headB===null) return null;
    if(headA===headB) return headA;
    var A=headA,
    B=headB
    while(A!==null&&B!==null&&A!==B){
        A=A.next;
        B=B.next;
        if(A===B) return A;
        if(A===null) A=headB;
        if(B===null) B=headA
    }
    return A;
}
