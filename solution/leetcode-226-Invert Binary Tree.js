/*Invert Binary Tree
Invert a binary tree.
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root===null) return null;
    var l = root.left,
    r = root.right;
    root.left=invertTree(r);
    root.right=invertTree(l);
    return root;
};
