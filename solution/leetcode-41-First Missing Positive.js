/*First Missing Positive
Given an unsorted integer array, find the first missing positive integer.
For example,
Given [1,2,0] return 3,
and [3,4,-1,1] return 2.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var len = nums.length,
    arr={},
    count=1;
    if(len===0) return 1;
    for(var i =0;i<len;i++){
        if(nums[i]>0){
           arr[nums[i]]=true;
           count++;
        }
    }
    var k = 1;
    if(!arr[1]) return 1;
    while(k<=count+1){
        if(!arr[k]) return k;
        else k++;
    }
};
