/* Add Two Numbers
You are given two linked lists representing two non-negative numbers. 
The digits are stored in reverse order and each of their nodes contain a single digit. 
Add the two numbers and return it as a linked list.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var result = new ListNode(0),
  node = result,
  nodeVal= 0,
  nodeNex= 0,
  val1 = null,
  val2 = null;
  while(l1!==null||l2!==null){
      val1=(l1===null)?0:l1.val;
      val2=(l2===null)?0:l2.val;
      nodeVal = val1+val2+nodeNex;
      nodeNex = ~~(nodeVal/10);
      node.next = new ListNode(nodeVal%10);
      node = node.next;
      l1 !==null&&(l1=l1.next);
      l2 !==null&&(l2=l2.next);
  }
  if(nodeNex>0){
      node.next = new ListNode(nodeNex);
  }
  return result.next;
};
