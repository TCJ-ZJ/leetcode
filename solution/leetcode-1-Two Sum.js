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
    var len = nums.length;
    var obj={};
    var arr=[];
    for(var i=0;i<len;i++){
        obj[nums[i]]=i;
    }
    for(var j = 0;j<len;j++){
        var temp = target-nums[j];
        if(obj[temp]){
            arr.push(j);
            arr.push(obj[temp])
            return arr;
        }
    }
};
