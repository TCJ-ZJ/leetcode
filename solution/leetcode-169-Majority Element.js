/*Majority Element
Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var len = nums.length,
    obj={},
    half=~~(len/2);
    for(var i=0;i<len;i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1;
        }else{
            obj[nums[i]]+=1;
        }
    }
    for(var p in obj){
        if(obj[p]>half){
            return p-0;
        }
    }
};
