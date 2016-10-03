/*Merge k Sorted Lists
Merge k sorted linked lists and return it as one sorted list.
Analyze and describe its complexity.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var len= lists.length;
    if(len===0) return null;
    if(len===1) return lists[0];
    return divide(lists,0,len-1);
};

function divide(lists,start,end){
  if(start===end){
      return lists[start];
  }else if(start<end){
      var mid  = start+~~((end-start)/2),
      l = divide(lists,start,mid),
      r = divide(lists,mid+1,end);
      return mergeTwoLists(l,r);
  }else{
      return null;
  }
}

function mergeTwoLists(l1,l2){
    if(l1===null) return l2;
    if(l2===null) return l1;
    if(l1.val<l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        l2.next=mergeTwoLists(l1,l2.next);
        return l2;
    }
}
