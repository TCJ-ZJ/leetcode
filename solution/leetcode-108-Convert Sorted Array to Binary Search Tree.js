/*Convert Sorted Array to Binary Search Tree
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    var len = nums.length;
    if(len===0) return null;
    if(len===1) return new TreeNode(nums[0]);
    var root = binaryTree(nums,0,len-1);
    return root;
};

function binaryTree(arr,l,r){
    if(l>r) return null;
    var point = ~~((r+l)/2);
    var root = new TreeNode(arr[point]);
    root.left=binaryTree(arr,l,point-1);
    root.right=binaryTree(arr,point+1,r);
    return root;
}
