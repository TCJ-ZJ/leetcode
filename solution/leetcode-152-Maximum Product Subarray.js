/*Maximum Product Subarray
Find the contiguous subarray within an array (containing at least one number) which has the largest product.
For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var len = nums.length;
    if(len===0) return 0;
    if(len===1) return nums[0];
    var max=nums[0],
    min=nums[0],
    result=nums[0];
    for(var i= 1;i<len;i++){
        if(nums[i]<0){
            var temp= max;
            max=min;
            min=temp;
        }
        max = Math.max(max*nums[i],nums[i]);
        min = Math.min(min*nums[i],nums[i]);
        result=Math.max(result,max);
    }
    return result;
};
