/*Single Number III
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. 
Find the two elements that appear only once.
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var len = nums.length,
    bit = nums.reduce(function(a,b){
        return a^b;
    })
    bit&=(~bit+1);
    var arr=[0,0];
    for(var j=0;j<len;j++){
        if((bit&nums[j])===0) arr[0]^=nums[j];
        else arr[1]^=nums[j];
    }
    return arr;
};
