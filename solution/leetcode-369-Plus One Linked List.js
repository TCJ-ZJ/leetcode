/*Plus One Linked List
Given a non-negative number represented as a singly linked list of digits, plus one to the number.
The digits are stored such that the most significant digit is at the head of the list.
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
var plusOne = function(head) {
    if(head===null) return head;
    head.val += doPlus(head.next);
    if(head.val>=10){
        head.val-=10;
        var temp = new ListNode(1);
        temp.next=head;
        head=temp;
    }
    return head;
};

function doPlus(head){
    if(head===null) return 1;
    if(head.next===null) head.val+=1;
    else head.val+=doPlus(head.next);
    if(head.val>=10){
        head.val-=10;
        return 1;
    }
    return 0;
}
