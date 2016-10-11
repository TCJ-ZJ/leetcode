/*Two Sum II - Input array is sorted
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution.
*/


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var start =0,
    end = numbers.length-1;
    while(1){
        var temp = numbers[start]+numbers[end];
        if(temp===target) return [start+1,end+1];
        else if(temp>target) end--;
        else start++;
    }
};
