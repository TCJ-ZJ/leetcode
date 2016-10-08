/*Binary Search Tree Iterator
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
Calling next() will return the next smallest number in the BST.
*/


/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.root = root;
    this.arr = [];
    this.item = null;
    this.getArr();
};

BSTIterator.prototype.getArr=function(){
    while(this.root!==null){
        this.arr.push(this.root);
        this.root=this.root.left;
    }
}

/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    if(this.arr.length===0) return false;
    var node = this.arr.pop();
    this.item = node.val;
    this.root = node.right;
    this.getArr();
    return true;
};


/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    return this.item;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
