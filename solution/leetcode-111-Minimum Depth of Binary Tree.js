/*Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
var minDepth = function(root) {
    if(root===null) return 0;
    return depth(root,1);
};

function depth(root,dep){
    if(root.left===null&&root.right===null) return dep;
    else if(root.left===null&&root.right!==null) return depth(root.right,dep+1);
    else if(root.left!==null&&root.right===null) return depth(root.left,dep+1);
    else return Math.min(depth(root.left,dep+1),depth(root.right,dep+1));
}
