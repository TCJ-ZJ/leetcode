/*Wiggle Sort
Given an unsorted array nums, reorder it in-place such that nums[0] <= nums[1] >= nums[2] <= nums[3]....
For example, given nums = [3, 5, 2, 1, 6, 4], one possible answer is [1, 6, 2, 5, 3, 4].
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    var len = nums.length;
    for(var i = 1;i<len;i++){
        var temp = nums[i-1];
        if((i%2===1)===(temp>nums[i])){
            nums[i-1]=nums[i];
            nums[i]=temp;
        }
    }
};
