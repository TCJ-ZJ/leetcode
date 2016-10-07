/*Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return checkRoot(root,root);
};

function checkRoot(r1,r2){
    if(r1===null&&r2===null) return true;
    if(r1===null||r2===null) return false;
    return r1.val===r2.val&&checkRoot(r1.left,r2.right)&&checkRoot(r2.left,r1.right);
}
