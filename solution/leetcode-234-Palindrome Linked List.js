/*Palindrome Linked List
Given a singly linked list, determine if it is a palindrome.
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
var isPalindrome = function(head) {
    if(head===null) return true;
   var slow=head,
   fast=head;
   while(fast!==null&&fast.next!==null){
       slow=slow.next;
       fast=fast.next.next;
   }
   slow=reverse(slow);
   fast=head;
   while(slow!==null){
       if(slow.val!==fast.val) return false;
       slow=slow.next;
       fast=fast.next;
   }
   return true;
};

function reverse(head){
    var p1,p2,p3;
    p1=null;
    p2=head;
    while(p2!==null){
        p3=p2.next;
        p2.next =p1;
        p1=p2;
        p2=p3;
    }
    return p1;
}
