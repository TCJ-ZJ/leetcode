/*Zigzag Iterator
Given two 1d vectors, implement an iterator to return their elements alternately.
For example, given two 1d vectors:
v1 = [1, 2]
v2 = [3, 4, 5, 6]
By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1, 3, 2, 4, 5, 6].
*/


/**
 * @constructor
 * @param {Integer[]} v1
 * @param {Integer[]} v1
 */
var ZigzagIterator = function ZigzagIterator(v1, v2) {
    var arr = [],
    i=0,
    j=0,
    k=0,
    len1=v1.length,
    len2=v2.length;
    while(i<len1&&j<len2){
        arr[k++]=v1[i++];
        arr[k++]=v2[j++];
    }
    while(i<len1) arr[k++]=v1[i++];
    while(j<len2) arr[k++]=v2[j++];
    this.len=len1+len2;
    this.iterator=arr;
    this.count=0;
};


/**
 * @this ZigzagIterator
 * @returns {boolean}
 */
ZigzagIterator.prototype.hasNext = function hasNext() {
    if(this.count===this.len) return false;
    return true;
};

/**
 * @this ZigzagIterator
 * @returns {integer}
 */
ZigzagIterator.prototype.next = function next() {
    if(this.count===this.len) return null
    return this.iterator[this.count++];
};

/**
 * Your ZigzagIterator will be called like this:
 * var i = new ZigzagIterator(v1, v2), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
