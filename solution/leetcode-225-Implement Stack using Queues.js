/*Implement Stack using Queues
Implement the following operations of a stack using queues.
push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
*/


/**
 * @constructor
 */
var Stack = function() {
    this.arr =[];
};

/**
 * @param {number} x
 * @returns {void}
 */
Stack.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @returns {void}
 */
Stack.prototype.pop = function() {
  this.arr.pop(); 
};

/**
 * @returns {number}
 */
Stack.prototype.top = function() {
    return this.arr[this.arr.length-1];
};

/**
 * @returns {boolean}
 */
Stack.prototype.empty = function() {
    return this.arr.length===0;
};
