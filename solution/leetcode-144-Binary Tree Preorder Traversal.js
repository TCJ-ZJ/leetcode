/*Binary Tree Preorder Traversal
Given a binary tree, return the preorder traversal of its nodes' values.
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(root===null) return [];
    var arr = [];
    arr=getArr(root,arr);
    return arr;
};

function getArr(root,arr){
    arr.push(root.val);
    if(root.left!==null) arr=getArr(root.left,arr);
    if(root.right!==null) arr=getArr(root.right,arr);
    return arr;
}
