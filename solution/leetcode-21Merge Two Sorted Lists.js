/*Merge Two Sorted Lists
Merge two sorted linked lists and return it as a new list. 
The new list should be made by splicing together the nodes of the first two lists.
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

/*Method1*/
var mergeTwoLists = function(l1, l2) {
    var node = new ListNode(0),
    relNode =node;
    while(l1!==null&&l2!==null){
        if(l1.val<l2.val){
            node.next = l1;
            node = node.next;
            l1=l1.next;
        }else{
            node.next=l2;
            node= node.next;
            l2=l2.next;
        }
    }
    while(l1!==null){
        node.next = l1;
        node = node.next;
        l1=l1.next;
    }
    while(l2!==null){
        node.next=l2;
        node= node.next;
        l2=l2.next;
    }
    return relNode.next;
};

/*Method2*/
var mergeTwoLists = function(l1, l2) {
    if(l1===null) return l2;
    if(l2===null) return l1;
    if(l1.val<l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        l2.next=mergeTwoLists(l1,l2.next);
        return l2;
    }
};
