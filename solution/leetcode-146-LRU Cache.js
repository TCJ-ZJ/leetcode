/*LRU Cache
Design and implement a data structure for Least Recently Used (LRU) cache. 
It should support the following operations: get and set.
get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
*/

/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.arr = [];
    this.obj={};
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.obj[key]) {
        var len =this.arr.length;
        for(var i=0;i<len;i++){
            if(this.arr[i]===key){
                this.arr.splice(i,1);
            }
        }
        this.arr.push(key);
        return this.obj[key];
    }
    return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
    if(!this.obj[key]) {
        this.arr.push(key);
    }else{
        var len =this.arr.length;
        for(var i=0;i<len;i++){
            if(this.arr[i]===key){
                this.arr.splice(i,1);
            }
        }
        this.arr.push(key);
    }
        this.obj[key]=value;
    if(this.arr.length>this.capacity) {
        var k = this.arr.shift();
        delete this.obj[k];
    }
};
