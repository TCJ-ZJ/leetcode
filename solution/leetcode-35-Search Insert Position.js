/*Search Insert Position
Given a sorted array and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You may assume no duplicates in the array.
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length,
    start=0,
    end=len-1;
    while(start<end){
        var mid = start+~~((end-start)/2);
        if(nums[mid]<target) start=mid+1;
        else if(nums[mid]>target) end= mid-1;
        else return mid;
    }
    if(nums[start]>=target) return start;
    else return start+1;
};
