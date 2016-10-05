/*Contains Duplicate
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var len = nums.length;
    if(len===0||len===1) return false;
    var obj={};
    for(var i=0;i<len;i++){
        if(obj[nums[i]]) return true;
        else obj[nums[i]]=true;
    }
    return false;
};
