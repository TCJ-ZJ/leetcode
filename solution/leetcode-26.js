/*Remove Duplicates from Sorted Array
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var len=nums.length;
    if(len===0) return 0;
    var n=0;
    for(var i=1;i<len;i++){
        if(nums[n]!==nums[i]){
            nums[++n]=nums[i];
        }
    }
    return n+1;
};
