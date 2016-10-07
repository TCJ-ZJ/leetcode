/*Summary Ranges
Given a sorted integer array without duplicates, return the summary of its ranges.
For example, given [0,1,2,4,5,7], return ["0->2","4->5","7"].
*/


/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    var len=nums.length;
    if(len===0) return nums;
    if(len===1){
        nums[0]+='';
        return nums;
    }
    var point = nums[0],
    arr=[];
    for(var i=1;i<len;i++){
       if(nums[i]-nums[i-1]!==1){
           if(point===nums[i-1]) arr.push(point+'')
            else arr.push(point+'->'+nums[i-1])
            point=nums[i];
       }
    }
    if(point===nums[len-1]) arr.push(point+'')
    else arr.push(point+'->'+nums[len-1])
    return arr;
};
