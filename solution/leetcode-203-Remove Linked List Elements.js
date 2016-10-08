/*Remove Linked List Elements
Remove all elements from a linked list of integers that have value val.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(head===null) return null;
    var pointer = new ListNode(0);
    pointer.next = head;
    var temp = pointer;
    while(pointer!==null&&pointer.next!==null){
        if(pointer.next.val===val) pointer.next=pointer.next.next;
            else pointer= pointer.next;
    }
    if(pointer.val===val) return null;
    return temp.next;
};
