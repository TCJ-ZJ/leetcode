/*Search for a Range
Given a sorted array of integers, find the starting and ending position of a given target value.
Your algorithm's runtime complexity must be in the order of O(log n).
If the target is not found in the array, return [-1, -1].
For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var len = nums.length,
    start=0,
    end=len-1,
    arr=[-1,-1];
    while(start<end){
        var mid1 =start+~~((end-start)/2);
        if(nums[mid1]<target) start=mid1+1;
        else end = mid1;
    }
    if(nums[start]!==target) return arr;
    arr[0]=start;
    end=len-1;
    while(start<end){
        var mid2 = start+~~((end-start));
        if(nums[mid2]>target) end = mid2-1;
        else start = mid2;
    }
    arr[1]=end;
    return arr;
};
