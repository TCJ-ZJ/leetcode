/*Single Number
Given an array of integers, every element appears twice except for one. Find that single one.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var len = nums.length,
    result=0;
    for(var i=0;i<len;i++){
        result ^=nums[i];
    }
    return result;
};
