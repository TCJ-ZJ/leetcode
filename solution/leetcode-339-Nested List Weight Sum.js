/*Nested List Weight Sum
Given a nested list of integers, return the sum of all integers in the list weighted by their depth.
Each element is either an integer, or a list -- whose elements may also be integers or other lists.
*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
 
 function deep(nestedList,depth){
     var len =nestedList.length,
     sum=0;
     for(var i=0;i<len;i++){
         if(nestedList[i].isInteger()){
             sum = sum+depth*nestedList[i].getInteger();
         }else{
             sum = sum + deep(nestedList[i].getList(),depth+1);
         }
     }
     return sum;
 }
 
var depthSum = function(nestedList) {
    var len=nestedList.length,
    sum=0,
    depth=1;
    for(var i=0;i<len;i++){
        if(nestedList[i].isInteger()){
            sum+=nestedList[i].getInteger();
        }else{
            sum +=deep(nestedList[i].getList(),depth+1);
        }
    }
    return sum;
};
