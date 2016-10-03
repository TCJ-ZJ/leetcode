/*Reverse Nodes in k-Group
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list
If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
You may not alter the values in the nodes, only nodes itself may be changed.
Only constant memory is allowed.
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
var reverseKGroup = function(head, k) {
    if(k<2) return head;
    var temp = head;
    for(var i=1;i<k;i++){
        if(temp===null||temp.next===null){
            return head;
        }
        temp=temp.next;
    }
  var n2 = temp.next,
  result = reverse(head,k);
  head.next = reverseKGroup(n2,k)
  return result;
};

function reverse(n1,k){
    var p1,p2,p3;
    p1=n1;
    p2=n1.next;
    for(var i =0;i<k-1;i++){
        p3=p2.next;
        p2.next=p1;
        p1=p2;
        p2=p3;
    }
    return p1;
}
