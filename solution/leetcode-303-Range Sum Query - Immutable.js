/*Range Sum Query - Immutable
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
*/


/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    var temp =[],
    len=nums.length;
    temp[0]=nums[0]
    for(var i = 1;i<len;i++){
        temp[i]=temp[i-1]+nums[i];
    }
    this.arr=temp;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if(i===0) return this.arr[j];
    return this.arr[j]-this.arr[i-1];
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */
