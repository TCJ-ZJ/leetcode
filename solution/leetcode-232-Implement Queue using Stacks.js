/*Implement Queue using Stacks
Implement the following operations of a queue using stacks.
push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
*/

/*solution1*/
/**
 * @constructor
 */
var Queue = function() {
    this.str ='';
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.str+=x+'';
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.str=this.str.slice(1);
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.str.charAt(0)-0;
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.str.length===0?true:false;
};



/*solution2*/
/**
 * @constructor
 */
var Queue = function() {
    this.arr =[];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.arr.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    this.arr.shift();
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.arr[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.arr.length===0?true:false;
};
