/*Find Minimum in Rotated Sorted Array
Suppose a sorted array is rotated at some pivot unknown to you beforehand.
(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
Find the minimum element.
You may assume no duplicate exists in the array.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if(nums.length===1) return nums[0];
    var end = nums.length-1,
    start = 0
    while(start<end){
        var mid = start+~~((end-start)/2);
        if(nums[mid]>nums[end]) start = mid+1;
        if(nums[mid]<nums[end]) end = mid;
    }
    return nums[start]
};
