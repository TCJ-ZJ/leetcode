/*Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj={},
    len = nums.length,
    temp = 0;
    for(var i=0;i<len;temp = obj[target-nums[++i]]){
        if(temp) return [temp-1,i];
        obj[nums[i]]=i+1;
    }
};
