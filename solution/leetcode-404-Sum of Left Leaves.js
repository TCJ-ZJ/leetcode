/*Sum of Left Leaves
Find the sum of all left leaves in a given binary tree.
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root===null) return 0;
    if(root.left!==null&&root.left.left===null&&root.left.right===null) return root.left.val+sumOfLeftLeaves(root.right);
    return sumOfLeftLeaves(root.right)+sumOfLeftLeaves(root.left);
};
