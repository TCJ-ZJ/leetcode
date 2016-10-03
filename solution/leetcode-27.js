/*Remove Element
Given an array and a value, remove all instances of that value in place and return the new length.
Do not allocate extra space for another array, you must do this in place with constant memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var len = nums.length;
    if(len===0) return 0;
    var n=0;
    for(var i= 0;i<len;i++){
        if(nums[i]!==val){
            nums[n++]=nums[i]
        }
    }
    return n;
};
