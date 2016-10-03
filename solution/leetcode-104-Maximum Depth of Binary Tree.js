/*Maximum Depth of Binary Tree
Given a binary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
var maxDepth = function(root) {
    if(root===null) return 0;
    var deep = findDepth(root,0)
    return deep;
};

function findDepth(root,num){
    if(root===null) return num;
    if(root!==null){
        return Math.max(findDepth(root.left,num+1),findDepth(root.right,num+1));
    }
}
