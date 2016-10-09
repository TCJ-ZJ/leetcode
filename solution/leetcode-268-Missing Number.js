/*Missing Number
Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.
For example,
Given nums = [0, 1, 3] return 2.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    var sum = nums.reduce(function(a,b){
        return a+b;
    })
    var len = nums.length;
    return (len)*(len+1)/2-sum;
};
